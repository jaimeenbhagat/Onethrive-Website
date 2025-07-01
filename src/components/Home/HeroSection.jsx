import { motion } from "framer-motion";
import bgImage from "../../assets/herosectionimage1.png"; // Your new image

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-10 md:px-20 pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center font-interphase"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-7xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold leading-tight mb-4 sm:mb-6">
          Everything You Need for <br /> Team Building & Employee Engagement.
          <br className="hidden sm:block" />
          One Roof. One Thrive.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white text-center mb-6 sm:mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
          At OneThrive, we create meaningful, memorable experiences that bring your teams <br /> closer. 
          Whether you're scaling culture or boosting collaboration, we deliver everything you need 
          to help your people connect, grow, and thrive.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-[#00FFAB] text-black font-semibold rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.8)] transition duration-300 text-base sm:text-lg"
        >
          Elevate Your Team Today →
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;