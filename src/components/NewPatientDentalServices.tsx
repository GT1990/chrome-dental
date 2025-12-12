import React from "react";
import styles from "../css/NewPatientDentalServices.module.css";

const BASE_URL = import.meta.env.BASE_URL;

interface ServiceItem {
  title: string;
  description: string;
  imageSrc: string; // URL to your image
  linkUrl: string;
}

const services: ServiceItem[] = [
  {
    title: "Emergency Dentistry",
    description: "Same-day relief for dental pain and emergencies",
    imageSrc: `${BASE_URL}img/new-patient/np-emergency-dental.avif`,
    linkUrl: "#book-emergency",
  },
  {
    title: "Root Canals",
    description: "Pain-free root canals to protect and preserve natural teeth",
    imageSrc: `${BASE_URL}img/new-patient/np-root-canals.avif`,
    linkUrl: "#book-root-canal",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks and feels natural",
    imageSrc: `${BASE_URL}img/new-patient/np-dental-implants.webp`,
    linkUrl: "#book-implants",
  },
  {
    title: "Orthodontics",
    description: "Braces or aligners designed for comfort and results",
    imageSrc: `${BASE_URL}img/new-patient/np-orthodontics.avif`,
    linkUrl: "#book-ortho",
  },
];

const DentalServices: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Complete Dental Services</h2>
        <p className={styles.subheading}>
          Comprehensive care for your entire family's dental needs
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={service.imageSrc}
                alt={service.title}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.linkUrl} className={styles.link}>
                Book Appointment <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalServices;
