export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">Chrome Dental</div>
          <p className="muted" style={{marginTop:8}}>Gentle, modern care in Green Bay.</p>
        </div>
        <div style={{display:'grid', gap:8, alignContent:'start'}}>
          <a href="/" className="muted">Home</a>
          <a href="/services" className="muted">Services</a>
          <a href="/insurance" className="muted">Insurance & New Patients</a>
          <a href="/contact" className="muted">Contact</a>
        </div>
        <div className="muted">© {new Date().getFullYear()} Chrome Dental. All rights reserved.</div>
      </div>
    </footer>
  )
}
