"use client";

import { useCallback } from "react";
import StepShell from "../StepShell";
import PillOption from "@/components/ui/PillOption";
import type { StepProps } from "../StepShell";
import { useQuizStore, type QuizState } from "@/lib/quiz-state";

type SingleSelectStepProps = StepProps & {
  title: string;
  subtitle?: string;
  field: keyof QuizState;
  options: { label: string; icon?: React.ReactNode }[];
  skippable?: boolean;
};

export default function SingleSelectStep({
  title,
  subtitle,
  field,
  options,
  skippable = true,
  onNext,
}: SingleSelectStepProps) {
  const value = useQuizStore((s) => s[field] as string | null);
  const setField = useQuizStore((s) => s.setField);

  const handleSelect = useCallback(
    (optionLabel: string) => {
      setField(field as keyof QuizState, optionLabel as never);
      setTimeout(() => onNext(), 300);
    },
    [field, setField, onNext],
  );

  return (
    <StepShell
      title={title}
      subtitle={subtitle}
      onSkip={skippable ? onNext : undefined}
      showContinue={false}
    >
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <PillOption
            key={opt.label}
            label={opt.label}
            icon={opt.icon}
            selected={value === opt.label}
            onClick={() => handleSelect(opt.label)}
          />
        ))}
      </div>
    </StepShell>
  );
}
