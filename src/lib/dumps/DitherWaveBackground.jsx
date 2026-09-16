import { useEffect, useRef } from 'react'

const BAYER_4X4 = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5,
]

const BACKGROUND = [7, 7, 10]
const FOREGROUND = [124, 92, 255]
const FRAME_INTERVAL = 1_000 / 24
const LOGICAL_PIXEL_SIZE = 3

function renderDitheredWave(context, imageData, elapsedSeconds) {
  const { data, height, width } = imageData
  const aspect = width / height

  for (let y = 0; y < height; y += 1) {
    const vertical = (y / height - 0.5) * Math.PI * 2

    for (let x = 0; x < width; x += 1) {
      const horizontal = (x / width - 0.5) * Math.PI * 2 * aspect
      const warpedHorizontal = horizontal + Math.sin(vertical * 0.72 + elapsedSeconds * 0.58) * 1.18
      const warpedVertical = vertical + Math.cos(horizontal * 0.38 - elapsedSeconds * 0.46) * 0.94
      const field =
        Math.sin(warpedHorizontal * 1.06 + warpedVertical * 0.18 + elapsedSeconds * 0.68) +
        Math.cos(warpedVertical * 1.22 - warpedHorizontal * 0.16 - elapsedSeconds * 0.56) +
        Math.sin((warpedHorizontal + warpedVertical) * 0.42 + elapsedSeconds * 0.36) * 0.56
      const rawIntensity = Math.max(0, Math.min(1, 0.5 + field / 4.35))
      const normalizedIntensity = Math.max(0, Math.min(1, (rawIntensity - 0.28) / 0.44))
      const intensity = normalizedIntensity * normalizedIntensity * (3 - 2 * normalizedIntensity)
      const threshold = (BAYER_4X4[(y % 4) * 4 + (x % 4)] + 0.5) / 16
      const color = intensity > threshold ? FOREGROUND : BACKGROUND
      const offset = (y * width + x) * 4

      data[offset] = color[0]
      data[offset + 1] = color[1]
      data[offset + 2] = color[2]
      data[offset + 3] = 255
    }
  }

  context.putImageData(imageData, 0, 0)
}

export function DitherWaveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !context) return undefined

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationTimer = 0
    let imageData

    const paint = (timestamp = 0) => {
      if (!imageData) return
      renderDitheredWave(context, imageData, timestamp / 1_000)
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.ceil(bounds.width / LOGICAL_PIXEL_SIZE))
      const height = Math.max(1, Math.ceil(bounds.height / LOGICAL_PIXEL_SIZE))
      if (canvas.width === width && canvas.height === height && imageData) return

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      imageData = context.createImageData(width, height)
      paint(performance.now())
    }

    const start = () => {
      if (!animationTimer && !reducedMotionQuery.matches) {
        animationTimer = window.setInterval(() => {
          if (canvas.closest('.dump-card')?.classList.contains('is-active')) paint(performance.now())
        }, FRAME_INTERVAL)
      }
    }

    const stop = () => {
      if (animationTimer) window.clearInterval(animationTimer)
      animationTimer = 0
    }

    const handleMotionPreference = () => {
      stop()
      paint(performance.now())
      start()
    }

    const resizeObserver = new ResizeObserver(resize)

    resizeObserver.observe(canvas)
    reducedMotionQuery.addEventListener('change', handleMotionPreference)
    resize()
    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      reducedMotionQuery.removeEventListener('change', handleMotionPreference)
    }
  }, [])

  return <canvas aria-hidden="true" className="dump-title-shader-canvas" ref={canvasRef} />
}
