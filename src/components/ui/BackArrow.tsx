"use client";

import { motion } from "framer-motion";

type BackArrowProps = {
  onClick: () => void;
};

export default function BackArrow({ onClick }: BackArrowProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.9 }}
      className="absolute top-6 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
      aria-label="Go back"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </motion.button>
  );
}
