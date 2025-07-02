import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import discoveryIcon from "../../assets/process/1.png";
import planningIcon from "../../assets/process/2.png";
import executionIcon from "../../assets/process/3.png";
import engagementIcon from "../../assets/process/4.png";
import evaluationIcon from "../../assets/process/5.png";

const processSteps = [
  {
    title: "Discovery",
    description: "We analyze your workplace culture, challenges, and objectives to craft the perfect engagement strategy.",
    icon: discoveryIcon,
  },
  {
    title: "Planning",
    description: "Our team designs customized programs tailored to your company's needs based on the insights received from the discovery process.",
    icon: planningIcon,
  },
  {
    title: "Execution",
    description: "We handle the curation, logistics, coordination, and facilitation of events, ensuring a seamless and engaging experience.",
    icon: executionIcon,
  },
  {
    title: "Engagement",
    description: "Employees participate in immersive, interactive and rewarding activities curated by Team OneThrive.",
    icon: engagementIcon,
  },
  {
    title: "Evaluation",
    description: "We collect feedback, measure success, and continuously refine our approach to maximize the engagement impact.",
    icon: evaluationIcon,
  },
];

const ProcessStep = ({ step, index, isActive, isCompleted, shouldShow }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });
  
  const isLeft = index % 2 === 0;

  // Don't render if shouldn't show
  if (!shouldShow) return null;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center w-full relative ${isLeft ? 'justify-start' : 'justify-end'} mb-16 md:mb-24`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
    >
      {/* Connection line to center */}
      <motion.div
        className={`absolute top-1/2 w-16 md:w-24 h-0.5 bg-gradient-to-r ${
          isLeft 
            ? 'right-0 from-transparent to-[#00FFAB]' 
            : 'left-0 from-[#00FFAB] to-transparent'
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      />

      {/* Process step card */}
      <motion.div
        className={`flex items-center gap-6 max-w-md ${isLeft ? 'flex-row' : 'flex-row-reverse'} 
          bg-gradient-to-br from-[#111]/90 to-[#222]/90 backdrop-blur-sm 
          border border-[#00FFAB]/20 rounded-2xl p-6 md:p-8 group
          ${isActive ? 'border-[#00FFAB]/60 shadow-2xl shadow-[#00FFAB]/20' : ''}
          ${isCompleted ? 'border-[#00FFAB]/40 bg-gradient-to-br from-[#111]/70 to-[#222]/70' : ''}`}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(0, 255, 171, 0.8)",
          boxShadow: "0 0 40px rgba(0, 255, 171, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Icon container */}
        <motion.div className="relative flex-shrink-0">
          {/* Main icon container */}
          <motion.div
            className={`bg-gradient-to-br from-[#111] to-[#222] border-2 
              w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full 
              shadow-lg relative z-10 transition-all duration-300
              ${isCompleted ? 'border-[#00FFAB]/60 shadow-[#00FFAB]/40' : 'border-[#00FFAB]/30 shadow-[#00FFAB]/30'}
              ${isActive ? 'border-[#00FFAB] shadow-[#00FFAB]/50' : ''}`}
          >
            <img loading="lazy" 
              src={step.icon}
              alt={step.title}
              className={`w-12 h-12 md:w-16 md:h-16 transition-all duration-300
                ${isCompleted ? 'brightness-110' : ''}
                ${isActive ? 'brightness-125 scale-110' : ''}`}
            />
            

          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
        >
          <motion.h3 
            className={`text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300
              ${isActive ? 'text-[#00FFAB]' : isCompleted ? 'text-white' : 'text-white group-hover:text-[#00FFAB]'}`}
            whileHover={{ scale: 1.05 }}
          >
            {step.title}
          </motion.h3>
          <motion.p 
            className={`text-sm md:text-base leading-relaxed transition-colors duration-300
              ${isActive ? 'text-white/90' : isCompleted ? 'text-white/80' : 'text-white/70 group-hover:text-white/90'}`}
            whileHover={{ scale: 1.02 }}
          >
            {step.description}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Active step floating particles */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00FFAB]/60 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [-10, -40, -10],
                x: [-10, 10, -10],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const OurProcess = () => {
  const processRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [visibleSteps, setVisibleSteps] = useState(new Set([0])); // Track which steps should be visible
  
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  // Track active step and visible steps based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const totalSteps = processSteps.length;
      const progress = Math.max(0, Math.min(1, latest));
      
      // Calculate which step should be active
      const newActiveStep = Math.min(
        Math.floor(progress * totalSteps * 1.2),
        totalSteps - 1
      );
      
      setActiveStep(newActiveStep);
      
      // Mark previous steps as completed
      const newCompleted = new Set();
      for (let i = 0; i < newActiveStep; i++) {
        newCompleted.add(i);
      }
      setCompletedSteps(newCompleted);
      
      // Make steps visible progressively (sticky behavior)
      const newVisible = new Set();
      for (let i = 0; i <= newActiveStep; i++) {
        newVisible.add(i);
      }
      setVisibleSteps(newVisible);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black/50 via-black to-black/50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FFAB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFAB]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00FFAB]/15 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFAB]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -120],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div
        ref={processRef}
        className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto py-16"
      >
        {/* Section title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Our Process
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-lg md:text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A step-by-step journey to meaningful, measurable engagement tailored to your team.
          </motion.p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative" style={{ minHeight: `${processSteps.length * 300}px` }}>
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#00FFAB]/30 to-transparent" />
          
          {/* Animated progress line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00FFAB] via-[#00CC88] to-[#00FFAB] origin-top"
            style={{ 
              scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
              height: '100%'
            }}
          />

          {/* Process steps - only render visible ones */}
          <div className="relative">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                isCompleted={completedSteps.has(index)}
                shouldShow={visibleSteps.has(index)}
              />
            ))}
          </div>
        </div>

       
      </motion.div>
    </div>
  );
};

export default OurProcess;