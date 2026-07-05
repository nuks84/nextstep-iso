import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const rotatingWords = [
  { word: 'Comply', color: '#0d98cd', dark: '#0a7aaa' },
  { word: 'Certify', color: '#7c3aed', dark: '#5b21b6' },
  { word: 'Perform', color: '#e11d48', dark: '#9f1239' },
  { word: 'Protect', color: '#ea580c', dark: '#9a3412' },
  { word: 'Simplify', color: '#16a34a', dark: '#166534' },
  { word: 'Standardise', color: '#0891b2', dark: '#155e75' },
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % rotatingWords.length)
        setFading(false)
      }, 300)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-[#0d98cd]/[0.06] blur-[160px]" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">

        <h1 className="flex items-center justify-center flex-wrap gap-x-[0.3em] gap-y-2 text-[clamp(2.3rem,8.8vw,6.8rem)] font-semibold tracking-[-0.03em] leading-tight text-[#0f0f0f] mb-6">
          <span className="w-full">Build systems</span>
          <span>that</span>
          <span
            className="relative inline-flex items-center gap-[0.25em] px-[0.32em] py-[0.05em] rounded-full shrink-0 font-normal text-[clamp(1.15rem,4.4vw,3.4rem)] transition-colors duration-300"
            style={{ background: `${rotatingWords[wordIndex].color}1f` }}
          >
            <span
              className={`inline-block rounded-full w-[0.375em] h-[0.375em] shrink-0 transition-all duration-300 ease-out ${
                fading ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
              }`}
              style={{ background: rotatingWords[wordIndex].dark }}
            />
            <span
              className={`inline-block transition-all duration-300 ease-out ${
                fading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
              style={{ color: rotatingWords[wordIndex].color }}
            >
              {rotatingWords[wordIndex].word}
            </span>
          </span>
        </h1>

        <p className="text-[0.8rem] sm:text-[0.9rem] font-semibold tracking-[0.3em] uppercase text-[#0f0f0f]/30 mb-8">
          ISO &nbsp;&nbsp; GMP &nbsp;&nbsp; HACCP
        </p>

        <p className="text-[1.05rem] text-[#0f0f0f]/55 leading-relaxed mb-10">
          Certification without the complexity, confusion, or burden on your team.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d98cd] text-white font-semibold rounded-xl text-[0.95rem] hover:bg-[#0a7aaa] transition-all hover:-translate-y-px shadow-lg shadow-[#0d98cd]/20"
          >
            Build My Roadmap
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f0f0f]/[0.04] text-[#0f0f0f]/70 font-semibold rounded-xl text-[0.95rem] border border-black/[0.08] hover:bg-[#0f0f0f]/[0.07] hover:text-[#0f0f0f] hover:border-black/20 transition-all hover:-translate-y-px"
          >
            View Pricing
          </a>
        </div>

      </div>
    </section>
  )
}
