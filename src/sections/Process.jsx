import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'
import { Phone, ClipboardList, FileText, BadgeCheck } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Free Discovery Call',
    desc: 'A no-obligation 30-minute conversation to understand your business, goals, and the most appropriate certification pathway for your industry and size.',
    detail: '30 minutes · No obligation',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Gap Analysis',
    desc: "We audit your existing practices against the standard's requirements and produce a clear, prioritised action plan with a realistic certification timeline.",
    detail: '3–5 business days · Delivered in writing',
  },
  {
    icon: FileText,
    number: '03',
    title: 'System Development',
    desc: 'We build all required documentation, procedures, and policies — custom to your business. We then train your team to embed the system into daily operations.',
    detail: '4–10 weeks · Fully managed',
  },
  {
    icon: BadgeCheck,
    number: '04',
    title: 'Audit & Certification',
    desc: 'We prepare you for the external audit, attend on the day, and handle any non-conformances. Our 98% first-audit pass rate speaks to our preparation quality.',
    detail: 'Expert support on the day',
  },
]

function Step({ step, idx }) {
  const ref = useReveal()
  const { icon: Icon, number, title, desc, detail } = step
  const isLast = idx === steps.length - 1

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${idx + 1} flex gap-6 group`}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#0d98cd]/[0.08] border-2 border-[#0d98cd]/20 flex items-center justify-center text-[#0d98cd] shrink-0 group-hover:bg-[#0d98cd] group-hover:border-[#0d98cd] group-hover:text-white transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#0d98cd]/30 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <div className="text-[0.72rem] font-bold uppercase tracking-widest text-[#0d98cd] mb-1">
          Step {number}
        </div>
        <h3 className="text-[1.05rem] font-bold text-white/90 mb-2">{title}</h3>
        <p className="text-[0.875rem] text-white/45 leading-relaxed mb-3">{desc}</p>
        <span className="inline-block text-[0.72rem] font-semibold text-white/30 bg-white/[0.06] rounded-full px-3 py-1">
          {detail}
        </span>
      </div>
    </div>
  )
}

export default function Process() {
  const sideRef = useReveal()

  return (
    <section className="py-28 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0d98cd]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0d98cd]/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — header + context */}
          <div ref={sideRef} className="reveal">
            <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-white/40 mb-4">
              How It Works
            </p>
            <h2 className="text-[2.8rem] sm:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-white mb-5">
              A structured path from kickoff to certified
            </h2>
            <p className="text-[1.05rem] text-white/50 leading-relaxed">
              Our four-step process is the result of delivering successful certifications across a wide range of industries. Every step is designed to minimise disruption to your business while maximising your chances of a first-audit pass.
            </p>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Step key={step.number} step={step} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
