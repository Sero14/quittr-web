"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";

export default function RewiringBenefitsStep({ onNext }: StepProps) {
  return (
    <StepShell gradient="blue" onContinue={onNext} continueLabel="Continue">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-black text-white">Porn Recovery</h2>
        <p className="mt-2 text-sm text-white/50">
          QUITTR vs conventional methods
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <svg viewBox="0 0 300 180" className="w-full">
            <defs>
              <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            <line
              x1="30"
              y1="160"
              x2="280"
              y2="160"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />

            <text x="60" y="175" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">
              Week 1
            </text>
            <text x="150" y="175" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">
              Week 2
            </text>
            <text x="240" y="175" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">
              Week 3
            </text>

            <motion.path
              d="M 30 140 Q 80 130, 100 100 Q 120 70, 160 60 Q 200 50, 240 30 Q 260 20, 280 15"
              fill="none"
              stroke="url(#greenGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />

            <motion.path
              d="M 30 140 Q 60 120, 80 130 Q 100 140, 120 125 Q 140 110, 160 130 Q 180 150, 200 140 Q 220 130, 240 145 Q 260 155, 280 150"
              fill="none"
              stroke="url(#redGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />

            <circle cx="280" cy="15" r="5" fill="#22c55e" />

            <text x="245" y="12" fill="#22c55e" fontSize="9" fontWeight="bold">
              Sobriety
            </text>
            <text x="200" y="155" fill="#ef4444" fontSize="8" fontWeight="bold">
              Conventional
            </text>

            {[95, 145, 200, 230, 255].map((x, i) => (
              <text key={i} x={x} y="158" fill="#ef4444" fontSize="12">
                ✕
              </text>
            ))}
          </svg>

          <div className="mt-4 flex justify-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 rounded bg-green-500" />
              <span className="text-white/50">QUITTR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-6 rounded bg-red-500 opacity-50" />
              <span className="text-white/50">Conventional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </StepShell>
  );
}
