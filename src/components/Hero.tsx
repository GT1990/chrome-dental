import { PRACTICE } from "../config";
import heroFamilyImg from "../img/stock/dental-chair-smile.png";

type HeroProps = {
  title: string;
  subline?: string;
  bookingHref?: string;
  tagline?: string;
};

export default function Hero({
  title,
  subline,
  bookingHref,
  tagline = "Chrome Dental",
}: HeroProps) {
  return (
    <section className="hero section hero--home">
      <div className="container hero-inner">
        <div className="hero-copy">
          {tagline ? <span className="hero-kicker">{tagline}</span> : null}
          <h1 className="hero-title">{title}</h1>
          {subline ? <p className="hero-subline">{subline}</p> : null}
          <div className="hero-actions">
            {bookingHref ? (
              <a
                className="btn hero-btn hero-btn-primary"
                href={bookingHref}
                target="_blank"
                rel="noopener"
              >
                Book Online
              </a>
            ) : null}
            <a
              className="btn hero-btn hero-btn-secondary"
              href={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
            >
              {PRACTICE.phone}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-circle" />
          <img
            src={heroFamilyImg}
            alt="Smiling family"
            className="hero-photo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
