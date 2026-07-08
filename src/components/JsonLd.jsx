import { useEffect } from 'react'

/** Injects a single JSON-LD <script> into <head> for as long as this component is mounted. */
export function JsonLd({ data }) {
  useEffect(() => {
    if (!data) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
    return () => script.remove()
  }, [data])

  return null
}
