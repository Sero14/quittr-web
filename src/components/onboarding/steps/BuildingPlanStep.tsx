"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { StepProps } from "../StepShell";

const MESSAGES = [
  "Analyzing your triggers...",
  "Selecting exercises for you...",
  "Building your recovery plan...",
];

export default function BuildingPlanStep({ onNext }: StepProps) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 1200);

    const timeout = setTimeout(onNext, 3600);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onNext]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-accent-dark to-accent px-8 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 rounded-full border-4 border-white/20 border-t-white"
        />

        <h2 className="text-2xl font-bold text-white">
          Sit tight, we&apos;re building your custom plan
        </h2>

        <motion.p
          key={msgIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/60"
        >
          {MESSAGES[msgIndex]}
        </motion.p>
      </motion.div>
    </div>
  );
}
