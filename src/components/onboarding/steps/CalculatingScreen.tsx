"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const STATUS_MESSAGES = [
  "Learning relapse triggers",
  "Analyzing your patterns",
  "Calculating your score",
  "Building your plan",
];

const DURATION = 4000;
const CIRCLE_R = 54;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

export default function CalculatingScreen({ onNext }: StepProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const computeScore = useQuizStore((s) => s.computeScore);

  useEffect(() => {
    computeScore();

    const interval = 50;
    const steps = DURATION / interval;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      setProgress(Math.min(current / steps, 1));
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(onNext, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [computeScore, onNext]);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, DURATION / STATUS_MESSAGES.length);
    return () => clearInterval(msgInterval);
  }, []);

  const percentage = Math.round(progress * 100);
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - progress);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a2e] via-[#1a1a5c] to-[#0a0a2e] px-6">
      <StarField />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <div className="relative flex h-36 w-36 items-center justify-center">
          <svg
            width="144"
            height="144"
            viewBox="0 0 120 120"
            className="-rotate-90"
          >
            <circle
              cx="60"
              cy="60"
              r={CIRCLE_R}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r={CIRCLE_R}
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={CIRCLE_CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              className="transition-[stroke-dashoffset] duration-100 ease-linear"
            />
          </svg>
          <span className="absolute text-3xl font-bold text-white">
            {percentage}%
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-white">Calculating</h2>
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-white/70"
          >
            {STATUS_MESSAGES[messageIndex]}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
