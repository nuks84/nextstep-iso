import { CheckCircle, TrendingUp, Users, FileCheck, Shield, AlertTriangle } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import Process from '../sections/Process'
import { useReveal } from '../hooks/useReveal'

const benefits = [
  { icon: Shield,       title: 'Meet WHS Obligations',         desc: 'ISO 45001 aligns with Work Health and Safety legislation across all Australian states and territories, helping you demonstrate legal compliance and due diligence.' },
  { icon: AlertTriangle,title: 'Reduce Workplace Incidents',   desc: 'A systematic approach to hazard identification and risk control leads to fewer incidents, lower workers\' compensation costs, and a safer workplace.' },
  { icon: TrendingUp,   title: 'Win Government Contracts',     desc: 'ISO 45001 is a prerequisite for government panels, construction accreditation schemes, and major infrastructure contracts across Australia.' },
  { icon: Users,        title: 'Demonstrate Duty of Care',     desc: 'Certification shows workers, clients, and regulators that you take safety seriously — protecting your people and your reputation.' },
  { icon: FileCheck,    title: 'Reduce Liability Exposure',    desc: 'Documented safety systems and records provide a clear defence in the event of an incident, reducing your personal and organisational liability.' },
  { icon: CheckCircle,  title: 'Build a Safety Culture',       desc: 'ISO 45001\'s framework involves workers at every level — creating shared ownership of safety rather than top-down compliance.' },
]

function BenefitCard({ b, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = b
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-4`}>
      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#0d98cd]" />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function FAQItem({ q, a }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal border-b border-gray-100 py-5 last:border-0">
      <h3 className="text-[0.95rem] font-semibold text-gray-900 mb-2">{q}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{a}</p>
    </div>
  )
}

export default function ISO45001() {
  return (
    <>
      <PageHero
        breadcrumb="ISO 45001"
        tag="ISO 45001 Certification"
        title="Australia's leading workplace health & safety standard"
        subtitle="ISO 45001 provides an internationally recognised framework for managing workplace health and safety — reducing incidents, meeting legal obligations, and demonstrating your commitment to the wellbeing of every person in your business."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Get Certified — Free Quote</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is ISO 45001 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-4">
                What is ISO 45001?
              </p>
              <h2 className="text-[2.2rem] font-extrabold text-gray-900 tracking-[-0.02em] mb-4">
                The global standard for workplace safety
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO 45001:2018 replaced OHSAS 18001 as the international benchmark for occupational health and safety management systems. It provides a structured, risk-based approach to eliminating hazards and preventing work-related injury and illness.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                In Australia, ISO 45001 is increasingly required by government procurement, construction and infrastructure projects, and major supply chains. It complements — and helps demonstrate compliance with — the WHS Act and state-based legislation.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                At NextStep ISO, we build your WHS management system around how your business actually operates — ensuring it's practical to maintain, not just compliant on paper.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '2.3M',  l: 'Work-related deaths globally per year' },
                { n: '60%',   l: 'Average incident reduction post-certification' },
                { n: '$28B',  l: 'Annual cost of workplace injuries in Australia' },
                { n: 'No. 1', l: 'Most adopted OH&S standard worldwide' },
              ].map(({ n, l }) => (
                <div key={l} className="bg-brand-50 border border-brand-200 rounded-2xl p-5 text-center">
                  <div className="text-[1.8rem] font-extrabold text-[#0d98cd] mb-1">{n}</div>
                  <div className="text-[0.78rem] text-gray-500 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Why ISO 45001?"
            title="Six reasons Australian businesses get certified"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => <BenefitCard key={b.title} b={b} delay={(i % 2) + 1} />)}
          </div>
        </div>
      </section>

      <Process />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="FAQ" title="ISO 45001 questions answered" />
          {[
            {
              q: 'How long does ISO 45001 certification take?',
              a: 'The timeline depends on your business size, existing safety procedures, and the complexity of your operations. We\'ll assess your current position and give you a realistic, personalised timeline on your first call.',
            },
            {
              q: 'How much does ISO 45001 certification cost?',
              a: 'Our fixed consulting fee for a single-standard ISO 45001 engagement typically starts from $3,500–$6,500 + GST, depending on business size and complexity. Separate certification body fees of approximately $1,800–$4,500 also apply.',
            },
            {
              q: 'Do we already need a WHS management system in place?',
              a: 'No — we can build your WHS management system from the ground up. If you already have safety procedures in place, we\'ll assess what exists and build on it, which can reduce time and cost.',
            },
            {
              q: 'Does ISO 45001 replace compliance with WHS legislation?',
              a: 'No. ISO 45001 complements legislative compliance — it provides a systematic framework for managing safety obligations, but you still need to meet all relevant WHS Act requirements. Certification does, however, strongly support demonstrated legal compliance.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}
