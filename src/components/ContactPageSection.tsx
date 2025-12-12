import React from "react";
import styles from "../css/ContactPageSection.module.css";

// Simple Icons
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ContactPageSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {/* Card 1: Visit Us */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <MapPinIcon />
            <h2 className={styles.cardTitle}>Visit Us</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              <strong>Chrome Dental</strong>
              <br />
              1551 Park Place, Suite 300
              <br />
              Green Bay, WI 54304
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaButton}
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Card 2: Office Hours */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <ClockIcon />
            <h2 className={styles.cardTitle}>Office Hours</h2>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.hoursRow}>
              <span className={styles.hoursLabel}>Mon - Fri</span>
              <span>9:00 AM – 5:00 PM</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.hoursLabel}>Sat - Sun</span>
              <span>Closed</span>
            </div>
          </div>
          {/* No CTA for Office Hours as requested */}
        </div>

        {/* Card 3: Get in Touch */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <PhoneIcon />
            <h2 className={styles.cardTitle}>Get in Touch</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              Call us to book an appointment or ask any questions about your
              dental health.
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <a href="tel:9203655365" className={styles.ctaButton}>
              (920) 365-5365
            </a>
          </div>
        </div>

        {/* Card 4: Book Online */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <CalendarIcon />
            <h2 className={styles.cardTitle}>Book Online</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              Schedule your visit quickly and easily through our online portal.
            </p>
          </div>
          <div className={styles.ctaWrapper}>
            <a href="/book-online" className={styles.ctaButton}>
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageSection;
