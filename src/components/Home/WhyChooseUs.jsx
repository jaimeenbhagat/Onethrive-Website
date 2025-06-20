import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const whyChooseUs = [
  {
    title: "Expert Facilitation",
    description: "10+ years of transformative experience",
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
    title: "Customized Solutions",
    description: "Tailored to your specific industry needs",
    icon: "🎯", 
    stats: "100% Custom",
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
    description: "Measurable outcomes with clear ROI",
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
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00FFAB] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#00CC88] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-[#88FFAA] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImdyaWQiIG9wYWNpdHk9IjAuMSI+CjxwYXRoIGQ9Ik0wIDQwVjBIMUwwIDQwWiIgZmlsbD0iIzAwRkZBQiIvPgo8cGF0aCBkPSJNNDAgMEg0MFY0MEgzOUw0MCAwWiIgZmlsbD0iIzAwRkZBQiIvPgo8cGF0aCBkPSJNMCAwSDQwVjFIMEwwIDBaIiBmaWxsPSIjMDBGRkFCIi8+CjxwYXRoIGQ9Ik0wIDQwSDQwVjM5SDBMNDAgWiIgZmlsbD0iIzAwRkZBQiIvPgo8L2c+Cjwvc3ZnPgo=')] opacity-20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] mb-4 relative"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Why Choose OneThrive?
            
            {/* Subtle glow effect */}
            <motion.span
              className="absolute inset-0 text-4xl md:text-5xl font-black text-[#00FFAB] opacity-30 blur-sm -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Why Choose OneThrive?
            </motion.span>
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          
          <motion.p
            className="text-lg text-white/80 max-w-3xl font-bold mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transformative experiences that drive{" "}
            <span className="text-[#00FFAB] font-extrabold">real results</span>
          </motion.p>
        </motion.div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                className="bg-gradient-to-br from-gray-900/60 via-black/80 to-gray-900/60 backdrop-blur-sm border border-[#00FFAB]/20 rounded-2xl p-6 h-full text-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  borderColor: 'rgba(0, 255, 171, 0.6)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${item.gradient.split(' ')[1]}, transparent, ${item.gradient.split(' ')[3]}, transparent)`
                  }}
                  animate={hoveredIndex === index ? {
                    rotate: [0, 360],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10">
                  {/* Stats Badge */}
                  <motion.div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-black font-bold text-xs mb-3 shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.stats}
                  </motion.div>
                  
                  {/* Icon with advanced hover effects */}
                  <motion.div
                    className="text-3xl mb-3 relative"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -15, 15, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      animate={hoveredIndex === index ? {
                        y: [-1, 1, -1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Icon glow */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 text-3xl opacity-50 blur-sm text-[#00FFAB]"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3
                    className="text-lg font-bold text-white mb-2 group-hover:text-[#00FFAB] transition-colors duration-300"
                    layoutId={`title-${index}`}
                  >
                    {item.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-snug"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                {/* Floating particles on hover */}
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

        {/* Compact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="relative px-8 py-3 bg-gradient-to-r from-[#00FFAB] to-[#00CC88] text-black font-bold rounded-full shadow-xl hover:shadow-[#00FFAB]/50 transition-all duration-300 overflow-hidden group"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(0, 255, 171, 0.6)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#00CC88] to-[#00FFAB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
            <span className="relative z-10">Experience the Difference</span>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-[#00FFAB] rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;