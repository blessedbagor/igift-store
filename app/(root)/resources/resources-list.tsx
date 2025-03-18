"use client";

import {Carousel} from "@/components/ui/animated-carousel";
export function ResourcesList() {
  const slideData = [
    {
      button: "View Slides",
      src: "/images/resources/1.png",
      href: "resource/slides/become-a-distributor",
    },
    {
        button: "View Slides",
        src: "/images/resources/2.png",
        href: "resource/slides/become-a-stockist",
    },
    {
        button: "View Slides",
        src: "/images/resources/3.png",
        href: "resource/slides/learn-fast-track",
    },
    {
        button: "View Slides",
        src: "/images/resources/4.png",
        href: "resource/slides/health-forum",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-[50rem] py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
