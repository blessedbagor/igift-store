"use client";

import { Truck, DollarSign, Zap, WalletCardsIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Benefits() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<Truck className="h-12 w-12 text-black dark:text-gold" />}
    title="Free Shipping"
    description="Free shipping on orders of $75 or more."
  />

  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<DollarSign className="h-12 w-12 text-black dark:text-gold" />}
    title="Earn Rewards"
    description="Earn through 8 income streams."
  />

  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<WalletCardsIcon className="h-12 w-12 text-black dark:text-gold" />}
    title="Flexible Payments"
    description="Get paid via GCash, USDT or Bank Transfer."
  />

  <GridItem
    area="md:[grid-area:auto] xl:[grid-area:auto]"
    icon={<Zap className="h-12 w-12 text-black dark:text-gold" />}
    title="Daily Payouts"
    description="Withdraw as little as $1.00 daily."
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
          borderWidth={3}
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
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400 font-mono"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
