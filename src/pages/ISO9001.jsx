import { TrendingUp, Users, FileCheck, Clock, Shield } from 'lucide-react'

const before = [
  ['H','H','H','H','H'],
  ['H','H','H','H','H'],
  ['L','H','H','H','H'],
  ['L','L','M','H','H'],
  ['L','L','L','M','M'],
]

const after = [
  ['L','N','N','N','N'],
  ['L','L','L','M','M'],
  ['L','L','M','N','N'],
  ['L','L','L','M','N'],
  ['L','L','L','L','L'],
]

const cellBg = t =>
  t === 'H' ? 'bg-red-400' :
  t === 'M' ? 'bg-amber-300' :
  t === 'L' ? 'bg-emerald-400' :
  'bg-gray-100'

function Grid({ data }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span
          className="text-[0.6rem] font-medium text-gray-500 shrink-0"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Impact
        </span>
        <div className="flex flex-col gap-1">
          {data.map((row, r) => (
            <div key={r} className="flex gap-1">
              {row.map((t, c) => (
                <div key={c} className={`w-7 h-7 rounded-[3px] ${cellBg(t)}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[0.6rem] font-medium text-gray-500 text-center mt-1.5">Likelihood</p>
    </div>
  )
}

function RiskMatrix() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-7">
      <p className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gray-900 text-center mb-6">
        Risk Management
      </p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[0.7rem] font-semibold text-gray-700">Before</p>
          <Grid data={before} />
        </div>
        <div className="text-gray-300 text-xl">→</div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[0.7rem] font-semibold text-gray-700">After</p>
          <Grid data={after} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5 pt-4 border-t border-gray-100">
        {[['bg-red-400','High'],['bg-amber-300','Medium'],['bg-emerald-400','Low']].map(([cls, label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
            <span className="text-[0.7rem] text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import Process from '../sections/Process'
import { useReveal } from '../hooks/useReveal'

const benefits = [
  { icon: TrendingUp, title: 'Win More Tenders',       desc: 'ISO 9001 is a mandatory requirement for hundreds of government and enterprise procurement panels across Australia.' },
  { icon: Shield,     title: 'Reduce Business Risk',   desc: 'A documented quality system reduces errors, rework, and complaints — saving money and protecting your reputation.' },
  { icon: Users,      title: 'Improve Team Alignment', desc: "Clear procedures and defined responsibilities mean less confusion, fewer mistakes, and a team that knows how to deliver consistently." },
  { icon: FileCheck,  title: 'Customer Confidence',    desc: "ISO 9001 certification signals to clients that you're serious about quality. It's one of the fastest ways to build trust with new accounts." },
  { icon: Clock,      title: 'Operational Efficiency', desc: 'Mapping your processes for ISO often reveals inefficiencies you didn\'t know existed. Most clients report measurable productivity gains.' },
  { icon: TrendingUp, title: 'Continuous Improvement', desc: 'ISO 9001\'s core principle is continual improvement. The standard builds a formal mechanism for getting better every year.' },
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

export default function ISO9001() {
  return (
    <>
      <PageHero
        breadcrumb="ISO 9001"
        tag="ISO 9001 Certification"
        title="Australia's most recognised quality standard"
        subtitle="ISO 9001 is the internationally accepted benchmark for quality management. It demonstrates that your business delivers consistent, high-quality products and services — and it's increasingly required to win government and enterprise tenders."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Get Certified — Free Quote</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is ISO 9001 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
                What is ISO 9001?
              </div>
              <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-4">
                The global standard for quality management
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO 9001:2015 is the world's most widely adopted quality management standard, with over one million organisations certified globally. It provides a framework for consistently meeting customer requirements and improving operational performance.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                In Australia, ISO 9001 is a requirement for government tender panels, construction accreditation schemes (QBCC, VBA, etc.), and supplier pre-qualification lists across nearly every major industry.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                At NextStep ISO, we build you a quality management system that's custom to your business — not a generic template — and we guarantee you'll pass your first certification audit.
              </p>
            </div>
            <RiskMatrix />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Why ISO 9001?"
            title="Six reasons Australian businesses get certified"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => <BenefitCard key={b.title} b={b} delay={(i % 2) + 1} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="FAQ" title="ISO 9001 questions answered" />
          {[
            {
              q: 'How long does ISO 9001 certification take?',
              a: 'The timeline varies depending on your business size, complexity, and existing documentation. We\'ll assess your current position and give you a realistic, personalised timeline on your first call.',
            },
            {
              q: 'How much does ISO 9001 certification cost?',
              a: 'Our fixed consulting fee for a single-standard engagement (ISO 9001) for an SME typically starts from $3,500–$6,500 + GST, depending on your business size and current maturity. There are separate certification body fees of approximately $1,800–$4,500.',
            },
            {
              q: 'Do we need to hire a quality manager to maintain it?',
              a: "No. We design your quality management system to be run by whoever you already have — whether that's you, an operations manager, or a part-time admin. We also offer ongoing maintenance retainers.",
            },
            {
              q: 'Which certification body should we use?',
              a: 'We\'re body-agnostic and can work with any JASANZ-accredited certification body. We help you choose based on industry, price, and relationships. Common choices include SAI Global, Bureau Veritas, SGS, and LRQA.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}
