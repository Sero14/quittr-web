"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const OPTIONS = [
  "I've just started struggling",
  "I don't get much out of quitting",
  "I relapse regularly",
  "I have a daily routine",
  "I've been trying to quit for years",
];

function Pill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex min-h-[56px] w-full items-center justify-center rounded-xl border px-5 py-4 text-base font-medium transition-all duration-200 cursor-pointer text-center ${
        selected
          ? "border-accent bg-accent text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]"
          : "border-border bg-transparent text-white hover:border-muted"
      }`}
    >
      {label}
    </motion.button>
  );
}

export default function V2ExperienceStep({ onNext }: StepProps) {
  const frequency = useQuizStore((s) => s.frequency);
  const setField = useQuizStore((s) => s.setField);

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-6 pt-14">
      <div className="flex w-full max-w-2xl flex-1 flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Which of the below best describes your experience with porn?
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {OPTIONS.map((opt) => (
            <Pill
              key={opt}
              label={opt}
              selected={frequency === opt}
              onClick={() => setField("frequency", opt)}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-2xl items-center justify-end pb-8 pt-4">
        <Button onClick={onNext} disabled={!frequency}>
          Continue
        </Button>
      </div>
    </div>
  );
}
