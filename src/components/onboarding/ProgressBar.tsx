"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  currentSegment: 1 | 2 | 3;
  segmentProgress: number;
};

export default function ProgressBar({
  currentSegment,
  segmentProgress,
}: ProgressBarProps) {
  const segments = [1, 2, 3] as const;

  return (
    <div className="flex w-full gap-1.5 px-6 pt-4">
      {segments.map((seg) => {
        let fill = 0;
        if (seg < currentSegment) fill = 1;
        else if (seg === currentSegment) fill = segmentProgress;

        return (
          <div
            key={seg}
            className="relative h-1 flex-1 overflow-hidden rounded-full bg-border"
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_8px_rgba(124,58,237,0.5)]"
              initial={false}
              animate={{ width: `${fill * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        );
      })}
    </div>
  );
}
