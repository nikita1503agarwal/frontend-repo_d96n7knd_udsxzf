import React from 'react'
import { motion } from 'framer-motion'

const BreathingWoman = () => {
  return (
    <motion.svg
      width="280"
      height="420"
      viewBox="0 0 280 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow */}
      <radialGradient id="glow" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </radialGradient>
      <circle cx="140" cy="210" r="160" fill="url(#glow)" />

      {/* Hair */}
      <path
        d="M145 70c30 0 55 22 58 52 2 16-3 35-10 45-10 14-27 16-38 6-7-6-13-15-16-26-5-17-11-33-23-45-10-10-24-16-40-17 9-10 34-15 69-15z"
        fill="#0f172a"
        opacity="0.9"
      />

      {/* Head */}
      <circle cx="120" cy="90" r="36" fill="#fde68a" />

      {/* Simple facial hint */}
      <path d="M110 90 q10 8 20 0" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

      {/* Neck */}
      <rect x="112" y="120" width="16" height="16" rx="6" fill="#fde68a" />

      {/* Torso with belly */}
      <path
        d="M85 145 C70 210, 70 300, 115 330 C160 360, 235 330, 220 260 C210 215, 200 185, 195 160 C188 130, 165 120, 140 125 C120 128, 100 135, 85 145z"
        fill="#f59e0b"
      />
      {/* Belly highlight */}
      <motion.circle
        cx="175"
        cy="280"
        r="54"
        fill="url(#belly)"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <radialGradient id="belly" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#fde68a" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>

      {/* Arm */}
      <path
        d="M105 210 C95 240, 95 260, 120 270 C140 278, 150 270, 160 260"
        stroke="#f59e0b"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Legs hint */}
      <path d="M130 330 C130 370, 120 390, 110 410" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />
      <path d="M170 330 C170 370, 180 390, 190 410" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />

      {/* Dress shadow */}
      <ellipse cx="150" cy="360" rx="85" ry="18" fill="#0f172a" opacity="0.12" />
    </motion.svg>
  )
}

const Snake = ({ radius = 220, color = '#10b981', duration = 14, reverse = false, size = 140 }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: -size * 0.1 }}
      >
        <defs>
          <linearGradient id={`snakeGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
        {/* Body */}
        <motion.path
          d="M10 70 C 30 40, 60 100, 90 70"
          fill="none"
          stroke={`url(#snakeGrad-${color})`}
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0.6, pathOffset: 1 }}
          animate={{ pathOffset: [1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Head */}
        <motion.circle
          cx="95"
          cy="70"
          r="7"
          fill={color}
          animate={{ y: [0, -2, 0, 2, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Tongue */}
        <motion.path
          d="M101 70 l10 -2 l-4 2 l4 2 z"
          fill="#ef4444"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        {/* Pattern spots */}
        {[...Array(4)].map((_, i) => (
          <circle key={i} cx={20 + i * 18} cy={70 + (i % 2 === 0 ? -6 : 6)} r="3.2" fill="#064e3b" opacity="0.9" />
        ))}
      </motion.svg>
    </motion.div>
  )
}

export default function PregnantWomanScene() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-sky-100 to-emerald-100" />
      <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.25) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.25) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(236,72,153,0.25) 0, transparent 40%)' }} />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 1.5 }}
        />
      ))}

      {/* Snakes orbiting */}
      <Snake radius={230} color="#34d399" duration={22} size={160} />
      <Snake radius={180} color="#22c55e" duration={16} reverse size={120} />
      <Snake radius={280} color="#10b981" duration={28} size={180} />

      {/* Center figure */}
      <div className="absolute inset-0 flex items-center justify-center">
        <BreathingWoman />
      </div>

      {/* Caption */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <motion.div
          className="px-4 py-2 rounded-full bg-white/70 backdrop-blur text-slate-700 text-sm font-medium shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Serene maternity with gentle adders in motion
        </motion.div>
      </div>
    </div>
  )
}
