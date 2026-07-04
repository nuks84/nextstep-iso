import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function SelectionCard({ icon: Icon, label, selected, onClick, multi = false }) {
  return (
    <motion.button
      type="button"
      role={multi ? 'checkbox' : 'radio'}
      aria-checked={selected}
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 p-6 text-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d98cd] focus-visible:ring-offset-2 ${
        selected
          ? 'border-[#0d98cd] bg-brand-50'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      {Icon && (
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 ${
            selected ? 'bg-[#0d98cd] text-white' : 'bg-brand-100 text-[#0d98cd]'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <span className={`text-[0.9rem] font-bold leading-snug ${selected ? 'text-[#0d98cd]' : 'text-gray-800'}`}>
        {label}
      </span>

      {selected && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#0d98cd] flex items-center justify-center"
        >
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </motion.span>
      )}
    </motion.button>
  )
}
