"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

function getTodayFormatted(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ScreenshotPromptStep({ onNext }: StepProps) {
  const name = useQuizStore((s) => s.name);
  const today = getTodayFormatted();

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#0f0520] via-[#2d1b69] to-[#1a0a3a]">
      <StarField />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex max-w-sm flex-col items-center gap-6"
        >
          <div className="text-6xl">📸</div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Screenshot and start your journey.
          </h1>

          <p className="text-base leading-relaxed text-white/60">
            Come back to this in the future to see how far you&apos;ve come.
          </p>

          {/* Screenshot card */}
          <div className="w-full rounded-2xl border border-white/15 bg-white/8 px-6 py-5 backdrop-blur-sm">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Day 1
            </div>
            <p className="text-xl font-black leading-snug text-white">
              {name ? `${name} quit porn` : "I quit porn"}
            </p>
            <p className="mt-1 text-sm font-medium text-accent-light">
              {today}
            </p>
            <div className="mt-4 h-px w-full bg-white/10" />
            <p className="mt-3 text-xs text-white/30">
              Powered by QUITTR
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="relative z-10 pb-12"
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
