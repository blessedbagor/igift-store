"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export function EarnHeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="max-w-5xl h-[35rem]">
      <HeroHighlight>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="max-w-4xl flex items-center justify-center text-center px-6"
        >
          <h1 className="text-4xl md:text-8xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
          8 Ways to Earn Rewards
          </h1>
        </motion.div>
      </HeroHighlight>
      </div>
    </section>
  );
}
