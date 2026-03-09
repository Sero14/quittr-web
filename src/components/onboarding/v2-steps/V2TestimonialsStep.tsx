"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function V2TestimonialsStep({ onNext }: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center overflow-hidden bg-accent">
      <div className="relative z-10 flex w-full max-w-3xl flex-1 flex-col justify-center px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white">
            From our users
          </p>
          <div className="mt-4 h-px w-full bg-white/30" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-8"
        >
          <p className="text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem] lg:leading-snug">
            <span className="text-white">&ldquo;Quittr changed my life.</span>{" "}
            <span className="text-white/50">
              It gave me the tools to finally break free from a habit I&apos;d
              been trapped in for years.&rdquo;
            </span>
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="my-8 h-px w-full bg-white/30"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <p className="text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem] lg:leading-snug">
            <span className="text-white/50">
              &ldquo;I'm a new man.
            </span>{" "}
            <span className="text-white font-black">
              Tears came as I realized how deeply I was affected
            </span>{" "}
            <span className="text-white/50">
              by this harrowing addiction.  simply being honest with myself. This is where my healing truly
              began for the very first time.
            </span>
          </p>
        </motion.blockquote>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="fixed bottom-8 right-8 z-20"
      >
        <Button onClick={onNext}>Continue</Button>
      </motion.div>
    </div>
  );
}
