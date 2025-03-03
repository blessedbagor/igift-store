"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import MeetTheTeam from "./meet-the-team";




export function WhoWeAre() {

  
    return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">

        <Image 
        src="/images/logo.svg" 
        alt={`${APP_NAME} logo`} 
        height={120}
        width={120}
        priority={true}
        className='my-8'
        />

<h2 className="mb-4 text-2xl lg:text-4xl font-bold text-center uppercase dark:text-gray-200">
    Our story
</h2>

<div className="text-md mb-20 lg:max-w-xl max-w-full dark:text-gray-400">
    iGift Marketing Innovation Technology Inc. (iGift) started in <span className='font-bold ttext-gray-300'>2023</span> with a simple idea—providing rewards like gift certificates. 
    But as we explored deeper, we encountered legal challenges that led us to rethink our approach.
    <br /><br />
    In early 2024, we took a step back and asked a bigger question: 
    <br/> 
    <span className='font-semibold text-gray-300'>
        How can we create something truly valuable, 
        high-quality, and accessible to everyone?
        </span> 
        <br/> <br/> 
         After months of research and consultation, we found our answer in dietary 
        supplements—products that are not only effective but also affordable, even for those earning minimum wage.
    <br /><br />
    By September 2024, our CEO, <span className='text-gray-300'>Melvin C. Botavara</span>,
    and COO, <span className='text-gray-300'>Melchor S. Legaspi</span>, 
    began sharing this vision with five close friends. 
    Just a month later, on October 7, 2024, we launched our first 
    product—<span className='font-bold text-gray-300'>Immuno Boost Advance+</span>.
    <br /><br />
    From those first five, the ripple effect began. 
    Five turned into 20, then 100, then 700, and finally 1,300 by the end of the year. 
    As of February 2025, we are proud to have over 1,500 happy customers who 
    not only use our products but also share them with their friends and family.
    <br /><br />
    We're just getting started, and we're building something special—together.
    </div>
        <MeetTheTeam />
</div>
  );
}
  
