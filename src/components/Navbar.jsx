import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'ISO 9001 — Quality Management', href: '/iso-9001' },
  { label: 'ISO 27001 — Information Security', href: '/iso-27001' },
  { label: 'Internal Audits', href: '/internal-audits' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isHome = pathname === '/'
  const isDark = isHome && !scrolled

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-transparent'

  const linkBase = isDark
    ? 'text-white/60 hover:text-white hover:bg-white/[0.07]'
    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'

  const logoFilter = isDark ? 'brightness-0 invert' : ''

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="NextStep ISO — Home">
            <img
              src="/NextSteo ISO Logo removebg v2.png"
              alt="NextStep ISO"
              className={`h-[50px] w-auto object-contain transition-all duration-300 ${logoFilter}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-[0.9rem] font-medium">

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${linkBase}`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-gray-200 shadow-xl py-1.5 overflow-hidden">
                  {serviceLinks.map(s => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="flex items-center px-4 py-2.5 text-[0.875rem] text-gray-700 hover:bg-brand-50 hover:text-brand transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  pathname === l.href
                    ? isDark ? 'text-[#0d98cd] bg-white/[0.07]' : 'text-[#0d98cd] bg-brand-50'
                    : linkBase
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+61494718985"
              className={`text-[0.87rem] font-semibold transition-colors ${
                isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              0494 718 985
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 text-[0.875rem] font-semibold bg-[#0d98cd] text-white rounded-xl hover:bg-[#0a7aaa] transition-colors shadow-sm"
            >
              Free Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? 'text-white/70 hover:bg-white/[0.07]' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 px-3 pt-1 pb-0.5">
              Services
            </p>
            {serviceLinks.map(s => (
              <Link
                key={s.href}
                to={s.href}
                className="px-3 py-2.5 text-[0.9rem] font-medium text-gray-700 hover:text-[#0d98cd] hover:bg-brand-50 rounded-lg transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-1" />
            {navLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                className="px-3 py-2.5 text-[0.9rem] font-medium text-gray-700 hover:text-[#0d98cd] hover:bg-brand-50 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-1" />
            <Link
              to="/contact"
              className="mt-1 px-4 py-3 text-[0.9rem] font-semibold bg-[#0d98cd] text-white rounded-xl text-center hover:bg-[#0a7aaa] transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
