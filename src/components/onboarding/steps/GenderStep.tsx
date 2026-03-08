"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function GenderStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="What is your gender?"
      field="gender"
      options={[{ label: "Male" }, { label: "Female" }]}
    />
  );
}
