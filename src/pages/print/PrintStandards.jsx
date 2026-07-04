import { PrintLayout } from './PrintLayout'
import { standardsGuide } from '../../data/resourcesContent'

export default function PrintStandards() {
  return (
    <PrintLayout
      tag="Guide 02"
      title="Choosing the Right ISO Standard"
      subtitle="Five of the most common standards Australian businesses pursue, and who each one is actually built for."
    >
      <div className="flex flex-col gap-5">
        {standardsGuide.map(s => (
          <div key={s.name} className="rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
              <h3 className="text-[1rem] font-bold text-[#0f0f0f]">{s.name}</h3>
              <span className="text-[0.78rem] text-gray-400">— {s.focus}</span>
            </div>
            <p className="text-[0.85rem] text-gray-600 leading-relaxed">{s.bestFor}</p>
          </div>
        ))}
      </div>
      <p className="text-[0.85rem] text-gray-500 leading-relaxed mt-8">
        Pursuing more than one standard? An Integrated Management System (IMS) combines them into a single set of documentation and audits, cutting duplicated effort significantly.
      </p>
    </PrintLayout>
  )
}
