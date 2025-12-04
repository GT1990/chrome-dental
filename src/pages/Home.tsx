import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import NewPatientsBanner from "../components/NewPatientsBanner";
import InsuranceSection from "../components/InsuranceSection";
import Testimonials from "../components/Testimonials";
import DoctorsSection from "../components/DoctorsSection";
import MapContact from "../components/MapContact";
import { Seo } from "../seo/Seo";
import { PRACTICE } from "../config";
import SocialProofRibbon from "../components/SocialProofRibbon";

export default function Home() {
  return (
    <>
      <Seo
        title="Chrome Dental | Dentist in Green Bay, WI"
        description="Compassionate, modern dental care for families in Green Bay. Prompt emergency appointments. ForwardHealth (Medicaid) & most insurances accepted."
      />
      <Hero
        title="Exceptional Care for Your Smile"
        subline="Cosmetic and Family Dentistry in Green Bay."
        bookingHref={PRACTICE.bookingUrl}
      />
      <SocialProofRibbon />
      <ServicesGrid limit={5} showViewAll />
      <NewPatientsBanner />
      <InsuranceSection />
      <Testimonials />
      <DoctorsSection />
      <MapContact />
    </>
  );
}
