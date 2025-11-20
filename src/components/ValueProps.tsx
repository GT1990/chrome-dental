import emergencyIcon from "../img/services/emergency-services.png";
import insuranceIcon from "../img/services/dental-insurance.png";

export default function ValueProps() {
  const items = [
    { text: "Prompt Emergency Appointments", icon: emergencyIcon },
    { text: "Medicaid & Most PPOs Accepted", icon: insuranceIcon },
    { text: "Multilingual Team (EN • ES • AR)" },
  ];
  return (
    <section className="section">
      <div className="container stack">
        <div className="grid grid-responsive">
          {items.map((item, i) => (
            <div key={i} className="value-card">
              <div className="icon">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                ) : null}
              </div>
              <div style={{ fontWeight: 600 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
