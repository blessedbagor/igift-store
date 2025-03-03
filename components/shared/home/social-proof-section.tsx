"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function SocialProofSection() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
      <h2 className='mb-20 text-4xl lg:text-6xl font-bold text-center'>What Happy Customers are talking...</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Masarap sa pakiramdam na marinig mo ang mga feedback ng customers mo na nakatulong sa kanilang mga karamdaman ang Igift immunoboost advance+,",
    name: "Marita Dugang",
    title: "Feb 10, 2025 via Facebook",
  },
  {
    quote:
      "tanggal lahat ng pagod mo kapag ang daming tao nagpapasalamat sayo dahil natulungan sila ng produkto [Immuno Boost Advance+]..",
    name: "Raymon Bartolo",
    title: "Feb 12, 2025 via Facebook",
  },
  {
    quote: "My 3rd purchase Bound to Hongkong 132 bottles  of ImmunoBoostAdvance+...",
    name: "Babylon Joy Cercado",
    title: "Feb 7, 2025 via Facebook",
  },
  {
    quote:
      "I saved 28% by Switching to Immunoboost Advance+...",
    name: "Artie Fajanilan",
    title: "Feb 17, 2025 via Facebook",
  },
  {
    quote:
      "There's a lot of junks out there in the market... but Immuno Boost Advance+ is a good stuff...",
    name: "Ronald Hudson",
    title: "Feb 13, 2025 via Youtube",
  },
];
