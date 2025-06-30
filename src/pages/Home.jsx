import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/Home/HeroSection";
import FAQs from "../components/Home/FAQs";
import AboutUs from "../components/Home/AboutUs";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ClientLogos from "../components/Home/ClientLogos";
import Testimonials from "../components/Home/Testimonials";
import MomentsThatMatter from "../components/Home/MomentsThatMatter";

const Home = () => {
  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OneThrive",
    "description": "Mumbai's leading employee engagement and team building company. Transform workplace culture with our 'We Before Me' approach - 100+ activities, 10+ years experience.",
    "url": "https://onethrive.in",
    "logo": "https://onethrive.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-88502-10248",
      "contactType": "customer service",
      "email": "info@onethrive.in",
      "areaServed": "Mumbai, India"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Mumbai"
    },
    "services": [
      "Employee Engagement Solutions",
      "Team Building Activities",
      "Corporate Wellness Programs",
      "Offsite Retreats",
      "Sports Tournaments",
      "Creative Workshops"
    ],
    "foundingDate": "2014",
    "slogan": "We Before Me"
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Employee Engagement & Team Building Company Mumbai | OneThrive</title>
        <meta 
          name="description" 
          content="Transform your workplace with OneThrive's proven 'We Before Me' approach. Mumbai's leading employee engagement company offering team building, wellness programs & corporate retreats. Free consultation available." 
        />
        <meta 
          name="keywords" 
          content="employee engagement Mumbai, team building activities Mumbai, corporate team building, workplace culture consulting, offsite retreats Mumbai, employee wellness programs, team building company Mumbai, corporate events Mumbai" 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Employee Engagement & Team Building Company Mumbai | OneThrive" />
        <meta property="og:description" content="Transform your workplace with OneThrive's proven 'We Before Me' approach. 100+ activities, 10+ years experience. Reduce attrition by 59% with our engagement solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethrive.in" />
        <meta property="og:image" content="https://onethrive.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Employee Engagement & Team Building Company Mumbai | OneThrive" />
        <meta name="twitter:description" content="Transform your workplace with OneThrive's proven 'We Before Me' approach. Mumbai's leading employee engagement company." />
        <meta name="twitter:image" content="https://onethrive.in/twitter-image.jpg" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="OneThrive" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://onethrive.in" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="w-full text-white bg-black font-interphase">
        {/* SEO-optimized content sections */}
        <HeroSection />
        
        {/* Hidden SEO content for search engines */}
        <div className="sr-only">
          <h1>Employee Engagement Company Mumbai - OneThrive</h1>
          <p>
            Looking for the best employee engagement company in Mumbai? OneThrive transforms 
            workplace culture with our unique "We Before Me" philosophy. We're Mumbai's 
            leading team building specialists with 10+ years of experience and 100+ 
            activities designed to boost employee morale and reduce attrition rates.
          </p>
          <p>
            Our employee engagement solutions help Mumbai companies achieve 59% lower 
            attrition rates and 40% higher retention. From corporate team building 
            activities to wellness programs and offsite retreats, we serve businesses 
            across Mumbai including BKC, Andheri, Powai, and all major business districts.
          </p>
        </div>
        
        <AboutUs />
        <ServicesSection />
        <WhyChooseUs />
        <MomentsThatMatter />
        <ClientLogos />
        <Testimonials />
        <FAQs />
      </section>
    </>
  );
};

export default Home;