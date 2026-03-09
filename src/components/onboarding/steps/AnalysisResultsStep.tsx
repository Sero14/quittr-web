"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";
import { getScoreComparison } from "@/lib/scoring";

export default function AnalysisResultsStep({ onNext }: StepProps) {
  const score = useQuizStore((s) => s.score) ?? 64;
  const average = 40;
  const comparison = getScoreComparison(score);

  return (
    <StepShell
      gradient="indigo"
      onContinue={onNext}
      continueLabel="Check your symptoms"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-2 text-3xl font-black text-white">
            Analysis Complete
          </div>
          <p className="mt-1 text-white/60">
            We&apos;ve got some news to break to you...
          </p>
          <p className="mt-4 text-[15px] font-medium leading-relaxed text-white/80">
            Your responses indicate a clear dependence
            <br />
            on internet porn*
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-end justify-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(score / 100) * 180}px` }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-20 rounded-t-lg bg-red-500"
              />
              <span className="absolute inset-x-0 top-2 text-center text-lg font-bold text-white">
                {score}%
              </span>
            </div>
            <span className="text-sm text-white/50">Your Score</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(average / 100) * 180}px` }}
                transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-20 rounded-t-lg bg-green-500"
              />
              <span className="absolute inset-x-0 top-2 text-center text-lg font-bold text-white">
                {average}%
              </span>
            </div>
            <span className="text-sm text-white/50">Average</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-lg font-semibold text-red-400"
        >
          {comparison}
        </motion.p>

        <p className="mt-4 text-xs text-white/40">
          * This result is an indication only, not a medical diagnosis.
        </p>
      </div>
    </StepShell>
  );
}
