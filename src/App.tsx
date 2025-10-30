import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import BookingEmbed from './pages/BookingEmbed'
import Insurance from './pages/Insurance'
import Contact from './pages/Contact'
import NewPatients from './pages/NewPatients'

export default function App(){
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
      <Header />
      <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookingEmbed />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/new-patients" element={<NewPatients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
