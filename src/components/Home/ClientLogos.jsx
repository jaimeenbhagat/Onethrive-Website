import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";

const clientLogos = [
  { name: "EDS", logo: client1 },
  { name: "DJSCE", logo: client2 },
];

const ClientLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + clientLogos.length) % clientLogos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
  };

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

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-[#00FFAB]/50 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-[#00FFAB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-[#00FFAB]/50 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-[#00FFAB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden rounded-3xl">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center py-16"
              >
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0.7,
                    scale: index === currentIndex ? 1 : 0.9
                  }}
                  transition={{ duration: 0.6 }}
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {clientLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#00FFAB] shadow-lg shadow-[#00FFAB]/50'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientLogos;