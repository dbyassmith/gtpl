import { useCallback, useEffect, useRef, useState } from 'react'
import { DumpCard } from './DumpCard.jsx'
import { getDump } from './content/index.js'

function UnknownDump({ dumpId }) {
  return (
    <main className="dump-missing">
      <h1>That dump does not exist.</h1>
      <p>Natty checked twice. This is as much effort as he is willing to provide.</p>
      <a href="/">Return to GTPL</a>
      <code>{dumpId}</code>
    </main>
  )
}

export default function DumpPage({ dumpId }) {
  const dump = getDump(dumpId)
  const railRef = useRef(null)
  const animationFrameRef = useRef(null)
  const [currentCard, setCurrentCard] = useState(0)

  const goToCard = useCallback((index, behavior = 'smooth') => {
    const rail = railRef.current
    const card = rail?.querySelector(`[data-card-index="${index}"]`)
    if (!card) return
    card.scrollIntoView({ behavior, block: 'start', inline: 'nearest' })
  }, [])

  const closeDump = useCallback(() => {
    if (window.history.length > 1) window.history.back()
    else window.location.assign('/')
  }, [])

  useEffect(() => {
    if (!dump) return undefined

    function handleKeyDown(event) {
      if (event.key === 'ArrowDown' && currentCard < dump.cards.length - 1) {
        event.preventDefault()
        goToCard(currentCard + 1)
      }
      if (event.key === 'ArrowUp' && currentCard > 0) {
        event.preventDefault()
        goToCard(currentCard - 1)
      }
      if (event.key === 'Escape') closeDump()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeDump, currentCard, dump, goToCard])

  function trackCurrentCard() {
    if (animationFrameRef.current) return
    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null
      const rail = railRef.current
      if (!rail) return
      const index = Math.round(rail.scrollTop / rail.clientHeight)
      setCurrentCard(Math.max(0, Math.min(index, dump.cards.length - 1)))
    })
  }

  useEffect(() => () => {
    if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current)
  }, [])

  if (!dump) return <UnknownDump dumpId={dumpId} />

  return (
    <main className="dump-shell">
      <div
        aria-label={`${dump.title} card stack`}
        aria-roledescription="carousel"
        className="dump-rail"
        onScroll={trackCurrentCard}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {dump.cards.map((card, index) => (
          <DumpCard
            card={card}
            cardIndex={index}
            cardTotal={dump.cards.length}
            dump={dump}
            isActive={index === currentCard}
            key={card.id}
            onNext={index < dump.cards.length - 1 ? () => goToCard(index + 1) : null}
          />
        ))}
      </div>
      <p aria-live="polite" className="sr-only">Card {currentCard + 1} of {dump.cards.length}</p>
    </main>
  )
}
