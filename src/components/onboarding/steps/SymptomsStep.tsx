"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const SYMPTOMS = [
  { label: "Difficulty concentrating", emoji: "🧠" },
  { label: "Feeling unmotivated", emoji: "😔" },
  { label: "General anxiety", emoji: "😰" },
  { label: "Brain fog", emoji: "🌫️" },
  { label: "Tiredness & lethargy", emoji: "😴" },
  { label: "Low sex drive", emoji: "💔" },
  { label: "Weak erections", emoji: "⚠️" },
  { label: "Low self-confidence", emoji: "😟" },
  { label: "Social withdrawal", emoji: "🚪" },
  { label: "Unsatisfying sex", emoji: "😞" },
  { label: "Lack of ambition", emoji: "🎯" },
  { label: "Poor memory", emoji: "📭" },
];

function SymptomButton({
  label,
  emoji,
  selected,
  onClick,
}: {
  label: string;
  emoji: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-3 py-4 text-center transition-colors cursor-pointer ${
        selected
          ? "border-white/30 bg-white/15 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
      }`}
    >
      <span className="text-2xl">{emoji}</span>
      <span className="text-[13px] font-medium leading-tight">{label}</span>
    </motion.button>
  );
}

export default function SymptomsStep({ onNext }: StepProps) {
  const symptoms = useQuizStore((s) => s.symptoms);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  return (
    <StepShell
      gradient="rose"
      title="Check your symptoms"
      subtitle="Select everything you currently experience."
      onContinue={onNext}
      continueLabel="Reboot my brain"
    >
      <div className="grid grid-cols-3 gap-2.5">
        {SYMPTOMS.map((s) => (
          <SymptomButton
            key={s.label}
            label={s.label}
            emoji={s.emoji}
            selected={symptoms.includes(s.label)}
            onClick={() => toggleArrayItem("symptoms", s.label)}
          />
        ))}
      </div>
    </StepShell>
  );
}
