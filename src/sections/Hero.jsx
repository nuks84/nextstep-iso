import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const trust = [
  'Fixed price — no surprise invoices',
  'Expert-led by certified lead auditors',
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#0d98cd]/[0.06] blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0d98cd]/[0.04] blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-28 lg:py-36">
        <div className="max-w-[780px] text-left">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-dark rounded-full px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-wider mb-7">
            <span className="w-2 h-2 rounded-full bg-[#0d98cd] animate-pulse" />
            Australia's Trusted ISO Consultancy
          </div>

          {/* Headline */}
          <h1 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-gray-900 mb-6">
            <span className="hero-line hero-line-1">ISO Certification.</span>
            <span className="hero-line hero-line-2 text-[#0d98cd]">Systems That Scale.</span>
            <span className="hero-line hero-line-3 text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-gray-900">
              ISO &nbsp; GMP &nbsp; HACCP
            </span>
          </h1>

          {/* Sub */}
          <p className="text-[1.15rem] text-gray-500 leading-relaxed max-w-[560px] mb-8">
            We guide Australian businesses through ISO certification — without the complexity, delays, or jargon. Expert-led. Fixed price. Guaranteed to pass.
          </p>

          {/* Trust list */}
          <ul className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-2.5 mb-10">
            {trust.map(t => (
              <li key={t} className="flex items-center gap-2 text-[0.875rem] font-medium text-gray-600">
                <CheckCircle className="w-4 h-4 text-[#0d98cd] shrink-0" />
                {t}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#0d98cd] text-white font-semibold rounded-xl text-[1rem] hover:bg-[#0a7aaa] transition-all shadow-sm hover:-translate-y-px"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-gray-800 font-semibold rounded-xl text-[1rem] border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-px"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
