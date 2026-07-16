import { AlertCircle, CheckCircle2, Target } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { useReveal } from '../hooks/useReveal'

function ListItem({ icon: Icon, iconClass, text, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-4`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconClass}`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-[0.95rem] text-gray-600 leading-relaxed pt-1">{text}</p>
    </div>
  )
}

export function PersonaContent({ challenges, howWeHelp, outcomes }) {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="The Challenge" title="Common challenges" />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {challenges.map((c, i) => (
              <ListItem key={c} icon={AlertCircle} iconClass="bg-red-50 text-red-500" text={c} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="How We Help" title="How NextStep ISO helps" />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {howWeHelp.map((c, i) => (
              <ListItem key={c} icon={CheckCircle2} iconClass="bg-brand-100 text-[#0d98cd]" text={c} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="Expected Outcomes" title="What you can expect" />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {outcomes.map((c, i) => (
              <ListItem key={c} icon={Target} iconClass="bg-emerald-50 text-emerald-500" text={c} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
