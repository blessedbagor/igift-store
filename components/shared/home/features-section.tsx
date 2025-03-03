'use client';
import {FeaturesCard} from './features-card';

export function FeaturesSection () {
    return ( <>
    <div className="rounded-md my-20 mb-40 px-8 flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
          <h2 className='my-20 text-4xl lg:text-6xl font-bold text-center'>
          Why iGift? These 8 Perks Say It All.
            </h2>
          <FeaturesCard />
        </div>
        </> 
        );
}
 
export default FeaturesSection;