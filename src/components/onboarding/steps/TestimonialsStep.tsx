"use client";

import { motion } from "framer-motion";
import StepShell from "../StepShell";
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
    <span className="text-sm text-yellow-400">{"★".repeat(count)}</span>
  );
}

export default function TestimonialsStep({ onNext }: StepProps) {
  return (
    <StepShell gradient="purple" onContinue={onNext} continueLabel="Continue">
      <div className="flex flex-col items-center">
        <div className="mb-6 text-center">
          <div className="mb-1 text-3xl text-yellow-400">★★★★★</div>
          <p className="text-sm text-white/60">
            This app was designed for people like you.
          </p>
          <p className="mt-1 text-xs text-white/40">+ 1,000,000 people</p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.12,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  {t.handle && (
                    <p className="text-xs text-white/40">{t.handle}</p>
                  )}
                </div>
                <Stars count={t.rating} />
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </StepShell>
  );
}
