import { Link } from "react-router-dom";
import bannerStyles from "../css/NewPatientsBanner.module.css";

export default function ExclusiveNewPatientBanner() {
  return (
    <section className="section" style={{ marginTop: 0 }}>
      <div className="container">
        <div
          className={`rounded shadow ${bannerStyles.banner}`}
          style={{ marginTop: "24px" }}
        >
          <div>
            <div className={`section-title ${bannerStyles.title}`}>
              Exclusive New Patient Specials
            </div>
            <p className={bannerStyles.copy}>
              Call to learn about our current discounts and flexible options.
            </p>
          </div>
          <Link to="/new-patients" className={`btn ${bannerStyles.cta}`}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
