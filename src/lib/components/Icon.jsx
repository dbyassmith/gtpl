const icons = {
  arrowLeft: (
    <path d="m14.5 5-7 7 7 7" />
  ),
  arrowRight: (
    <path d="m9.5 5 7 7-7 7" />
  ),
  chat: (
    <>
      <path d="M20 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  check: (
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  ),
  close: (
    <path d="m6 6 12 12M18 6 6 18" />
  ),
  copy: (
    <>
      <rect height="13" rx="2" width="11" x="8" y="8" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </>
  ),
  plus: (
    <path d="M12 5v14M5 12h14" />
  ),
  power: (
    <>
      <path d="M12 3v9" />
      <path d="M7.1 5.8a8 8 0 1 0 9.8 0" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  send: (
    <path d="m3.5 11.5 17-8-6.5 17-2.8-6.2-7.7-2.8Zm7.7 2.8 3.6-3.7" />
  ),
  thumbUp: (
    <path d="M7.5 10.5 11 3.8c.7-1.3 2.7-.8 2.7.7v4h4.1c1.6 0 2.7 1.5 2.2 3l-1.8 6a2.4 2.4 0 0 1-2.3 1.7H7.5m0-8.7v8.7H4.2a1 1 0 0 1-1-1v-6.7a1 1 0 0 1 1-1h3.3Z" />
  ),
}

export function Icon({ name, size = 20, strokeWidth = 1.7 }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      >
        {icons[name]}
      </g>
    </svg>
  )
}
