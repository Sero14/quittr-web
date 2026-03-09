"use client";

import InterstitialStep from "./InterstitialStep";
import type { StepProps } from "../StepShell";

export default function SocialProofStep(props: StepProps) {
  return (
    <InterstitialStep
      {...props}
      gradient="indigo"
      stat="94% of users reported improvement after using QUITTR."
      headline="Science-backed exercises help you rewire your brain, rebuild your dopamine receptors, and avoid setbacks."
    />
  );
}
