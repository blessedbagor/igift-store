"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function EventsList() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));
  
  return (
    <>
<AnimatePresence>
  {active && typeof active === "object" && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 h-full w-full z-10"
    />
  )}
</AnimatePresence>
<AnimatePresence>
  {active && typeof active === "object" ? (
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
        <CloseIcon />
      </motion.button>
      <motion.div
        layoutId={`card-${active.title}-${id}`}
        ref={ref}
        className="w-full max-w-[95vw] sm:max-w-[500px] h-auto max-h-[95vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg"
      >
        <motion.div layoutId={`image-${active.title}-${id}`}>
          <Image
            priority
            width={900}
            height={900}
            src={active.src}
            alt={active.title}
            className="w-full h-[450px] sm:h-[500px] object-cover object-top bg-white"
          />
        </motion.div>
        <div className="p-4 space-y-3">
          <motion.h3
            layoutId={`title-${active.title}-${id}`}
            className="font-bold text-neutral-700 dark:text-neutral-200 text-lg sm:text-xl"
          >
            {active.title}
          </motion.h3>
          <motion.p
            layoutId={`day-${active.day}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base"
          >
            {active.day}
          </motion.p>
          <motion.a
            layoutId={`button-${active.title}-${id}`}
            href={active.ctaLink}
            target="_blank"
            className="block text-center px-5 py-3 text-sm sm:text-base rounded-full font-bold bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            {active.ctaText}
          </motion.a>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-neutral-600 text-xs sm:text-sm h-32 sm:h-fit pb-4 flex flex-col gap-3 overflow-auto dark:text-neutral-400 scrollbar-hide"
          >
            {typeof active.content === "function"
              ? active.content()
              : active.content}
          </motion.div>
        </div>
      </motion.div>
    </div>
  ) : null}
</AnimatePresence>
<ul className="max-w-5xl mx-auto w-full gap-4 mb-40 mt-10 px-4">
  {cards.map((card, index) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-3 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition"
    >
      <div className="flex gap-3 flex-col md:flex-row items-center">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={900}
            height={900}
            src={card.src}
            alt={card.title}
            className="h-32 w-32 md:h-20 md:w-20 rounded-lg object-cover object-top bg-white"
          />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 text-sm sm:text-base"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`day-${card.day}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm"
          >
            {card.day}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`button-${card.title}-${id}`}
        className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold bg-gray-100 hover:bg-yellow-500 hover:text-white text-black mt-3 md:mt-0 transition"
      >
        {card.ctaText}
      </motion.button>
    </motion.div>
  ))}
</ul>
</>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    day: "Every Sunday, 9:00 AM (PHT).",
    title: "Director's Night",
    src: "/earn/1.png",
    ctaText: "Join Now",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=rVvg6DEM3MM-H-Mr&t=3860",
    content: () => {
      return (
        <p>
          With iGift's Direct Selling Bonus, you earn a fixed profit from every sale. 
          A Family Size Immuno Boost Advance+ costs $16 for distributors and sells for $30, 
          giving a $14 profit per bottle. Selling 10 bottles a day earns $140 (₱7,840).
        </p>
      );
    },
  },
  {
    day: "Earn from $5 to $20 bonus.",
    title: "Direct Referral Bonus",
    src: "/earn/2.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=z_QL2Xb8qtdQoY6L&t=4027",
    content: () => {
      return (
        <p>
          Earn by helping others save on product packages! 
          Get $5 for a Bronze Package, $10 for a Silver Package, and $20 for a Gold Package. 
        </p>
      );
    },
  },

  {
    day: "Earn 10% bonus up to 10th level.",
    title: "Unilevel Indirect Referral Bonus",
    src: "/earn/3.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=zetO1xnkcGbGrPnh&t=4270",
    content: () => {
      return (
        <p>
          With the Indirect Referral Bonus, you earn 10% of your downline's Direct Referral Bonus 
          without reducing their earnings. 
          Bronze earns up to 5 levels deep, Silver up to 7 levels, 
          and Gold up to 10 levels. 
        </p>
      );
    },
  },
  {
    day: "Earn $8-$32 bonus.",
    title: "Sales Match Bonus",
    src: "/earn/4.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=KPDrekkHjGz_F96O&t=4709",
    content: () => {
      return (
        <p>
          The Sales Match Bonus pays $8 for every 45PV 
          matched on both your left and right sales teams. 
          Bronze earns up to 8 pairs daily ($64), 
          Silver up to 16 pairs ($128), 
          and Gold up to 32 pairs ($256).
        </p>
      );
    },
  },
  {
    day: "Earn 10% bonus.",
    title: "Royalty Sales Match Bonus",
    src: "/earn/5.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=bBqcDUDYmkoZjgJ6&t=4980",
    content: () => {
      return (
        <p>
          The Royalty Sales Match Bonus gives you a 10% bonus 
          from the Sales Match Bonus earned by your personally sponsored downlines. 
        </p>
      );
    },
  },
  {
    day: "Earn Point Value from retail sales.",
    title: "Redundant Binary Bonus ",
    src: "/earn/6.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=oLjOcbzUIIt19KLV&t=5209",
    content: () => {
      return (
        <p>
          The Redundant Binary Bonus allows you to earn from PV generated 
          by retail product purchases within your sales organization. 
          Once you accumulate 45PV on the left and 45PV on the right, 
          whether from package sales or retail purchases, 
          you earn an $8 bonus per pair.
        </p>
      );
    },
  },
  {
    day: "Earn 1,260PV left and right to qualify.",
    title: "Leadership Profit Sharing Bonus",
    src: "/earn/7.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=bYQVVQLJBsqfkwOj&t=6496",
    content: () => {
      return (
        <p>
          The Leadership Profit Sharing Bonus is for Gold Account Holders who earn 
          1,260PV on both left and right teams to reach 1-Star Rank, with ranks going up to 10-Star. 
          To advance, you must also help your directly sponsored members rank up, 
          promoting teamwork and shared success.
        </p>
      );
    },
  },
  {
    day: "Design for students or livelihood organizations.",
    title: "Affiliate Matrix Program Bonus",
    src: "/earn/8.png",
    ctaText: "Learn More",
    ctaLink: "https://youtu.be/xOD-tN3MShM?si=otOEiaN2uxisQDA5&t=5548",
    content: () => {
      return (
        <p>
          The Affiliate Matrix Program Bonus is designed to help students, 
          livelihood organizations, and individuals who can only 
          afford a $12 bottle of Immuno Boost for personal use. 
          This program provides an opportunity to earn and uplift 
          themselves through effort and participation.
        </p>
      );
    },
  },
];
