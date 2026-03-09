export type StepType = "question" | "interstitial" | "input" | "custom";

export type StepDefinition = {
  id: string;
  segment: 1 | 2 | 3;
  type: StepType;
  skippable?: boolean;
  autoAdvance?: boolean;
};

export const STEPS: StepDefinition[] = [
  // --- SEGMENT 1: Quiz ---
  { id: "welcome", segment: 1, type: "custom" },
  { id: "gender", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "attribution", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "frequency", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "statFrequency", segment: 1, type: "interstitial" },
  { id: "firstExposureAge", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "escalation", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "arousalDependency", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "emotionalCoping", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "statCoping", segment: 1, type: "interstitial" },
  { id: "stressTrigger", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "boredomTrigger", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "financialSpend", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "confidence", segment: 1, type: "question", skippable: true, autoAdvance: true },
  { id: "confidenceImage", segment: 1, type: "interstitial" },
  { id: "nameAge", segment: 1, type: "input" },

  // --- INTERSTITIAL: Calculating ---
  { id: "calculating", segment: 1, type: "interstitial" },

  // --- SEGMENT 2: Education ---
  { id: "analysisResults", segment: 2, type: "custom" },
  { id: "testimonial1", segment: 2, type: "interstitial" },
  { id: "eduDrug", segment: 2, type: "interstitial" },
  { id: "eduRelationships", segment: 2, type: "interstitial" },
  { id: "eduRecovery", segment: 2, type: "interstitial" },
  { id: "testimonial2", segment: 2, type: "interstitial" },
  { id: "symptoms", segment: 2, type: "question" },
  { id: "triggersIntro", segment: 2, type: "interstitial" },
  { id: "triggers", segment: 2, type: "custom" },

  // --- SEGMENT 3: Conversion ---
  { id: "goals", segment: 3, type: "question" },
  { id: "rewiringBenefits", segment: 3, type: "custom" },
  { id: "socialProof", segment: 3, type: "interstitial" },
  { id: "testimonials", segment: 3, type: "custom" },
  { id: "buildingPlan", segment: 3, type: "interstitial" },
  { id: "planReveal", segment: 3, type: "custom" },
  { id: "screenshotPrompt", segment: 3, type: "interstitial" },
  { id: "emailVerification", segment: 3, type: "input" },
  { id: "paywall", segment: 3, type: "custom" },
];

export function getSegmentProgress(stepIndex: number): {
  segment: 1 | 2 | 3;
  segmentProgress: number;
} {
  const step = STEPS[stepIndex];
  if (!step) return { segment: 1, segmentProgress: 0 };

  const segmentSteps = STEPS.filter((s) => s.segment === step.segment);
  const indexInSegment = segmentSteps.indexOf(step);

  return {
    segment: step.segment,
    segmentProgress: (indexInSegment + 1) / segmentSteps.length,
  };
}
