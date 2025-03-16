
import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";
import { EventsHeroSection } from "./event-hero-section";
import { EventsList } from "./event-list";

const EventsPage = () => {
    return ( <>
    <EventsHeroSection />
    <EventsList />
    <HoverBottomSection />
    </> );
}
 
export default EventsPage;