import { Award, DollarSign, Zap, Users } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: Award,
    title: 'Certified Lead Auditors',
    desc: 'Former certification body auditors — we know exactly what assessors look for.',
  },
  {
    icon: DollarSign,
    title: 'Fixed-Price Guarantee',
    desc: 'One price, kickoff to certificate. No hourly billing, no surprise invoices.',
  },
  {
    icon: Zap,
    title: 'Fast-Track Certification',
    desc: 'A structured process that gets you certified faster than typical consultancies.',
  },
  {
    icon: Users,
    title: 'Built Around Your Business',
    desc: 'No generic templates — every system is tailored to how you actually operate.',
  },
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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="Why NextStep ISO"
          title="A smarter path to certification"
          subtitle="15+ years of auditing experience, distilled into a faster, clearer certification process."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} idx={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
