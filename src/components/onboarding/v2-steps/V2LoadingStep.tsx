"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StepProps } from "../StepShell";

const AUTO_ADVANCE_MS = 4500;

export default function V2LoadingStep({ onNext }: StepProps) {
  useEffect(() => {
    const timer = setTimeout(onNext, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-accent px-8 text-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
          >
            <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white" />
          </motion.div>

          <p className="text-base text-white/60">
            Sit tight, we&apos;re putting together a few pieces of content for
            you
          </p>

          <blockquote className="mt-4 max-w-xl">
            <p className="text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem] lg:leading-snug">
              <span className="text-white/50">
                &ldquo;If anyone wants to break free, this is the way to go.
              </span>{" "}
              <span className="text-white font-black">
                I went from relapsing daily to 90 days clean.&rdquo;
              </span>
            </p>
          </blockquote>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
