"use client";

import type { StepProps } from "./StepShell";
import WelcomeStep from "./steps/WelcomeStep";
import GenderStep from "./steps/GenderStep";
import AttributionStep from "./steps/AttributionStep";
import FrequencyStep from "./steps/FrequencyStep";
import FirstExposureAgeStep from "./steps/FirstExposureAgeStep";
import EscalationStep from "./steps/EscalationStep";
import ArousalDependencyStep from "./steps/ArousalDependencyStep";
import EmotionalCopingStep from "./steps/EmotionalCopingStep";
import StressTriggerStep from "./steps/StressTriggerStep";
import BoredomTriggerStep from "./steps/BoredomTriggerStep";
import FinancialSpendStep from "./steps/FinancialSpendStep";
import StatFrequencyStep from "./steps/StatFrequencyStep";
import StatCopingStep from "./steps/StatCopingStep";
import ConfidenceStep from "./steps/ConfidenceStep";
import ConfidenceImageStep from "./steps/ConfidenceImageStep";
import NameAgeStep from "./steps/NameAgeStep";
import CalculatingScreen from "./steps/CalculatingScreen";
import AnalysisResultsStep from "./steps/AnalysisResultsStep";
import Testimonial1Step from "./steps/Testimonial1Step";
import EduDrugStep from "./steps/EduDrugStep";
import EduRelationshipsStep from "./steps/EduRelationshipsStep";
import EduRecoveryStep from "./steps/EduRecoveryStep";
import Testimonial2Step from "./steps/Testimonial2Step";
import SymptomsStep from "./steps/SymptomsStep";
import TriggersIntroStep from "./steps/TriggersIntroStep";
import TriggersStep from "./steps/TriggersStep";
import GoalsStep from "./steps/GoalsStep";
import RewiringBenefitsStep from "./steps/RewiringBenefitsStep";
import SocialProofStep from "./steps/SocialProofStep";
import TestimonialsStep from "./steps/TestimonialsStep";
import BuildingPlanStep from "./steps/BuildingPlanStep";
import PlanRevealStep from "./steps/PlanRevealStep";
import ScreenshotPromptStep from "./steps/ScreenshotPromptStep";
import EmailVerificationStep from "./steps/EmailVerificationStep";
import PaywallStep from "./steps/PaywallStep";

type StepRendererProps = StepProps & {
  stepId: string;
};

const STEP_MAP: Record<string, React.ComponentType<StepProps>> = {
  welcome: WelcomeStep,
  gender: GenderStep,
  attribution: AttributionStep,
  frequency: FrequencyStep,
  firstExposureAge: FirstExposureAgeStep,
  escalation: EscalationStep,
  arousalDependency: ArousalDependencyStep,
  emotionalCoping: EmotionalCopingStep,
  stressTrigger: StressTriggerStep,
  boredomTrigger: BoredomTriggerStep,
  financialSpend: FinancialSpendStep,
  statFrequency: StatFrequencyStep,
  statCoping: StatCopingStep,
  confidence: ConfidenceStep,
  confidenceImage: ConfidenceImageStep,
  nameAge: NameAgeStep,
  calculating: CalculatingScreen,
  analysisResults: AnalysisResultsStep,
  testimonial1: Testimonial1Step,
  eduDrug: EduDrugStep,
  eduRelationships: EduRelationshipsStep,
  eduRecovery: EduRecoveryStep,
  testimonial2: Testimonial2Step,
  symptoms: SymptomsStep,
  triggersIntro: TriggersIntroStep,
  triggers: TriggersStep,
  goals: GoalsStep,
  rewiringBenefits: RewiringBenefitsStep,
  socialProof: SocialProofStep,
  testimonials: TestimonialsStep,
  buildingPlan: BuildingPlanStep,
  planReveal: PlanRevealStep,
  screenshotPrompt: ScreenshotPromptStep,
  emailVerification: EmailVerificationStep,
  paywall: PaywallStep,
};

export default function StepRenderer({
  stepId,
  onNext,
  onBack,
  isFirst,
}: StepRendererProps) {
  const Component = STEP_MAP[stepId];
  if (!Component) return null;
  return <Component onNext={onNext} onBack={onBack} isFirst={isFirst} />;
}
