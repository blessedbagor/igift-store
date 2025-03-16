import React from "react";

export function EventsHeroSection() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center text-center px-4">
      {/* Radial gradient for a faded look */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
        Events
      </h2>

      <p className="relative z-20 text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
        View our event page for regular Zoom meetings, including schedules, topics, and access links.
      </p>
    </div>
  );
}
