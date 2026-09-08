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
  s1: ['infectio', 'hemato', 'genetique'],
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
    title: meta?.title ?? titleFromSlug(subjectId),
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

  if (!courseMap.has(key)) {
    courseMap.set(key, {
      id: courseId,
      semesterId,
      subjectId,
      title: titleFromSlug(courseId),
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

  course.ficheHtml = html
  course.title = extractTitleFromHtml(html) || course.title
}

for (const [path, module] of Object.entries(qcmModules)) {
  const match = path.match(/\.\/qcm\/([^/]+)\/([^/]+)\/([^/]+)\.js$/)

  if (!match) continue

  const [, semesterId, subjectId, courseId] = match
  const course = getOrCreateCourse(semesterId, subjectId, courseId)

  course.questions = extractQuestions(module)
  course.title = extractQcmTitle(module, course.title)
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
    title: titleFromSlug(annaleId),
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
          .sort((a, b) => a.title.localeCompare(b.title, 'fr'))

        subject.profAnnales = profAnnalesBySubject
          .get(subjectKey(semester.id, subjectId))
          ?.sort((a, b) => a.title.localeCompare(b.title, 'fr')) ?? []

        return subject
      }),
    }
  }),
}