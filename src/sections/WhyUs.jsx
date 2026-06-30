import { Award, DollarSign, Zap, Users } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: Award,
    title: 'Certified Lead Auditors',
    desc: "Our consultants are former certification body auditors. We know exactly what assessors look for — and we build your system to pass, not just to satisfy a checklist.",
  },
  {
    icon: DollarSign,
    title: 'Fixed-Price Guarantee',
    desc: 'One price, full service, from kickoff to certificate. No scope creep, no hourly billing, no surprise invoices. You know your investment on day one.',
  },
  {
    icon: Zap,
    title: 'Fast-Track Certification',
    desc: 'Our structured process eliminates the wasted time that bogs down other consultancies — so you get certified as efficiently as possible.',
  },
  {
    icon: Users,
    title: 'Built Around Your Business',
    desc: "We don't use generic templates. Every system we build is tailored to how your organisation actually operates — making it practical, not just compliant.",
  },
]

const credentials = [
  { label: '15+ Years Experience' },
  { label: 'Lead Auditor Certified & Experienced' },
  { label: 'Australian Local Support' },
  { label: 'Tailored — No Off-the-Shelf Templates' },
]

const standards = [
  'ISO 9001', 'ISO 27001', 'ISO 14001', 'ISO 45001',
  'HACCP', 'GMP', 'Internal Audits', 'Gap Assessments',
]

function ReasonCard({ reason, idx }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = reason

  return (
    <div ref={ref} className={`reveal reveal-delay-${idx + 1} flex gap-5`}>
      <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#0d98cd]" />
      </div>
      <div>
        <h3 className="text-[1rem] font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const imgRef = useReveal()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — credentials card */}
          <div ref={imgRef} className="reveal order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#0d98cd]/[0.06] border border-[#0d98cd]/10" />
              <div className="relative rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#0d98cd]/[0.08] -translate-y-1/2 translate-x-1/2" />
                <div className="relative">

                  {/* Credential list */}
                  <div className="flex flex-col gap-3 mb-8">
                    {credentials.map(({ label }) => (
                      <div key={label} className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#0d98cd] shrink-0" />
                        <span className="text-[0.95rem] font-semibold text-gray-800">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Standards pills */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      Standards &amp; services we deliver
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {standards.map(s => (
                        <span
                          key={s}
                          className="text-[0.78rem] font-semibold text-[#0d98cd] bg-brand-100 border border-brand-200 rounded-full px-3 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
              Why NextStep ISO
            </div>
            <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold tracking-tight leading-[1.12] text-gray-900 mb-4">
              A consultancy built<br />around your success
            </h2>
            <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-10">
              We've distilled 15+ years of auditing and quality management experience into a process that's faster, clearer, and more reliable than anything else on the market.
            </p>
            <div className="flex flex-col gap-7">
              {reasons.map((r, i) => (
                <ReasonCard key={r.title} reason={r} idx={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
