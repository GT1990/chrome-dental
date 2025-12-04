import React from "react";
// Make sure to adjust these paths if your folder structure changes
import drShazadImg from "../img/doctors/dr_shazad_alkurdi.png";
import drSyedImg from "../img/doctors/dr_syed.png";
import styles from "../css/DoctorsSection.module.css";

type Doctor = {
  name: string;
  role: string;
  photo: string;
};

export default function DoctorsSection() {
  const docs = [
    {
      name: "Dr. Shazad Alkurdi",
      role: "Cosmetic & General Dentistry",
      photo: drShazadImg,
    },
    { name: "Dr. Syed", role: "General Dentistry", photo: drSyedImg },
  ] satisfies Doctor[];

  return (
    <section className="section">
      <div className="container stack">
        {/* Header kept as requested */}
        <h3 className="section-title">Meet the Doctors</h3>

        {/* Grid layout using local module class for the grid structure if needed, 
            or relying on your global 'grid' class. I added a local class to be safe. */}
        <div className={`grid grid-2 ${styles.doctorsGrid}`}>
          {docs.map((d, i) => (
            <div key={i} className={styles.doctorCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={d.photo}
                  alt={d.name}
                  className={styles.doctorImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.doctorName}>{d.name}</div>
                <div className={`muted ${styles.doctorRole}`}>{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
