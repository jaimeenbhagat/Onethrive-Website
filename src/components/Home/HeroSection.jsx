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
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Show skeleton only while loading and no error */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-pulse"></div>
        )}
        {/* Show image only when loaded and no error */}
        {imageLoaded && !imageError && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 opacity-100"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
        {/* Overlay always on top for darkening effect */}
        <div className="absolute inset-0 w-full h-full bg-black/70 pointer-events-none"></div>
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-7xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: imageLoaded ? 0.2 : 0 }}
      >
        {/* Mobile heading - Same content, better sizing */}
        <h1 className="block sm:hidden text-2xl font-extrabold leading-tight mb-6 px-2">
          Build Stronger Teams. <br />Boost Real Engagement.
        </h1>

        {/* Desktop heading - Unchanged */}
        <h1 className="hidden sm:block text-5xl md:text-4xl lg:text-5xl text-center font-extrabold leading-tight mb-6 sm:mb-6">
          Build Stronger Teams. <br />Boost Real Engagement.
        </h1>

        {/* Mobile & Desktop description - Same content */}
        <p className="text-lg sm:text-lg md:text-xl text-white text-center mb-8 sm:mb-8 font-medium leading-relaxed max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-0">
          We design employee experiences that <br />spark connection, collaboration, and growth.
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