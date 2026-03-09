"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";
import { createClient } from "@/lib/supabase/client";
import { identifyUser } from "@/lib/analytics";

export default function V2AuthStep({ onNext }: StepProps) {
  const email = useQuizStore((s) => s.email);
  const setField = useQuizStore((s) => s.setField);
  const getState = useQuizStore.getState;
  const [localEmail, setLocalEmail] = useState(email || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localEmail);

  const captureLead = useCallback(async () => {
    const state = getState();
    const quizData: Record<string, unknown> = {
      goals: state.goals,
      triggers: state.triggers,
      frequency: state.frequency,
    };
    await fetch("/api/capture-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: localEmail.trim(), quiz_data: quizData }),
    }).catch(() => {});
  }, [getState, localEmail]);

  const handleContinue = useCallback(async () => {
    if (!isValid || loading) return;
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: localEmail.trim(),
        options: { shouldCreateUser: true },
      });
      if (otpError) {
        setError(otpError.message);
        return;
      }
      setField("email", localEmail.trim());
      await captureLead();
      identifyUser(localEmail.trim());
      onNext();
    } finally {
      setLoading(false);
    }
  }, [isValid, loading, localEmail, setField, captureLead, onNext]);

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-6 pt-14">
      <div className="flex w-full max-w-2xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            What&apos;s your email?
          </h1>
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}
          <input
            type="email"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleContinue();
            }}
            placeholder="Enter your email"
            autoFocus
            className="mt-4 w-full border-none bg-transparent text-lg text-white/50 outline-none placeholder:text-white/30"
          />
        </motion.div>
      </div>

      <div className="flex w-full max-w-2xl items-center justify-end pb-8 pt-4">
        <Button onClick={handleContinue} disabled={!isValid || loading}>
          {loading ? "Sending…" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
