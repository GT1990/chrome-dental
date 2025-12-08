import React from "react";
// Standard imports usually provide the path string directly in Vite/Create-React-App
import drHussamJaberImg from "../img/doctors/dr-hussam-jaber.webp";
import drGauravSoodImg from "../img/doctors/dr-gaurav-sood.png";
import styles from "../css/DoctorsSection.module.css";

type Doctor = {
  name: string;
  tagline: string;
  photo: string; // In standard React imports, this is usually just a string path
  bioLink: string;
};

export default function DoctorsSection() {
  const docs = [
    {
      name: "Dr. Hussam Jaber",
      tagline:
        "Exceptional, patient-focused care grounded in advanced clinical expertise.",
      photo: drHussamJaberImg,
      bioLink: "/doctors/hussam-jaber.html", // .html extension if hosting static files
    },
    {
      name: "Dr. Gaurav Sood",
      tagline:
        "Exceptional, patient-focused care delivered with skill, precision, and comfort.",
      photo: drGauravSoodImg,
      bioLink: "/doctors/gaurav-sood.html",
    },
  ] satisfies Doctor[];

  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Meet the Doctors</h3>

        <div className={styles.doctorsGrid}>
          {docs.map((d, i) => (
            <div key={i} className={styles.doctorCard}>
              {/* Image Area */}
              <div className={styles.imageWrapper}>
                <img
                  src={d.photo}
                  alt={d.name}
                  className={styles.doctorImg}
                  loading="lazy"
                />
              </div>

              {/* Content Area */}
              <div className={styles.infoWrapper}>
                <div className={styles.doctorName}>{d.name}</div>
                <div className={styles.doctorRole}>{d.tagline}</div>

                {/* Standard HTML Link */}
                <a href={d.bioLink} className={styles.learnMoreLink}>
                  Learn More <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
