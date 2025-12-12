import PageHeader from "../components/PageHeader";
import insuranceIcon from "../img/services/dental-insurance.png";
import InsuranceGrid from "../components/InsuranceGrid";
import PageCtaBanner from "../components/PageCtaBanner";
import { PRACTICE } from "../config";

export default function Insurance() {
  return (
    <>
      <PageHeader
        title="Insurance & Finance Options"
        icon={insuranceIcon}
        description="We Accept Almost All Insurances including Medicaid / BadgerCare and Flexible Financing and Payment Plans."
        variant="service"
      />
      <InsuranceGrid />
      <PageCtaBanner
        title="Have insurance questions?"
        description="Call our office and we’ll review your benefits, coverage details, and payment options."
        primaryLabel="Book Online"
        primaryHref={PRACTICE.bookingUrl}
        secondaryLabel={`Call ${PRACTICE.phone}`}
        secondaryHref={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
      />
    </>
  );
}
