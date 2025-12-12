import PageHeader from "../components/PageHeader";
import ContactPageSection from "../components/ContactPageSection";
import contactIcon from "../img/services/prevent.png";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        icon={contactIcon}
        description=" "
        variant="service"
      />
      <ContactPageSection />
    </>
  );
}
