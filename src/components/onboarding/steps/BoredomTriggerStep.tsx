"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function BoredomTriggerStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Do you watch pornography out of boredom?"
      field="boredomTrigger"
      options={[
        { label: "Frequently" },
        { label: "Occasionally" },
        { label: "Rarely or never" },
      ]}
    />
  );
}
