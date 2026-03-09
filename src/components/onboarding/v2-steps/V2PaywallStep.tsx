"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { StepProps } from "../StepShell";

const FEATURES = [
  {
    title: "Community",
    subtitle: "Meet like-minded people.",
    image: "/images/paywall/community.png",
  },
  {
    title: "Panic Button",
    subtitle: "Extinguish urges quickly.",
    image: "/images/paywall/panic-button.png",
  },
  {
    title: "Relapse Prevention",
    subtitle: "Distract your mind.",
    image: "/images/paywall/relapse-prevention.png",
  },
  {
    title: "Library",
    subtitle: "Build the foundation to quitting.",
    image: "/images/paywall/library.png",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex w-[280px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111]"
    >
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-2xl font-black text-white">{feature.title}</h3>
        <p className="mt-1 text-sm text-white/50">{feature.subtitle}</p>
      </div>
      <div className="relative mx-4 mb-4 h-[320px] overflow-hidden rounded-2xl bg-white/5">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover object-top"
          sizes="280px"
        />
      </div>
    </motion.div>
  );
}

export default function V2PaywallStep({}: StepProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 280 + 16;
    el.scrollLeft = cardWidth * 0.5;
  }, []);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto pt-16 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-4 px-6" style={{ width: "max-content" }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-8 pt-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex max-w-lg flex-col items-center"
        >
          <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
            It&apos;s time to invest in yourself.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-white/50">
            Unlock community, panic button, relapse prevention exercises,
            soundscapes, lessons and more!
          </p>

          <div className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-white/60">
              &ldquo;QUITTR is exactly what I was looking for! It&apos;s the
              only app that actually helped me understand my triggers and build
              real habits. I love this app!&rdquo;
            </p>
          </div>

          <button
            type="button"
            className="mt-6 w-full max-w-md cursor-pointer rounded-full bg-white py-4 text-base font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Get QUITTR — $9.99/mo
          </button>

          <button
            type="button"
            className="mt-3 cursor-pointer text-sm text-white/40 transition-colors hover:text-white/60"
          >
            Restore purchase
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-2 pb-6 pt-4">
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span>Cancel Anytime</span>
          <span className="text-white/20">|</span>
          <span>Finally Quit Porn</span>
        </div>
      </div>
    </div>
  );
}
