"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ChevronRight } from "lucide-react";
import { AnnouncementButton } from "../announcement-button";


export function HeroSection() {
  const words = ["Live Their Best Life.", "Help Themselves.", "Feel Better.", "Move Forward."];

  return (
    <>
    <div className="relative md:h-screen h-[60rems] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] overflow-hidden">
      <Spotlight />

      {/* Text Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-40 pb-60 md:pt-30">
        <div className="flex justify-center mb-8">
          <AnnouncementButton />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Helping People 
          <br /> 
          <span className="text-4xl md:text-6xl lg:text-8xl"><FlipWords words={words} /></span>
        </h1>
        <p className="mt-4 font-mono md:text-lg text-md text-neutral-300 max-w-3xl text-center mx-auto">
          Boost your immunity with our science-backed supplements and create new income opportunities 
          for yourself and your family.
        </p>
        <div className="flex gap-x-4 justify-center mt-8">
          <HoverBorderGradient
            containerClassName="rounded-2xl"
            as="button"
            className="sm:w-full border text-lg font-medium relative border-neutral-200 dark:border-gold/[0.4] text-black dark:text-white px-4 py-2 rounded-2xl uppercase"
          >
            <span>
              <Link href="/sign-up" className="flex items-center">
                Get Started <ChevronRight className="ml-1" />
              </Link>
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
          </HoverBorderGradient>
          <Link href="/sign-in">
            <button className="sm:w-full flex items-center border text-lg font-medium uppercase dark:bg-white dark:hover:border-gold dark:border-transparent text-black px-4 py-2 rounded-2xl">
              Login <ChevronRight className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
    
    </>
  );
}
