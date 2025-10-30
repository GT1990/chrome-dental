import { PRACTICE } from "../config";

export default function MapContact() {
  return (
    <section className="section">
      <div
        className="container stack"
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "1fr",
          alignItems: "start",
        }}
      >
        <div className="map-wrap">
          <iframe
            title="Chrome Dental map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.3120726703014!2d-88.09373891007043!3d44.50876089649213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fb18f1a6b081%3A0xb903a57bc125d119!2sChrome%20Dental!5e0!3m2!1sen!2sca!4v1761545009597!5m2!1sen!2sca"
            className="map-iframe"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="card">
          <h3 className="section-title" style={{ fontSize: 20 }}>
            Contact
          </h3>
          <p style={{ marginTop: 8, color: "#334155" }}>{PRACTICE.address}</p>
          <a
            className="btn btn-primary"
            style={{ marginTop: 8 }}
            href={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
          >
            {PRACTICE.phone}
          </a>
          <div style={{ marginTop: 16, fontSize: 14, color: "#64748b" }}>
            <div>Mon–Fri: 9:00 AM – 5:00 PM</div>
            <div>Sat–Sun: Closed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
