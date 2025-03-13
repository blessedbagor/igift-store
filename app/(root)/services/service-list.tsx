"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

const pinData = [
  {
    title: "/care.igift.com.ph",
    href: "https://care.igift.com.ph",
    heading: "TeleHealth Services",
    description: "Access expert telehealth services for medical, mental health, and wellness support—anytime, anywhere."
  },
  {
    title: "/learn.igift.com.ph",
    href: "https://learn.igift.com.ph",
    heading: "Community Learning",
    description: "Join a supportive community to develop sales skills, leadership, personal growth, and health awareness."
  },
  {
    title: "/igiftmit.com",
    href: "https://igiftmit.com",
    heading: "Livelihood Program",
    description: "Achieve financial independence through personal selling, team development, and residual income."
  },
];

export function ServiceList() {
  return (
  <div className="h-auto w-full flex items-center justify-center py-8">
  <div className="max-w-7xl flex flex-wrap justify-center gap-6">
    {pinData.map((pin, index) => (
      <PinContainer key={index} title={pin.title} href={pin.href}>
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl sm:text-2xl text-slate-100">
            {pin.heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300">{pin.description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gold via-yellow-500 to-realGreen" />
        </div>
      </PinContainer>
    ))}
  </div>
</div>
  );
}
