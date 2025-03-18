"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { set } from "zod";

interface EventCard {
  day: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  meetingId: string;
  passCode: string;
  nextMeeting: string;
  content: () => React.ReactNode;
}

export function EventsList() {
  const [active, setActive] = useState<EventCard | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    setActive(null);
  });
  
  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        const meetingStart = new Date(active.nextMeeting).getTime();
        const now = new Date().getTime();
        const meetingEnd = meetingStart + 3 * 60 * 60 * 1000; // Meeting open for 3 hours

        if (now < meetingStart) {
          // Before meeting starts: count down until meetingStart
          const diff = meetingStart - now;
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s left`);
        } else if (now >= meetingStart && now < meetingEnd) {
          // Meeting is open (within 3 hours window)
          setTimeRemaining("The meeting is now open!");
        } else {
          // After meeting end: reset nextMeeting to the next scheduled meeting (e.g., add 7 days)
          const newMeetingDate = new Date(meetingStart);
          newMeetingDate.setDate(newMeetingDate.getDate() + 7);
          setActive({ ...active, nextMeeting: newMeetingDate.toISOString() });
          // Optionally, update the timer display immediately
          const newDiff = newMeetingDate.getTime() - now;
          const days = Math.floor(newDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((newDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((newDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((newDiff % (1000 * 60)) / 1000);
          setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s left`);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [active]);

  // Function to handle copy-to-clipboard
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${label} copied to clipboard!`);
    });
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-[6000] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-8 w-8 shadow-md"
              onClick={() => setActive(null)}
            >
              ✖
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl shadow-lg"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={900}
                  height={900}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-90 object-cover bg-white"
                />
              </motion.div>
              <div className="p-4 space-y-3">
                <motion.h3 className="font-bold text-lg text-neutral-700 dark:text-neutral-200">
                  {active.title}
                </motion.h3>
                <motion.p className="text-neutral-600 dark:text-neutral-400">
                  {active.day}
                </motion.p>
                <motion.p 
                  onClick={() => copyToClipboard(active.meetingId, "Meeting ID")}
                  className="text-sm font-medium text-yellow-600 cursor-pointer hover:underline"
                >
                  Meeting ID: {active.meetingId}
                </motion.p>
                <motion.p 
                  onClick={() => copyToClipboard(active.passCode, "Passcode")}
                  className="text-sm font-medium text-yellow-600 cursor-pointer hover:underline"
                >
                  Passcode: {active.passCode}
                </motion.p>
                {timeRemaining === "The meeting is now open!" ? (
                  <motion.a
                    href={active.ctaLink}
                    target="_blank"
                    className="block text-center px-5 py-3 text-sm rounded-full font-bold bg-yellow-500 text-white hover:bg-yellow-600 transition"
                  >
                    {/* Video icon (inline SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                      />
                    </svg>
                    Join Now
                  </motion.a>
                ) : (
                  <button
                    disabled
                    className="block w-full text-center px-5 py-3 text-sm rounded-full font-bold bg-gray-400 text-white cursor-not-allowed"
                  >
                    {timeRemaining}
                  </button>
                )}
                <motion.div className="text-neutral-600 text-sm dark:text-neutral-400 overflow-auto">
                  {active.content()}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full gap-4 mb-40 mt-10 px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-3 flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition"
          >
            <div className="flex gap-3 items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={900}
                  height={900}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 rounded-lg object-cover bg-white"
                />
              </motion.div>
              <div>
                <motion.h3 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
                  {card.title}
                </motion.h3>
                <motion.p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {card.day}
                </motion.p>
              </div>
            </div>
            <motion.button className="px-4 py-2 text-xs rounded-full font-bold bg-gray-100 hover:bg-yellow-500 hover:text-white text-black transition">
              View
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards: EventCard[] = [
  {
    day: "Every Sunday, 9:00 PM (PHT)",
    title: "Director's Night",
    src: "/images/meetings/1.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-23T21:00:00+08:00", 
    content: () => <p>Join us to learn about the business and hear success stories from top leaders.</p>
  },
  {
    day: "Every Monday, 8:00 PM (PHT)",
    title: "The Science Behind",
    src: "/images/meetings/2.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-24T20:00:00+08:00", 
    content: () => <p>Join us for The Science Behind, a Zoom presentation exploring the principles behind our flagship product, 
      its scientific foundation, and how it supports better understanding of medical conditions for improved well-being.</p>
  },
  {
    day: "Every Tuesday, 8:00 PM (PHT)",
    title: "Grow Your Income",
    src: "/images/meetings/3.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-25T20:00:00+08:00", 
    content: () => <p>Join us for Grow Your Income with iGift and master the iGift Marketing Compensation Plan to maximize your earnings.</p>
  },
  {
    day: "Every Wednesday, 8:00 PM (PHT)",
    title: "iGift Advantage",
    src: "/images/meetings/4.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-26T20:00:00+08:00", 
    content: () => <p>Join us for iGift Advantage, a Zoom presentation covering our company overview, product knowledge, and marketing compensation plan.</p>
  },
  {
    day: "Every Thursday, 8:00 PM (PHT)",
    title: "Success Made Simple",
    src: "/images/meetings/5.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-27T20:00:00+08:00", 
    content: () => <p>Join us for iGift Success Made Simple, where new distributors will learn business fundamentals, 
      network marketing essentials, and best practices to avoid common pitfalls.</p>
  },
  {
    day: "Every Friday, 8:00 PM (PHT)",
    title: "iGift 360",
    src: "/images/meetings/6.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-28T20:00:00+08:00", 
    content: () => <p>Join us for iGift 360, a quick and insightful presentation covering our company overview, 
      product highlights, marketing plan, and weekly updates, including success stories and testimonials.</p>
  },
  {
    day: "Every Saturday, 8:00 PM (PHT)",
    title: "Technical Training for Distributors",
    src: "/images/meetings/7.png",
    ctaText: "Join Now",
    ctaLink: "https://us06web.zoom.us/j/84792530660?pwd=dDxtrfCGB3SaaPiyERuthBHf4RWb0U.1",
    meetingId: "847 9253 0660",
    passCode: "123456",
    nextMeeting: "2025-03-29T20:00:00+08:00", 
    content: () => <p>Join us for Technical Training for Distributors, where new and existing distributors will 
      learn how to navigate the network dashboard, use the website, and explore new iGift services.</p>
  },
];
