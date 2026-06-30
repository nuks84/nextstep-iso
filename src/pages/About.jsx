import { CheckCircle, Award, Users, Target } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'

const credentials = [
  'Certified Lead Auditor — ISO 9001, 45001, 14001',
  'Provisional Member — Chartered Quality Institute (CQI)',
  'Graduate Certificate in Risk Management, UNSW',
  'Former Quality Manager, Top 100 ASX Company',
  '15+ years in certification bodies and consulting',
]

const values = [
  {
    icon: Target,
    title: 'Outcomes over process',
    desc: 'We measure success by your certificate, not hours billed. Every decision we make is oriented toward your certification outcome.',
  },
  {
    icon: Users,
    title: 'People-first systems',
    desc: 'A management system that your team won\'t use is worthless. We build systems that make practical sense for the people who run them every day.',
  },
  {
    icon: Award,
    title: 'Honest, expert advice',
    desc: 'We tell you what you need to hear, not what you want to hear. If a standard isn\'t the right fit for your situation, we\'ll say so.',
  },
]

function ValueCard({ v, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = v
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
      <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-[#0d98cd]" />
      </div>
      <h3 className="text-[1rem] font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function About() {
  const founderRef = useReveal()
  const credsRef = useReveal()

  return (
    <>
      <PageHero
        breadcrumb="About"
        tag="About NextStep ISO"
        title="Built by auditors, for business owners"
        subtitle="We founded NextStep ISO because we saw too many businesses pay a premium for generic consulting that didn't reflect how they actually operated. We do things differently."
      />

      {/* Founder section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo placeholder */}
            <div ref={founderRef} className="reveal">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#0d98cd]/[0.08] -translate-y-1/2 translate-x-1/3" />
                  <svg className="w-32 h-32 text-[#0d98cd]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-xl">
                  <div className="text-[1.6rem] font-extrabold text-[#0d98cd] leading-none">15+</div>
                  <div className="text-[0.75rem] text-gray-500 font-medium mt-0.5">Years experience</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div ref={credsRef} className="reveal reveal-delay-2">
              <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
                About the Founder
              </div>
              <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-1">Sarah Mitchell</h2>
              <p className="text-[0.95rem] font-semibold text-[#0d98cd] mb-5">Founder & Lead ISO Consultant</p>

              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                After 15 years working inside certification bodies and as an in-house quality manager for major Australian corporates, Sarah founded NextStep ISO with a single mission: make world-class ISO support accessible to every Australian business.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                "I saw too many businesses hand over large sums for generic templates that had nothing to do with how they actually operated. Worse, they'd fail their first audit and feel embarrassed. I wanted to change that — not just help businesses get certified, but help them build systems that genuinely improve how they work."
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {credentials.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-[0.875rem] font-medium text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0d98cd] shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>

              <Button to="/contact" arrow>Book a Call with Sarah</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Our Values"
            title="How we work"
            subtitle="Three principles that shape every engagement and every system we build."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => <ValueCard key={v.title} v={v} delay={i + 1} />)}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
