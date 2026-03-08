import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined" || !POSTHOG_KEY) return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    persistence: "sessionStorage",
  });
  initialized = true;
}

export function trackStepView(stepId: string, stepIndex: number) {
  if (!initialized) return;
  posthog.capture("onboarding_step_viewed", {
    step_id: stepId,
    step_index: stepIndex,
  });
}

export function trackQuizAnswer(
  questionId: string,
  answer: string | string[],
) {
  if (!initialized) return;
  posthog.capture("quiz_answer", {
    question_id: questionId,
    answer,
  });
}

export function trackQuizComplete(score: number) {
  if (!initialized) return;
  posthog.capture("quiz_completed", { score });
}

export function trackConversion(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}

export function identifyUser(email: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.identify(email, properties);
}
