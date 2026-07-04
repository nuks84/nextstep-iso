import { motion } from 'framer-motion'

export function ProgressBar({ step, total }) {
  return (
    <div className="mb-10">
      <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
        Step {step} of {total}
      </p>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#0d98cd] rounded-full"
          initial={false}
          animate={{ width: `${(step / total) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}
