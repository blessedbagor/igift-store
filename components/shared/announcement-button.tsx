"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export function AnnouncementButton() {
  const images = [
    "/images/da-nang/1.png",
    "/images/da-nang/2.png",
    "/images/da-nang/3.png",
    "/images/da-nang/5.png",
  ];
  return (
    <div className="pt-20  flex items-center justify-center">
      <Modal>
        <ModalTrigger>
        <span className="bg-realGreen no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
                First Asian Tour 2025
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-gold/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            First Asian Travel to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Da Nang
              </span>{" "}
              ✈️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="Da Nang images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <p className="text-lg mx-auto text-center">
            We are excited to announce that our first Asian 
            travel qualification has been extended until March 31, 2025, 
            to allow more iGift Distributors to qualify and join.
            </p>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <Link href='https://learn.igift.com.ph/community/space/say-hello/post/qualification-for-the-a' target="_blank" className='mx-auto'>
            <span className=" text-black dark:bg-gold text-lg px-2 py-2 rounded-full border border-black">
              Be the First iGift Travel Qualifier
            </span>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
