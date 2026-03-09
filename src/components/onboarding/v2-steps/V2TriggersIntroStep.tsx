"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function V2TriggersIntroStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-between overflow-hidden bg-black">
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-lg text-4xl font-black italic leading-tight text-white md:text-5xl"
        >
          Let us know which triggers affect you most, and we&apos;ll recommend
          the best place for you to start.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="pb-12"
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
