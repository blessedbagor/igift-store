
import { Metadata } from "next";
import { SocialProofSection } from "@/components/shared/home/social-proof-section";
import PackageSection from "@/components/shared/home/choose-package-section";
import FrequentlyAskedQuestions from "@/components/shared/sales-page/faqs";
import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";
import { AboutHeroSection } from "./product-hero-section";
import {ProductSection} from "./product-section";
import Ingredients from "./ingredients";

export const metadata: Metadata = {
  title: 'iGift | Products',
  description: 'We offer premium food supplements, innovative opportunities, and digital solutions to help you live your best life.',
  openGraph: {
    title: 'iGift | Products',
    description: 'iGift fuels your best life with wellness, income, and digital solutions.', 
    siteName: 'iGift',
    images: [
      {
        url: 'https://igift.ph/images/home.png', 
        width: 1200,
        height: 630,
        alt: 'iGift - Your Best Life',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const Productpage = async () => {
  return ( 
  <>
  <AboutHeroSection />
  <div className='w-full mx-auto px-12 dark:bg-black antialiased dark:bg-grid-white/[0.04] overflow-hidden space-y-8 pt-4'>
  <ProductSection />
  <Ingredients />
  <SocialProofSection />
  <PackageSection />
  <div className='max-w-5xl text-6xl font-bold mx-auto text-center mt-40'>Frequently Asked Questions</div>
  <FrequentlyAskedQuestions />
  <HoverBottomSection />
   </div>
  </> 
  );
}
 
export default Productpage ;