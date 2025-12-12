import React from "react";
import styles from "../css/NewPatientHeroSection.module.css";
import officeImage from "../img/chromeDentalOfice.webp";

const NewPatientHeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Text Content */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Green Bay's Premier{" "}
            <span className={styles.accentText}>Dental Center</span>
          </h1>

          <p className={styles.subheadline}>
            Smile again with Confidence and get immediate relief for tooth pain.
          </p>

          <div className={styles.buttonGroup}>
            {/* Using anchor tags that look like buttons. Replace hrefs with real links/tel: */}
            <a href="tel:9203655365" className={styles.contactBtn}>
              (920) 365-5365
            </a>
            <a href="/book-online" className={styles.bookBtn}>
              Book Online Today
            </a>
          </div>

          <p className={styles.insuranceText}>
            We Accept Almost All Insurances including{" "}
            <span className={styles.insuranceHighlight}>
              Medicaid / BadgerCare
            </span>
          </p>

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              Same-day appointments available
            </li>
            <li className={styles.featureItem}>
              Flexible Financing and Payment Plans
            </li>
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className={styles.imageWrapper}>
          <img
            src={officeImage}
            alt="Chrome Dental Office Building exterior"
            className={styles.officeImage}
          />
        </div>
      </div>
    </section>
  );
};

export default NewPatientHeroSection;
