import { useEffect, useMemo, useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

function shuffle(array) {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

function prepareQuestions(rawQuestions, maxQuestions) {
  const pickedQuestions = maxQuestions
    ? shuffle(rawQuestions).slice(0, maxQuestions)
    : shuffle(rawQuestions)

  return pickedQuestions.map((question) => {
    const shuffledOptions = shuffle(question.options).map((option, index) => ({
      ...option,
      letter: LETTERS[index],
    }))

    return {
      ...question,
      options: shuffledOptions,
      correctLetters: shuffledOptions
        .filter((option) => option.correct)
        .map((option) => option.letter),
    }
  })
}

function sameAnswers(selectedAnswers, correctAnswers) {
  return [...selectedAnswers].sort().join(',') === [...correctAnswers].sort().join(',')
}

export default function QcmPanel({ questions = [], courseTitle = 'QCM', maxQuestions }) {
  const [sessionId, setSessionId] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [results, setResults] = useState([])

  const preparedQuestions = useMemo(
    () => prepareQuestions(questions, maxQuestions),
    [questions, maxQuestions, sessionId],
  )

  useEffect(() => {
    setSessionId((value) => value + 1)
    setCurrentIndex(0)
    setSelectedAnswers([])
    setSubmitted(false)
    setScore(0)
    setFinished(false)
    setResults([])
  }, [questions, courseTitle, maxQuestions])

  const total = preparedQuestions.length
  const currentQuestion = preparedQuestions[currentIndex]

  if (!total) {
    return (
      <section className="qcm-panel">
        <p className="eyebrow">QCM</p>
        <h2>{courseTitle}</h2>
        <div className="empty-state compact">
          <p>Aucune question ajoutée pour l’instant.</p>
        </div>
      </section>
    )
  }

  const isQRM = currentQuestion.type === 'QRM'
  const isCorrect = sameAnswers(selectedAnswers, currentQuestion.correctLetters)

  function toggleAnswer(letter) {
    if (submitted) return

    if (isQRM) {
      setSelectedAnswers((previous) =>
        previous.includes(letter)
          ? previous.filter((answer) => answer !== letter)
          : [...previous, letter],
      )
    } else {
      setSelectedAnswers([letter])
    }
  }

  function validateAnswer() {
    if (selectedAnswers.length === 0) return

    const correct = sameAnswers(selectedAnswers, currentQuestion.correctLetters)

    setSubmitted(true)

    if (correct) {
      setScore((previous) => previous + 1)
    }

    setResults((previous) => [
      ...previous,
      {
        id: currentQuestion.id,
        question: currentQuestion.question,
        type: currentQuestion.type,
        correct,
        selected: [...selectedAnswers],
        expected: [...currentQuestion.correctLetters],
        sourceCourse: currentQuestion.sourceCourse,
      },
    ])
  }

  function nextQuestion() {
    if (currentIndex + 1 >= total) {
      setFinished(true)
      return
    }

    setCurrentIndex((previous) => previous + 1)
    setSelectedAnswers([])
    setSubmitted(false)
  }

  function restart() {
    setSessionId((value) => value + 1)
    setCurrentIndex(0)
    setSelectedAnswers([])
    setSubmitted(false)
    setScore(0)
    setFinished(false)
    setResults([])
  }

  function optionClass(option) {
    const isSelected = selectedAnswers.includes(option.letter)

    if (!submitted) {
      return isSelected ? 'q-option selected' : 'q-option'
    }

    if (option.correct) {
      return 'q-option good'
    }

    if (isSelected && !option.correct) {
      return 'q-option bad'
    }

    return 'q-option muted'
  }

  if (finished) {
    const percentage = Math.round((score / total) * 100)

    return (
      <section className="qcm-panel">
        <div className="result-card">
          <p className="eyebrow">Résultats</p>
          <h2>{courseTitle}</h2>

          <div className="big-score">
            {score}/{total}
          </div>

          <p className="score-sub">{percentage}%</p>

          <p className="result-mention">
            {percentage >= 85
              ? '🏆 T’es vraiment le boss du TD'
              : percentage >= 70
                ? '👍 Solide, ça commence à sentir bon'
                : percentage >= 50
                  ? '📚 Ça passe, mais faut bétonner'
                  : '💀 Retourne lire la fiche frérot'}
          </p>
        </div>

        <div className="review-list">
          {results.map((result, index) => (
            <div className="review-row" key={`${result.id}-${index}`}>
              <span className={result.correct ? 'pill-ok' : 'pill-ko'}>
                {result.correct ? '✓' : '✗'}
              </span>

              <div>
                <strong>
                  Question {index + 1} · {result.type}
                </strong>

                {result.sourceCourse && (
                  <small className="source-course">
                    Cours : {result.sourceCourse}
                  </small>
                )}

                {!result.correct && (
                  <small>
                    Ta réponse : {result.selected.join(', ') || 'rien'} · Bonne réponse :{' '}
                    {result.expected.join(', ')}
                  </small>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="primary-button" onClick={restart}>
          🔄 Recommencer avec un nouveau mélange
        </button>
      </section>
    )
  }

  return (
    <section className="qcm-panel">
      <div className="qcm-top">
        <div>
          <p className="eyebrow">
            {isQRM ? 'QRM · Plusieurs réponses possibles' : 'QCM · Une seule réponse'}
          </p>
          <h2>{courseTitle}</h2>

          {currentQuestion.sourceCourse && (
            <p className="source-course">
              Question tirée du cours : {currentQuestion.sourceCourse}
            </p>
          )}
        </div>

        <div className="counter">
          {currentIndex + 1}/{total} · ✓ {score}
        </div>
      </div>

      <div className="progress">
        <div style={{ width: `${(currentIndex / total) * 100}%` }} />
      </div>

      <article className="qcm-card-box">
        <div className="question-title">
          <span className={isQRM ? 'badge purple' : 'badge green'}>
            {currentQuestion.type}
          </span>

          <h3>{currentQuestion.question}</h3>
        </div>

        <div className="q-options">
          {currentQuestion.options.map((option) => (
            <div className="q-option-wrapper" key={option.letter}>
              <button
                type="button"
                className={optionClass(option)}
                onClick={() => toggleAnswer(option.letter)}
              >
                <span className="q-letter">
                  {submitted && option.correct
                    ? '✓'
                    : submitted && selectedAnswers.includes(option.letter) && !option.correct
                      ? '✗'
                      : option.letter}
                </span>

                <span className="q-option-text">{option.text}</span>
              </button>

              {submitted && option.correction && (
                <div
                  className={
                    option.correct
                      ? 'item-correction item-correction-good'
                      : 'item-correction item-correction-bad'
                  }
                >
                  {option.correction}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="qcm-action-zone">
          {!submitted ? (
            <button
              type="button"
              className="primary-button"
              disabled={selectedAnswers.length === 0}
              onClick={validateAnswer}
            >
              Valider
            </button>
          ) : (
            <button type="button" className="primary-button" onClick={nextQuestion}>
              {currentIndex + 1 >= total ? 'Voir les résultats →' : 'Question suivante →'}
            </button>
          )}
        </div>

        {submitted && (
          <div className={isCorrect ? 'correction good-correction' : 'correction warn-correction'}>
            <strong>
              {isCorrect
                ? '✅ Bonne réponse !'
                : `❌ Incorrect — bonne(s) réponse(s) : ${currentQuestion.correctLetters.join(', ')}`}
            </strong>

            {currentQuestion.explanation && <p>{currentQuestion.explanation}</p>}
          </div>
        )}
      </article>
    </section>
  )
}