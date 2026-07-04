import { PrintLayout } from './PrintLayout'
import { auditSteps } from '../../data/resourcesContent'

export default function PrintAudit() {
  return (
    <PrintLayout
      tag="Guide 03"
      title="What an Internal Audit Actually Involves"
      subtitle="Internal audits sound intimidating, but they're a structured, predictable process. Here's what to expect."
    >
      <div className="flex flex-col gap-6">
        {auditSteps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="flex gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#0d98cd]/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#0d98cd]" />
              </div>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#0d98cd] mb-1">Step {i + 1}</p>
                <h3 className="text-[0.92rem] font-bold text-[#0f0f0f] mb-1">{step.title}</h3>
                <p className="text-[0.85rem] text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </PrintLayout>
  )
}
