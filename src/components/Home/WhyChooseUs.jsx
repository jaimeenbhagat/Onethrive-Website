import { motion } from "framer-motion";
import { useState } from "react";

const whyChooseUs = [
  {
    title: "Expert Facilitation",
    description: "Transformative experience with proven results",
    icon: "👥",
    stats: "10+ Years",
    gradient: "from-[#00FFAB] to-[#00CC88]"
  },
  {
    title: "Scalable Programs",
    description: "From startups to Fortune 500 companies",
    icon: "📈",
    stats: "All Sizes",
    gradient: "from-[#00FF88] to-[#00FFAB]"
  },
  {
    title: "Personalised Solutions",
    description: "Tailored to your specific industry needs",
    icon: "🎯",
    stats: "Fully Custom",
    gradient: "from-[#88FFAA] to-[#00FF88]"
  },
  {
    title: "Diverse Offerings",
    description: "Extensive portfolio of engaging activities",
    icon: "🎪",
    stats: "100+ Activities",
    gradient: "from-[#00FFAB] to-[#66FFBB]"
  },
  {
    title: "Result Driven",
    description: "Measurable outcomes with<br/>clear ROI",
    icon: "📊",
    stats: "ROI Focused",
    gradient: "from-[#44FF99] to-[#00FFAB]"
  },
  {
    title: "Transparency & Trust",
    description: "Consistent delivery and clear communication",
    icon: "🔒",
    stats: "100% Trust",
    gradient: "from-[#00FFAB] to-[#22FF99]"
  }
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-1">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-56 sm:w-64 h-56 sm:h-64 bg-[#00FFAB] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-56 sm:w-64 h-56 sm:h-64 bg-[#00CC88] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-56 sm:w-64 h-56 sm:h-64 bg-[#88FFAA] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImdyaWQiIG9wYWNpdHk9IjAuMSI+CjxwYXRoIGQ9Ik0wIDQwVjBIMUwwIDQwWiIgZmlsbD0iIzAwRkZBQiIvPgo8cGF0aCBkPSJNNDAgMEg0MFY0MEgzOUw0MCAwWiIgZmlsbD0iIzAwRkZBQiIvPgo8cGF0aCBkPSJNMCAwSDQwVjFIMEwwIDBaIiBmaWxsPSIjMDBGRkFCIi8+CjxwYXRoIGQ9Ik0wIDQwSDQwVjM5SDBMNDAgWiIgZmlsbD0iIzAwRkZBQiIvPgo8L2c+Cjwvc3ZnPgo=')] opacity-20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-10 md:mb-12 px-2 mt-8 sm:mt-0"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4 relative leading-tight"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Why Choose OneThrive?
          </motion.h2>

          <motion.div
            className="w-24 sm:w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 sm:mb-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          <motion.p
            className="text-md md:text-xl text-white max-w-xl font-medium mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transformative experiences that drive real results
          </motion.p>
        </motion.div>

        {/* Cards Grid - Mobile: 2 columns, 3 rows | Desktop: 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-sm border border-[#00FFAB]/20 rounded-2xl p-3 sm:p-5 md:p-6 h-[200px] sm:h-[280px] md:h-[320px] text-center relative overflow-hidden flex flex-col justify-between"
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  borderColor: 'rgba(0, 255, 171, 0.6)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${item.gradient.split(' ')[1]}, transparent, ${item.gradient.split(' ')[3]}, transparent)`
                  }}
                  animate={hoveredIndex === index ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Stats */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    className={`flex items-center justify-center w-24 sm:w-28 md:w-32 h-6 sm:h-9 md:h-8 rounded-full bg-gradient-to-r ${item.gradient} text-black font-bold text-xs sm:text-base md:text-sm shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.stats}
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
                  <motion.div
                    className="text-3xl sm:text-5xl md:text-5xl relative"
                    whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      animate={hoveredIndex === index ? { y: [-1, 1, -1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.div>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 text-2xl sm:text-4xl md:text-5xl opacity-50 blur-sm text-[#00FFAB]"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.h3
                    className="text-sm sm:text-xl md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3 group-hover:text-[#00FFAB] transition-colors duration-300 leading-tight h-[2rem] sm:h-[3rem] md:h-[3.5rem] flex items-center justify-center text-center"
                    layoutId={`title-${index}`}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-xs sm:text-md md:text-md text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-snug text-center px-1"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00FFAB] rounded-full"
                        initial={{
                          x: Math.random() * 200,
                          y: Math.random() * 150,
                          opacity: 0
                        }}
                        animate={{
                          y: [null, -15],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;