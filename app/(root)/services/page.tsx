import { CompanySection } from "@/components/shared/home/company-section";
import { ServiceHeroSection } from "./service-hero-section";
import { ServiceList } from "./service-list";
import FeaturesSection from "@/components/shared/home/features-section";
import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";

const ServicePage = () => {
    return ( <>
    <ServiceHeroSection />
    <ServiceList />
    <CompanySection />
    <div className="max-w-7xl mx-auto"><FeaturesSection /></div>
    <HoverBottomSection />
    </> );
}
 
export default ServicePage;