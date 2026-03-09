"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const TRIGGERS = [
  {
    label: "Indecent content on social media",
    tags: ["Social Media", "Visual", "Scrolling"],
    emoji: "📱",
    image: "/images/triggers/social-media.png",
    gradient: "from-rose-900/80 to-rose-950/90",
  },
  {
    label: "Own imagination / fantasies",
    tags: ["Mental", "Internal", "Habitual"],
    emoji: "💭",
    image: "/images/triggers/own-imagination.png",
    gradient: "from-purple-900/80 to-purple-950/90",
  },
  {
    label: "Lack of romantic interaction",
    tags: ["Longing", "Emotional", "Unmet Needs"],
    emoji: "💔",
    gradient: "from-pink-900/80 to-pink-950/90",
  },
  {
    label: "Boredom / nothing to do",
    tags: ["Idle Time", "Restless", "Habitual"],
    emoji: "😶",
    gradient: "from-amber-900/80 to-amber-950/90",
  },
  {
    label: "Stress or anxiety",
    tags: ["Coping", "Emotional", "Escape"],
    emoji: "😰",
    gradient: "from-red-900/80 to-red-950/90",
  },
  {
    label: "Late-night phone use",
    tags: ["Nighttime", "Alone", "Habitual"],
    emoji: "🌙",
    gradient: "from-indigo-900/80 to-indigo-950/90",
  },
  {
    label: "Loneliness",
    tags: ["Isolation", "Emotional", "Comfort"],
    emoji: "🚪",
    gradient: "from-slate-800/80 to-slate-900/90",
  },
  {
    label: "After drinking alcohol",
    tags: ["Substance", "Lowered Guard", "Impulsive"],
    emoji: "🍺",
    gradient: "from-yellow-900/80 to-yellow-950/90",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cardVariants = {
  enter: {
    x: -300,
    opacity: 0,
    scale: 0.9,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    x: 300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: EASE },
  },
};

export default function TriggersStep({ onNext }: StepProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  const advance = useCallback(() => {
    if (currentIndex >= TRIGGERS.length - 1) {
      setTimeout(() => onNext(), 300);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, onNext]);

  const handleReject = useCallback(() => {
    advance();
  }, [advance]);

  const handleAccept = useCallback(() => {
    toggleArrayItem("triggers", TRIGGERS[currentIndex].label);
    advance();
  }, [advance, currentIndex, toggleArrayItem]);

  const trigger = TRIGGERS[currentIndex];

  return (
    <div className="relative flex min-h-dvh flex-col items-center overflow-hidden bg-gradient-to-b from-[#0a0a2e] via-[#1a1a5c] to-[#0a0a2e]">
      <StarField />

      <div className="relative z-10 flex w-full max-w-md flex-1 flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center text-2xl font-bold text-white md:text-3xl"
        >
          Are you triggered by this?
        </motion.h2>

        <div className="relative h-[340px] w-full max-w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <div
                className={`relative flex flex-1 items-center justify-center bg-gradient-to-br ${trigger.gradient}`}
              >
                {"image" in trigger && trigger.image ? (
                  <Image
                    src={trigger.image}
                    alt={trigger.label}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                ) : (
                  <span className="text-8xl">{trigger.emoji}</span>
                )}
              </div>

              <div className="bg-[#161b22] px-5 py-4">
                <h3 className="text-lg font-bold text-white">
                  {trigger.label}
                </h3>
                <p className="mt-1 text-sm text-white/50">
                  {trigger.tags.join(" • ")}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-2 text-sm text-white/30">
          {currentIndex + 1} / {TRIGGERS.length}
        </div>

        <div className="mt-6 flex w-full max-w-[320px] gap-4">
          <motion.button
            type="button"
            whileTap={{ scale: 0.93 }}
            onClick={handleReject}
            className="flex h-14 flex-1 cursor-pointer items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 transition-colors hover:bg-red-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-400"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.93 }}
            onClick={handleAccept}
            className="flex h-14 flex-1 cursor-pointer items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 transition-colors hover:bg-green-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
