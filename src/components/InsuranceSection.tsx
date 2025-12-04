import { Link } from "react-router-dom";
import InsuranceTicker from "./InsurnaceTicker";
export default function InsuranceSection() {
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Insurance & Payments</h3>
        <p className="muted">
          We welcome ForwardHealth (Medicaid) and most PPO plans. Many
          treatments are fully or mostly covered— we’ll help you understand your
          benefits before care.
        </p>
        <InsuranceTicker />
        <Link
          to="/insurance"
          className="btn btn-primary"
          style={{ marginTop: 16 }}
        >
          Verify My Insurance
        </Link>
      </div>
    </section>
  );
}
