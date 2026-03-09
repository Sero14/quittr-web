"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function V2StatStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <Image
        src="/campfire-new.png"
        alt="Campfire scene"
        fill
        className="object-cover object-bottom"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl font-black leading-tight text-white md:text-5xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          Users report feeling 2.3x more in control after using Quittr.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="relative z-10 flex justify-end px-8 pb-12"
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
