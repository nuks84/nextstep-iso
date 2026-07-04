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

const standards = [
  { label: 'ISO 9001', color: '#0d98cd' },
  { label: 'ISO 27001', color: '#7c3aed' },
  { label: 'ISO 22000', color: '#e11d48' },
  { label: 'ISO 45001', color: '#ea580c' },
  { label: 'ISO 14001', color: '#16a34a' },
  { label: 'Audits', color: '#0891b2' },
  { label: 'IMS', color: '#a855f7' },
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-[#0d98cd]/[0.06] blur-[160px]" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-32 lg:py-40 text-center">

        <div className="flex flex-wrap items-center justify-center gap-y-4 mb-8">
          {standards.map((s, i) => {
            const parts = s.label.startsWith('ISO ') ? [s.label.slice(0, 3), s.label.slice(4)] : [s.label]
            return (
              <div
                key={s.label}
                style={{ zIndex: i + 1, borderColor: s.color }}
                className={`relative flex flex-col items-center justify-center w-[60px] h-[60px] rounded-full bg-white border shadow-md shadow-black/20 hover:z-20 hover:-translate-y-1.5 transition-all ${i !== 0 ? '-ml-1' : ''}`}
              >
                {parts.map((p, pi) => (
                  <span
                    key={pi}
                    className={
                      parts.length > 1 && pi === 0
                        ? 'text-[0.6rem] font-bold text-[#0f0f0f]/40 tracking-wide uppercase leading-none'
                        : 'text-[0.82rem] font-extrabold text-[#0f0f0f] tracking-tighter leading-none'
                    }
                  >
                    {p}
                  </span>
                ))}
              </div>
            )
          })}
        </div>

        <h1 className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-[0.3em] text-[clamp(1.15rem,4.4vw,3.4rem)] font-extrabold tracking-[-0.03em] leading-none text-[#0f0f0f] mb-6">
          <span>Build systems that</span>
          <span
            className="relative inline-flex items-center gap-[0.35em] px-[0.85em] py-[0.4em] rounded-full shrink-0 transition-colors duration-300"
            style={{ background: `${rotatingWords[wordIndex].color}1f` }}
          >
            <span
              className={`inline-block rounded-full w-[0.75em] h-[0.75em] shrink-0 transition-all duration-300 ease-out ${
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

        <p className="hero-line hero-line-3 text-[0.8rem] sm:text-[0.9rem] font-semibold tracking-[0.3em] uppercase text-[#0f0f0f]/20 mb-12">
          ISO &nbsp;&nbsp; GMP &nbsp;&nbsp; HACCP
        </p>

        <p className="whitespace-nowrap text-[1.05rem] text-[#0f0f0f]/55 leading-relaxed mb-10">
          Certification without the complexity, confusion, or burden on your team.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d98cd] text-white font-semibold rounded-xl text-[0.95rem] hover:bg-[#0a7aaa] transition-all hover:-translate-y-px shadow-lg shadow-[#0d98cd]/20"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f0f0f]/[0.04] text-[#0f0f0f]/70 font-semibold rounded-xl text-[0.95rem] border border-black/[0.08] hover:bg-[#0f0f0f]/[0.07] hover:text-[#0f0f0f] hover:border-black/20 transition-all hover:-translate-y-px"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  )
}
