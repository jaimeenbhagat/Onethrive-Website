import { motion } from "framer-motion";
import { useState } from "react";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";

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
];

const ClientLogos = () => {
  return (
    <motion.div
      className="min-h-[500px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
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

      {/* Simple Logo Display */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 max-w-6xl mx-auto">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            {/* Logo image - same size as before */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={client.logo}
                alt={client.name}
                className="w-72 h-48 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientLogos;