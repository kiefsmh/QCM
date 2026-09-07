import { useMemo, useState } from 'react'
import { catalog } from './data/catalog.js'
import QcmPanel from './components/QcmPanel.jsx'

function findSemester(semesterId) {
  return catalog.semesters.find((semester) => semester.id === semesterId)
}

function findSubject(semester, subjectId) {
  return semester?.subjects.find((subject) => subject.id === subjectId)
}

function findCourse(subject, courseId) {
  return subject?.courses.find((course) => course.id === courseId)
}

function findProfAnnale(subject, annaleId) {
  return subject?.profAnnales?.find((annale) => annale.id === annaleId)
}

function getSubjectQuestions(subject) {
  return subject.courses.flatMap((course) =>
    (course.questions ?? []).map((question) => ({
      ...question,
      sourceCourse: course.title,
    })),
  )
}

export default function App() {
  const [route, setRoute] = useState({ screen: 'home' })

  const semester = useMemo(() => findSemester(route.semesterId), [route.semesterId])
  const subject = useMemo(() => findSubject(semester, route.subjectId), [semester, route.subjectId])
  const course = useMemo(() => findCourse(subject, route.courseId), [subject, route.courseId])
  const profAnnale = useMemo(() => findProfAnnale(subject, route.annaleId), [subject, route.annaleId])

  const goHome = () => setRoute({ screen: 'home' })
  const goSemester = (semesterId) => setRoute({ screen: 'semester', semesterId })
  const goSubject = (semesterId, subjectId) => setRoute({ screen: 'subject', semesterId, subjectId })
  const goCourse = (semesterId, subjectId, courseId) => setRoute({ screen: 'course', semesterId, subjectId, courseId })

  const goProfAnnales = (semesterId, subjectId) =>
    setRoute({ screen: 'prof-annales', semesterId, subjectId })

  const goProfAnnaleReader = (semesterId, subjectId, annaleId) =>
    setRoute({ screen: 'prof-annale-reader', semesterId, subjectId, annaleId })

  const goSiteAnnale = (semesterId, subjectId) =>
    setRoute({ screen: 'site-annale', semesterId, subjectId })

  return (
    <main className="app-shell">
      {route.screen !== 'home' && (
        <button
          className="back-button"
          onClick={() => {
            if (route.screen === 'semester') goHome()
            if (route.screen === 'subject') goSemester(route.semesterId)
            if (route.screen === 'course') goSubject(route.semesterId, route.subjectId)
            if (route.screen === 'prof-annales') goSubject(route.semesterId, route.subjectId)
            if (route.screen === 'prof-annale-reader') goProfAnnales(route.semesterId, route.subjectId)
            if (route.screen === 'site-annale') goSubject(route.semesterId, route.subjectId)
          }}
        >
          ← Retour
        </button>
      )}

      {route.screen === 'home' && <Home onOpenSemester={goSemester} />}

      {route.screen === 'semester' && semester && (
        <SemesterView semester={semester} onOpenSubject={goSubject} />
      )}

      {route.screen === 'subject' && semester && subject && (
        <SubjectView
          semester={semester}
          subject={subject}
          onOpenCourse={goCourse}
          onOpenProfAnnales={goProfAnnales}
          onOpenSiteAnnale={goSiteAnnale}
        />
      )}

      {route.screen === 'course' && semester && subject && course && (
        <CourseView semester={semester} subject={subject} course={course} />
      )}

      {route.screen === 'prof-annales' && semester && subject && (
        <ProfAnnalesView
          semester={semester}
          subject={subject}
          onOpenProfAnnale={goProfAnnaleReader}
        />
      )}

      {route.screen === 'prof-annale-reader' && semester && subject && profAnnale && (
        <ProfAnnaleReader semester={semester} subject={subject} annale={profAnnale} />
      )}

      {route.screen === 'site-annale' && semester && subject && (
        <SiteAnnaleView semester={semester} subject={subject} />
      )}
    </main>
  )
}

function Home({ onOpenSemester }) {
  return (
    <section className="home-screen">
      <div className="hero-card">
        <p className="eyebrow">VRAI SITE DE Q‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ cm</p>
        <h1>EN MODE T&apos;AS BIEN RÉVISÉ 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣💀💀💀💀💀💀💀</h1>
        <p>bosse tmlp</p>
      </div>

      <div className="semester-choice-grid">
        {catalog.semesters.map((semester) => (
          <button
            key={semester.id}
            className="semester-choice"
            onClick={() => onOpenSemester(semester.id)}
          >
            <span>{semester.shortTitle}</span>
            <strong>{semester.title}</strong>
            <small>{semester.subjects.length} matière{semester.subjects.length > 1 ? 's' : ''}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

function SemesterView({ semester, onOpenSubject }) {
  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">Semestre</p>
        <h1>{semester.title}</h1>
      </header>

      <div className="subject-grid">
        {semester.subjects.map((subject) => (
          <button
            key={subject.id}
            className="subject-card"
            onClick={() => onOpenSubject(semester.id, subject.id)}
          >
            <span>{subject.icon}</span>
            <strong>{subject.title}</strong>
            <small>{subject.courses.length} cours ajouté{subject.courses.length > 1 ? 's' : ''}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

function SubjectView({ semester, subject, onOpenCourse, onOpenProfAnnales, onOpenSiteAnnale }) {
  const totalQuestions = getSubjectQuestions(subject).length
  const totalProfAnnales = subject.profAnnales?.length ?? 0

  return (
    <section>
      <header className="page-header header-row">
        <div>
          <p className="eyebrow">{semester.shortTitle} · Matière</p>
          <h1>{subject.title}</h1>
        </div>

        <div className="annale-actions">
          <button
            className="annale-button secondary"
            onClick={() => onOpenProfAnnales(semester.id, subject.id)}
          >
            Annales des profs · {totalProfAnnales}
          </button>

          <button
            className="annale-button"
            onClick={() => onOpenSiteAnnale(semester.id, subject.id)}
            disabled={totalQuestions === 0}
          >
            Annales QCM CHATGPT · {totalQuestions}
          </button>
        </div>
      </header>

      {subject.courses.length === 0 ? (
        <div className="empty-state">
          <h2>Aucun cours ajouté pour l’instant</h2>
          <p></p>
        </div>
      ) : (
        <div className="course-grid">
          {subject.courses.map((course) => (
            <button
              key={course.id}
              className="course-card"
              onClick={() => onOpenCourse(semester.id, subject.id, course.id)}
            >
              <strong>{course.title}</strong>
              <small>{course.questions?.length ?? 0} questions · fiche intégrée</small>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

function CourseView({ semester, subject, course }) {
  return (
    <section>
      <header className="course-header">
        <div>
          <p className="eyebrow">{semester.shortTitle} · {subject.title}</p>
          <h1>{course.title}</h1>
        </div>
      </header>

      <div className="course-layout">
        <article className="fiche-zone">
          {course.fichePath ? (
            <iframe className="fiche-frame" title={course.title} src={course.fichePath} />
          ) : (
            <div className="empty-state compact">
              <h2>Pas encore de fiche</h2>
              <p></p>
            </div>
          )}
        </article>

        <aside className="qcm-dock">
          <QcmPanel questions={course.questions ?? []} courseTitle={course.title} />
        </aside>
      </div>
    </section>
  )
}

function ProfAnnalesView({ semester, subject, onOpenProfAnnale }) {
  const profAnnales = subject.profAnnales ?? []

  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">{semester.shortTitle} · {subject.title}</p>
        <h1>Annales des profs</h1>
      </header>

      {profAnnales.length === 0 ? (
        <div className="empty-state">
          <h2>Aucune annale prof ajoutée</h2>
          <p>
          </p>
        </div>
      ) : (
        <div className="course-grid">
          {profAnnales.map((annale) => (
            <button
              key={annale.id}
              className="course-card"
              onClick={() => onOpenProfAnnale(semester.id, subject.id, annale.id)}
            >
              <strong>{annale.title}</strong>
              <small>{annale.type ?? 'Annale prof'}</small>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

function ProfAnnaleReader({ semester, subject, annale }) {
  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">{semester.shortTitle} · {subject.title} · Annale prof</p>
        <h1>{annale.title}</h1>
      </header>

      <div className="viewer-card">
        <iframe className="fiche-frame" title={annale.title} src={annale.path} />
      </div>
    </section>
  )
}

function SiteAnnaleView({ semester, subject }) {
  const questions = getSubjectQuestions(subject)

  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">{semester.shortTitle} · {subject.title}</p>
        <h1>Annales QCM CHATGPT</h1>
        <p className="page-subtitle">
        </p>
      </header>

      <div className="qcm-dock">
        <QcmPanel
  questions={questions}
  courseTitle={`MIX N TWIST · ${subject.title}`}
  maxQuestions={30}
/>
      </div>
    </section>
  )
}