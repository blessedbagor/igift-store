"use client";

import {
  IconCircleNumber1,
  IconCircleNumber2,
  IconCircleNumber3,
  IconCircleNumber4,
  IconCircleNumber5,
  IconCircleNumber6,
  IconCircleNumber7,
  IconCircleNumber8,
} from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function FeaturesCard() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-20">
      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber1 className="h-12 w-12 text-black dark:text-gold" />}
        title="Zero Membership Fees"
        description="Just purchase any product package to unlock all iGift services. No hidden costs or monthly dues."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber2 className="h-12 w-12 text-black dark:text-gold" />}
        title="33% Lifetime Product Discounts"
        description="Save on every order and keep more money in your pocket forever."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber3 className="h-12 w-12 text-black dark:text-gold" />}
        title="FREE $1,000 Replicated Sales Landing Page"
        description="Get a professional, ready-to-use sales page to grow your business and generate income effortlessly."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber4 className="h-12 w-12 text-black dark:text-gold" />}
        title="FREE $500 Sales & Personal Development Training"
        description="Gain proven strategies from the 'Success Made Simple Formula' to grow your career and confidence."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber5 className="h-12 w-12 text-black dark:text-gold" />}
        title="FREE $199 Lifetime Access to iGift Learn"
        description="Connect with growth-focused individuals and expand your knowledge to scale your business."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber6 className="h-12 w-12 text-black dark:text-gold" />}
        title="FREE $20/Month Access to iGift Care"
        description="Consult doctors anytime and stay on top of your health without breaking the bank."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber7 className="h-12 w-12 text-black dark:text-gold" />}
        title="Continuous Health & Income Education"
        description="Stay informed, healthy, and empowered with ongoing health and wealth creation education."
      />

      <GridItem
        area="md:[grid-area:auto] xl:[grid-area:auto]"
        icon={<IconCircleNumber8 className="h-12 w-12 text-black dark:text-gold" />}
        title="8 Proven Ways to Earn"
        description="Unlock multiple income streams and build lasting financial stability."
      />

</ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={5}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h2 className="pt-0.5 text-md font-semibold font-sans -tracking-4 md:text-lg/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h2>
              <h3
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400 font-mono"
              >
                {description}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>

  );
};
