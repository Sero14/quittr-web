"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function EduDrugStep({ onNext }: StepProps) {
  return (
    <div className="flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-6xl">🧠</div>
        <h2 className="text-3xl font-black">Porn is a drug</h2>
        <p className="max-w-xs text-[15px] leading-relaxed text-muted">
          Using porn releases a chemical in the brain called{" "}
          <strong className="text-white">dopamine</strong>. This chemical makes
          you <strong className="text-white">feel good</strong> — it&apos;s why
          you feel pleasure when you watch porn.
        </p>
      </motion.div>
      <div className="mt-12">
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
