"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingImage } from "@/components/ui/infinite-moving-image";
import { getOrderSummary } from "@/lib/actions/order.actions";
import { APP_NAME } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";



export function CompanySection() {
    const words = ["OFWs", "Doctors", "Health Enthusiasts",  "Senior Citizens", "Pharmacists",  "Entrepreneurs",  "Uniform Personnels", "Athletes", "IT Professionals", "Working Moms", "Network Builders", "Distributors", "Students", "Workers",  "Public Servants",];
    const [updatedUsersCount, setUpdatedUsersCount] = useState(2040);
  useEffect(() => {
    async function fetchSummary() {
      try {
        const summary = await getOrderSummary();
        setUpdatedUsersCount(summary.usersCount + 2040);
      } catch (error) {
        console.error("Failed to fetch order summary:", error);
      }
    }

    fetchSummary();
  }, []);
  
    return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">

        <Image 
        src="/images/logo.svg" 
        alt={`${APP_NAME} logo`} 
        height={90}
        width={90}
        priority={true}
        className='my-8'
        />

    <h2 className='mb-4 text-lg lg:text-xl font-bold text-center'>
        iGift is trusted by
    </h2>
    <div className='mb-8 text-2xl lg:text-6xl font-extrabold font-sans text-center'>
        <FlipWords words={words} /> <br />
    </div>
    <div className='text-lg lg:text-2xl mb-20 lg:max-w-2xl max-w-full text-center mx-auto'>
        Since October 2024, over  
        <span className="font-extrabold mx-2 text-gold">{formatNumber(updatedUsersCount)} Happy Customers</span>  
         have purchased and recommended iGift Immuno Boost Advance+ for its health benefits.
    </div>

      <InfiniteMovingImage
        items={image}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const image = Array.from({ length: 53 }, (_, i) => ({
    image: `/images/happy-customers/${i + 1}.png`
  }));
  
