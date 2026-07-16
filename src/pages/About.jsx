import { CheckCircle, Award, Users, Target } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'

const credentials = [
  'Certified ISO Lead Auditor',
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
            <div ref={founderRef} className="reveal flex justify-center">
              <div className="relative w-[calc(50%+1.5cm)]">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                  <img
                    src="/authors/ranuka-photo.png"
                    alt="Ranuka Abeysinghe"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div ref={credsRef} className="reveal reveal-delay-2">
              <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
                About the Founder
              </div>
              <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-1">Ranuka Abeysinghe</h2>
              <p className="text-[0.95rem] font-semibold text-[#0d98cd] mb-5">Founder & Lead ISO Consultant</p>

              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                After 15 years working with certification bodies and as an in-house Quality Manager for major Australian organisations, Ranuka founded NextStep ISO with a single mission: to make practical, world-class ISO support accessible to businesses of every size.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-8">
                Throughout my career, I met many businesses that had invested significant time and money into management systems that didn't quite fit the way they worked. This often made the certification process more complicated than it needed to be. I wanted to take a different approach, helping businesses build practical, tailored systems that not only achieve certification but also support better ways of working long after the audit is complete.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {credentials.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-[0.875rem] font-medium text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0d98cd] shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>

              <Button to="/contact" arrow>Book a Call with Ranuka</Button>
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
