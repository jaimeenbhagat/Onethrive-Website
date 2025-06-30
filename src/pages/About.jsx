import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CompanyAbout from "../components/About/AboutUsHero";
import MissionVision from "../components/About/MissionVision";
import OurProcess from "../components/About/OurProcess";
import OurTeam from "../components/About/OurTeam";

const AboutUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About OneThrive - Employee Engagement Consultants Mumbai",
    "description": "Learn about OneThrive's journey as Mumbai's leading employee engagement company. 10+ years of transforming workplace cultures with our 'We Before Me' philosophy.",
    "mainEntity": {
      "@type": "Organization",
      "name": "OneThrive",
      "foundingDate": "2014",
      "founder": "OneThrive Team",
      "description": "Mumbai's premier employee engagement and team building company specializing in workplace culture transformation",
      "mission": "To bridge the gap between performance and well-being by constantly promoting collaboration, recognition, and a deep sense of belonging",
      "vision": "To be the leading catalyst in transforming thriving workplaces into vibrant ecosystems of collaboration, creativity, and well-being",
      "expertise": [
        "Employee Engagement Solutions",
        "Team Building Activities", 
        "Corporate Culture Transformation",
        "Workplace Well-being Programs",
        "Leadership Development"
      ],
      "serviceArea": "Mumbai, Maharashtra, India",
      "yearsOfExperience": "10+"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About OneThrive - Leading Employee Engagement Consultants Mumbai</title>
        <meta 
          name="description" 
          content="Discover OneThrive's story - Mumbai's premier employee engagement company with 10+ years experience. Learn about our 'We Before Me' philosophy and 5-step blueprint for workplace transformation." 
        />
        <meta 
          name="keywords" 
          content="about OneThrive, employee engagement consultants Mumbai, team building experts, workplace culture transformation, corporate wellness specialists, employee engagement company history Mumbai" 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About OneThrive - Leading Employee Engagement Consultants Mumbai" />
        <meta property="og:description" content="Discover OneThrive's story - Mumbai's premier employee engagement company with 10+ years experience and 100+ activities designed to transform workplace culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethrive.in/about" />
        <meta property="og:image" content="https://onethrive.in/about-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About OneThrive - Leading Employee Engagement Consultants Mumbai" />
        <meta name="twitter:description" content="Learn about Mumbai's premier employee engagement company with 10+ years of workplace transformation experience." />
        
        {/* Local Business Context */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        
        {/* SEO Enhancement */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://onethrive.in/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="w-full text-white bg-black py-30 px-6 md:px-20 font-interphase relative overflow-hidden">
        {/* Global floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00FFAB]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* SEO-optimized hidden content */}
        <div className="sr-only">
          <h1>About OneThrive - Mumbai's Leading Employee Engagement Company</h1>
          <p>
            OneThrive is Mumbai's premier employee engagement and team building company, 
            established with a mission to transform workplace cultures across the city. 
            With over 10 years of experience in corporate consulting and employee wellness, 
            we've helped hundreds of Mumbai-based companies create thriving work environments.
          </p>
          <p>
            Our "We Before Me" philosophy has made us the go-to employee engagement 
            consultants for businesses in BKC, Andheri, Powai, and throughout Mumbai. 
            We specialize in reducing employee attrition rates, improving workplace 
            collaboration, and building stronger company cultures through our proven 
            5-step blueprint process.
          </p>
          <p>
            As leading corporate team building experts in Mumbai, we offer over 100 
            carefully curated activities including offsite retreats, sports tournaments, 
            creative workshops, and wellness programs. Our approach combines employee 
            engagement strategy with measurable outcomes, helping Mumbai companies 
            achieve 59% lower attrition and 40% higher retention rates.
          </p>
        </div>

        {/* Company About Section */}
        <CompanyAbout />

        {/* Meet the Team */}
        <OurTeam />

        {/* Mission and Vision */}
        <MissionVision />

        {/* Our Process */}
        <OurProcess />
      </section>
    </>
  );
};

export default AboutUs; 