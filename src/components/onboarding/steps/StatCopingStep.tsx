"use client";

import InterstitialStep from "./InterstitialStep";
import type { StepProps } from "../StepShell";

export default function StatCopingStep(props: StepProps) {
  return (
    <InterstitialStep
      {...props}
      gradient="blue"
      stat="Users who identify their triggers are 3x more likely to quit successfully."
    />
  );
}
