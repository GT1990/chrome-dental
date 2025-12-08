import { Link } from "react-router-dom";
import styles from "../css/ServicesGrid.module.css";

const serviceImages = import.meta.glob("../img/services/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

type Service = {
  slug: string;
  name: string;
  image?: string;
};

const services: Service[] = [
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    image: serviceImages["../img/services/emergency-services.png"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    image: serviceImages["../img/services/dentalImplantIcon.png"],
  },
  {
    slug: "dental-bridges",
    name: "Dental Bridges",
    image: serviceImages["../img/services/dental-bridges.png"],
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    image: serviceImages["../img/services/alignersIcon.png"],
  },
  {
    slug: "root-canal",
    name: "Root Canal",
    image: serviceImages["../img/services/root-canal.png"],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    image: serviceImages["../img/services/cosmetic-dentistry.png"],
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    image: serviceImages["../img/services/crownIcon.png"],
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    image: serviceImages["../img/services/dental-veneers.png"],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    image: serviceImages["../img/services/tooth-extraction.png"],
  },
  {
    slug: "checkups",
    name: "Checkups",
    image: serviceImages["../img/services/checkups.png"],
  },
  {
    slug: "fillings",
    name: "Fillings",
    image: serviceImages["../img/services/filling.png"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    image: serviceImages["../img/services/dentureIcon.png"],
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    image: serviceImages["../img/services/oral-surgen.png"],
  },
];

type ServicesGridProps = {
  limit?: number;
  showViewAll?: boolean;
};

export default function ServicesGrid({
  limit,
  showViewAll = false,
}: ServicesGridProps) {
  const displayedServices =
    typeof limit === "number"
      ? services.slice(0, Math.max(limit, 0))
      : services;
  const shouldShowViewAll =
    showViewAll && displayedServices.length < services.length;

  return (
    <section className="section">
      <div className="container stack">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-responsive">
          {displayedServices.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`card ${styles.serviceCard}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={`${styles.icon} ${styles.serviceIconWrapper}`}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt=""
                    className={styles.serviceIcon}
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className={styles.serviceName} style={{ fontWeight: 600 }}>
                {s.name}
              </div>
              <p className={`muted ${styles.learnMore}`}>Learn more</p>
            </Link>
          ))}
          {shouldShowViewAll ? (
            <Link
              to="/services"
              className={`card ${styles.serviceCard} ${styles.viewAllCard}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={`${styles.icon} ${styles.serviceIconWrapper}`}>
                <img
                  src={serviceImages["../img/services/all-services.png"]}
                  alt=""
                  className={styles.serviceIcon}
                  loading="lazy"
                />
              </div>
              <div className={styles.serviceName} style={{ fontWeight: 600 }}>
                View All Services
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
