import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
