import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import bgImage from "../../assets/herosectionimage1.webp";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageError(true);
    };
    img.src = bgImage;
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-10 md:px-20 pt-20 pb-12 md:pt-32 md:pb-24 font-interphase"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Actual background image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Loading skeleton (optional) */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-pulse"></div>
        </div>
      )}

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-7xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: imageLoaded ? 0.2 : 0 }}
      >
        {/* Mobile heading - Same content, better sizing */}
        <h1 className="block sm:hidden text-2xl font-extrabold leading-tight mb-6 px-2">
          Everything You Need for <br />
          Team Building & <br />
          Employee Engagement. <br />
          One Roof. One Thrive.
        </h1>

        {/* Desktop heading - Unchanged */}
        <h1 className="hidden sm:block text-5xl md:text-4xl lg:text-5xl text-center font-extrabold leading-tight mb-6 sm:mb-6">
          Everything You Need for <br /> Team Building & Employee Engagement.
          <br className="hidden sm:block" />
          One Roof. One Thrive.
        </h1>

        {/* Mobile & Desktop description - Same content */}
        <p className="text-lg sm:text-lg md:text-xl text-white text-center mb-8 sm:mb-8 font-medium leading-relaxed max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-0">
          At OneThrive, we create purposeful, memorable experiences that bring your teams closer. <br className="hidden sm:block"/> 
          Whether you're scaling culture or boosting collaboration, we deliver everything you need to help your people connect, grow, and thrive.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-4 sm:px-6 sm:py-3 bg-[#00FFAB] text-black font-semibold rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.8)] transition duration-300 text-lg sm:text-base md:text-lg"
        >
          Elevate Your Team Today →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;