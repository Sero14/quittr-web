"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

type InterstitialStepProps = StepProps & {
  quote: string;
  author?: string;
  stat?: string;
  bgClass?: string;
};

export default function InterstitialStep({
  quote,
  author,
  stat,
  bgClass = "bg-gradient-to-b from-accent-dark to-accent",
  onNext,
}: InterstitialStepProps) {
  return (
    <div
      className={`flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center px-8 text-center ${bgClass}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex max-w-sm flex-col items-center gap-6"
      >
        {stat && (
          <p className="text-4xl font-black leading-tight text-white">
            {stat}
          </p>
        )}
        <blockquote className="text-xl font-bold leading-snug text-white md:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {author && (
          <p className="text-sm font-medium text-white/70">— {author}</p>
        )}
      </motion.div>
      <div className="mt-12">
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
