import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { useReveal } from '../hooks/useReveal'

const standards = [
  'ISO 9001 — Quality Management',
  'ISO 27001 — Information Security',
  'ISO 45001 — WHS Management',
  'ISO 14001 — Environmental',
  'Integrated Management System (IMS)',
  'Internal Audits / Ongoing Maintenance',
  'Gap Analysis — Not Sure Yet',
]

function ContactInfo() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal">
      <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
        Get in Touch
      </div>
      <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-3">
        Let's talk about your certification
      </h2>
      <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-8">
        Fill in the form and we'll get back to you within 4 business hours with honest advice on the right path for your business.
      </p>

      <div className="flex flex-col gap-5 mb-8">
        {[
          { Icon: Phone, label: 'Phone',    val: '0494 718 985',              href: 'tel:+61494718985' },
          { Icon: Mail,  label: 'Email',    val: 'hello@nextstepiso.com.au',  href: 'mailto:hello@nextstepiso.com.au' },
          { Icon: MapPin,label: 'Location', val: 'Melbourne, VIC — Australia-wide', href: null },
          { Icon: Clock, label: 'Hours',    val: 'Mon–Fri, 8:30am–5:30pm AEST', href: null },
        ].map(({ Icon, label, val, href }) => (
          <div key={label} className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
              <Icon className="w-4.5 h-4.5 text-[#0d98cd]" />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="text-[0.9rem] font-medium text-gray-800 hover:text-[#0d98cd] transition-colors">
                  {val}
                </a>
              ) : (
                <span className="text-[0.9rem] font-medium text-gray-800">{val}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5">
        <p className="text-[0.82rem] font-semibold text-gray-700 mb-3">What to expect on a discovery call:</p>
        {[
          '30 minutes — no obligation, no hard sell',
          'Honest advice on which standard is right for you',
          'A realistic timeline and investment estimate',
          'Clear next steps if you\'d like to proceed',
        ].map(item => (
          <div key={item} className="flex items-center gap-2 py-1.5 text-[0.82rem] text-gray-600">
            <CheckCircle className="w-3.5 h-3.5 text-[#0d98cd] shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const ref = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', standard: '', message: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = 'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.9rem] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0d98cd] focus:bg-white focus:ring-2 focus:ring-[#0d98cd]/10 transition-all'

  return (
    <div ref={ref} className="reveal reveal-delay-2">
      <div className="bg-white border border-gray-200 rounded-3xl p-7 sm:p-10 shadow-sm">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-[1.2rem] font-bold text-gray-900 mb-2">Enquiry sent!</h3>
            <p className="text-[0.9rem] text-gray-500">
              We'll be in touch within 4 business hours. Check your inbox at <strong>{form.email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="firstName">
                  First name <span className="text-[#0d98cd]">*</span>
                </label>
                <input
                  id="firstName" name="firstName" type="text" required
                  value={form.firstName} onChange={handleChange}
                  placeholder="Sarah" className={inputCls}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="lastName">
                  Last name <span className="text-[#0d98cd]">*</span>
                </label>
                <input
                  id="lastName" name="lastName" type="text" required
                  value={form.lastName} onChange={handleChange}
                  placeholder="Mitchell" className={inputCls}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="email">
                  Work email <span className="text-[#0d98cd]">*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="sarah@company.com.au" className={inputCls}
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="0400 000 000" className={inputCls}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="company">
                Company name <span className="text-[#0d98cd]">*</span>
              </label>
              <input
                id="company" name="company" type="text" required
                value={form.company} onChange={handleChange}
                placeholder="Your Company Pty Ltd" className={inputCls}
                autoComplete="organization"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="standard">
                Standard of interest <span className="text-[#0d98cd]">*</span>
              </label>
              <select
                id="standard" name="standard" required
                value={form.standard} onChange={handleChange}
                className={`${inputCls} appearance-none`}
              >
                <option value="" disabled>Select a standard…</option>
                {standards.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[0.8rem] font-semibold text-gray-700 mb-1.5" htmlFor="message">
                Tell us about your situation
              </label>
              <textarea
                id="message" name="message"
                value={form.message} onChange={handleChange}
                placeholder="Your business type, current size, any upcoming tenders or deadlines, and what's prompted you to seek certification…"
                rows={4}
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#0d98cd] text-white font-semibold rounded-xl text-[0.95rem] hover:bg-[#0a7aaa] transition-colors hover:-translate-y-px active:translate-y-0 shadow-sm"
            >
              Send Enquiry
            </button>

            <p className="mt-3 text-center text-[0.75rem] text-gray-400">
              We'll respond within 4 business hours. Your information is never shared.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        tag="Contact Us"
        title="Start your ISO journey today"
        subtitle="Book a free discovery call or send us an enquiry. No obligation, no jargon — just expert advice on the right certification path for your business."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
