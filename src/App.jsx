import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ISO9001 from './pages/ISO9001'
import ISO27001 from './pages/ISO27001'
import ISO22000 from './pages/ISO22000'
import ISO45001 from './pages/ISO45001'
import ISO14001 from './pages/ISO14001'
import IMS from './pages/IMS'
import InternalAudits from './pages/InternalAudits'
import Resources from './pages/Resources'
import Insights from './pages/Insights'
import InsightArticle from './pages/InsightArticle'
import FirstCertification from './pages/for/FirstCertification'
import ImprovingSystems from './pages/for/ImprovingSystems'
import GrowingBusinesses from './pages/for/GrowingBusinesses'
import Contact from './pages/Contact'
import PrintChecklist from './pages/print/PrintChecklist'
import PrintStandards from './pages/print/PrintStandards'
import PrintAudit from './pages/print/PrintAudit'

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

function SiteRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/iso-9001" element={<ISO9001 />} />
        <Route path="/iso-27001" element={<ISO27001 />} />
        <Route path="/iso-22000" element={<ISO22000 />} />
        <Route path="/iso-45001" element={<ISO45001 />} />
        <Route path="/iso-14001" element={<ISO14001 />} />
        <Route path="/ims" element={<IMS />} />
        <Route path="/internal-audits" element={<InternalAudits />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/for/first-certification" element={<FirstCertification />} />
        <Route path="/for/improving-systems" element={<ImprovingSystems />} />
        <Route path="/for/growing-businesses" element={<GrowingBusinesses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Chrome-less, print-optimised routes used to generate downloadable PDFs — see scripts/generate-pdfs.mjs */}
        <Route path="/print/checklist" element={<PrintChecklist />} />
        <Route path="/print/choosing-a-standard" element={<PrintStandards />} />
        <Route path="/print/internal-audit" element={<PrintAudit />} />
        <Route path="/*" element={<SiteRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
