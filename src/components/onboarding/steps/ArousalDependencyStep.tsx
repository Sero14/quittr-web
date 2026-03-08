"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function ArousalDependencyStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Do you find it difficult to achieve sexual arousal without pornography or fantasy?"
      field="arousalDependency"
      options={[
        { label: "Frequently" },
        { label: "Occasionally" },
        { label: "Rarely or never" },
      ]}
    />
  );
}
