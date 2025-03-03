"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function ProblemAgitateCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full my-40">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-neutral-800 hover:bg-red-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          More Sick Days, More Stress
          </h2>
          <p className="mt-4 sm:pb-16 text-left  text-base/6 text-neutral-200">
          A <span className='font-extrabold text-lg text-gold'>30%</span> increase in missed workdays means ₱51,084 lost annually due to preventable illnesses.
          </p>
        </div>
        <Image
          src="/images/30-percent.png"
          width={280}
          height={280}
          alt="30% increase in missed workdays "
          className="absolute -right-4 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-neutral-800 hover:bg-red-800">
        <h2 className="max-w-80  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Productivity Drops 📉
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Frequent illnesses lead to a <span className='font-extrabold text-lg text-gold'>40%</span> decrease in energy and performance, making it harder to keep up with responsibilities.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 hover:bg-neutral-800 bg-red-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Rising Healthcare Costs
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Unexpected doctor visits and medications add up, costing families an extra <span className=' text-lg text-gold'>₱50,000</span> every year.
          </p>
        </div>
        <Image
          src="/images/50k-peso.png"
          width={280}
          height={280}
          alt="linear demo image"
          className="absolute -right-4 -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
