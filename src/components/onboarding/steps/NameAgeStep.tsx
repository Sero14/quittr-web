"use client";

import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

export default function NameAgeStep({ onNext }: StepProps) {
  const name = useQuizStore((s) => s.name);
  const age = useQuizStore((s) => s.age);
  const setField = useQuizStore((s) => s.setField);

  const isValid = name.trim().length > 0 && age.trim().length > 0;

  return (
    <StepShell
      title="Finally"
      subtitle="A little more about you"
      onContinue={onNext}
      continueLabel="Complete Quiz"
      continueDisabled={!isValid}
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setField("name", e.target.value)}
          className="w-full rounded-full border border-border bg-surface px-6 py-3.5 text-white outline-none transition-colors focus:border-accent placeholder:text-muted"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setField("age", e.target.value)}
          className="w-full rounded-full border border-border bg-surface px-6 py-3.5 text-white outline-none transition-colors focus:border-accent placeholder:text-muted [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </StepShell>
  );
}
