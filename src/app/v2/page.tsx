"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { V2_STEPS, getV2SegmentProgress } from "@/lib/v2-steps";
import { trackStepView } from "@/lib/analytics";
import ProgressBar from "@/components/onboarding/ProgressBar";
import BackArrow from "@/components/ui/BackArrow";
import V2StepRenderer from "@/components/onboarding/V2StepRenderer";

const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -30 : 30,
    opacity: 0,
  }),
};

export default function V2OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevStepRef = useRef(-1);
  const safeIndex = Math.min(stepIndex, V2_STEPS.length - 1);
  const step = V2_STEPS[safeIndex];
  const { segment, segmentProgress } = getV2SegmentProgress(safeIndex);
  const isFirst = safeIndex === 0;
  const hideChrome = step.id === "v2-testimonials" || step.id === "v2-loading";

  useEffect(() => {
    if (prevStepRef.current !== safeIndex) {
      trackStepView(step.id, safeIndex);
      prevStepRef.current = safeIndex;
    }
  }, [safeIndex, step.id]);

  const goNext = useCallback(() => {
    if (stepIndex < V2_STEPS.length - 1) {
      setDirection(1);
      setStepIndex((i) => i + 1);
    }
  }, [stepIndex]);

  const goBack = useCallback(() => {
    if (stepIndex > 0) {
      setDirection(-1);
      setStepIndex((i) => i - 1);
    }
  }, [stepIndex]);

  return (
    <div className="relative h-dvh overflow-hidden">
      {!hideChrome && (
        <div className="fixed top-0 left-0 right-0 z-20">
          {!isFirst && <BackArrow onClick={goBack} />}
          <ProgressBar
            currentSegment={segment}
            segmentProgress={segmentProgress}
          />
        </div>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step.id}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 overflow-y-auto"
        >
          <V2StepRenderer
            stepId={step.id}
            onNext={goNext}
            onBack={goBack}
            isFirst={isFirst}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
