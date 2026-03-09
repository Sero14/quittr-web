"use client";

import InterstitialStep from "./InterstitialStep";
import type { StepProps } from "../StepShell";

export default function StatFrequencyStep(props: StepProps) {
  return (
    <InterstitialStep
      {...props}
      gradient="purple"
      stat="98% of QUITTR users report a significant decrease in porn consumption."
    />
  );
}
