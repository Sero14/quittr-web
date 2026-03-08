export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-md">
      {children}
    </div>
  );
}
