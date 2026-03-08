"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function EscalationStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Have you noticed a shift towards more extreme or graphic material?"
      field="escalation"
      options={[{ label: "Yes" }, { label: "No" }]}
    />
  );
}
