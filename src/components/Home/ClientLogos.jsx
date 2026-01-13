import { motion } from "framer-motion";
import { useState } from "react";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";
import client3 from "../../assets/ClientLogo/KONSULTRA.webp";
import client4 from "../../assets/ClientLogo/PRISMAAI.png";
import client5 from "../../assets/ClientLogo/AsianElectronic.png";
import client6 from "../../assets/ClientLogo/LadyLoveLogo.png";
import client7 from "../../assets/ClientLogo/MystiqueAI.png";
import client8 from "../../assets/ClientLogo/SalesDuo.png";
import client9 from "../../assets/ClientLogo/IIFL.PNG";
import client10 from "../../assets/ClientLogo/Laxmi.PNG";


// Client logos with actual imported images
const clientLogos = [
  { 
    name: "EDS International", 
    logo: client1,
    description: "Leading Technology Solutions" 
  },
  { 
    name: "DJSCE", 
    logo: client2,
    description: "Premier Engineering Institute" 
  },
  { 
    name: "Konsultra", 
    logo: client3,
    description: "Innovative Consulting Services" 
  },
  { 
    name: "Prisma AI", 
    logo: client4,
    description: "AI-Powered Business Solutions" 
  },
  {
    name: "Asian Electronics",
    logo: client5,
    description: "Consumer Electronics Leader"
  },
  {
    name: "Lady Love",
    logo: client6,
    description: "Fashion and Lifestyle Brand"
  },
  {
    name: "Mystique AI",
    logo: client7,
    description: "Cutting-Edge AI Technologies"
  },
  {
    name: "Sales Duo",
    logo: client8,
    description: "Sales Enablement Platform"
  },
  {
    name: "IIFL Capital",
    logo: client9,
    description: "Financial Services Company"
  },
  {
    name: "Laxmi Dental Limited",
    logo: client10,
    description: "Consumer Goods Brand"
  }
];

const ClientLogos = () => {
  return (
    <motion.div
      className="md:min-h-[500px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto md:py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12 md:mb-20 mt-8 md:mt-0">
        <motion.h2 
          className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Leaders
        </motion.h2>
        <motion.div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-3 md:mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        <motion.p 
          className="text-md md:text-xl text-white max-w-5xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the companies transforming workplace culture with OneThrive
        </motion.p>
      </div>

      {/* Infinite Carousel - No Arrows */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <motion.div 
          className="flex gap-8 md:gap-16"
          animate={{
            x: [0, -(250 + 64) * clientLogos.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ willChange: 'transform' }}
        >
          {/* Original logos */}
          {clientLogos.map((client, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-6"
              style={{ width: '250px', height: '160px' }}
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                style={{ width: '200px', height: '120px' }}
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {clientLogos.map((client, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-6"
              style={{ width: '250px', height: '160px' }}
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                style={{ width: '200px', height: '120px' }}
              />
            </div>
          ))}
          {/* Triple set for extra smooth loop */}
          {clientLogos.map((client, index) => (
            <div
              key={`triple-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-6"
              style={{ width: '250px', height: '160px' }}
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                style={{ width: '200px', height: '120px' }}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
  );
};

export default ClientLogos;