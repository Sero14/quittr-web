"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function WelcomeStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-background via-[#0d1020] to-background overflow-hidden">
      <StarField />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <motion.h1
          className="text-5xl font-black tracking-tight md:text-6xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
          initial={{ letterSpacing: "0.1em" }}
          animate={{ letterSpacing: "0.02em" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          QUITTR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2"
        >
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">
            Welcome!
          </h2>
          <p className="mt-3 text-lg text-muted leading-relaxed max-w-xs">
            Let&apos;s start by finding out if you have a problem with porn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="mt-2 flex items-center gap-1 text-yellow-400 text-xl"
        >
          {"★★★★★"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 flex flex-col items-center gap-4"
        >
          <Button onClick={onNext} className="px-10 text-lg">
            Start Quiz →
          </Button>
          <button
            type="button"
            className="text-sm text-muted hover:text-white transition-colors cursor-pointer"
          >
            Already have an account?
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
