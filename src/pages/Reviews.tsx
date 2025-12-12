import PageHeader from "../components/PageHeader";
import servicesIcon from "../img/services/all-services.png";

export default function Reviews() {
  return (
    <>
      <PageHeader
        title="Reviews"
        icon={servicesIcon}
        description="Google reviews feed coming soon."
        variant="service"
      />
      <section className="section">
        <div className="container stack">
          <p className="muted">Google reviews feed coming soon.</p>
        </div>
      </section>
    </>
  );
}
