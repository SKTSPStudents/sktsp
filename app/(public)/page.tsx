import HeroCinematic from "@/components/sections/HeroCinematic";
import AboutSection from "@/components/sections/AboutSection";
import CurriculumPreview from "@/components/sections/CurriculumPreview";
import GurusPreview from "@/components/sections/GurusPreview";
import ParamparaTimeline from "@/components/sections/ParamparaTimeline";
import EventsGallery from "@/components/sections/EventsGallery";
import DonorMarquee from "@/components/sections/DonorMarquee";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";

export default function HomePage() {
    return (
        <>
            <HeroCinematic />
            <AboutSection />
            <CurriculumPreview />
            <GurusPreview />
            <ParamparaTimeline />
            <EventsGallery />
            <DonorMarquee />
            <AdmissionsCTA />
        </>
    );
}
