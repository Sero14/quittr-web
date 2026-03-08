"use client";

import InterstitialStep from "./InterstitialStep";
import type { StepProps } from "../StepShell";

export default function Testimonial2Step(props: StepProps) {
  return (
    <InterstitialStep
      {...props}
      quote="Quitting has allowed me to change my mindset on the little things in life. I was coming to grips with the fact that life is dark, boring, depressing and then I die. Screw that. Quitting has allowed me to change my mindset on the little things in life."
      author="Connor"
    />
  );
}
