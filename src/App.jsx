import { motion } from 'framer-motion'
import PregnantWomanScene from './components/PregnantWomanScene'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-emerald-50">
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-400 to-sky-400" />
          <h1 className="text-xl font-semibold text-slate-800">Animated Maternity</h1>
        </div>
        <a
          href="/test"
          className="text-sm px-3 py-1.5 rounded-full bg-white shadow hover:shadow-md transition"
        >
          Check Backend
        </a>
      </header>

      <main>
        <PregnantWomanScene />
      </main>

      <footer className="px-6 py-6 text-center text-slate-500 text-sm">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A calm, stylized scene with gentle adders circling in harmony
        </motion.span>
      </footer>
    </div>
  )
}
