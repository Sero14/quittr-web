"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const GOALS = [
  "Break free from porn",
  "Build self-discipline",
  "Reduce stress and anxiety",
  "Improve my relationships",
  "Other",
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

export default function V2GoalsStep({ onNext }: StepProps) {
  const goals = useQuizStore((s) => s.goals);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  return (
    <div className="relative flex min-h-dvh flex-col items-center px-6 pt-14">
      <div className="flex w-full max-w-2xl flex-1 flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Hello friend! What brings you to Quittr?
        </h1>
        <p className="mt-2 text-base text-muted">Select all that apply</p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {GOALS.map((goal) => (
            <Pill
              key={goal}
              label={goal}
              selected={goals.includes(goal)}
              onClick={() => toggleArrayItem("goals", goal)}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-2xl items-center justify-between pb-8 pt-4">
        <button
          type="button"
          className="cursor-pointer text-sm text-accent transition-colors hover:text-accent/80"
        >
          Already have an account? Log In
        </button>
        <Button onClick={onNext} disabled={goals.length === 0}>
          Continue
        </Button>
      </div>
    </div>
  );
}
