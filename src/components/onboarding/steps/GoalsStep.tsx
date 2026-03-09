"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const GOALS = [
  { label: "More energy", emoji: "⚡" },
  { label: "Healthy thoughts", emoji: "✨" },
  { label: "Better mood", emoji: "😊" },
  { label: "Self-control", emoji: "🛡️" },
  { label: "Confidence", emoji: "💪" },
  { label: "Better sex life", emoji: "❤️‍🔥" },
  { label: "Relationships", emoji: "❤️" },
  { label: "Focus & clarity", emoji: "🎯" },
];

function GoalButton({
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
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border px-3 py-5 text-center transition-colors cursor-pointer ${
        selected
          ? "border-white/30 bg-white/15 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
      }`}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-[13px] font-medium leading-tight">{label}</span>
    </motion.button>
  );
}

export default function GoalsStep({ onNext }: StepProps) {
  const goals = useQuizStore((s) => s.goals);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  return (
    <StepShell
      gradient="teal"
      title="Choose Your Goals"
      subtitle="Select the goals you wish to track during your reboot."
      onContinue={onNext}
      continueLabel="Track these goals"
      continueDisabled={goals.length === 0}
    >
      <div className="grid grid-cols-2 gap-3">
        {GOALS.map((goal) => (
          <GoalButton
            key={goal.label}
            label={goal.label}
            emoji={goal.emoji}
            selected={goals.includes(goal.label)}
            onClick={() => toggleArrayItem("goals", goal.label)}
          />
        ))}
      </div>
    </StepShell>
  );
}
