import React from "react";
import { Link } from "react-router-dom";
import { doctors } from "../data/doctors";
import styles from "../css/DoctorsSection.module.css";

export default function DoctorsSection() {
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Meet the Doctors</h3>

        <div className={styles.doctorsGrid}>
          {doctors.map((d) => (
            <div key={d.id} className={styles.doctorCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={d.imageSrc}
                  alt={d.name}
                  className={styles.doctorImg}
                  loading="lazy"
                />
              </div>

              <div className={styles.infoWrapper}>
                <div className={styles.doctorName}>{d.name}</div>
                <div className={styles.doctorRole}>{d.summary}</div>

                <Link to={`/doctors#${d.id}`} className={styles.learnMoreLink}>
                  Learn More <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
