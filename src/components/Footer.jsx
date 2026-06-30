import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const services = [
  { label: 'ISO 9001 — Quality', href: '/iso-9001' },
  { label: 'ISO 27001 — Security', href: '/iso-27001' },
  { label: 'Internal Audits', href: '/internal-audits' },
  { label: 'All Services', href: '/services' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 font-extrabold text-[1.05rem] mb-4">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-[#0d98cd] flex items-center justify-content-center justify-center text-white text-[0.78rem] font-extrabold shrink-0">
                NS
              </div>
              NextStep ISO
            </Link>
            <p className="text-[0.875rem] text-gray-400 leading-relaxed mb-5">
              Australia's trusted ISO consultancy. Expert-led certification — fast, affordable, and guaranteed.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                { Icon: XIcon, href: '#', label: 'X / Twitter' },
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
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
                { Icon: Phone, text: '1300 XXX XXX', href: 'tel:+611300000000' },
                { Icon: Mail, text: 'hello@nextstepiso.com.au', href: 'mailto:hello@nextstepiso.com.au' },
                { Icon: MapPin, text: 'Sydney, NSW — Australia-wide', href: null },
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
            © {new Date().getFullYear()} NextStep ISO Pty Ltd. ABN XX XXX XXX XXX. All rights reserved.
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
