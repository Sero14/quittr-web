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
      whileTap={{ scale: 0.96 }}
      animate={selected ? { scale: [1, 1.03, 1] } : {}}
      transition={{ duration: 0.2 }}
      className={`flex items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-[15px] font-medium transition-all cursor-pointer w-full ${
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
