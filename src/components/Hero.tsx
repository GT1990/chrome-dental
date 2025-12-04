import { PRACTICE } from "../config";
import heroFamilyImg from "../img/stock/dental-chair-smile.png";
import styles from "../css/Hero.module.css";

type HeroProps = {
  title: string;
  subline?: string;
  bookingHref?: string;
};

export default function Hero({ title, subline, bookingHref }: HeroProps) {
  return (
    <section className={`${styles.hero}`}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subline ? <p className={styles.heroSubline}>{subline}</p> : null}
          <div className={styles.heroActions}>
            {bookingHref ? (
              <a
                className={`btn ${styles.heroBtn} ${styles.heroBtnPrimary}`}
                href={bookingHref}
                target="_blank"
                rel="noopener"
              >
                Book Online
              </a>
            ) : null}
            <a
              className={`btn ${styles.heroBtn} ${styles.heroBtnSecondary}`}
              href={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
            >
              {PRACTICE.phone}
            </a>
          </div>
        </div>
        <div className={styles.heroRight} aria-hidden="true">
          <div className={styles.heroRightCircle} />
          <img
            src={heroFamilyImg}
            alt="Smiling family"
            className={styles.heroPhoto}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
