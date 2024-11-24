"use client"

import { animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
interface props {
  from: number
  to: number
  duration?: number
}

function Counter({ from, to, duration = 2 }: props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  // const controls = useAnimation()

  useEffect(() => {
    const element: HTMLElement = ref.current!
    if (!inView || !element) return

    element.textContent = String(from)

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to)
      return
    }

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value: number) {
        element.textContent = value.toFixed(0)
      },
    })

    return () => controls.stop()
  }, [inView, from, to, duration])

  return <div ref={ref!} />
}

export default Counter
