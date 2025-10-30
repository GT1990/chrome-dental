export default function DoctorsSection(){
  const docs = [
    { name:'Dr. Shazad Alkurdi', role:'Cosmetic & General Dentistry' },
    { name:'Dr. Syed', role:'General Dentistry' },
  ]
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Meet the Doctors</h3>
        <div className="grid grid-2">
          {docs.map((d,i)=>(
            <div key={i} className="card" style={{display:'flex', gap:16, alignItems:'center', background:'var(--chrome-50)'}}>
              <div style={{height:96, width:96, borderRadius:12, background:'var(--chrome-200)'}}/>
              <div>
                <div style={{fontWeight:600}}>{d.name}</div>
                <div className="muted">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
