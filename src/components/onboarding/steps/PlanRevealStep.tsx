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
    <StepShell onContinue={onNext} continueLabel="Continue">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="mb-4 text-4xl"
        >
          ✅
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-black"
        >
          {name ? `${name}, we've` : "We've"} made you a custom plan.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-muted"
        >
          You will quit porn by:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 rounded-full border-2 border-white px-8 py-3 font-bold text-lg"
        >
          {quitDate}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <div className="text-2xl mb-1">{"★★★★★"}</div>
          <p className="text-lg font-bold mt-2">
            Become the best of yourself with QUITTR
          </p>
          <p className="text-sm text-muted mt-1">
            Stronger. Healthier. Happier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {BENEFITS.map((b) => (
            <span
              key={b}
              className="rounded-full bg-accent/20 border border-accent/40 px-3 py-1.5 text-xs font-medium text-accent-light"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </StepShell>
  );
}
