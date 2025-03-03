"use client";
import {WorldMap} from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapSection() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Customer Love{" "}
          <span className="text-neutral-400">
            {"Immuno Boost Advance+".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
        Our Immuno Boost products have just started reaching new markets, providing essential immune support to more communities.
        </p>
      </div>
      <WorldMap
        dots={[
              {
                start: { lat: 10.7202, lng: 122.5621 }, // Iloilo City
                end: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
              },
              {
                start: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
                end: { lat: 35.1264, lng: 33.4299 }, // Cyprus
              },
              {
                start: { lat: 10.7202, lng: 122.5621 }, // Iloilo City
                end: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
              },
              {
                start: { lat: 0.3476, lng: 32.5825 }, // Kampala, Uganda
                end: { lat: -4.0383, lng: 21.7587 }, // Congo
              },
              {
                start: { lat: 14.4791, lng: 120.896 }, // Cavite
                end: { lat: 45.4215, lng: -75.6972 }, // Canada (Ottawa)
              },
              {
                start: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
                end: { lat: 30.3753, lng: 69.3451 }, // Pakistan
              },
        ]}
      />
    </div>
  );
}
