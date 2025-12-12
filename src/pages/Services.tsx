import PageHeader from "../components/PageHeader";
import ServicesGrid from "../components/ServicesGrid";
import servicesIcon from "../img/services/all-services.png";
import { Seo } from "../seo/Seo";
import introStyles from "../css/ServicesIntro.module.css";
import PageCtaBanner from "../components/PageCtaBanner";
import { PRACTICE } from "../config";
import preventiveIcon from "../img/services/crownIcon.png";
import restorativeIcon from "../img/services/emergency-services.png";
import cosmeticIcon from "../img/services/alignersIcon.png";

export default function Services() {
  return (
    <>
      <Seo title="Dental Services in Green Bay | Chrome Dental" />
      <PageHeader
        title="Dental Services"
        icon={servicesIcon}
        description="Comprehensive dental care for patients of all ages."
        variant="service"
      />
      <section className={introStyles.section}>
        <div
          className="container stack"
          style={{ paddingTop: 0, paddingBottom: 16 }}
        >
          <div className={introStyles.intro}>
            <h2 className={introStyles.heading}>
              Comprehensive Dental Services for a Healthy, Confident Smile
            </h2>
            <p className={introStyles.body}>
              At Chrome Dental, we provide complete dental care under one roof,
              making it easy for individuals and families to maintain their oral
              health at every stage of life. Our experienced dental team
              delivers preventive, restorative, and cosmetic dentistry using
              modern techniques and personalized treatment plans designed around
              your unique needs.
            </p>
            <p className={introStyles.body}>
              Whether you’re visiting for routine dental care or more advanced
              treatment, our focus is on long-term oral health, comfort, and
              results you can feel confident about.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid stackCta variant="servicesPage" />
      <section
        className={introStyles.section}
        style={{ paddingTop: 12, paddingBottom: 64 }}
      >
        <div className="container stack" style={{ paddingTop: 0 }}>
          <div className={introStyles.cardsGrid}>
            <div className={introStyles.card}>
              <div className={introStyles.cardHeader}>
                <div className={introStyles.cardIconWrap}>
                  <div className={introStyles.cardIconCircle}>
                    <img
                      src={preventiveIcon}
                      alt="Preventive dentistry icon"
                      className={introStyles.cardIcon}
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className={introStyles.cardTitle}>Preventive Dentistry</h3>
              </div>
              <h4 className={introStyles.h4}>Periodontal (Gum) Care</h4>
              <p className={introStyles.body}>
                Healthy gums play a vital role in overall oral health.
                Periodontal concerns can affect both the appearance and function
                of your smile if left unaddressed.
              </p>
              <p className={introStyles.body}>
                Our approach to periodontal care emphasizes early evaluation,
                personalized treatment, and ongoing maintenance to support
                healthy gums and help protect your teeth over time. With
                consistent professional care and good oral hygiene, patients can
                maintain strong, healthy smiles for years to come.
              </p>
            </div>
            <div className={introStyles.card}>
              <div className={introStyles.cardHeader}>
                <div className={introStyles.cardIconWrap}>
                  <div className={introStyles.cardIconCircle}>
                    <img
                      src={restorativeIcon}
                      alt="Restorative dentistry icon"
                      className={introStyles.cardIcon}
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className={introStyles.cardTitle}>Restorative Dentistry</h3>
              </div>
              <h4 className={introStyles.h4}>Dental Crowns</h4>
              <p className={introStyles.body}>
                When a tooth has been weakened by damage or decay, dental crowns
                provide a reliable way to restore strength, function, and
                appearance. Crowns are custom-designed to blend naturally with
                your smile while helping protect and preserve the underlying
                tooth.
              </p>
              <p className={introStyles.body}>
                Our restorative treatments focus on durability, comfort, and
                aesthetics—supporting both oral health and confidence.
              </p>
            </div>
            <div className={introStyles.card}>
              <div className={introStyles.cardHeader}>
                <div className={introStyles.cardIconWrap}>
                  <div className={introStyles.cardIconCircle}>
                    <img
                      src={cosmeticIcon}
                      alt="Cosmetic dentistry icon"
                      className={introStyles.cardIcon}
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className={introStyles.cardTitle}>Cosmetic Dentistry</h3>
              </div>
              <h4 className={introStyles.h4}>Clear Aligners</h4>
              <p className={introStyles.body}>
                Clear aligners offer a modern, discreet option for improving the
                alignment of your teeth. Designed for comfort and convenience,
                aligner therapy allows many patients to enhance their smile
                without the look or feel of traditional braces.
              </p>
              <p className={introStyles.body}>
                Treatment plans are customized to your goals, helping you move
                toward a straighter, more confident smile.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageCtaBanner
        title="Ready to book your visit?"
        description="Schedule online anytime or call our team to talk through your treatment options."
        primaryLabel="Book Online"
        primaryHref={PRACTICE.bookingUrl}
      />
    </>
  );
}
