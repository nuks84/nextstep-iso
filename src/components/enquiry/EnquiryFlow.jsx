import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart3, Leaf, Lock, ChefHat, FlaskConical, FileSearch, Search, HelpCircle,
  Rocket, Settings, BadgeCheck, TrendingUp,
  Zap, Calendar, CalendarClock, BookOpen,
  ArrowRight, ArrowLeft, User, Mail, Phone, CheckCircle2,
} from 'lucide-react'
import { SelectionCard } from './SelectionCard'
import { ProgressBar } from './ProgressBar'
import { submitEnquiry } from '../../lib/submitEnquiry'

const TOTAL_STEPS = 4

const GOALS = [
  { id: 'iso9001', label: 'ISO 9001', icon: BarChart3 },
  { id: 'iso14001', label: 'ISO 14001', icon: Leaf },
  { id: 'iso27001', label: 'ISO 27001', icon: Lock },
  { id: 'haccp', label: 'HACCP', icon: ChefHat },
  { id: 'gmp', label: 'GMP', icon: FlaskConical },
  { id: 'audit', label: 'Internal Audit', icon: FileSearch },
  { id: 'gap', label: 'Gap Analysis', icon: Search },
  { id: 'unsure', label: 'Not Sure Yet', icon: HelpCircle },
]

const STAGES = [
  { id: 'need', label: 'Need certification', icon: Rocket },
  { id: 'implementing', label: 'Already implementing', icon: Settings },
  { id: 'certified', label: 'Already certified', icon: BadgeCheck },
  { id: 'improve', label: 'Looking to improve existing systems', icon: TrendingUp },
]

const TIMELINES = [
  { id: 'asap', label: 'ASAP', icon: Zap },
  { id: '3m', label: 'Within 3 months', icon: Calendar },
  { id: '6m', label: 'Within 6 months', icon: CalendarClock },
  { id: 'researching', label: 'Just researching', icon: BookOpen },
]

const inputCls = 'w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[0.9rem] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0d98cd] focus:bg-white focus:ring-2 focus:ring-[#0d98cd]/10 transition-all'

const stepVariants = {
  enter: direction => ({ opacity: 0, x: direction > 0 ? 32 : -32 }),
  center: { opacity: 1, x: 0 },
  exit: direction => ({ opacity: 0, x: direction > 0 ? -32 : 32 }),
}

function toggleId(list, id) {
  return list.includes(id) ? list.filter(v => v !== id) : [...list, id]
}

function StepHeadline({ children }) {
  return (
    <h2 className="text-[1.6rem] sm:text-[1.9rem] font-extrabold tracking-tight text-gray-900 mb-8 text-center">
      {children}
    </h2>
  )
}

function NavRow({ onBack, onNext, nextLabel = 'Continue', nextDisabled, showBack = true }) {
  return (
    <div className="flex items-center justify-between mt-10">
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-gray-500 hover:text-gray-800 transition-colors px-2 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d98cd] text-white font-semibold rounded-xl text-[0.95rem] hover:bg-[#0a7aaa] transition-all hover:-translate-y-px disabled:opacity-40 disabled:pointer-events-none shadow-lg shadow-[#0d98cd]/20"
      >
        {nextLabel}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}

function BackRow({ onBack }) {
  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-gray-500 hover:text-gray-800 transition-colors px-2 py-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
    </div>
  )
}

const AUTO_ADVANCE_DELAY = 350

export function EnquiryFlow() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [goals, setGoals] = useState([])
  const [stage, setStage] = useState(null)
  const [timeline, setTimeline] = useState(null)
  const [contact, setContact] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const goTo = (next, dir) => {
    setDirection(dir)
    setStep(next)
  }

  const selectStage = id => {
    setStage(id)
    setTimeout(() => goTo(3, 1), AUTO_ADVANCE_DELAY)
  }

  const selectTimeline = id => {
    setTimeline(id)
    setTimeout(() => goTo(4, 1), AUTO_ADVANCE_DELAY)
  }

  const handleContactChange = e => {
    const { name, value } = e.target
    setContact(c => ({ ...c, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const validateContact = () => {
    const next = {}
    if (!contact.name.trim()) next.name = 'Please enter your name'
    if (!contact.email.trim()) {
      next.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      next.email = 'Please enter a valid email'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async () => {
    if (!validateContact()) return
    setSubmitting(true)
    await submitEnquiry({ goals, stage, timeline, contact })
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-7 sm:p-12 shadow-sm">
      {!submitted && <ProgressBar step={step} total={TOTAL_STEPS} />}

      <AnimatePresence mode="wait" custom={direction}>
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5"
            >
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </motion.div>
            <h2 className="text-[1.5rem] font-extrabold text-gray-900 mb-2">Roadmap request received!</h2>
            <p className="text-[0.95rem] text-gray-500 max-w-md mx-auto">
              We'll review your answers and get back to you at <strong>{contact.email}</strong> within one business day with a tailored plan.
            </p>
          </motion.div>
        ) : step === 1 ? (
          <motion.div
            key={1}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepHeadline>What can we help you achieve?</StepHeadline>
            <div role="group" aria-label="What can we help you achieve?" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {GOALS.map(g => (
                <SelectionCard
                  key={g.id}
                  icon={g.icon}
                  label={g.label}
                  multi
                  selected={goals.includes(g.id)}
                  onClick={() => setGoals(gs => toggleId(gs, g.id))}
                />
              ))}
            </div>
            <NavRow
              showBack={false}
              onNext={() => goTo(2, 1)}
              nextDisabled={goals.length === 0}
            />
          </motion.div>
        ) : step === 2 ? (
          <motion.div
            key={2}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepHeadline>Where are you in your certification journey?</StepHeadline>
            <div role="radiogroup" aria-label="Where are you in your certification journey?" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STAGES.map(s => (
                <SelectionCard
                  key={s.id}
                  icon={s.icon}
                  label={s.label}
                  selected={stage === s.id}
                  onClick={() => selectStage(s.id)}
                />
              ))}
            </div>
            <BackRow onBack={() => goTo(1, -1)} />
          </motion.div>
        ) : step === 3 ? (
          <motion.div
            key={3}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepHeadline>When would you like to achieve certification?</StepHeadline>
            <div role="radiogroup" aria-label="When would you like to achieve certification?" className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TIMELINES.map(t => (
                <SelectionCard
                  key={t.id}
                  icon={t.icon}
                  label={t.label}
                  selected={timeline === t.id}
                  onClick={() => selectTimeline(t.id)}
                />
              ))}
            </div>
            <BackRow onBack={() => goTo(2, -1)} />
          </motion.div>
        ) : (
          <motion.div
            key={4}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StepHeadline>Great! Let's build your roadmap.</StepHeadline>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <div>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    name="name" type="text" placeholder="Full name" autoComplete="name"
                    value={contact.name} onChange={handleContactChange}
                    className={inputCls} aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    name="email" type="email" placeholder="Work email" autoComplete="email"
                    value={contact.email} onChange={handleContactChange}
                    className={inputCls} aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && <p className="text-[0.78rem] text-red-500 mt-1.5">{errors.email}</p>}
              </div>

              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel"
                  value={contact.phone} onChange={handleContactChange}
                  className={inputCls}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full mt-2 py-4 bg-[#0d98cd] text-white font-semibold rounded-xl text-[1rem] hover:bg-[#0a7aaa] transition-all hover:-translate-y-px disabled:opacity-60 disabled:pointer-events-none shadow-lg shadow-[#0d98cd]/20"
              >
                {submitting ? 'Building your roadmap…' : 'Build My Roadmap'}
              </button>
              <p className="text-center text-[0.78rem] text-gray-400">
                No spam. We'll respond within one business day.
              </p>
            </div>

            <div className="flex justify-start mt-4">
              <button
                type="button"
                onClick={() => goTo(3, -1)}
                className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-gray-500 hover:text-gray-800 transition-colors px-2 py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
