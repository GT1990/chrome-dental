import { Link } from "react-router-dom";
import styles from "../css/NewPatientsBanner.module.css";

export default function NewPatientsBanner(){
  return (
    <section className="section">
      <div className="container">
        <div className={`rounded shadow ${styles.banner}`}>
          <div>
            <div className={`section-title ${styles.title}`}>Exclusive New Patient Specials</div>
            <p className={styles.copy}>Call to learn about our current discounts and flexible options.</p>
          </div>
          <Link to="/new-patients" className={`btn ${styles.cta}`}>Learn More</Link>
        </div>
      </div>
    </section>
  )
}
