export default function ValueProps(){
  const items = [
    'Prompt Emergency Appointments',
    'Medicaid & Most PPOs Accepted',
    'Multilingual Team (EN • ES • AR)'
  ]
  return (
    <section className="section">
      <div className="container stack">
        <div className="grid grid-responsive">
          {items.map((t,i)=>(
            <div key={i} className="value-card">
              <div className="icon"></div>
              <div style={{fontWeight:600}}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
