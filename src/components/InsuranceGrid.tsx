import styles from "../css/InsuranceGrid.module.css";

const BASE_URL = import.meta.env.BASE_URL;

const carriers = [
  { name: "AARP", file: "aarp.png" },
  { name: "Aetna", file: "aetna.png" },
  { name: "Ameritas", file: "ameritas.jpeg" },
  { name: "Assurant", file: "assurant.webp" },
  { name: "Anthem BlueCross", file: "athemBlueCross.jpeg" },
  { name: "CareCredit", file: "care-credit.png" },
  { name: "Careington", file: "careington.png" },
  { name: "Cigna", file: "cigna.png" },
  { name: "Delta Dental", file: "delta-dental.png" },
  { name: "DHA", file: "dha.jpg" },
  { name: "Encore Dental", file: "encore-dental.jpeg" },
  { name: "Forward Health", file: "forward-health.png" },
  { name: "GEHA", file: "geha.png" },
  { name: "Guardian", file: "guardian.png" },
  { name: "MetLife", file: "metlife.png" },
  { name: "Molina", file: "molina.jpeg" },
  { name: "Premier Dental Group", file: "premier-dental-group.webp" },
  { name: "Principal", file: "principal.png" },
  { name: "Renaissance", file: "renaissance.jpeg" },
  { name: "Scion", file: "scion.png" },
  { name: "Sunbit", file: "sunbit.webp" },
  { name: "UMR", file: "umr.gif" },
  { name: "United Healthcare", file: "united-healthcare.webp" },
  { name: "WEA", file: "wea.jpeg" },
];

export default function InsuranceGrid() {
  return (
    <section className={styles.section}>
      <div className="container stack" style={{ paddingTop: 0 }}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>At Chrome Dental</h2>
          <p className={styles.bodyCopy}>
            We believe exceptional dental care should be accessible—without
            financial stress standing in the way of your smile. That’s why we
            work with most major dental insurance plans, offer flexible payment
            options, and take the time to help you make the most of your
            benefits.
          </p>
          <p className={styles.bodyCopy}>
            As a courtesy to our patients, our team will gladly verify your
            dental benefits and explain your coverage before treatment whenever
            possible. While dental insurance plans often include limitations,
            frequencies, and annual maximums, we’re here to help you understand
            your options and answer any questions along the way.
          </p>

          <h3 className={styles.subheading}>Dental Insurance</h3>
          <p className={styles.bodyCopy}>
            We accept most major dental insurance plans and are happy to assist
            you in maximizing your coverage. If you’re unsure whether your plan
            is accepted or would like help understanding how to best use your
            benefits, please don’t hesitate to contact our office—we’re always
            happy to help.
          </p>

          <h3 className={styles.subheading}>No Dental Insurance?</h3>
          <p className={styles.bodyCopy}>
            No problem. For patients without insurance, Chrome Dental offers
            cash discounts and convenient in-office payment options to help make
            care affordable. Our team will work with you to find a solution that
            fits your needs and budget.
          </p>
        </div>
        <div className={`${styles.grid} grid`}>
          {carriers.map((carrier) => (
            <div key={carrier.name} className={`card ${styles.card}`}>
              <div className={styles.logoWrap}>
                <img
                  src={`${BASE_URL}img/insurance/${carrier.file}`}
                  alt={`${carrier.name} logo`}
                  loading="lazy"
                />
              </div>
              <div className={styles.name}>{carrier.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
