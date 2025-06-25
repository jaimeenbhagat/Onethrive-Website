import { motion } from "framer-motion";
import { useState } from "react";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";

// Client logos with actual imported images
const clientLogos = [
  { 
    name: "EDS International", 
    logo: client1,  // Remove quotes to reference the imported image
    description: "Leading Technology Solutions" 
  },
  { 
    name: "DJSCE", 
    logo: client2,  // Remove quotes to reference the imported image
    description: "Premier Engineering Institute" 
  },
];

const ClientLogos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="min-h-[500px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-20">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p 
          className="text-xl text-white max-w-4xl mx-auto font-bold leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the growing list of companies that have transformed their workplace culture with OneThrive
        </motion.p>
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-[#00FFAB] to-[#00D4AA] mx-auto mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>

      {/* Enhanced Logo Display */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/20 via-[#00D4AA]/20 to-[#00FFAB]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110" />
            
            {/* Logo container */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-4 transition-all duration-500 group-hover:border-[#00FFAB]/50 group-hover:shadow-2xl group-hover:shadow-[#00FFAB]/20">
              {/* Logo image */}
              <div className="flex justify-center items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-72 h-48 object-contain filter brightness-110 contrast-110 transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                />
              </div>
              
              {/* Client info */}
              <motion.div 
                className="text-center"
                animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                  {client.name}
                </h3>
                <p className="text-white font-bold text-sm md:text-base mb-4">
                  {client.description}
                </p>
              </motion.div>
              
              {/* Accent border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FFAB] to-[#00D4AA] opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none" />
            </div>
            
            {/* Floating particles effect */}
            {hoveredIndex === index && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#00FFAB] rounded-full"
                    initial={{ 
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      opacity: 0 
                    }}
                    animate={{
                      x: Math.random() * 300 - 150,
                      y: Math.random() * 300 - 150,
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientLogos;