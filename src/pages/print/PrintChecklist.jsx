import { PrintLayout } from './PrintLayout'
import { checklistGroups } from '../../data/resourcesContent'

export default function PrintChecklist() {
  return (
    <PrintLayout
      tag="Guide 01"
      title="ISO Certification Readiness Checklist"
      subtitle="Run through this before you engage a consultant or certification body — it'll tell you roughly how far along you already are."
    >
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {checklistGroups.map(group => (
          <div key={group.category}>
            <h3 className="text-[0.88rem] font-bold text-[#0f0f0f] mb-2">{group.category}</h3>
            <ul className="flex flex-col gap-1.5">
              {group.items.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-3.5 h-3.5 rounded border-2 border-[#0d98cd]/40 shrink-0 mt-0.5" />
                  <span className="text-[0.78rem] text-gray-600 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PrintLayout>
  )
}
