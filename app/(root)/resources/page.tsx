import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";
import { ResourcesHeroSection } from "./resources-hero-section";
import { ResourcesList } from "./resources-list";


const ResourcesPage = () => {
    return ( <>
    <ResourcesHeroSection />
    <ResourcesList />
    <HoverBottomSection />
    </> );
}
 
export default ResourcesPage;