"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function EduRecoveryStep({ onNext }: StepProps) {
  return (
    <div className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-6xl">🌱</div>
        <h2 className="text-3xl font-black text-white">Path to Recovery</h2>
        <p className="max-w-xs text-[15px] leading-relaxed text-white/70">
          Recovery is possible. By{" "}
          <strong className="text-white">abstaining from porn</strong>, your
          brain can{" "}
          <strong className="text-white">reset its dopamine sensitivity</strong>
          , leading to healthier relationships and{" "}
          <strong className="text-white">improved well-being</strong>.
        </p>
      </motion.div>
      <div className="mt-12">
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
