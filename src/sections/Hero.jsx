import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const stats = [
  { number: '100+', label: 'Certifications Delivered' },
  { number: '98%',  label: 'First-Audit Pass Rate' },
  { number: '45d',  label: 'Average Time to Cert' },
]

const trust = [
  'Guaranteed certification or full refund',
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

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-28 lg:py-36">
        <div className="max-w-[780px]">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-dark rounded-full px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-wider mb-7">
            <span className="w-2 h-2 rounded-full bg-[#0d98cd] animate-pulse" />
            Australia's Trusted ISO Consultancy
          </div>

          {/* Headline */}
          <h1 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.4rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-gray-900 mb-6">
            ISO Certification.<br />
            <span className="text-[#0d98cd]">Made Simple.</span><br />
            Done Fast.
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
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0d98cd] text-white font-semibold rounded-xl text-[1rem] hover:bg-[#0a7aaa] transition-all shadow-sm hover:-translate-y-px"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-800 font-semibold rounded-xl text-[1rem] border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-px"
            >
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden w-fit border border-gray-200">
            {stats.map(({ number, label }) => (
              <div key={label} className="bg-white px-7 py-5 text-center">
                <div className="text-[1.9rem] font-extrabold text-gray-900 tracking-tight leading-none mb-1">
                  <span className="text-[#0d98cd]">{number.replace(/[^0-9%+d]/g, '') === number ? '' : ''}</span>
                  {number}
                </div>
                <div className="text-[0.78rem] font-medium text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
