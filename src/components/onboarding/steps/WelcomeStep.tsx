"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";

const SUBTITLE = "Embrace this pause.\nReflect before you relapse.";

function useTypewriter(text: string, startDelay = 800, speed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, startDelay, speed]);

  return { displayed, done };
}

export default function WelcomeStep({ onNext }: StepProps) {
  const { displayed, done } = useTypewriter(SUBTITLE);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      {/* Animated blob background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[-20%] top-[-10%] h-[70%] w-[70%] rounded-full bg-[#2d1b69] opacity-60 blur-[80px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-15%] top-[20%] h-[60%] w-[55%] rounded-full bg-[#1a0a5e] opacity-50 blur-[100px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[10%] h-[50%] w-[60%] rounded-full bg-[#3b1f8c] opacity-40 blur-[90px]"
          animate={{ x: [0, 20, -30, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <StarField />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl font-black tracking-tight text-white md:text-6xl"
        >
          QUITTR
        </motion.h1>

        {/* Typewriter subtitle — fixed height so layout never shifts */}
        <div className="h-14 max-w-xs text-lg font-medium leading-snug text-white/80">
          {displayed.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Stars + CTA — always in the DOM, animate opacity so layout is stable */}
        <motion.div
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-5"
          style={{ pointerEvents: done ? "auto" : "none" }}
        >
          <div className="text-xl text-yellow-400">★★★★★</div>

          <Button onClick={onNext} className="px-10 text-lg">
            Get Started
          </Button>
          <button
            type="button"
            className="cursor-pointer text-sm text-white/40 transition-colors hover:text-white/70"
          >
            Already have an account?
          </button>
        </motion.div>
      </div>
    </div>
  );
}
