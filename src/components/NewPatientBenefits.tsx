import React from "react";
import styles from "../css/NewPatientBenefits.module.css";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Custom Icons matching the screenshot design

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const LightningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const benefitsData: BenefitItem[] = [
  {
    title: "Family-Friendly Care",
    description:
      "Gentle treatment for patients of all ages, from toddlers to seniors",
    icon: <HeartIcon />,
  },
  {
    title: "PPO Insurance Accepted",
    description:
      "We work with most major insurance plans to maximize your benefits",
    icon: <CheckIcon />,
  },
  {
    title: "Gentle Modern Care",
    description:
      "Latest technology and techniques for comfortable, pain-free treatments",
    icon: <LightningIcon />,
  },
  {
    title: "Same-Day Availability",
    description:
      "Emergency appointments and convenient scheduling for busy families",
    icon: <ClockIcon />,
  },
];

const NewPatientBenefits: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {benefitsData.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconCircle}>{benefit.icon}</div>
            {/* Split title on new line if needed to match design */}
            <h3 className={styles.title}>
              {benefit.title
                .replace(" Care", "\nCare")
                .replace(" Accepted", "\nAccepted")
                .replace(" Availability", "\nAvailability")}
            </h3>
            <p className={styles.description}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPatientBenefits;
