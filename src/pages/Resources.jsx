import { Check, Compass, Download } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'
import { checklistGroups, standardsGuide, auditSteps } from '../data/resourcesContent'

const downloads = {
  checklist: '/resources/iso-certification-readiness-checklist.pdf',
  'choosing-a-standard': '/resources/choosing-the-right-iso-standard.pdf',
  'internal-audit': '/resources/what-an-internal-audit-involves.pdf',
}

function DownloadLink({ slug }) {
  return (
    <a
      href={downloads[slug]}
      download
      className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#0d98cd] hover:text-[#0a7aaa] transition-colors"
    >
      <Download className="w-3.5 h-3.5" />
      Download as PDF
    </a>
  )
}

function ChecklistGroup({ group, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <h3 className="text-[0.95rem] font-bold text-gray-900 mb-4">{group.category}</h3>
      <ul className="flex flex-col gap-3">
        {group.items.map(item => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md border-2 border-[#0d98cd]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#0d98cd]" />
            </span>
            <span className="text-[0.875rem] text-gray-600 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function StandardCard({ s, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} rounded-2xl border border-gray-100 bg-white p-6`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
        <h3 className="text-[1rem] font-bold text-gray-900">{s.name}</h3>
        <span className="text-[0.78rem] text-gray-400">— {s.focus}</span>
      </div>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{s.bestFor}</p>
    </div>
  )
}

function AuditStep({ step, idx }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = step
  return (
    <div ref={ref} className={`reveal reveal-delay-${(idx % 5) + 1} flex gap-4`}>
      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
        <Icon className="w-4.5 h-4.5 text-[#0d98cd]" />
      </div>
      <div>
        <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#0d98cd] mb-1">Step {idx + 1}</p>
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <>
      <PageHero
        breadcrumb="Resources"
        tag="Free Resources"
        title="A few resources to get you started"
        subtitle="Practical guides drawn from the certifications we deliver every day — no email signup required."
      />

      <section id="checklist" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Guide 01"
            title="ISO Certification Readiness Checklist"
            subtitle="Run through this before you engage a consultant or certification body — it'll tell you roughly how far along you already are."
          />
          <DownloadLink slug="checklist" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
            {checklistGroups.map((group, i) => (
              <ChecklistGroup key={group.category} group={group} delay={(i % 5) + 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="choosing-a-standard" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Guide 02"
            title="Choosing the Right ISO Standard"
            subtitle="Five of the most common standards Australian businesses pursue, and who each one is actually built for."
          />
          <DownloadLink slug="choosing-a-standard" />
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {standardsGuide.map((s, i) => (
              <StandardCard key={s.name} s={s} delay={(i % 5) + 1} />
            ))}
          </div>
          <p className="text-[0.9rem] text-gray-500 leading-relaxed mt-8 max-w-2xl">
            Pursuing more than one standard? An Integrated Management System (IMS) combines them into a single set of documentation and audits, cutting duplicated effort significantly.
          </p>
        </div>
      </section>

      <section id="internal-audit" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Guide 03"
            title="What an Internal Audit Actually Involves"
            subtitle="Internal audits sound intimidating, but they're a structured, predictable process. Here's what to expect."
          />
          <DownloadLink slug="internal-audit" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mt-8">
            {auditSteps.map((step, i) => (
              <AuditStep key={step.title} step={step} idx={i} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
