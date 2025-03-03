"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card, CardContent } from "@/components/ui/card";
import { getReviewStats } from "@/lib/actions/review.actions";
import Rating from "@/components/shared/product/rating";
import { ColourfulText } from "@/components/ui/colorful-text";

export function ProductSection() {
  const [reviewStats, setReviewStats] = useState<{ averageRating: string; totalReviews: number }>({ 
    averageRating: "0.00", 
    totalReviews: 0 
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const reviewStatsResponse = await getReviewStats();
        setReviewStats(reviewStatsResponse);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className='text-3xl md:text-6xl font-bold mx-auto text-center'>  
        <ColourfulText text="INTRODUCING" />

      </h2>
      <GridItem
        imageSrc="/images/strength.png"
        title="Immuno Boost Advance+"
        description="iGift Immuno Boost Advance+ gives your body the essential nutrients it needs to strengthen your immune system, boost your energy, and help you stay healthy so you can perform at your best and feel invincible.*"
        reviewStats={reviewStats} 
      />
    </div>
  );
}

interface GridItemProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  reviewStats: { averageRating: string; totalReviews: number };
}

const GridItem = ({ imageSrc, title, description, reviewStats }: GridItemProps) => {
  return (
    <div className="relative max-w-full lg:max-w-3xl mx-auto h-full rounded-2.5xl border-transparent p-2 md:rounded-3xl md:p-8 mt-8 flex flex-col items-center text-center">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
      <div className="relative flex flex-col justify-center items-center gap-6 overflow-hidden rounded-xl border-0.75 p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-8">
        <div className="relative flex flex-col justify-center items-center gap-3">
          <div className="w-500 h-500 rounded-lg border border-gray-600 overflow-hidden">
            <Image src={imageSrc} alt="Product Image" width={500} height={500} />
          </div>
          <div className="space-y-3">
            <h3 className="text-4xl md:text-5xl font-semibold text-black dark:text-white">{title}</h3>
            <div className="flex p-4 text-xl dark:text-neutral-300 rounded-xl max-w-3xl mx-auto justify-center items-center text-center">
            <span className='font-bold rounded-full bg-gold px-2 dark:text-black'>{Number(reviewStats.averageRating).toFixed(1)}</span>
            <span className="mx-3">
                <Rating value={Number(reviewStats.averageRating)} />
            </span>
            <p className="hidden md:block"> of <span className='font-bold'>{Number(reviewStats.totalReviews)}</span> Trusted Customer Reviews</p>
            <p className="block md:hidden font-mono font-extrabold"> ({Number(reviewStats.totalReviews)})</p>
            </div>
            <h4 className="max-w-3xl text-lg md:text-xl text-black dark:text-neutral-400 font-sans">
              {description}
            </h4>
            <Card className="max-w-3xl border-transparent p-4 dark:bg-transparent mx-auto">
            <CardContent className="flex flex-col justify-center text-center md:text-left w-full">
          <table className="min-w-full table-auto border-collapse rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
                <th className="px-4 py-2 text-left border-b border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-4 py-2 border-b border-gray-300 font-bold">Serving Size</td>
                <td className="px-4 py-2 border-b border-gray-300 font-bold text-center">500mg</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300">Servings per bottle</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">30caps</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 font-bold text center">Each 500mg caps contains:</td>
                <td className="px-4 py-2 border-b border-gray-300"></td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Fortivit Micronutrient Premix™</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">100mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Sodium Ascorbate</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">100mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Inulin Fiber</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">100mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Rosehips Extract</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">100mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Citrus Bioflavonoids</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">85mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Astaxanthin</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">10mg</td>
              </tr>
              <tr>
                <td className="px-5 py-2 border-b border-gray-300">Silicon Dioxide (Anti-Caking Agent)</td>
                <td className="px-4 py-2 border-b border-gray-300 text-center">5mg</td>
              </tr>
            </tbody>
          </table>
          <div className="rounded-2xl mt-2 mx-auto">
          <div className="flex-shrink-0">
            <Image
              src="/images/badges.svg"
              alt="Badges"
              width={450}
              height={90}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <h2 className='text-2xl md:text-3xl font-bold text-center mt-12 uppercase'>Suggested Use:</h2>
        <p className="text-xl md:text-xl mt-6 text-center">
            Take one capsule daily, preferably with a meal or as prescribed by Physician.
        </p>
        <p className="max-w-2xl text-lg md:text-sm mt-6 text-center">

            Some customers feel the benefits within the first week, 
            while others may need more time—it all depends on your body&apos;s unique needs, 
            vitamin levels, and health history. 
            Think of Immuno Boost Advance+ as a gradual investment in your long-term health, 
            where your body absorbs and utilizes nutrients over time for lasting results.
        </p>
        </CardContent>
      </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
