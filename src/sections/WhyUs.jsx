import { Award, DollarSign, Zap, Users } from 'lucide-react'
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
      <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0d98cd]/[0.08] flex items-center justify-center">
        <Icon className="w-4.5 h-4.5 text-[#0d98cd]" />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const panelRef = useReveal()

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — content */}
          <div>
            <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-5">
              Why NextStep ISO
            </p>
            <h2 className="text-[2.8rem] sm:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-gray-900 mb-5">
              A consultancy built around your success
            </h2>
            <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-12">
              We've distilled 15+ years of auditing and quality management experience into a process that's faster, clearer, and more reliable than anything else on the market.
            </p>
            <div className="flex flex-col gap-8">
              {reasons.map((r, i) => (
                <ReasonCard key={r.title} reason={r} idx={i} />
              ))}
            </div>
          </div>

          {/* Right — credentials panel */}
          <div ref={panelRef} className="reveal">
            <div className="rounded-2xl border border-gray-100 bg-white p-8">

              <div className="flex flex-col gap-2.5 mb-8">
                {credentials.map(({ label }) => (
                  <div key={label} className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-5 py-3.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d98cd] shrink-0" />
                    <span className="text-[0.9rem] font-semibold text-gray-800">{label}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-4">
                  Standards &amp; services we deliver
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map(s => (
                    <span
                      key={s}
                      className="text-[0.75rem] font-semibold text-gray-600 bg-gray-100 rounded-full px-3 py-1"
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
    </section>
  )
}
