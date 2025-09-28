import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importing shared components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

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
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

//Blog components
import BlogPost1 from './components/Blog/BlogPosts/BlogPost1';
import BlogPost2 from './components/Blog/BlogPosts/BlogPost2';
import BlogPost3 from './components/Blog/BlogPosts/BlogPost3';
import BlogPost4 from './components/Blog/BlogPosts/BlogPost4';
import BlogPost5 from './components/Blog/BlogPosts/BlogPost5';
import BlogPost6 from './components/Blog/BlogPosts/BlogPost6';
import BlogPost7 from './components/Blog/BlogPosts/BlogPost7';
import BlogPost8 from './components/Blog/BlogPosts/BlogPost8';
import BlogPost9 from './components/Blog/BlogPosts/BlogPost9';
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

            {/* Individual Blog Posts */}
            <Route path="/blogs/beyond-the-trust-fall" element={<BlogPost1 />} />
            <Route path="/blogs/unleashing-innovation" element={<BlogPost2 />} />
            <Route path="/blogs/measuring-what-matters" element={<BlogPost3 />} />
            <Route path="/blogs/cultivating-a-thriving-workplace" element={<BlogPost4 />} />
            <Route path="/blogs/beyond-the-bonus" element={<BlogPost5 />} />
            <Route path="/blogs/employee-retention-strategies" element={<BlogPost6 />} />
            <Route path="/blogs/the-founders-guide" element={<BlogPost7 />} />
            <Route path="/blogs/ceo-playbook" element={<BlogPost8 />} />
            <Route path="/blogs/fostering-culture" element={<BlogPost9 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;