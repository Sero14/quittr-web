"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function ConfidenceStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Do you feel a lack of confidence?"
      subtitle="Be honest — this helps us build your plan."
      field="confidence"
      skippable={true}
      options={[
        { label: "Yes, significantly" },
        { label: "Somewhat" },
        { label: "Rarely" },
        { label: "Not at all" },
      ]}
    />
  );
}
