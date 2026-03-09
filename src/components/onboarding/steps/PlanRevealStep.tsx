"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";
import { getQuitDate } from "@/lib/scoring";

const BENEFITS = [
  "Increased Testosterone",
  "Prevent Erectile Dysfunction",
  "Increased Energy",
  "Increased Motivation",
  "Improved Focus",
  "Improved Relationships",
  "Increased Confidence",
];

export default function PlanRevealStep({ onNext }: StepProps) {
  const name = useQuizStore((s) => s.name);
  const quitDate = getQuitDate();

  return (
    <StepShell gradient="purple" onContinue={onNext} continueLabel="Continue">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-4 text-5xl">✅</div>

          <h2 className="text-3xl font-black text-white md:text-4xl">
            {name ? `${name}, we've` : "We've"} made you a custom plan.
          </h2>

          <p className="mt-3 text-white/60">You will quit porn by:</p>

          <div className="mt-4 rounded-full border-2 border-white/40 px-8 py-3 text-lg font-bold text-white">
            {quitDate}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <div className="mb-1 text-2xl text-yellow-400">★★★★★</div>
          <p className="mt-2 text-lg font-bold text-white">
            Become the best of yourself with QUITTR
          </p>
          <p className="mt-1 text-sm text-white/50">
            Stronger. Healthier. Happier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {BENEFITS.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </StepShell>
  );
}
