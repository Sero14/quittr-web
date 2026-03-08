"use client";

import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold hover:bg-gray-100 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed",
  secondary:
    "bg-accent text-white font-semibold hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-muted hover:text-white underline-offset-4 hover:underline",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`rounded-full px-8 py-3.5 text-base transition-colors cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
