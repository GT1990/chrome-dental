import React from "react";
import styles from "../css/SpecialOffers.module.css";

interface OfferProps {
  price: string;
  title: string;
  features: string[];
  disclaimer?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const offersData: OfferProps[] = [
  {
    price: "$49",
    title: "New Patient Exam",
    features: ["Comprehensive Exam", "Digital X-Rays", "Professional Cleaning"],
    disclaimer: "*For patients without insurance",
    buttonText: "Book Your $49 Visit",
  },
  {
    price: "$799",
    title: "Root Canal Treatment",
    features: [
      "Complete Root Canal Therapy",
      "Pain Relief Treatment",
      "Follow-up Care Included",
    ],
    disclaimer: "Starting at $799",
    buttonText: "Book Consultation",
  },
  {
    price: "0%",
    title: "Financing on Braces",
    features: [
      "No Interest Financing",
      "Flexible Payment Plans",
      "Quick Approval Process",
    ],
    disclaimer: "Subject to credit approval",
    buttonText: "Book Consultation",
  },
];

const SpecialOffers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Special Offers for New Patients</h2>

      <div className={styles.grid}>
        {offersData.map((offer, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.price}>{offer.price}</div>
            <h3 className={styles.cardTitle}>
              {offer.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < offer.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>

            <ul className={styles.featureList}>
              {offer.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>

            <p className={styles.disclaimer}>{offer.disclaimer || "\u00A0"}</p>

            <button className={styles.button} onClick={offer.onButtonClick}>
              {offer.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
