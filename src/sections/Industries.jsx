import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const industries = [
  { emoji: '🏗️', name: 'Construction',        desc: 'WHS, quality & environmental' },
  { emoji: '⚙️', name: 'Manufacturing',       desc: 'Quality & environmental systems' },
  { emoji: '🏥', name: 'Healthcare',          desc: 'Quality & information security' },
  { emoji: '💻', name: 'Technology',          desc: 'ISO 27001 & quality management' },
  { emoji: '🏛️', name: 'Government',          desc: 'Regulatory & tender compliance' },
  { emoji: '🚛', name: 'Logistics',           desc: 'Quality & WHS management' },
  { emoji: '⚡', name: 'Energy & Utilities',  desc: 'Environmental & WHS systems' },
  { emoji: '🎓', name: 'Education',           desc: 'Quality management systems' },
]

function IndustryCard({ industry, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-[#0d98cd]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
    >
      <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
        {industry.emoji}
      </div>
      <h3 className="text-[0.9rem] font-bold text-gray-900 mb-1">{industry.name}</h3>
      <p className="text-[0.76rem] text-gray-400">{industry.desc}</p>
    </div>
  )
}

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="Industries We Serve"
          title="Built for Australian business"
          subtitle="From sole traders to enterprise — we've helped businesses across every major Australian industry achieve and maintain ISO certification."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} industry={ind} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
