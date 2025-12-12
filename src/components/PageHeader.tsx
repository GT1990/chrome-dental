import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "../css/PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  kicker?: string;
  icon?: string;
  children?: ReactNode;
  variant?: "default" | "service";
  backTo?: string;
  backLabel?: string;
};

export default function PageHeader({
  title,
  description,
  kicker,
  icon,
  children,
  variant = "default",
  backTo,
  backLabel = "Back to all Services",
}: PageHeaderProps) {
  return (
    <section
      className={`${styles.pageHeader} ${
        variant === "service" ? styles.serviceHeader : ""
      }`}
    >
      <div className="container">
        <div className={styles.inner}>
          {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
          <div className={styles.titleRow}>
            {icon ? (
              <span
                className={`${styles.iconWrap} ${
                  variant === "service" ? styles.serviceIconWrap : ""
                }`}
              >
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className={styles.icon}
                  loading="eager"
                />
              </span>
            ) : null}
            <h1 className={styles.title}>{title}</h1>
          </div>
          {description ? <div className={styles.divider} /> : null}
          {backTo ? (
            <Link
              to={backTo}
              className={`${styles.backLink} ${
                variant === "service" ? styles.backLinkService : ""
              }`}
            >
              <span aria-hidden="true">←</span> {backLabel}
            </Link>
          ) : null}
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
