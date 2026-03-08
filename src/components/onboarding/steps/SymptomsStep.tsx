"use client";

import StepShell from "../StepShell";
import PillOption from "@/components/ui/PillOption";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const SYMPTOM_CATEGORIES = [
  {
    label: "Mental",
    items: [
      "Difficulty concentrating",
      "Feeling unmotivated",
      "Lack of ambition to pursue goals",
      "General anxiety",
      "Poor memory or 'brain fog'",
    ],
  },
  {
    label: "Physical",
    items: [
      "Tiredness and lethargy",
      "Low sex drive or desire",
      "Weak erections without porn",
    ],
  },
  {
    label: "Social",
    items: [
      "Low self-confidence",
      "Reduced desire to socialize",
      "Unsuccessful or unenjoyable sex",
    ],
  },
];

export default function SymptomsStep({ onNext }: StepProps) {
  const symptoms = useQuizStore((s) => s.symptoms);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  return (
    <StepShell
      title="Check your symptoms"
      subtitle="Excessive porn use can have negative impacts psychologically."
      onContinue={onNext}
      continueLabel="Reboot my brain"
    >
      <div className="flex flex-col gap-6 max-h-[50vh] overflow-y-auto pr-1">
        {SYMPTOM_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {cat.label}
            </h3>
            <div className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <PillOption
                  key={item}
                  label={item}
                  selected={symptoms.includes(item)}
                  onClick={() => toggleArrayItem("symptoms", item)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StepShell>
  );
}
