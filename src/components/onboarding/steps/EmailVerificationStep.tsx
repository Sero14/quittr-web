"use client";

import { useState, useRef, useCallback } from "react";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

export default function EmailVerificationStep({ onNext }: StepProps) {
  const email = useQuizStore((s) => s.email);
  const setField = useQuizStore((s) => s.setField);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleEmailSubmit = useCallback(() => {
    if (email.includes("@")) {
      setShowCode(true);
    }
  }, [email]);

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
        setTimeout(onNext, 500);
      }
    },
    [code, onNext],
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
        title="What's your email?"
        subtitle="We'll create your account to save your progress."
        onContinue={handleEmailSubmit}
        continueLabel="Continue"
        continueDisabled={!email.includes("@")}
      >
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setField("email", e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
          className="w-full rounded-full border border-border bg-surface px-6 py-3.5 text-white outline-none transition-colors focus:border-accent placeholder:text-muted"
          autoFocus
        />
      </StepShell>
    );
  }

  return (
    <StepShell
      title="What's your email?"
      subtitle="Enter the 6 digit verification code we sent to your email."
      showContinue={false}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          {code.map((digit, i) => (
            <div key={i} className="flex items-center">
              {i === 3 && (
                <span className="mx-1 text-xl text-muted">-</span>
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
                className="h-14 w-12 rounded-lg border border-border bg-surface text-center text-xl font-bold text-white outline-none transition-colors focus:border-accent"
                autoFocus={i === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="text-sm text-accent hover:text-accent-light transition-colors cursor-pointer"
        >
          Or log in with your existing password here
        </button>

        <div className="flex items-center gap-8 mt-4">
          <button
            type="button"
            className="text-sm font-semibold text-white hover:text-muted transition-colors cursor-pointer"
          >
            Resend Code
          </button>
        </div>
      </div>
    </StepShell>
  );
}
