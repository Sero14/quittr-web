export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh w-full">
      {children}
    </div>
  );
}
