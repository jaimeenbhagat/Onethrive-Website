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
      className="min-h-[500px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12 md:mb-20 mt-8 md:mt-0">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Industry Leaders
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

      {/* Logo Display - Mobile: side by side | Desktop: same as before */}
      <div className="flex flex-row md:flex-row justify-center items-center gap-6 md:gap-20 max-w-6xl mx-auto">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            {/* Logo image - smaller for mobile, same for desktop */}
            <div className="flex justify-center items-center mb-4">
              <img loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="w-40 h-28 md:w-72 md:h-48 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientLogos;