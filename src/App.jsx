import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ISO9001 from './pages/ISO9001'
import ISO27001 from './pages/ISO27001'
import ISO45001 from './pages/ISO45001'
import ISO14001 from './pages/ISO14001'
import IMS from './pages/IMS'
import InternalAudits from './pages/InternalAudits'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/iso-9001" element={<ISO9001 />} />
          <Route path="/iso-27001" element={<ISO27001 />} />
          <Route path="/iso-45001" element={<ISO45001 />} />
          <Route path="/iso-14001" element={<ISO14001 />} />
          <Route path="/ims" element={<IMS />} />
          <Route path="/internal-audits" element={<InternalAudits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
