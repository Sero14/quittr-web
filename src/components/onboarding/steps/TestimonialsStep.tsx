"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
import Card from "@/components/ui/Card";
import type { StepProps } from "../StepShell";

const TESTIMONIALS = [
  {
    name: "Michael Stevens",
    handle: "@michaels",
    rating: 5,
    text: "QUITTR has been a lifesaver for me. The progress tracking and motivational notifications have kept me on track. I haven't watched porn in 3 months and feel more in control of my life.",
  },
  {
    name: "Tony Coleman",
    handle: "@tcoleman23",
    rating: 5,
    text: "I was skeptical at first, but QUITTR's panic button feature has helped me resist temptation multiple times. The app's community support is incredible.",
  },
  {
    name: "Steven Bartlett",
    handle: "",
    rating: 5,
    text: "Pornography doesn't have an educational role — it's only an open window for a market that brings more emptiness and addiction that profit to porn.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(count)}
    </span>
  );
}

export default function TestimonialsStep({ onNext }: StepProps) {
  return (
    <StepShell onContinue={onNext} continueLabel="Continue">
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <div className="text-3xl mb-1">{"★★★★★"}</div>
          <p className="text-sm text-muted">
            This app was designed for people like you.
          </p>
          <p className="text-xs text-muted mt-1">+ 1,000,000 people</p>
        </div>

        <div className="flex flex-col gap-4 w-full max-h-[45vh] overflow-y-auto pr-1">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Card>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    {t.handle && (
                      <p className="text-xs text-muted">{t.handle}</p>
                    )}
                  </div>
                  <Stars count={t.rating} />
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </StepShell>
  );
}
