import { motion } from "framer-motion";
import { Title, Meta } from "react-head"; // ✅ import SEO tags
import CompanyAbout from "../components/About/AboutUsHero";
import MissionVision from "../components/About/MissionVision";
import OurProcess from "../components/About/OurProcess";
import OurTeam from "../components/About/OurTeam";

const AboutUs = () => {
  return (
    <>
      {/* ✅ SEO for About Page */}
      <Title>About Us - OneThrive</Title>
      <Meta
        name="description"
        content="Learn more about OneThrive's mission, vision, and team. We specialize in employee engagement, team-building experiences, and corporate wellness programs."
      />
      <Meta
        name="keywords"
        content="OneThrive, About OneThrive, employee engagement team, corporate culture, team building experts"
      />
      <Meta name="author" content="OneThrive Team" />

      {/* ✅ Open Graph tags for social sharing */}
      <Meta property="og:title" content="About Us - OneThrive" />
      <Meta
        property="og:description"
        content="Discover OneThrive’s story, mission, and passionate team dedicated to building stronger workplace cultures."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://onethrive.in/about" />
      <Meta
        property="og:image"
        content="https://onethrive.in/Onethrive%20tab%20logo.png"
      />

      {/* ✅ Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About Us - OneThrive" />
      <Meta
        name="twitter:description"
        content="Meet the team and vision behind OneThrive’s workplace transformation solutions."
      />
      <Meta
        name="twitter:image"
        content="https://onethrive.in/Onethrive%20tab%20logo.png"
      />

      {/* ✅ Page Content */}
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
