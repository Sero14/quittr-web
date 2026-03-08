"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function StressTriggerStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Do you turn to pornography when feeling stressed?"
      field="stressTrigger"
      options={[
        { label: "Frequently" },
        { label: "Occasionally" },
        { label: "Rarely or never" },
      ]}
    />
  );
}
