import PageHeader from "../components/PageHeader";
import PageCtaBanner from "../components/PageCtaBanner";
import { Seo } from "../seo/Seo";
import { PRACTICE } from "../config";
import NewPatientHeroSection from "../components/NewPatientHeroSection";
import SpecialOffers from "../components/SpecialOffers";
import DentalServices from "../components/NewPatientDentalServices";
import NewPatientExpertTeam from "../components/NewPatientExpertTeam";
import NewPatientBenefits from "../components/NewPatientBenefits";
import newPatientIcon from "../img/services/dental-insurance.png";
import Testimonials from "../components/Testimonials";

export default function NewPatients() {
  return (
    <>
      <Seo
        title="New Patients | Chrome Dental"
        description="Start your first visit with Chrome Dental. We make scheduling, insurance, and paperwork simple."
      />
      <PageHeader
        title="New Patients"
        icon={newPatientIcon}
        description="Welcome to Chrome Dental. Book online or call us and we’ll guide you through your first visit, insurance details, and any paperwork you need."
        variant="service"
      />
      <NewPatientHeroSection />
      <SpecialOffers />
      <NewPatientExpertTeam />
      <NewPatientBenefits />
      <DentalServices />
      <Testimonials />
      <PageCtaBanner
        title="Ready to schedule?"
        description="Book online anytime or call our team—we’re happy to help new patients get started."
        primaryLabel="Book Online"
        primaryHref={PRACTICE.bookingUrl}
        secondaryLabel={`Call ${PRACTICE.phone}`}
        secondaryHref={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
      />
    </>
  );
}
