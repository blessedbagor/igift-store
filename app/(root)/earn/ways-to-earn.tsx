"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function WaysToEarn() {
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
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[6000]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={900}
                height={900}
                src={active.src}
                alt={active.title}
                className="w-[500px] h-[500px] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top bg-white"
              />

              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-yellow-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full gap-4 mb-40 mt-20">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={900}
                  height={900}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-20 md:w-20 rounded-lg object-cover object-top bg-white"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-yellow-500 hover:text-white text-black mt-4 md:mt-0"
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
    description: "Earn up to 46.667% bonus.",
    title: "Direct Selling Bonus",
    src: "/earn/1.png",
    ctaText: "Learn More",
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
    description: "Earn from $5 to $20 bonus.",
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
    description: "Earn 10% bonus up to 10th level.",
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
    description: "Earn $8-$32 bonus.",
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
    description: "Earn 10% bonus.",
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
    description: "Earn Point Value from retail sales.",
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
    description: "Earn 1,260PV left and right to qualify.",
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
    description: "Design for students or livelihood organizations.",
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
