import { Star } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    initials: 'JK',
    name: 'James Kowalski',
    company: 'Kowalski Civil Pty Ltd',
    role: 'Managing Director',
    iso: 'ISO 9001',
    quote: "We'd tried twice before with other consultants and failed the audit both times. Sarah came in, understood our business immediately, and we passed first go. The system she built is actually how we run the company now — not just a compliance document.",
    color: '#0d98cd',
  },
  {
    initials: 'AP',
    name: 'Anika Prasad',
    company: 'Precision Engineering Group',
    role: 'Chief Executive Officer',
    iso: 'IMS (9001 · 45001 · 14001)',
    quote: "We needed three ISO certifications to qualify for a major government tender. NextStep ISO delivered all three as an integrated system in under three months. The tender was worth $4.2M. The ROI on the consulting fee was immediate.",
    color: '#7c3aed',
  },
  {
    initials: 'ML',
    name: 'Marcus Lee',
    company: 'Vaultex Technologies',
    role: 'Co-Founder',
    iso: 'ISO 27001',
    quote: "As a 14-person tech company, I thought ISO 27001 was only for large enterprises. Sarah showed us a right-sized approach that fit our team perfectly. Six months later it's opened three new enterprise client relationships we couldn't access before.",
    color: '#16a34a',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} flex flex-col bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#0d98cd]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <Stars />
      <p className="mt-4 mb-6 text-[0.9rem] text-gray-700 leading-relaxed flex-1 italic">
        "{t.quote}"
      </p>
      <div className="flex items-center justify-between border-t border-gray-100 pt-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[0.85rem] font-bold text-white shrink-0"
            style={{ background: t.color }}
          >
            {t.initials}
          </div>
          <div>
            <div className="text-[0.875rem] font-bold text-gray-900">{t.name}</div>
            <div className="text-[0.75rem] text-gray-400">{t.role}, {t.company}</div>
          </div>
        </div>
        <span
          className="text-[0.68rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
          style={{ background: `${t.color}14`, color: t.color }}
        >
          {t.iso}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="Client Success"
          title="Trusted by Australian businesses"
          subtitle="Don't take our word for it. Here's what our clients say about working with NextStep ISO."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
