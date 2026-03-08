"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function EmotionalCopingStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Do you use pornography as a way to cope with emotional discomfort or pain?"
      field="emotionalCoping"
      options={[
        { label: "Frequently" },
        { label: "Occasionally" },
        { label: "Rarely or never" },
      ]}
    />
  );
}
