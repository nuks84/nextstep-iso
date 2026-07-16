import { Link } from 'react-router-dom'
import { Shield, Lock, HardHat, Leaf, BarChart3, ChefHat, FileSearch, Sparkles } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const services = [
  { icon: BarChart3,  title: 'ISO 9001',       sub: 'Quality Management',   href: '/iso-9001',        color: '#0d98cd' },
  { icon: Lock,       title: 'ISO 27001',      sub: 'Information Security', href: '/iso-27001',       color: '#7c3aed' },
  { icon: ChefHat,    title: 'ISO 22000',      sub: 'Food Safety',          href: '/iso-22000',       color: '#e11d48' },
  { icon: HardHat,    title: 'ISO 45001',      sub: 'OH&S Management',      href: '/iso-45001',       color: '#ea580c' },
  { icon: Leaf,       title: 'ISO 14001',      sub: 'Environmental',        href: '/iso-14001',       color: '#16a34a' },
  { icon: FileSearch, title: 'Internal Audits',sub: 'Gap & Compliance',     href: '/internal-audits', color: '#0891b2' },
  { icon: Shield,     title: 'IMS',            sub: 'Integrated Systems',   href: '/ims',             color: '#a855f7' },
]

function ServiceCard({ service, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, sub, href, color } = service
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay}`}>
      <Link
        to={href}
        className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md"
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: `${color}22` }}>
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div>
          <p className="text-[0.85rem] font-bold text-gray-900 leading-tight">{title} →</p>
          <p className="text-[0.75rem] text-gray-400 mt-0.5">{sub}</p>
        </div>
      </Link>
    </div>
  )
}

function AITile() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal sm:hidden">
      <Link
        to="/ai"
        className="group flex flex-col gap-3 rounded-2xl border border-[#1a1a2e] bg-[#1a1a2e] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: '#f59e0b22' }}>
          <Sparkles className="w-4 h-4" style={{ color: '#f59e0b' }} />
        </div>
        <div>
          <p className="text-[0.85rem] font-bold text-white leading-tight">NextStep AI →</p>
          <p className="text-[0.75rem] text-white/45 mt-0.5">Coming soon</p>
        </div>
      </Link>
    </div>
  )
}

function AICard() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal reveal-delay-1 mt-3">
      <Link
        to="/ai"
        className="group flex items-center justify-between gap-6 rounded-2xl bg-[#1a1a2e] border border-[#1a1a2e] px-8 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#f59e0b22' }}>
            <Sparkles className="w-5 h-5" style={{ color: '#f59e0b' }} />
          </div>
          <div>
            <p className="text-[0.95rem] font-bold text-white leading-tight flex items-center gap-2">
              NextStep AI
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 11.5L11.5 1.5" stroke="#0d98cd" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M4.5 1.5H11.5V8.5" stroke="#0d98cd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </p>
            <p className="text-[0.8rem] text-white/45 mt-0.5">Your Compliance Expert.</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 text-[0.7rem] font-semibold text-white/50 uppercase tracking-widest shrink-0">
          Coming soon
        </span>
      </Link>
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          title="More than certification."
          subtitle="Build systems that improve the way your business operates, before, during and long after the audit."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={(i % 3) + 1} />
          ))}
          <AITile />
        </div>
        <div className="hidden sm:block">
          <AICard />
        </div>
      </div>
    </section>
  )
}
