"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function AttributionStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Where did you hear about us?"
      field="attribution"
      options={[
        { label: "Instagram" },
        { label: "X" },
        { label: "Facebook" },
        { label: "TikTok" },
        { label: "Google" },
        { label: "TV" },
      ]}
    />
  );
}
