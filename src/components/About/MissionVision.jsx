import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div className="relative py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-10 left-1/4 w-24 h-24 bg-[#00FFAB]/8 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-32 h-32 bg-[#00FFAB]/6 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our Purpose
            </h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Vision Card */}
          <motion.div
            className="relative group h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-full bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111] border border-[#00FFAB]/20 rounded-2xl p-8 overflow-hidden transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(0, 255, 171, 0.4)",
                boxShadow: "0 20px 40px rgba(0, 255, 171, 0.1)"
              }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #00FFAB 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
              </div>

              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-[#00FFAB]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-6 h-6 bg-[#00FFAB] rounded-lg transform rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-sm transform -rotate-45" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#00FFAB]">
                    Our Vision
                  </h3>
                </motion.div>

                <p className="text-white font-bold text-lg leading-relaxed flex-grow">
                  At <span className="text-[#00FFAB] font-semibold">OneThrive</span>, we elevate workplace culture through tailored experiences that inspire team bonding, ignite creativity, and promote holistic employee well-being. By blending engagement with performance, we help organizations build happier, stronger, and more resilient teams.
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-[#00FFAB] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative group h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-full bg-gradient-to-bl from-[#111111] via-[#0a0a0a] to-[#111111] border border-[#00FFAB]/20 rounded-2xl p-8 overflow-hidden transition-all duration-500"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(0, 255, 171, 0.4)",
                boxShadow: "0 20px 40px rgba(0, 255, 171, 0.1)"
              }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #00FFAB 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} />
              </div>

              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-bl from-[#00FFAB]/5 via-transparent to-[#00FFAB]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-6 h-6 bg-[#00FFAB] rounded-lg transform rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-sm transform -rotate-45" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[#00FFAB]">
                    Our Mission
                  </h3>
                </motion.div>

                <p className="text-white font-bold text-lg leading-relaxed flex-grow">
                  At <span className="text-[#00FFAB] font-semibold">OneThrive</span>, we aim to redefine employee engagement by becoming the go-to partner for building vibrant, purpose-driven teams. We envision workplaces as thriving ecosystems of collaboration, creativity, and connection—where employees are empowered to grow, perform, and truly belong.
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-[#00FFAB] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionVision;