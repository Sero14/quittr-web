"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function FirstExposureAgeStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="At what age did you first come across explicit content?"
      field="firstExposureAge"
      options={[
        { label: "12 or younger" },
        { label: "13 to 16" },
        { label: "17 to 24" },
        { label: "25 or older" },
      ]}
    />
  );
}
