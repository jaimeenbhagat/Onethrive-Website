import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importing shared components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
// Importing pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Resources pages
import Blogs from './pages/Blog'
import ROICalculator from './pages/ROICalculator'
import CultureQuiz from './pages/CultureQuiz'

// Policy pages
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import CancellationRefundPolicy from './components/Policies/CancellationRefundPolicy';
import TermsConditions from './components/Policies/TermsConditions';

function App() {
  return (
    <Router>
      <Analytics/>
      <SpeedInsights/>
      <div className=" text-white font-interphase min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <Background />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Resources routes */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/culture-quiz" element={<CultureQuiz />} />
            
            {/* Policy routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-refund" element={<CancellationRefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App