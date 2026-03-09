"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";

export default function EduRelationshipsStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#1a0a14] via-[#4a1530] to-[#1a0a14]">
      <StarField />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex max-w-lg flex-col items-center gap-6"
        >
          <div className="text-7xl">💔</div>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Porn destroys relationships
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-white/70">
            Porn <strong className="text-white">reduces</strong> your hunger for
            a <strong className="text-white">real relationship</strong> and
            replaces it with the hunger for more porn.
          </p>
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
