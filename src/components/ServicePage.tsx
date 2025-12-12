import styles from "../css/ServicePage.module.css";
import { PRACTICE } from "../config";
import type { ServiceArticle } from "../data/servicesData";

type ServicePageProps = {
  service: ServiceArticle;
  showTitle?: boolean;
};

export default function ServicePage({ service, showTitle = true }: ServicePageProps) {
  if (!service) return null;

  return (
    <div className={styles.pageContainer}>
      <article className={styles.article}>
        {showTitle ? (
          <header className={styles.header}>
            <h1 className={styles.title}>{service.title}</h1>
            <div className={styles.divider}></div>
          </header>
        ) : null}

        <section className={styles.introSection}>
          <p className={styles.introText}>{service.intro}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Benefits of Treatment</h2>
          <ul className={styles.list}>
            {service.benefits.map((benefit, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.checkIcon}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Chrome Dental Process</h2>
          <div className={styles.processContainer}>
            {service.process.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <p className={styles.stepText}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.ctaBox}>
          <h3>Ready to Schedule Your Visit?</h3>
          <p>
            Contact Chrome Dental today to learn more about our{" "}
            {service.title.toLowerCase()} services.
          </p>
          <a className={styles.ctaButton} href={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}>
            Book Appointment
          </a>
        </div>
      </article>
    </div>
  );
}
