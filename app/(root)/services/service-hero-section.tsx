import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function ServiceHeroSection() {
  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Services
      </h2>
      <p className="max-w-xl mx-auto text-md md:text-xl text-neutral-700 dark:text-neutral-400 text-center">
      We combine healthcare access, educational resources, and income solutions in one seamless experience.
      </p>
    </BackgroundLines>
    </>
  );
}
