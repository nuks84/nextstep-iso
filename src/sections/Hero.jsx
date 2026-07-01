import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const trust = [
  'Fixed price — no surprise invoices',
  'Expert-led by certified lead auditors',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-[#0d98cd]/[0.07] blur-[160px]" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-32 lg:py-40 text-center">

        <div className="inline-flex items-center border border-white/[0.10] text-white/40 rounded-full px-4 py-1.5 text-[0.73rem] font-medium tracking-[0.12em] uppercase mb-10">
          Australia's Trusted ISO Consultancy
        </div>

        <h1 className="text-[3.2rem] sm:text-[4.8rem] lg:text-[6rem] font-extrabold tracking-[-0.04em] leading-[1.0] text-white mb-6">
          <span className="hero-line hero-line-1 block">ISO Certification.</span>
          <span className="hero-line hero-line-2 block text-[#0d98cd]">Systems That Scale.</span>
        </h1>

        <p className="hero-line hero-line-3 text-[0.8rem] sm:text-[0.9rem] font-semibold tracking-[0.3em] uppercase text-white/20 mb-12">
          ISO &nbsp;&nbsp; GMP &nbsp;&nbsp; HACCP
        </p>

        <p className="text-[1.05rem] text-white/45 leading-relaxed max-w-[480px] mx-auto mb-8">
          We guide Australian businesses through ISO certification — without the complexity, delays, or jargon. Expert-led. Fixed price.
        </p>

        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 mb-10">
          {trust.map(t => (
            <li key={t} className="flex items-center gap-2 text-[0.84rem] font-medium text-white/30">
              <CheckCircle className="w-3.5 h-3.5 text-[#0d98cd]/50 shrink-0" />
              {t}
            </li>
          ))}
        </ul>

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
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.05] text-white/70 font-semibold rounded-xl text-[0.95rem] border border-white/[0.10] hover:bg-white/[0.09] hover:text-white/90 hover:border-white/20 transition-all hover:-translate-y-px"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  )
}
