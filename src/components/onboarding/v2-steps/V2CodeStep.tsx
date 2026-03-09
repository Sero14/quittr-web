"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";
import { createClient } from "@/lib/supabase/client";

const CODE_LENGTH = 6;

export default function V2CodeStep({ onNext }: StepProps) {
  const email = useQuizStore((s) => s.email);
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(60);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setInterval(() => setResendCooldown((n) => Math.max(0, n - 1)), 1000);
    return () => clearInterval(t);
  }, [resendCooldown]);

  const code = digits.join("");
  const isValid = code.length === CODE_LENGTH && digits.every((d) => d !== "");

  const verifyCode = useCallback(
    async (token: string) => {
      if (!email) return;
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
          return;
        }
        onNext();
      } finally {
        setLoading(false);
      }
    },
    [email, onNext],
  );

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (value.length > 1) value = value.slice(-1);
      if (value && !/^\d$/.test(value)) return;

      const next = [...digits];
      next[index] = value;
      setDigits(next);

      if (value && index < CODE_LENGTH - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (next.every((d) => d !== "")) {
        verifyCode(next.join(""));
      }
    },
    [digits, verifyCode],
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !digits[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    },
    [digits],
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
      if (!pasted) return;
      const next = Array(CODE_LENGTH).fill("");
      for (let i = 0; i < pasted.length; i++) {
        next[i] = pasted[i];
      }
      setDigits(next);
      const focusIndex = Math.min(pasted.length, CODE_LENGTH - 1);
      inputsRef.current[focusIndex]?.focus();

      if (next.every((d: string) => d !== "")) {
        verifyCode(next.join(""));
      }
    },
    [verifyCode],
  );

  const handleResend = useCallback(async () => {
    if (resendCooldown > 0 || loading || !email) return;
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: resendError } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: true },
      });
      if (resendError) {
        setError(resendError.message);
      } else {
        setResendCooldown(60);
      }
    } finally {
      setLoading(false);
    }
  }, [resendCooldown, loading, email]);

  const handleContinue = useCallback(() => {
    if (isValid) verifyCode(code);
  }, [isValid, code, verifyCode]);

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-6 pt-14">
      <div className="flex w-full max-w-2xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Enter your code
          </h1>
          <p className="mt-2 text-base text-white/50">
            We sent a code to{" "}
            <span className="text-white/70">{email || "your email"}</span>
          </p>

          {error && (
            <p className="mt-3 text-sm text-red-400">{error}</p>
          )}

          <div className="mt-8 flex gap-3" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputsRef.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                autoFocus={i === 0}
                className="h-14 w-12 rounded-xl border border-border bg-transparent text-center text-xl font-semibold text-white outline-none transition-colors focus:border-accent focus:shadow-[0_0_8px_rgba(124,58,237,0.3)]"
              />
            ))}
          </div>

          <button
            type="button"
            disabled={resendCooldown > 0 || loading}
            onClick={handleResend}
            className="mt-6 cursor-pointer text-sm text-accent transition-colors hover:text-accent/80 disabled:text-white/30 disabled:cursor-not-allowed"
          >
            {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : "Resend code"}
          </button>
        </motion.div>
      </div>

      <div className="flex w-full max-w-2xl items-center justify-end pb-8 pt-4">
        <Button onClick={handleContinue} disabled={!isValid || loading}>
          {loading ? "Verifying…" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
