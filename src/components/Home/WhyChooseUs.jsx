import { motion } from "framer-motion";

const whyChooseUs = [
  {
    title: "Expert Facilitation",
    description: "With over 10+ years of experience.",
    icon: "👥"
  },
  {
    title: "Scalable Programs",
    description: "For companies of all sizes & capacities.",
    icon: "📈"
  },
  {
    title: "Customized Solutions",
    description: "Tailored to your specific needs.",
    icon: "🎯"
  },
  {
    title: "Diverse Offerings",
    description: "With over 100+ activities to choose from.",
    icon: "🎪"
  },
  {
    title: "Result Driven Approach",
    description: "Delivering outcomes that matter.",
    icon: "📊"
  },
  {
    title: "Transparency and Reliability",
    description: "Trusted for our consistency and clarity.",
    icon: "🔒"
  }
];

const WhyChooseUs = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Choose OneThrive?
        </motion.h2>
        
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
        
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We don't just organize events we create transformative experiences that drive real results.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#111] to-[#222] border border-[#00FFAB]/20 rounded-2xl p-8 group hover:border-[#00FFAB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFAB]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <motion.div
              className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            
            <h3 className="text-xl font-semibold text-[#00FFAB] mb-4 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {item.description}
            </p>

            {/* Animated background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 via-[#00FFAB]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              initial={false}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;