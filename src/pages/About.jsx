import { motion } from "framer-motion";
import CompanyAbout from "../components/About/AboutUsHero"; // Assuming you have this component
import MissionVision from "../components/About/MissionVision"; // Your existing component
import OurProcess from "../components/About/OurProcess"; // Your existing component
import OurTeam from "../components/About/OurTeam"; // The component we just created

const AboutUs = () => {
  return (
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
  );
};

export default AboutUs;