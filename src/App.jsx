import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importing shared components (will create these later)
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Background from './components/Background';

// // Importing pages (will create these later)
import Home from './pages/Home'
// import About from './pages/About'
// import Services from './pages/Services'
// import Process from './pages/Process'
// import FAQs from './pages/FAQs'
// import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className=" text-white font-sans min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <Background />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
