"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";

type InterstitialStepProps = StepProps & {
  headline?: string;
  quote?: string;
  author?: string;
  stat?: string;
  gradient?: string;
  emoji?: string;
};

const GRADIENT_PRESETS: Record<string, string> = {
  purple: "from-[#0f0520] via-[#2d1b69] to-[#1a0a3a]",
  blue: "from-[#060d1f] via-[#0f2847] to-[#0a1628]",
  teal: "from-[#041a14] via-[#0d3b2e] to-[#071f18]",
  rose: "from-[#1a0a14] via-[#4a1530] to-[#1a0a14]",
  indigo: "from-[#0a0a2e] via-[#1a1a5c] to-[#0a0a2e]",
  emerald: "from-[#041f12] via-[#0d4a2e] to-[#041f12]",
  crimson: "from-[#1a0a0a] via-[#4a1020] to-[#1a0a0a]",
};

export default function InterstitialStep({
  headline,
  quote,
  author,
  stat,
  gradient = "purple",
  emoji,
  onNext,
}: InterstitialStepProps) {
  const gradientClass = GRADIENT_PRESETS[gradient] ?? gradient;

  return (
    <div
      className={`relative flex min-h-dvh flex-col items-center justify-between overflow-hidden bg-gradient-to-b ${gradientClass}`}
    >
      <StarField />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex max-w-lg flex-col items-center gap-6"
        >
          {emoji && <div className="text-6xl">{emoji}</div>}

          {stat && (
            <p className="text-4xl font-black leading-tight text-white md:text-5xl">
              {stat}
            </p>
          )}

          {headline && (
            <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
              {headline}
            </h2>
          )}

          {quote && (
            <blockquote className="text-lg font-semibold leading-relaxed text-white/80 md:text-xl">
              &ldquo;{quote}&rdquo;
            </blockquote>
          )}

          {author && (
            <p className="text-sm font-medium text-white/50">— {author}</p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="relative z-10 pb-12"
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
