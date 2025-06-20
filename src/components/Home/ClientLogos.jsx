import { motion } from "framer-motion";
import client1 from "../../assets/services/services1.png";
import client2 from "../../assets/services/services1.png";
import client3 from "../../assets/services/services1.png";
import client4 from "../../assets/services/services1.png";
import client5 from "../../assets/services/services1.png";
import client6 from "../../assets/services/services1.png";
import client7 from "../../assets/services/services1.png";
import client8 from "../../assets/services/services1.png";

const clientLogos = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
];

const ClientLogos = () => {
  return (
    <motion.div
      className="min-h-[300px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Join the growing list of companies that have transformed their workplace culture with OneThrive
        </p>
        <div className="w-24 h-1 bg-[#00FFAB] mx-auto mt-6 rounded-full" />
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden h-36">
        {/* Gradient overlays for seamless loop effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* Moving logos */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * clientLogos.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: `${clientLogos.length * 200}px` }}
        >
          {/* First set of logos */}
          {clientLogos.map((client, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-full flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-[#00FFAB]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 171, 0.1)" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-40 max-h-28 object-contain filter transition-all duration-300"
              />
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((client, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-[#00FFAB]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 171, 0.1)" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-40 max-h-28 object-contain filter transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClientLogos;