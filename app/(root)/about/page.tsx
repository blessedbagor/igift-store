
import { Metadata } from "next";
import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";
import { AboutHeroSection } from "./hero-section";
import { WhoWeAre } from "./who-we-are";
import { ServiceList } from "../services/service-list";
import { SocialProofSection } from "@/components/shared/home/social-proof-section";


export const metadata: Metadata = {
  title: 'About',
  description: 'We offer premium food supplements, innovative opportunities, and digital solutions to help you live your best life.',
  openGraph: {
    title: 'About Us',
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

const Aboutpage = async () => {
  return ( 
  <>
  <AboutHeroSection />
  <div className='w-full mx-auto px-12 dark:bg-black/[0.96] border-t-2 rounded-full antialiased dark:bg-grid-white/[0.03] overflow-hidden space-y-8 pt-4'>
  <WhoWeAre />
  <ServiceList />
  <SocialProofSection />
  <HoverBottomSection />
   </div>
  </> 
  );
}
 
export default Aboutpage ;