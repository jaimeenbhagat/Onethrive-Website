import { motion } from "framer-motion";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";

const clientLogos = [
  { name: "EDS", logo: client1 },
  { name: "DJSCE", logo: client2 },
];

const ClientLogos = () => {
  return (
    <motion.div
      className="min-h-[400px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p 
          className="text-lg text-white/90 max-w-3xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the growing list of companies that have transformed their workplace culture with OneThrive
        </motion.p>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-[#00FFAB] to-[#00D4AA] mx-auto mt-8 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>

      {/* Static Logo Display */}
      <div className="flex justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
          >
            <div className="w-80 h-48 flex items-center justify-center bg-white/8 backdrop-blur-sm rounded-3xl border border-white/20 group-hover:border-[#00FFAB]/60 transition-all duration-500 group-hover:bg-white/12 group-hover:shadow-2xl group-hover:shadow-[#00FFAB]/20">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-64 max-h-40 object-contain filter transition-all duration-500 group-hover:scale-105"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00FFAB]/0 via-[#00FFAB]/10 to-[#00FFAB]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientLogos;