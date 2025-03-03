"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetTitle, 
  SheetTrigger
} from "@/components/ui/sheet";
import { IconMenu } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { ChevronRight } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // State to track visibility and whether we are at the top
  const [visible, setVisible] = useState(true); // Show/hide on scroll direction
  const [atTop, setAtTop] = useState(true); // Track if scroll is near the top

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Determine scroll direction
      const direction = current - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true); // Scrolling up
      } else {
        setVisible(false); // Scrolling down
      }

      // If the scroll progress is near 0, we’re at the top
      if (current < 0.05) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit mx-auto fixed top-2 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] lg:pr-2 lg:pl-8 p-2 lg:items-center lg:space-x-4",
          // Conditionally apply background: transparent when at top,
          // otherwise use the specified dark/light background.
          atTop ? "bg-transparent dark:border-transparent" : "dark:bg-black bg-white",
          className
        )}
      >
        <Link href="/" className="hidden xl:block lg:mr-8">
          <Image 
            src="/images/logo.svg" 
            alt={`${APP_NAME} logo`} 
            height={60}
            width={60}
            priority={true}
          />
        </Link>
        
        <div className="block xl:hidden mx-auto flex-between">
          <Link href="/">
            <Image 
              src="/images/logo.svg" 
              alt={`${APP_NAME} logo`} 
              height={42}
              width={42}
              priority={true}
            />
          </Link>
          <div className="w-[290px] md:w-[600px] lg:w-[900px] text-end">Menu</div>
          <Sheet>
            <SheetTrigger>
              <IconMenu />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start z-[6000] w-full">
              <SheetTitle>
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/images/logo.svg" 
                    alt={`${APP_NAME} logo`} 
                    height={42}
                    width={42}
                    priority={true}
                  />
                </Link>
                <span className="sr-only">Menu</span>
              </SheetTitle>

              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                >
                  <span className="text-3xl font-bold hover:text-gold">{navItem.name}</span>
                </Link>
              ))}

              <SheetDescription></SheetDescription>

              <div className="mt-auto w-full border-t pt-4 mx-auto flex items-center flex-center space-x-4">
                <Link href="/sign-in">
                  <button className="sm:w-full flex items-center border text-lg font-medium uppercase dark:bg-white dark:hover:border-gold dark:border-transparent text-black px-4 py-2 rounded-2xl">
                    Login <ChevronRight className="ml-1" />
                  </button>
                </Link>
                <HoverBorderGradient
                  containerClassName="rounded-2xl"
                  as="button"
                  className="border text-lg font-medium uppercase relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-2xl"
                >
                  <span>
                    <Link href="/sign-up" className="flex items-center">
                      Get Started <ChevronRight className="ml-1" />
                    </Link>
                  </span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
                </HoverBorderGradient>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="hidden xl:block items-center space-x-2 text-lg font-bold hover:text-gold">
              {navItem.name}
            </span>
          </Link>
        ))}
        <div className="hidden xl:flex gap-x-4 items-center ml-8">
          <Link href="/sign-in">
            <button className="sm:w-full flex items-center border text-lg font-medium uppercase dark:bg-white dark:hover:border-gold dark:border-transparent text-black px-4 py-2 rounded-2xl">
              Login <ChevronRight className="ml-1" />
            </button>
          </Link>

          <HoverBorderGradient
            containerClassName="rounded-2xl"
            as="button"
            className="border text-lg font-medium relative border-neutral-200 dark:border-gold/[0.4] text-black dark:text-white px-4 py-2 rounded-2xl uppercase"
          >
            <span>
              <Link href="/sign-up" className="flex items-center">
                Get Started <ChevronRight className="ml-1" />
              </Link>
            </span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px" />
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
