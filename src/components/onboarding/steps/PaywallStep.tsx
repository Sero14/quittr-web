"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";

export default function PaywallStep({}: StepProps) {
  return (
    <div className="flex min-h-[calc(100dvh-60px)] flex-col px-6 py-8">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <h1 className="text-3xl font-black">Become a QUITTR</h1>
          <p className="mt-2 text-muted">
            No commitment. Cancel anytime.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-left">
            <h3 className="font-bold">Order Summary</h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold">Total Due Today</span>
              <span className="font-bold">$0.00</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-muted">
              <span>Cost Per Month</span>
              <span>$9.99</span>
            </div>
            <p className="mt-2 text-xs text-muted">
              Total Due After 90 Day Free Trial: $119.88
            </p>
            <p className="text-xs text-muted">Cancel Anytime</p>

            <details className="mt-3 cursor-pointer">
              <summary className="text-sm text-muted hover:text-white transition-colors">
                View Details
              </summary>
              <div className="mt-2 text-xs text-muted leading-relaxed">
                <p>
                  Your free trial starts today. You won&apos;t be charged until
                  after your 90-day trial ends. Cancel anytime before the trial
                  ends and you won&apos;t be charged.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h3 className="font-bold text-left">Checkout With</h3>
            <button
              type="button"
              className="w-full rounded-lg bg-[#ffc439] py-3.5 text-base font-bold text-[#003087] hover:bg-[#f0b72a] transition-colors cursor-pointer"
            >
              PayPal
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-border bg-surface py-3.5 text-base font-medium text-white hover:bg-border transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Credit or Debit Card
            </button>
          </div>

          <p className="mt-4 text-xs text-muted text-center leading-relaxed">
            You won&apos;t be charged until after your free trial. Payment is
            automatically collected after your trial. We will remind you via
            email 2 days before your trial ends.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-2 pt-4 pb-4">
        <p className="text-xs text-muted">Purchase appears Discretely</p>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>Cancel Anytime ✅</span>
          <span>Finally Quit Porn 🚀</span>
        </div>
      </div>
    </div>
  );
}
