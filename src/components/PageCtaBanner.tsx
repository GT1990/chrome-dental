import { Link } from "react-router-dom";
import bannerStyles from "../css/NewPatientsBanner.module.css";
import { PRACTICE } from "../config";

type PageCtaBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageCtaBanner({
  title,
  description,
  primaryLabel = "Book Appointment",
  primaryHref = PRACTICE.bookingUrl,
  secondaryLabel = PRACTICE.phone,
  secondaryHref = `tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`,
}: PageCtaBannerProps) {
  const isPrimaryExternal = /^https?:\/\//i.test(primaryHref);
  const isSecondaryExternal = /^https?:\/\//i.test(secondaryHref);

  return (
    <section className="section" style={{ marginTop: 0 }}>
      <div className="container">
        <div className={`rounded shadow ${bannerStyles.banner}`} style={{ marginTop: "0px" }}>
          <div className={bannerStyles.centerContent}>
            <div className={`section-title ${bannerStyles.title}`}>{title}</div>
            <p className={bannerStyles.copy}>{description}</p>
            <div className={bannerStyles.ctaRow}>
              {isPrimaryExternal ? (
                <a
                  href={primaryHref}
                  className={`${bannerStyles.ctaButton} ${bannerStyles.ctaPrimary}`}
                  target="_blank"
                  rel="noopener"
                >
                  {primaryLabel}
                </a>
              ) : (
                <Link to={primaryHref} className={`${bannerStyles.ctaButton} ${bannerStyles.ctaPrimary}`}>
                  {primaryLabel}
                </Link>
              )}
              {isSecondaryExternal ? (
                <a
                  href={secondaryHref}
                  className={`${bannerStyles.ctaButton} ${bannerStyles.ctaSecondary}`}
                  target="_blank"
                  rel="noopener"
                >
                  {secondaryLabel}
                </a>
              ) : (
                <Link to={secondaryHref} className={`${bannerStyles.ctaButton} ${bannerStyles.ctaSecondary}`}>
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
