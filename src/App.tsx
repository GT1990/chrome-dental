import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MapContact from './components/MapContact'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import BookingEmbed from './pages/BookingEmbed'
import Insurance from './pages/Insurance'
import Contact from './pages/Contact'
import NewPatients from './pages/NewPatients'
import Reviews from './pages/Reviews'
import ServiceDetail from './pages/ServiceDetail'

export default function App(){
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
      <Header />
      <ScrollToTop />
      <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookingEmbed />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/new-patients" element={<NewPatients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <MapContact />
      <Footer />
    </div>
  )
}
