import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const services = [
  { label: 'ISO 9001 — Quality', href: '/iso-9001' },
  { label: 'ISO 27001 — Security', href: '/iso-27001' },
  { label: 'ISO 22000 — Food Safety', href: '/iso-22000' },
  { label: 'Internal Audits', href: '/internal-audits' },
  { label: 'All Services', href: '/services' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-4" aria-label="NextStep ISO — Home">
              <img
                src="/NextSteo ISO Logo removebg v2.png"
                alt="NextStep ISO"
                className="h-[60px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[0.875rem] text-gray-400 leading-relaxed mb-5">
              Australia's trusted ISO consultancy. Expert-led certification — fast, affordable, and guaranteed.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/nextstep-iso/', label: 'LinkedIn' },
                { Icon: InstagramIcon, href: 'https://www.instagram.com/nextstepiso', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0d98cd]/20 hover:border-[#0d98cd]/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-[0.875rem] text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link
                    to={c.href}
                    className="text-[0.875rem] text-gray-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { Icon: Phone, text: '0494 718 985', href: 'tel:+61494718985' },
                { Icon: Mail, text: 'hello@nextstepiso.com.au', href: 'mailto:hello@nextstepiso.com.au' },
                { Icon: MapPin, text: 'Melbourne, VIC — Australia-wide', href: null },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-[#0d98cd] mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="text-[0.875rem] text-gray-400 hover:text-white transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span className="text-[0.875rem] text-gray-400">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.8rem] text-gray-600">
            © {new Date().getFullYear()} NextStep ISO Pty Ltd. ABN 40 691 274 601. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" className="text-[0.8rem] text-gray-600 hover:text-gray-400 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
