"use client";

import InterstitialStep from "./InterstitialStep";
import type { StepProps } from "../StepShell";

export default function Testimonial1Step(props: StepProps) {
  return (
    <InterstitialStep
      {...props}
      gradient="blue"
      quote="Resetting your dopamine balance by taking a break from highly stimulating content can dramatically improve motivation, emotional stability, and everyday pleasure."
      author="Andrew Huberman, Ph.D."
    />
  );
}
