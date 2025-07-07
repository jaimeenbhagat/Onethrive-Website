import { motion } from "framer-motion";
import aboutusimage from "../../assets/aboutus.webp";
import { Link } from "react-router-dom";

const AboutUsHero = () => {
  return (
    <div className="max-w-7xl mx-auto mb-32 relative">
      {/* Background gradient effects */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-[#00FFAB]/10 via-[#00FFAB]/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-l from-[#00FFAB]/10 via-[#00FFAB]/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Text content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-white">About Us</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00FFAB] via-[#00FFAB]/70 to-transparent mb-8"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-white font-bold leading-relaxed relative mb-4">
              It started with a simple realization workplace culture isn't just about 
              deadlines and meetings. It's about people. At OneThrive, we saw employees 
              burning out and teams disconnected, so we built a company dedicated to 
              transforming work into an experience.
            </p>

            <p className="text-lg md:text-xl text-white font-bold leading-relaxed relative mb-8">
              From team-building challenges to wellness initiatives, we create moments 
              that leave lasting impacts. We partner with organizations to design tailored 
              strategies that boost morale and create truly fulfilling work environments. 
              Because when employees thrive, businesses do too.
            </p>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Image container with glow effect */}
            <motion.div
              className="relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(0, 255, 171, 0.1)",
                  "0 0 50px rgba(0, 255, 171, 0.2)",
                  "0 0 30px rgba(0, 255, 171, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Replace this with your actual image */}
              <img
                src={aboutusimage}
                alt="Team collaboration"
                className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating accent element */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#00FFAB] rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Decorative elements around the image */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-[#00FFAB]/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute -top-6 -right-6 w-6 h-6 bg-[#00FFAB]/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsHero;