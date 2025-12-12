import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import InsuranceSection from "../components/InsuranceSection";
import Testimonials from "../components/Testimonials";
import DoctorsSection from "../components/DoctorsSection";
import { Seo } from "../seo/Seo";
import { PRACTICE } from "../config";
import SocialProofRibbon from "../components/SocialProofRibbon";
import ExclusiveNewPatientBanner from "../components/ExclusiveNewPatientBanner";

export default function Home() {
  return (
    <>
      <Seo
        title="Chrome Dental | Dentist in Green Bay, WI"
        description="Compassionate, modern dental care for families in Green Bay. Prompt emergency appointments. ForwardHealth (Medicaid) & most insurances accepted."
      />
      <Hero
        titleL1="Exceptional Care"
        titleL2="for Your Smile"
        subline="Cosmetic and Family Dentistry in Green Bay."
        bookingHref={PRACTICE.bookingUrl}
      />
      <SocialProofRibbon />
      <ServicesGrid limit={5} showViewAll />
      <InsuranceSection />
      <Testimonials />
      <ExclusiveNewPatientBanner />
      <DoctorsSection />
    </>
  );
}
