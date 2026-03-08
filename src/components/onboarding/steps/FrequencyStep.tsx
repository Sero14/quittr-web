"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function FrequencyStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="How often do you typically view pornography?"
      field="frequency"
      options={[
        { label: "More than once a day" },
        { label: "Once a day" },
        { label: "A few times a week" },
        { label: "Less than once a week" },
      ]}
    />
  );
}
