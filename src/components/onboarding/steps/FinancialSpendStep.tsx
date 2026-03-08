"use client";

import SingleSelectStep from "./SingleSelectStep";
import type { StepProps } from "../StepShell";

export default function FinancialSpendStep(props: StepProps) {
  return (
    <SingleSelectStep
      {...props}
      title="Have you ever spent money on accessing explicit content?"
      field="financialSpend"
      options={[{ label: "Yes" }, { label: "No" }]}
    />
  );
}
