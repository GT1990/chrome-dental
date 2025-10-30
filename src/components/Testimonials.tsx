export default function Testimonials(){
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">What Patients Say</h3>
        <div className="grid grid-responsive">
          {Array.from({length:3}).map((_,i)=>(
            <div key={i} className="card">
              <div style={{color:'var(--primary-700)', fontSize:18}}>★★★★★</div>
              <p style={{marginTop:8, color:'#334155'}}>“Great experience! Kind team and quick care. Highly recommend Chrome Dental.”</p>
              <div style={{marginTop:8, fontSize:13, color:'#64748b'}}>— Google Reviewer</div>
            </div>
          ))}
        </div>
        <a href="/reviews" className="btn btn-muted" style={{marginTop:16}}>Read More Reviews</a>
      </div>
    </section>
  )
}
