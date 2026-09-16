import { useEffect, useRef } from 'react'
import { Icon } from '../components/Icon.jsx'
import { DitherWaveBackground } from './DitherWaveBackground.jsx'

const dumpDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
  year: 'numeric',
})

const CUP_SPECTRUM_BARS = [52, 83, 39, 100, 68, 74, 30, 89, 45, 60]
const CUP_BAR_MIN_WIDTH = 28
const CUP_BAR_MAX_WIDTH = 100
const CUP_BAR_UPDATE_INTERVAL = 1_100
const REGEXP_SPECIAL_CHARACTERS = /[.*+?^${}()|[\]\\]/g

function EmphasizedCopy({ emphasis = [], text }) {
  if (emphasis.length === 0) return text

  const emphasizedPhrases = new Set(emphasis)
  const phrasePattern = new RegExp(
    `(${emphasis.map((phrase) => phrase.replace(REGEXP_SPECIAL_CHARACTERS, '\\$&')).join('|')})`,
    'g',
  )

  return text.split(phrasePattern).map((segment, index) => (
    emphasizedPhrases.has(segment)
      ? <strong key={`${index}-${segment}`}>{segment}</strong>
      : segment
  ))
}

function CupSpectrum({ isActive }) {
  const spectrumRef = useRef(null)

  useEffect(() => {
    const spectrum = spectrumRef.current
    if (!spectrum) return undefined

    const bars = Array.from(spectrum.children)
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationTimer = 0

    const updateWidths = () => {
      bars.forEach((bar) => {
        const width = Math.round(
          CUP_BAR_MIN_WIDTH + Math.random() * (CUP_BAR_MAX_WIDTH - CUP_BAR_MIN_WIDTH),
        )
        bar.style.setProperty('--cup-bar-width', `${width}%`)
      })
    }

    const stop = () => {
      if (animationTimer) window.clearInterval(animationTimer)
      animationTimer = 0
    }

    const start = () => {
      stop()
      if (!isActive || reducedMotionQuery.matches) return
      updateWidths()
      animationTimer = window.setInterval(updateWidths, CUP_BAR_UPDATE_INTERVAL)
    }

    reducedMotionQuery.addEventListener('change', start)
    start()

    return () => {
      stop()
      reducedMotionQuery.removeEventListener('change', start)
    }
  }, [isActive])

  return (
    <div aria-hidden="true" className="dump-cup-spectrum" ref={spectrumRef}>
      {CUP_SPECTRUM_BARS.map((width, index) => (
        <span
          className={`bar-${index + 1}`}
          key={index}
          style={{
            '--cup-bar-delay': `${index * 35}ms`,
            '--cup-bar-width': `${width}%`,
          }}
        />
      ))}
    </div>
  )
}

function CardChrome({ cardIndex, cardTotal, issue, onNext }) {
  return (
    <>
      {issue ? <header className="dump-chrome"><p>{issue}</p></header> : null}
      <footer className="dump-card-footer">
        <p><strong>{String(cardIndex + 1).padStart(2, '0')}</strong> / {String(cardTotal).padStart(2, '0')}</p>
        {onNext ? (
          <button aria-label="Next card" className="dump-next" onClick={onNext} type="button">
            <Icon name="arrowRight" size={32} strokeWidth={1.8} />
          </button>
        ) : <span aria-hidden="true" className="dump-end-mark" />}
      </footer>
    </>
  )
}

function TitleCard({ card, dump, onNext }) {
  return (
    <div className="dump-title-layout">
      <div className="dump-title-panel">
        <DitherWaveBackground />
        <div className="dump-title-header">
          <p className="dump-title-brand">The Natty Dump</p>
          {card.headerLabel ? (
            <p className="dump-title-meta">{card.headerLabel}</p>
          ) : (
            <time dateTime={dump.publishedOn}>
              {dumpDateFormatter.format(new Date(`${dump.publishedOn}T00:00:00Z`))}
            </time>
          )}
        </div>
        <div className={`dump-title-body${card.titleBelowImage ? ' dump-title-body--title-below' : ''}`}>
          <h1>“{card.title}”</h1>
          {card.image ? (
            <>
              <div className={`dump-title-image-frame${card.image.portrait ? ' dump-title-image-frame--portrait' : ''}`}>
                <img
                  alt={card.image.alt}
                  className="dump-title-image"
                  src={card.image.src}
                  style={card.image.objectPosition ? { objectPosition: card.image.objectPosition } : undefined}
                />
                {card.image.overlay ? (
                  <img
                    alt=""
                    aria-hidden="true"
                    className="dump-title-image-overlay"
                    src={card.image.overlay}
                  />
                ) : null}
              </div>
              {card.image.credit ? (
                <a className="dump-image-credit" href={card.image.credit.href} rel="noreferrer" target="_blank">
                  {card.image.credit.label}
                </a>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
      <button aria-label="Swipe up to begin" className="dump-begin" onClick={onNext} type="button">
        <Icon name="arrowRight" size={20} strokeWidth={1.5} />
        <span>Swipe</span>
        <Icon name="arrowRight" size={20} strokeWidth={1.5} />
      </button>
    </div>
  )
}

function MonologueCard({ card }) {
  return (
    <div className="dump-copy-layout dump-monologue-layout">
      <h2>{card.title}</h2>
      {card.dek ? <p className="dump-dek">{card.dek}</p> : null}
      <div className="dump-body-copy">
        {card.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <img alt="NattyAI" className="dump-monologue-avatar" src="/nattyai-avatar-blink.gif" />
    </div>
  )
}

function DoomsdayClockGraphic({ handAngle }) {
  return (
    <svg aria-hidden="true" className="dump-doomsday-clock" viewBox="0 0 320 260">
      <path className="dump-doomsday-clock__arc" d="M42 232 A190 190 0 0 1 232 42" />
      <circle cx="83" cy="207" r="14" />
      <circle cx="101" cy="148" r="14" />
      <circle cx="151" cy="99" r="14" />
      <circle cx="210" cy="80" r="14" />
      <path
        className="dump-doomsday-clock__short-hand"
        d="M217 232 L217 132 L247 132 L247 232 Z"
      />
      <g
        className="dump-doomsday-clock__minute-hand"
        style={{ '--clock-hand-angle': `${handAngle}deg` }}
      >
        <path d="M217 232 L217 112 L247 112 L247 232 Z" />
      </g>
    </svg>
  )
}

function ClockCard({ card }) {
  const clockLabel = card.clockLabel ?? 'until crash out'
  const minuteLabel = `${card.minutes} ${card.minutes === 1 ? 'minute' : 'minutes'} ${clockLabel}`
  const handAngle = -(Math.min(Math.max(card.minutes, 0), 20) / 20) * 90

  return (
    <div className="dump-clock-layout">
      <div className="dump-clock-panel">
        <h2>{card.title}</h2>
        <div className="dump-clock-face" aria-label={minuteLabel} role="img">
          <DoomsdayClockGraphic handAngle={handAngle} />
          <div className="dump-clock-readout">
            <p>{card.minutes}</p>
            <span>{card.minutes === 1 ? 'minute' : 'minutes'} {clockLabel}</span>
          </div>
        </div>
        {card.body ? <p className="dump-clock-copy">{card.body}</p> : null}
      </div>
    </div>
  )
}

function HighlightCard({ card }) {
  return (
    <div className="dump-highlight-layout">
      <h2>{card.title}</h2>
      <div className="dump-media-frame">
        <span>Media slot · 16:9</span>
      </div>
      <p>{card.dek}</p>
    </div>
  )
}

function RecapCard({ card }) {
  return (
    <div className="dump-copy-layout dump-monologue-layout dump-recap-layout">
      <h2>{card.title}</h2>
      <div className="dump-body-copy dump-recap-copy">
        {card.items.map((item) => (
          <p key={item.label}>
            <EmphasizedCopy emphasis={item.emphasis} text={item.text} />
          </p>
        ))}
      </div>
      <img alt="NattyAI" className="dump-monologue-avatar dump-recap-avatar" src="/nattyai-avatar-blink.gif" />
    </div>
  )
}

function ParallelCard({ card }) {
  return (
    <div className="dump-parallel-layout">
      <h2>{card.title}</h2>
      <p className="dump-dek">{card.dek}</p>
      <div className="dump-research-table">
        {card.rows.map((row, index) => (
          <div key={row.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{row.label}</p>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
      <blockquote>{card.finding}</blockquote>
    </div>
  )
}

function CupCard({ card, isActive }) {
  const titleLockup = card.titleLockup ?? {
    lines: [card.title],
  }

  return (
    <div className="dump-cup-layout">
      <div className="dump-cup-title">
        <h2 aria-label={card.title}>
          {titleLockup.lines.map((line) => <span key={line}>{line}</span>)}
        </h2>
        <CupSpectrum isActive={isActive} />
      </div>
      <section aria-label="Commissioner's Cup standings" className="dump-cup-index">
        <header>
          <strong>Owner intelligence index</strong>
          <span>Current score</span>
        </header>
        <ol>
          {card.standings.map((standing) => (
            <li key={standing.manager}>
              <img alt={`${standing.company} logo`} src={standing.logo} />
              <div>
                <p>{standing.manager}</p>
                <small>{standing.company}</small>
                {standing.highestScore ? (
                  <span
                    aria-label={`Highest weekly score: ${standing.weeklyScore}`}
                    className="dump-cup-high-score"
                  >
                    ★ {standing.weeklyScore}
                  </span>
                ) : null}
              </div>
              <strong className="dump-cup-points">
                {standing.points} pts
                <span
                  aria-hidden={standing.positionChange !== 'up'}
                  aria-label={standing.positionChange === 'up' ? 'Position increased' : undefined}
                  className={`dump-cup-trend-up${standing.positionChange === 'up' ? '' : ' is-placeholder'}`}
                  role={standing.positionChange === 'up' ? 'img' : undefined}
                >
                  ▲
                </span>
              </strong>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export function DumpCard({ card, cardIndex, cardTotal, dump, isActive, onNext }) {
  const chromeIssue = card.type === 'commissioners-cup' && card.week ? `Week ${card.week}` : null
  const content = {
    'commissioners-cup': <CupCard card={card} isActive={isActive} />,
    'crash-out-clock': <ClockCard card={card} />,
    highlight: <HighlightCard card={card} />,
    monologue: <MonologueCard card={card} />,
    parallel: <ParallelCard card={card} />,
    recap: <RecapCard card={card} />,
    title: <TitleCard card={card} dump={dump} onNext={onNext} />,
  }[card.type]

  return (
    <article
      aria-label={`Card ${cardIndex + 1} of ${cardTotal}: ${card.title}`}
      className={`dump-card dump-card--${card.type}${isActive ? ' is-active' : ''}`}
      data-card-index={cardIndex}
      id={`dump-card-${card.id}`}
    >
      {card.type === 'title' ? null : (
        <CardChrome
          cardIndex={cardIndex}
          cardTotal={cardTotal}
          issue={chromeIssue}
          onNext={onNext}
        />
      )}
      <div className="dump-card-content">{content}</div>
    </article>
  )
}
