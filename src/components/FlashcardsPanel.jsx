import { useEffect, useMemo, useState } from 'react'

function shuffle(array) {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

function cleanText(value) {
  return value?.replace(/\s+/g, ' ').trim() ?? ''
}

function extractFlashcardsFromHtml(html) {
  if (!html || typeof DOMParser === 'undefined') return []

  const doc = new DOMParser().parseFromString(html, 'text/html')

  return [...doc.querySelectorAll('.flash')]
    .map((card, index) => {
      const front = cleanText(card.querySelector('.q')?.textContent)
      const back = cleanText(card.querySelector('.a')?.textContent)

      return {
        id: index + 1,
        front,
        back,
      }
    })
    .filter((card) => card.front && card.back)
}

export default function FlashcardsPanel({ html = '', courseTitle = 'Flashcards' }) {
  const cards = useMemo(() => extractFlashcardsFromHtml(html), [html])
  const [sessionId, setSessionId] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState(0)
  const [review, setReview] = useState(0)
  const [finished, setFinished] = useState(false)

  const deck = useMemo(() => shuffle(cards), [cards, sessionId])

  useEffect(() => {
    setSessionId((value) => value + 1)
    setCurrentIndex(0)
    setFlipped(false)
    setKnown(0)
    setReview(0)
    setFinished(false)
  }, [html, courseTitle])

  if (!deck.length) {
    return (
      <section className="flashcards-panel">
        <p className="eyebrow">Flashcards</p>
        <h2>{courseTitle}</h2>

        <div className="empty-state compact">
          <p>Aucune flashcard trouvée dans cette fiche.</p>
        </div>
      </section>
    )
  }

  const currentCard = deck[currentIndex]
  const total = deck.length

  function answerCard(isKnown) {
    if (isKnown) {
      setKnown((value) => value + 1)
    } else {
      setReview((value) => value + 1)
    }

    if (currentIndex + 1 >= total) {
      setFinished(true)
      return
    }

    setCurrentIndex((value) => value + 1)
    setFlipped(false)
  }

  function restart() {
    setSessionId((value) => value + 1)
    setCurrentIndex(0)
    setFlipped(false)
    setKnown(0)
    setReview(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <section className="flashcards-panel">
        <div className="result-card">
          <p className="eyebrow">Flashcards terminées</p>
          <h2>{courseTitle}</h2>

          <div className="big-score">
            {known}/{total}
          </div>

          <p className="score-sub">
            À revoir : {review}
          </p>

          <p className="result-mention">
            {known / total >= 0.8
              ? '🧠 Propre, ça rentre dans le crâne'
              : known / total >= 0.5
                ? '📚 Pas mal, mais faut repasser dessus'
                : '💀 Fiche à relire chef'}
          </p>
        </div>

        <button type="button" className="primary-button" onClick={restart}>
          🔄 Recommencer avec un nouveau mélange
        </button>
      </section>
    )
  }

  return (
    <section className="flashcards-panel">
      <div className="flashcards-top">
        <div>
          <p className="eyebrow">Flashcards</p>
          <h2>{courseTitle}</h2>
        </div>

        <div className="counter">
          {currentIndex + 1}/{total}
        </div>
      </div>

      <button
        type="button"
        className={flipped ? 'flashcard-card flipped' : 'flashcard-card'}
        onClick={() => setFlipped((value) => !value)}
      >
        <span className="flashcard-label">
          {flipped ? 'Réponse' : 'Question'}
        </span>

        <strong>
          {flipped ? currentCard.back : currentCard.front}
        </strong>

        <small>Appuie pour retourner</small>
      </button>

      <div className="flashcards-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={() => answerCard(false)}
        >
          ❌ À revoir
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={() => answerCard(true)}
        >
          ✅ Je savais
        </button>
      </div>
    </section>
  )
}