export type V2StepType = "question" | "interstitial" | "custom";

export type V2StepDefinition = {
  id: string;
  segment: 1 | 2 | 3;
  type: V2StepType;
  autoAdvance?: boolean;
};

export const V2_STEPS: V2StepDefinition[] = [
  // --- SEGMENT 1: Intent ---
  { id: "v2-goals", segment: 1, type: "question" },
  { id: "v2-stat", segment: 1, type: "interstitial" },
  { id: "v2-experience", segment: 1, type: "question" },

  // --- SEGMENT 2: Social Proof ---
  { id: "v2-testimonials", segment: 2, type: "interstitial" },
  { id: "v2-triggers-intro", segment: 2, type: "interstitial" },

  // --- SEGMENT 3: Personalization ---
  { id: "v2-triggers", segment: 3, type: "custom" },
  { id: "v2-loading", segment: 3, type: "interstitial" },
  { id: "v2-auth", segment: 3, type: "custom" },
  { id: "v2-code", segment: 3, type: "custom" },
  { id: "v2-paywall", segment: 3, type: "custom" },
];

export function getV2SegmentProgress(stepIndex: number): {
  segment: 1 | 2 | 3;
  segmentProgress: number;
} {
  const step = V2_STEPS[stepIndex];
  if (!step) return { segment: 1, segmentProgress: 0 };

  const segmentSteps = V2_STEPS.filter((s) => s.segment === step.segment);
  const indexInSegment = segmentSteps.indexOf(step);

  return {
    segment: step.segment,
    segmentProgress: (indexInSegment + 1) / segmentSteps.length,
  };
}
