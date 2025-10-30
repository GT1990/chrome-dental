import { Seo } from '../seo/Seo'
import ServicesGrid from '../components/ServicesGrid'

export default function Services(){
  return (
    <>
      <Seo title="Dental Services in Green Bay | Chrome Dental" />
      <section className="hero section">
        <div className="container" style={{padding:'56px 0'}}>
          <h1 className="section-title" style={{color:'#fff', fontSize:40}}>Services</h1>
          <p style={{color:'rgba(255,255,255,.9)'}}>Comprehensive dental care for patients of all ages.</p>
        </div>
      </section>
      <ServicesGrid />
    </>
  )
}
