import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    image: '/ChatGPT%20Image%201.png',
    title: 'Preparing for Your First Certification',
    desc: 'Implement practical management systems that are built around your business, not generic templates.',
    to: '/for/first-certification',
  },
  {
    image: '/ChatGPT%20Image%202.png',
    title: 'Improving Existing Systems',
    desc: 'Simplify compliance, reduce administrative burden, and keep your team focused on running the business.',
    to: '/for/improving-systems',
  },
  {
    image: '/ChatGPT%20Image%203.png',
    title: 'Growing Businesses',
    desc: 'Build systems that scale with your business, improve consistency, and support long-term success.',
    to: '/for/growing-businesses',
  },
]

function ReasonCard({ reason, idx }) {
  const ref = useReveal()
  const { image, title, desc, to } = reason

  return (
    <Link to={to} ref={ref} className={`reveal reveal-delay-${idx + 1} flex flex-col h-full group`}>
      <div className="rounded-2xl aspect-[4/3] overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[0.9rem] text-gray-500 leading-relaxed mb-4">{desc}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-[#0d98cd] group-hover:gap-2.5 transition-all">
        Learn more
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  )
}

export default function WhyUs() {
  const headerRef = useReveal()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div ref={headerRef} className="reveal mb-16 max-w-3xl">
          <h2 className="text-[2.8rem] sm:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5 text-gray-900">
            Where are you on your journey?
          </h2>
          <p className="text-[1.05rem] leading-relaxed max-w-xl text-gray-500">
            Whether you're preparing for your first certification, improving existing systems, or building a business that scales, I can help you take the next step with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} idx={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
