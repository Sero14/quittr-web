"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";
import { createClient } from "@/lib/supabase/client";
import { identifyUser } from "@/lib/analytics";

export default function EmailVerificationStep({ onNext }: StepProps) {
  const email = useQuizStore((s) => s.email);
  const setField = useQuizStore((s) => s.setField);
  const getState = useQuizStore.getState;
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (!showCode || resendCooldown <= 0) return;
    const t = setInterval(() => setResendCooldown((n) => Math.max(0, n - 1)), 1000);
    return () => clearInterval(t);
  }, [showCode, resendCooldown]);

  const captureLead = useCallback(async () => {
    const state = getState();
    const quizData: Record<string, unknown> = {
      name: state.name,
      age: state.age,
      score: state.score,
      goals: state.goals,
      symptoms: state.symptoms,
      triggers: state.triggers,
    };
    await fetch("/api/capture-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: state.email, quiz_data: quizData }),
    });
  }, [getState]);

  const handleEmailSubmit = useCallback(async () => {
    if (!email.includes("@")) return;
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: true },
      });
      if (otpError) {
        setError(otpError.message);
        setLoading(false);
        return;
      }
      await captureLead();
      identifyUser(email.trim());
      setShowCode(true);
      setResendCooldown(60);
    } finally {
      setLoading(false);
    }
  }, [email, captureLead]);

  const verifyCode = useCallback(
    async (token: string) => {
      setError(null);
      setLoading(true);
      try {
        const supabase = createClient();
        const { error: verifyError } = await supabase.auth.verifyOtp({
          email: email.trim(),
          token,
          type: "email",
        });
        if (verifyError) {
          setError(verifyError.message);
          setLoading(false);
          return;
        }
        onNext();
      } finally {
        setLoading(false);
      }
    },
    [email, onNext],
  );

  const handleCodeChange = useCallback(
    (index: number, value: string) => {
      if (value.length > 1) value = value.slice(-1);
      if (!/^\d*$/.test(value)) return;

      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newCode.every((d) => d !== "")) {
        verifyCode(newCode.join(""));
      }
    },
    [code, verifyCode],
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [code],
  );

  if (!showCode) {
    return (
      <StepShell
        gradient="indigo"
        title="What's your email?"
        subtitle="We'll create your account to save your progress."
        onContinue={handleEmailSubmit}
        continueLabel={loading ? "Sending…" : "Continue"}
        continueDisabled={!email.includes("@") || loading}
      >
        {error && (
          <p className="text-sm text-red-300 mb-2">{error}</p>
        )}
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setField("email", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
          className="w-full rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-white outline-none transition-colors focus:border-white/40 placeholder:text-white/30"
          autoFocus
        />
      </StepShell>
    );
  }

  return (
    <StepShell
      gradient="indigo"
      title="What's your email?"
      subtitle="Enter the 6 digit verification code we sent to your email."
      showContinue={false}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          {code.map((digit, i) => (
            <div key={i} className="flex items-center">
              {i === 3 && (
                <span className="mx-1 text-xl text-white/30">-</span>
              )}
              <input
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="h-14 w-12 rounded-lg border border-white/15 bg-white/10 text-center text-xl font-bold text-white outline-none transition-colors focus:border-white/40"
                autoFocus={i === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          Or log in with your existing password here
        </button>

        {error && (
          <p className="text-sm text-red-300">{error}</p>
        )}
        <div className="mt-4 flex items-center gap-8">
          <button
            type="button"
            disabled={resendCooldown > 0 || loading}
            onClick={async () => {
              setError(null);
              setLoading(true);
              try {
                const supabase = createClient();
                const { error: resendError } = await supabase.auth.signInWithOtp({
                  email: email.trim(),
                  options: { shouldCreateUser: true },
                });
                if (resendError) setError(resendError.message);
                else setResendCooldown(60);
              } finally {
                setLoading(false);
              }
            }}
            className="text-sm font-semibold text-white hover:text-white/70 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend Code"}
          </button>
        </div>
      </div>
    </StepShell>
  );
}
