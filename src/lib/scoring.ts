export function getQuitDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + 90);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getScoreLabel(score: number): string {
  if (score >= 70) return "high dependence";
  if (score >= 50) return "moderate dependence";
  if (score >= 30) return "mild dependence";
  return "low dependence";
}

export function getScoreComparison(score: number): string {
  const average = 40;
  const diff = score - average;
  if (diff > 0) return `${diff}% higher dependence on porn`;
  if (diff < 0) return `${Math.abs(diff)}% lower dependence than average`;
  return "Average dependence level";
}
