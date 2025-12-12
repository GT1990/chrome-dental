import React from "react";
import styles from "../css/NewPatientExpertTeam.module.css";

import drHussamJaberImg from "../img/doctors/dr-hussam-jaber.webp";
import drGauravSoodImg from "../img/doctors/dr-gaurav-sood.webp";

interface DoctorProps {
  name: string;
  imageSrc: string;
  bio: string[]; // Array of paragraphs for cleaner rendering
  trustText: string;
  funFact?: string;
}

const doctors: DoctorProps[] = [
  {
    name: "Dr. Hussam Jaber",
    // Replace string with your actual image variable or path
    imageSrc: drHussamJaberImg,
    bio: [
      "Dr. Hussam Jaber, DDS, MBA, is a skilled and caring dentist committed to delivering high-quality, comfortable, and modern dental care.",
      "Dr. Jaber completed his dental training at the VCU School of Dentistry, where he built strong expertise in restorative, surgical, and endodontic procedures. He also earned his first DDS degree from Ajman University and completed a General Practice Residency at the Royal Medical Services Hospitals in Amman, Jordan.",
      "To further strengthen his leadership and patient-centered philosophy, Dr. Jaber completed an MBA in Healthcare Management, enhancing his ability to deliver high-quality, efficient, and compassionate care.",
    ],
    // Extracted a sentence from your provided text to fit the "Trust" section design
    trustText:
      "With advanced clinical training and a gentle approach, Dr. Jaber focuses on helping patients feel confident, informed, and relaxed at every visit.",
    funFact:
      "Enjoys sushi, hot pot, and Korean barbecue, as well as playing badminton, swimming, and exploring new experiences.",
  },
  {
    name: "Dr. Gaurav Sood",
    // Replace string with your actual image variable or path
    imageSrc: drGauravSoodImg,
    bio: [
      "Dr. Sood earned his Bachelor of Dental Surgery in India before completing his Doctor of Dental Surgery degree at Loma Linda University in California.",
      "He is certified by The American Board of Dental Examiners (ADEX) and is passionate about providing high-quality, patient-focused dental care.",
    ],
    trustText:
      "Dr. Sood is known for his gentle touch, attention to detail, and commitment to excellence. He takes time to understand each patient's individual needs and works closely with them to achieve confident, healthy smiles that last.",
    funFact:
      "Enjoys traveling, exploring new cuisines, and spending time with family and friends.",
  },
];

const NewPatientExpertTeam: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainTitle}>Why Choose Chrome Dental?</h2>
        <p className={styles.subTitle}>
          Your trusted partner for complete family dental care
        </p>

        <h3 className={styles.sectionHeader}>Meet Our Expert Team</h3>
        <p className={styles.introText}>
          At Chrome Dental, we believe in clear, honest, and patient-focused
          care. Our experienced team is dedicated to creating a comfortable and
          welcoming place for every patient.
        </p>
      </div>

      <div className={styles.grid}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={doctor.imageSrc}
                alt={doctor.name}
                className={styles.doctorImage}
              />
            </div>

            <h4 className={styles.doctorName}>{doctor.name}</h4>

            <div className={styles.doctorBio}>
              {doctor.bio.map((paragraph, i) => (
                <p key={i} style={{ marginBottom: "1em" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.trustSection}>
              <h5 className={styles.trustHeader}>Why Patients Trust Him</h5>
              <p className={styles.trustText}>{doctor.trustText}</p>
            </div>

            {doctor.funFact && (
              <p className={styles.funFact}>{doctor.funFact}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPatientExpertTeam;
