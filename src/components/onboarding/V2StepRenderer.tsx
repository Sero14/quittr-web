"use client";

import type { StepProps } from "./StepShell";
import V2GoalsStep from "./v2-steps/V2GoalsStep";
import V2StatStep from "./v2-steps/V2StatStep";
import V2ExperienceStep from "./v2-steps/V2ExperienceStep";
import V2TestimonialsStep from "./v2-steps/V2TestimonialsStep";
import V2TriggersIntroStep from "./v2-steps/V2TriggersIntroStep";
import V2LoadingStep from "./v2-steps/V2LoadingStep";
import V2AuthStep from "./v2-steps/V2AuthStep";
import V2CodeStep from "./v2-steps/V2CodeStep";
import V2PaywallStep from "./v2-steps/V2PaywallStep";
import TriggersStep from "./steps/TriggersStep";

type V2StepRendererProps = StepProps & {
  stepId: string;
};

const STEP_MAP: Record<string, React.ComponentType<StepProps>> = {
  "v2-goals": V2GoalsStep,
  "v2-stat": V2StatStep,
  "v2-experience": V2ExperienceStep,
  "v2-testimonials": V2TestimonialsStep,
  "v2-triggers-intro": V2TriggersIntroStep,
  "v2-triggers": TriggersStep,
  "v2-loading": V2LoadingStep,
  "v2-auth": V2AuthStep,
  "v2-code": V2CodeStep,
  "v2-paywall": V2PaywallStep,
};

export default function V2StepRenderer({
  stepId,
  onNext,
  onBack,
  isFirst,
}: V2StepRendererProps) {
  const Component = STEP_MAP[stepId];
  if (!Component) return null;
  return <Component onNext={onNext} onBack={onBack} isFirst={isFirst} />;
}
