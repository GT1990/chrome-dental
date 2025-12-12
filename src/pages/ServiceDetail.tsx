import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ServicePage from "../components/ServicePage";
import { services } from "../components/ServicesGrid";
import { servicesData } from "../data/servicesData";
import PageHeader from "../components/PageHeader";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const serviceData = useMemo(
    () => servicesData.find((service) => service.id === slug),
    [slug]
  );

  const serviceMeta = useMemo(
    () => services.find((service) => service.slug === slug),
    [slug]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!serviceData) {
    return (
      <PageHeader
        title="Service Not Found"
        description="Please check the service link or return to the Services page."
        variant="service"
      />
    );
  }

  return (
    <>
      <PageHeader
        title={serviceData.title}
        icon={serviceMeta?.image}
        variant="service"
        backTo="/services"
        backLabel="Back to all Services"
      />
      <section className="section">
        <div className="container stack" style={{ paddingTop: 0 }}>
          <ServicePage service={serviceData} showTitle={false} />
        </div>
      </section>
    </>
  );
}
