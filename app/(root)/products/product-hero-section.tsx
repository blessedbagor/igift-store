"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function AboutHeroSection() {
  const words = ["Feel Better.", "Power Your Day."];

  return (
    <>
    <div className="relative md:h-[40rem] h-[20rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.05] overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-40 pb-60 md:pt-30">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-4xl md:text-6xl lg:text-8xl">
            <FlipWords words={words} />
        </span>
        </h1>
        <p className="mt-4 md:text-xl text-lg text-neutral-300 max-w-3xl text-center mx-auto">
        iGift offers science-backed immune-boosting supplement designed for people who work hard and care for their families.
        </p>
      </div>
    </div>
    
    </>
  );
}
