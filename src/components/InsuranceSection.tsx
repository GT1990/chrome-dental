import { Link } from 'react-router-dom'
export default function InsuranceSection(){
  return (
    <section className="section">
      <div className="container stack">
        <h3 className="section-title">Insurance & Payments</h3>
        <p className="muted">We welcome ForwardHealth (Medicaid) and most PPO plans. Many treatments are fully or mostly covered— we’ll help you understand your benefits before care.</p>
        <div className="grid grid-3" style={{gap:16, marginTop:16}}>
          {Array.from({length:6}).map((_,i)=>(
            <div key={i} className="rounded border" style={{height:48, background:'var(--chrome-100)'}}></div>
          ))}
        </div>
        <Link to="/insurance" className="btn btn-primary" style={{marginTop:16}}>Verify My Insurance</Link>
      </div>
    </section>
  )
}
