"use client";

import { motion } from "framer-motion";

type PillOptionProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
};

export default function PillOption({
  label,
  selected,
  onClick,
  icon,
}: PillOptionProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`flex h-full min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-base font-medium transition-all duration-200 cursor-pointer text-center ${
        selected
          ? "border-accent bg-accent text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]"
          : "border-border bg-transparent text-white hover:border-muted"
      }`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.button>
  );
}
