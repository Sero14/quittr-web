"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import type { StepProps } from "../StepShell";
import { useQuizStore } from "@/lib/quiz-state";

const GOALS = [
  { label: "More energy and motivation", emoji: "⚡", color: "from-amber-600 to-amber-700" },
  { label: "Pure and healthy thoughts", emoji: "✨", color: "from-emerald-600 to-emerald-700" },
  { label: "Improved mood and happiness", emoji: "😊", color: "from-yellow-600 to-yellow-700" },
  { label: "Improved self-control", emoji: "🛡️", color: "from-teal-600 to-teal-700" },
  { label: "Improved self-confidence", emoji: "💪", color: "from-blue-600 to-blue-700" },
  { label: "Improved desire and sex life", emoji: "❤️‍🔥", color: "from-rose-600 to-rose-700" },
  { label: "Stronger relationships", emoji: "❤️", color: "from-pink-600 to-pink-700" },
  { label: "Improved focus and clarity", emoji: "🎯", color: "from-purple-600 to-purple-700" },
];

export default function GoalsStep({ onNext }: StepProps) {
  const goals = useQuizStore((s) => s.goals);
  const toggleArrayItem = useQuizStore((s) => s.toggleArrayItem);

  return (
    <StepShell
      title="Choose Your Goals"
      subtitle="Select the goals you wish to track during your reboot."
      onContinue={onNext}
      continueLabel="Track these goals"
      continueDisabled={goals.length === 0}
    >
      <div className="flex flex-col gap-3 max-h-[55vh] overflow-y-auto pr-1">
        {GOALS.map((goal, i) => {
          const selected = goals.includes(goal.label);
          return (
            <motion.button
              key={goal.label}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => toggleArrayItem("goals", goal.label)}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all cursor-pointer border ${
                selected
                  ? `bg-gradient-to-r ${goal.color} border-transparent`
                  : "bg-surface border-border hover:border-muted"
              }`}
            >
              <span className="text-2xl">{goal.emoji}</span>
              <span className="flex-1 text-[15px] font-medium text-white">
                {goal.label}
              </span>
              <div
                className={`h-6 w-10 rounded-full transition-colors ${
                  selected ? "bg-white/30" : "bg-border"
                } relative`}
              >
                <motion.div
                  className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow"
                  animate={{ left: selected ? "18px" : "2px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </StepShell>
  );
}
