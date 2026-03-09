"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";
import type { StepProps } from "../StepShell";

export default function PaywallStep({}: StepProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-gradient-to-b from-[#0f0520] via-[#2d1b69] to-[#1a0a3a]">
      <StarField />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-sm"
        >
          <h1 className="text-3xl font-black text-white">Become a QUITTR</h1>
          <p className="mt-2 text-white/60">No commitment. Cancel anytime.</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm">
            <h3 className="font-bold text-white">Order Summary</h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-white">Total Due Today</span>
              <span className="font-bold text-white">$0.00</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-white/50">
              <span>Cost Per Month</span>
              <span>$9.99</span>
            </div>
            <p className="mt-2 text-xs text-white/40">
              Total Due After 90 Day Free Trial: $119.88
            </p>
            <p className="text-xs text-white/40">Cancel Anytime</p>

            <details className="mt-3 cursor-pointer">
              <summary className="text-sm text-white/50 hover:text-white transition-colors">
                View Details
              </summary>
              <div className="mt-2 text-xs text-white/40 leading-relaxed">
                <p>
                  Your free trial starts today. You won&apos;t be charged until
                  after your 90-day trial ends. Cancel anytime before the trial
                  ends and you won&apos;t be charged.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h3 className="text-left font-bold text-white">Checkout With</h3>
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg bg-[#ffc439] py-3.5 text-base font-bold text-[#003087] transition-colors hover:bg-[#f0b72a]"
            >
              PayPal
            </button>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/15"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Credit or Debit Card
            </button>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-white/40">
            You won&apos;t be charged until after your free trial. Payment is
            automatically collected after your trial. We will remind you via
            email 2 days before your trial ends.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 pb-6 pt-4">
        <p className="text-xs text-white/40">Purchase appears Discretely</p>
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span>Cancel Anytime</span>
          <span className="text-white/20">|</span>
          <span>Finally Quit Porn</span>
        </div>
      </div>
    </div>
  );
}
