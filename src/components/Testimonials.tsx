import styles from "../css/Testimonials.module.css";

type Testimonial = {
  quote: string;
  source: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "My 9 yr old an I both go to Chrome Dental. The staff is friendly, the hygienist girls r very friendly and help to feel relaxed.  The dentists knows wat they're doing an care about you. I recommend this place to all.",
    source: "Google Reviewer",
  },
  {
    quote:
      "10/10 Recommended. I had to get my partial grown out wisdom tooth removed and everything went so smooth! I had a quick recovery [one week] and didn't even have to take my pain medication that was given. Great Dr and team!",
    source: "Google Reviewer",
  },
  {
    quote:
      "They were able to get me in quickly and it was a stress free experience. Everyone there was so warm and welcoming.  My questions were answered and I am on my way to getting my smile back.  Anxiety Free!!",
    source: "Google Reviewer",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">What Patients Say</h3>
        <div className={`grid grid-responsive ${styles.grid}`}>
          {testimonials.map((t, i) => (
            <div key={i} className={`card ${styles.testimonialCard}`}>
              <div className={styles.headerRow}>
                <div className={styles.iconWrapper}>
                  {/* Google "G" Icon SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-2.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div className={styles.stars}>★★★★★</div>
              </div>
              <p className={styles.quote}>“{t.quote}”</p>
              <div className={styles.meta}>— {t.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
