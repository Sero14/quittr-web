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
    <StepShell onContinue={onNext} continueLabel="Check your symptoms">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-2 text-3xl font-black">Analysis Complete ✅</div>
          <p className="text-muted mt-1">
            We&apos;ve got some news to break to you...
          </p>
          <p className="mt-4 text-[15px] font-medium leading-relaxed">
            Your responses indicate a clear dependence
            <br />
            on internet porn*
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-end justify-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(score / 100) * 180}px` }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-20 rounded-t-lg bg-red-500"
              />
              <span className="absolute inset-x-0 top-2 text-center text-lg font-bold text-white">
                {score}%
              </span>
            </div>
            <span className="text-sm text-muted">Your Score</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(average / 100) * 180}px` }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-20 rounded-t-lg bg-green-500"
              />
              <span className="absolute inset-x-0 top-2 text-center text-lg font-bold text-white">
                {average}%
              </span>
            </div>
            <span className="text-sm text-muted">Average</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-lg font-semibold text-red-400"
        >
          {comparison} 📉
        </motion.p>

        <p className="mt-4 text-xs text-muted">
          * This result is an indication only, not a medical diagnosis.
        </p>
      </div>
    </StepShell>
  );
}
