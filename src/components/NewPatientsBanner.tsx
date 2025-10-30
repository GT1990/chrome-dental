import { Link } from 'react-router-dom'
export default function NewPatientsBanner(){
  return (
    <section className="section">
      <div className="container">
        <div className="rounded shadow" style={{background:'linear-gradient(to bottom, var(--primary-600), #2a7cff)', color:'#fff', padding:24, display:'flex', gap:16, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
          <div>
            <div className="section-title" style={{color:'#fff'}}>Exclusive New Patient Specials</div>
            <p style={{opacity:.9, margin:'4px 0 0 0'}}>Call to learn about our current discounts and flexible options.</p>
          </div>
          <Link to="/new-patients" className="btn btn-light">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
