import React from "react";
import styles from "../css/NewPatientExpertTeam.module.css";

import { doctors } from "../data/doctors";

type NewPatientExpertTeamProps = {
  theme?: "dark" | "light";
  showIntro?: boolean;
};

const NewPatientExpertTeam: React.FC<NewPatientExpertTeamProps> = ({
  theme = "dark",
  showIntro = true,
}) => {
  return (
    <section
      className={`${styles.section} ${
        theme === "light" ? styles.lightTheme : ""
      }`}
    >
      <div className={styles.headingWrapper}>
        {showIntro && (
          <>
            <h2 className={styles.mainTitle}>Why Choose Chrome Dental?</h2>
            <p className={styles.subTitle}>
              Your trusted partner for complete family dental care
            </p>
          </>
        )}

        <h3 className={styles.sectionHeader}>Meet Our Expert Team</h3>
        <p className={styles.introText}>
          At Chrome Dental, we believe in clear, honest, and patient-focused
          care. Our experienced team is dedicated to creating a comfortable and
          welcoming place for every patient.
        </p>
      </div>

      <div className={styles.grid}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className={styles.card} id={doctor.id}>
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
