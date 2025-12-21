import PageHeader from "../components/PageHeader";
import { Seo } from "../seo/Seo";
import NewPatientExpertTeam from "../components/NewPatientExpertTeam";
import doctorsIcon from "../img/services/oral-surgen.png";

export default function Doctors() {
  return (
    <>
      <Seo
        title="Our Doctors | Chrome Dental"
        description="Meet the experienced Chrome Dental doctors delivering high-quality, patient-focused care in Green Bay."
      />
      <PageHeader
        title="Our Doctors"
        icon={doctorsIcon}
        description="Get to know the Chrome Dental team and see how we make every visit comfortable, clear, and focused on your goals."
        variant="service"
      />
      <NewPatientExpertTeam theme="light" showIntro={false} />
    </>
  );
}
