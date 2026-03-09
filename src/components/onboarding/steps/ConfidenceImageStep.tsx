"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function ConfidenceImageStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Fullscreen background image */}
      <Image
        src="/campfire-new.png"
        alt="Campfire scene"
        fill
        className="object-cover object-bottom"
        priority
      />

      {/* Subtle overlay for text legibility */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Continue button — positioned over the button in the illustration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="absolute z-10"
        style={{ bottom: "7.7%", left: "65.5%", transform: "translateX(-50%)" }}
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
