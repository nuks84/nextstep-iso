import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const LinkedinIcon = ({ className, style }) => (
  <svg className={className} style={style} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

function AbstractChecklist({ color }) {
  return (
    <div className="flex flex-col gap-2 w-full px-5">
      {[1, 0.75, 0.9].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-[3px] border-2 shrink-0" style={{ borderColor: color, opacity: 0.55 }} />
          <span className="h-1.5 rounded-full" style={{ background: color, opacity: 0.18, width: `${w * 100}%` }} />
        </div>
      ))}
    </div>
  )
}

function AbstractSteps({ color }) {
  return (
    <div className="flex items-center gap-1.5 w-full px-5">
      {[0, 1, 2, 3].map(i => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: color, opacity: i === 0 ? 0.9 : 0.3 }}
          />
          {i < 3 && <span className="h-px flex-1" style={{ background: color, opacity: 0.25 }} />}
        </div>
      ))}
    </div>
  )
}

const resources = [
  {
    title: 'The Deadline Most Businesses Are Missing!',
    desc: 'The Deadline Most Businesses Are Missing!',
    href: 'https://www.linkedin.com/posts/nextstep-iso_the-deadline-most-businesses-are-missing-activity-7448260897564942336-p0QR',
    color: '#0A66C2',
    external: true,
    linkLabel: 'View on LinkedIn',
    Preview: LinkedinIcon,
  },
  {
    title: 'ISO Certification Readiness Checklist',
    desc: 'See how far along you already are before you engage anyone.',
    href: '/resources#checklist',
    color: '#0d98cd',
    Preview: AbstractChecklist,
  },
  {
    title: 'What an Internal Audit Actually Involves',
    desc: 'The six-step process, demystified — no jargon.',
    href: '/resources#internal-audit',
    color: '#16a34a',
    Preview: AbstractSteps,
  },
]

function ResourceCard({ r, delay }) {
  const ref = useReveal()
  const { desc, href, color, external, linkLabel, Preview } = r

  const Wrapper = external ? 'a' : Link
  const wrapperProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href }

  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <Wrapper
        {...wrapperProps}
        className="group flex flex-col rounded-2xl border-2 bg-white h-full overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl"
        style={{ borderColor: `${color}35` }}
      >
        <div className="flex flex-col gap-4 p-6 flex-1" style={{ background: `${color}08` }}>
          <p className="text-[1.05rem] font-bold leading-snug" style={{ color }}>{desc}</p>
          <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold" style={{ color }}>
            {linkLabel ?? 'Read guide'}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <div
            className="mt-auto pt-2 overflow-hidden rounded-lg border flex items-center justify-center h-16"
            style={{ borderColor: `${color}25`, background: `${color}0d` }}
          >
            <Preview className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" color={color} />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default function ResourcesTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="px-5 sm:px-8">
          <SectionHeader
            tag="Free Resources"
            title="A few resources to get you started"
          />
        </div>
        <div className="flex flex-col gap-5 px-5 sm:px-8 md:grid md:grid-cols-3 md:gap-6">
          {resources.map((r, i) => (
            <ResourceCard key={r.title} r={r} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
