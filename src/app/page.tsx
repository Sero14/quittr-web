"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STEPS, getSegmentProgress } from "@/lib/steps";
import { trackStepView } from "@/lib/analytics";
import ProgressBar from "@/components/onboarding/ProgressBar";
import BackArrow from "@/components/ui/BackArrow";
import StepRenderer from "@/components/onboarding/StepRenderer";

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

export default function OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevStepRef = useRef(-1);
  const step = STEPS[stepIndex];
  const { segment, segmentProgress } = getSegmentProgress(stepIndex);
  const isFirst = stepIndex === 0;
  const showProgress = step.id !== "welcome";

  useEffect(() => {
    if (prevStepRef.current !== stepIndex) {
      trackStepView(step.id, stepIndex);
      prevStepRef.current = stepIndex;
    }
  }, [stepIndex, step.id]);

  const goNext = useCallback(() => {
    if (stepIndex < STEPS.length - 1) {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        const activeTag = document.activeElement?.tagName;
        if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative h-dvh overflow-hidden">
      {showProgress && (
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
          <StepRenderer
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
