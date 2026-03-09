"use client";

import Button from "@/components/ui/Button";
import StarField from "@/components/ui/StarField";

export type StepProps = {
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
};

const GRADIENT_PRESETS: Record<string, string> = {
  purple: "from-[#0f0520] via-[#2d1b69] to-[#1a0a3a]",
  blue: "from-[#060d1f] via-[#0f2847] to-[#0a1628]",
  teal: "from-[#041a14] via-[#0d3b2e] to-[#071f18]",
  rose: "from-[#1a0a14] via-[#4a1530] to-[#1a0a14]",
  indigo: "from-[#0a0a2e] via-[#1a1a5c] to-[#0a0a2e]",
  emerald: "from-[#041f12] via-[#0d4a2e] to-[#041f12]",
  crimson: "from-[#1a0a0a] via-[#4a1020] to-[#1a0a0a]",
};

type StepShellProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  onContinue?: () => void;
  continueLabel?: string;
  continueDisabled?: boolean;
  onSkip?: () => void;
  showContinue?: boolean;
  gradient?: string;
  className?: string;
};

export default function StepShell({
  children,
  title,
  subtitle,
  onContinue,
  continueLabel = "Continue",
  continueDisabled = false,
  onSkip,
  showContinue = true,
  gradient,
  className = "",
}: StepShellProps) {
  const isFullscreen = !!gradient;
  const gradientClass = gradient
    ? (GRADIENT_PRESETS[gradient] ?? gradient)
    : "";

  return (
    <div
      className={`relative flex min-h-dvh flex-col ${
        isFullscreen
          ? `overflow-hidden bg-gradient-to-b ${gradientClass}`
          : "mx-auto w-full max-w-md px-6 pt-14"
      } ${className}`}
    >
      {isFullscreen && <StarField />}

      <div
        className={`relative z-10 flex flex-1 flex-col justify-center ${
          isFullscreen ? "mx-auto w-full max-w-md px-6 pt-14" : ""
        }`}
      >
        {title && (
          <h1
            className={`font-bold leading-tight tracking-tight ${
              isFullscreen
                ? "text-center text-3xl text-white md:text-4xl"
                : "text-3xl md:text-4xl"
            }`}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            className={`mt-2 text-base ${
              isFullscreen ? "text-center text-white/60" : "text-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>

      <div
        className={`relative z-10 flex items-center pb-8 pt-4 ${
          isFullscreen
            ? "mx-auto w-full max-w-md justify-center px-6"
            : onSkip
              ? "justify-between"
              : "justify-end"
        }`}
      >
        {onSkip && (
          <Button variant="ghost" onClick={onSkip}>
            Skip
          </Button>
        )}
        {showContinue && onContinue && (
          <Button onClick={onContinue} disabled={continueDisabled}>
            {continueLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
