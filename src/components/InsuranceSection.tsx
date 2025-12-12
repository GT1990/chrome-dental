import { Link } from "react-router-dom";
import InsuranceTicker from "./InsurnaceTicker";
import styles from "../css/NewPatientsBanner.module.css";

export default function InsuranceSection() {
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Insurance & Payments</h3>
        <p className="muted">
          We accept almost all insurances, offer flexible financing, and for
          those without insurance, we offer cash discounts and payment plans.
        </p>
        <InsuranceTicker />
        <div
          className={`rounded shadow ${styles.banner}`}
          style={{ marginTop: "24px" }}
        >
          <div>
            <div className={`section-title ${styles.title}`}>
              Insurance & Finance Options
            </div>
            <p className={styles.copy}>
              We Accept Almost All Insurances including{" "}
              <span style={{ color: "#ffd43b" }}>Medicaid / BadgerCare</span> and
              Flexible Financing and Payment Plans.
            </p>
          </div>
          <Link to="/insurance" className={`btn ${styles.cta}`}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
