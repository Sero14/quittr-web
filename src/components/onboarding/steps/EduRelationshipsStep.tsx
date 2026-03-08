"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function EduRelationshipsStep({ onNext }: StepProps) {
  return (
    <div className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-6xl">💔</div>
        <h2 className="text-3xl font-black">Porn destroys relationships</h2>
        <p className="max-w-xs text-[15px] leading-relaxed text-muted">
          Porn <strong className="text-white">reduces</strong> your hunger for a{" "}
          <strong className="text-white">real relationship</strong> and replaces
          it with the hunger for more porn.
        </p>
      </motion.div>
      <div className="mt-12">
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
