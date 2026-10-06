const ficheModules = import.meta.glob('../content/fiches/**/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const qcmModules = import.meta.glob('./qcm/**/*.js', {
  eager: true,
})

const profAnnaleModules = import.meta.glob('../content/annales/profs/**/*.{pdf,html}', {
  query: '?url',
  import: 'default',
  eager: true,
})

const SEMESTERS = [
  {
    id: 's1',
    shortTitle: 'S1',
    title: 'Semestre 1',
  },
  {
    id: 's2',
    shortTitle: 'S2',
    title: 'Semestre 2',
  },
]

const DEFAULT_SUBJECTS = {
  s1: ['infectio', 'hemato', 'genetique', 'uerb'],
  s2: [],
}

const SUBJECT_META = {
  infectio: {
    title: 'INFECTIO',
    icon: '🦠',
  },
  hemato: {
    title: 'HEMATO',
    icon: '🩸',
  },
  genetique: {
    title: 'GÉNÉTIQUE',
    icon: '🧬',
  },
  uerb: {
    title: 'UERB',
    icon: '📘',
  },
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .map((word) => {
      if (word.toLowerCase() === 'qcm') return 'QCM'
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

function cleanHtmlTitle(value) {
  return value?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

function extractTitleFromHtml(html) {
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i)
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i)

  return cleanHtmlTitle(h1Match?.[1]) || cleanHtmlTitle(titleMatch?.[1])
}

function extractChapterNumber(value) {
  if (!value) return null

  const normalized = String(value).trim()

  const startMatch = normalized.match(/^(\d+)(?:[\s._-]+|$)/)
  if (startMatch) return Number(startMatch[1])

  const chapterMatch = normalized.match(/(?:chapitre|cours)\s*(\d+)/i)
  if (chapterMatch) return Number(chapterMatch[1])

  return null
}

function removeLeadingChapterNumber(value) {
  return String(value)
    .replace(/^fiche\s*[-–—:]\s*/i, '')
    .replace(/^\s*(?:chapitre|cours)?\s*\d+\s*[-–—.:)]*\s*/i, '')
    .trim()
}

function formatCourseTitle(rawTitle, chapterNumber) {
  const cleanTitle = removeLeadingChapterNumber(rawTitle || '')
  const upperTitle = cleanTitle.toLocaleUpperCase('fr-FR')

  if (!upperTitle) {
    return chapterNumber ? `${chapterNumber}. COURS` : 'COURS'
  }

  return chapterNumber ? `${chapterNumber}. ${upperTitle}` : upperTitle
}

function compareCourses(a, b) {
  const aNumber = a.chapterNumber ?? Number.POSITIVE_INFINITY
  const bNumber = b.chapterNumber ?? Number.POSITIVE_INFINITY

  if (aNumber !== bNumber) {
    return aNumber - bNumber
  }

  return a.id.localeCompare(b.id, 'fr', { numeric: true })
}

function extractQuestions(module) {
  if (Array.isArray(module.default)) return module.default
  if (Array.isArray(module.questions)) return module.questions

  const firstArrayExport = Object.values(module).find((value) => Array.isArray(value))
  return firstArrayExport ?? []
}

function extractQcmTitle(module, fallbackTitle) {
  if (module.meta?.title) return module.meta.title
  if (typeof module.title === 'string') return module.title
  return fallbackTitle
}

function createSubject(subjectId) {
  const meta = SUBJECT_META[subjectId]

  return {
    id: subjectId,
    title: meta?.title ?? titleFromSlug(subjectId).toLocaleUpperCase('fr-FR'),
    icon: meta?.icon ?? '📘',
    profAnnales: [],
    courses: [],
  }
}

const courseMap = new Map()
const profAnnalesBySubject = new Map()

function courseKey(semesterId, subjectId, courseId) {
  return `${semesterId}/${subjectId}/${courseId}`
}

function subjectKey(semesterId, subjectId) {
  return `${semesterId}/${subjectId}`
}

function getOrCreateCourse(semesterId, subjectId, courseId) {
  const key = courseKey(semesterId, subjectId, courseId)
  const chapterNumber = extractChapterNumber(courseId)

  if (!courseMap.has(key)) {
    courseMap.set(key, {
      id: courseId,
      semesterId,
      subjectId,
      chapterNumber,
      title: formatCourseTitle(titleFromSlug(courseId), chapterNumber),
      ficheHtml: null,
      questions: [],
    })
  }

  return courseMap.get(key)
}

for (const [path, html] of Object.entries(ficheModules)) {
  const match = path.match(/\.\.\/content\/fiches\/([^/]+)\/([^/]+)\/([^/]+)\.html$/)

  if (!match) continue

  const [, semesterId, subjectId, courseId] = match
  const course = getOrCreateCourse(semesterId, subjectId, courseId)
  const htmlTitle = extractTitleFromHtml(html)
  const htmlChapterNumber = extractChapterNumber(htmlTitle)

  course.ficheHtml = html

  if (!course.chapterNumber && htmlChapterNumber) {
    course.chapterNumber = htmlChapterNumber
  }

  course.title = formatCourseTitle(htmlTitle || titleFromSlug(courseId), course.chapterNumber)
}

for (const [path, module] of Object.entries(qcmModules)) {
  const match = path.match(/\.\/qcm\/([^/]+)\/([^/]+)\/([^/]+)\.js$/)

  if (!match) continue

  const [, semesterId, subjectId, courseId] = match
  const course = getOrCreateCourse(semesterId, subjectId, courseId)
  const qcmTitle = extractQcmTitle(module, course.title)
  const qcmChapterNumber = extractChapterNumber(qcmTitle)

  course.questions = extractQuestions(module)

  if (!course.chapterNumber && qcmChapterNumber) {
    course.chapterNumber = qcmChapterNumber
  }

  course.title = formatCourseTitle(qcmTitle, course.chapterNumber)
}

for (const [path, url] of Object.entries(profAnnaleModules)) {
  const match = path.match(/\.\.\/content\/annales\/profs\/([^/]+)\/([^/]+)\/([^/]+)\.(pdf|html)$/)

  if (!match) continue

  const [, semesterId, subjectId, annaleId, extension] = match
  const key = subjectKey(semesterId, subjectId)

  if (!profAnnalesBySubject.has(key)) {
    profAnnalesBySubject.set(key, [])
  }

  profAnnalesBySubject.get(key).push({
    id: annaleId,
    title: titleFromSlug(annaleId).toLocaleUpperCase('fr-FR'),
    type: extension.toUpperCase(),
    path: url,
  })
}

function getDetectedSubjectIds(semesterId) {
  const ids = new Set(DEFAULT_SUBJECTS[semesterId] ?? [])

  for (const course of courseMap.values()) {
    if (course.semesterId === semesterId) {
      ids.add(course.subjectId)
    }
  }

  for (const key of profAnnalesBySubject.keys()) {
    const [keySemesterId, keySubjectId] = key.split('/')

    if (keySemesterId === semesterId) {
      ids.add(keySubjectId)
    }
  }

  return [...ids]
}

export const catalog = {
  semesters: SEMESTERS.map((semester) => {
    const subjectIds = getDetectedSubjectIds(semester.id)

    return {
      ...semester,
      subjects: subjectIds.map((subjectId) => {
        const subject = createSubject(subjectId)

        subject.courses = [...courseMap.values()]
          .filter((course) => course.semesterId === semester.id && course.subjectId === subjectId)
          .sort(compareCourses)

        subject.profAnnales =
          profAnnalesBySubject
            .get(subjectKey(semester.id, subjectId))
            ?.sort((a, b) => a.title.localeCompare(b.title, 'fr', { numeric: true })) ?? []

        return subject
      }),
    }
  }),
}