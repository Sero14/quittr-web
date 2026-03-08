"use client";

import Button from "@/components/ui/Button";

export type StepProps = {
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
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
  fullBleed?: boolean;
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
  fullBleed = false,
  className = "",
}: StepShellProps) {
  return (
    <div
      className={`flex min-h-[calc(100dvh-60px)] flex-col ${
        fullBleed ? "" : "px-6"
      } ${className}`}
    >
      <div
        className={`flex flex-1 flex-col ${
          fullBleed ? "px-6" : ""
        } justify-center`}
      >
        {title && (
          <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {title}
          </h1>
        )}
        {subtitle && <p className="mt-2 text-muted text-[15px]">{subtitle}</p>}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>

      <div
        className={`flex items-center pb-8 pt-4 ${
          fullBleed ? "px-6" : ""
        } ${onSkip ? "justify-between" : "justify-end"}`}
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
