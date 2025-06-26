import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import discoveryIcon from "../../assets/process/discovery.png";
import planningIcon from "../../assets/process/planning.png";
import executionIcon from "../../assets/process/execution.png";
import engagementIcon from "../../assets/process/engagement.png";
import evaluationIcon from "../../assets/process/evaluation.png";

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

const ProcessStep = ({ step, index, containerScrollProgress }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  
  // Much smaller scroll ranges for faster sequential animation
  const stepStart = index * 0.08; // 0%, 8%, 16%, 24%, 32%
  const stepEnd = stepStart + 0.06; // 6%, 14%, 22%, 30%, 38%
  
  const stepProgress = useTransform(
    containerScrollProgress,
    [stepStart, stepEnd],
    [0, 1]
  );

  // Once animated in, steps stay fully visible (opacity stays at 1)
  const opacity = useTransform(stepProgress, [0, 1], [0, 1]);
  const scale = useTransform(stepProgress, [0, 1], [0.8, 1]);
  const y = useTransform(stepProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center md:w-1/5 group relative"
      style={{ opacity, scale, y }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/20 via-[#00FFAB]/10 to-transparent rounded-full blur-xl"
        animate={inView ? { 
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Step icon with integrated number at bottom */}
      <motion.div className="relative mb-6 flex-shrink-0">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#00FFAB]/40"
          animate={inView ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="bg-gradient-to-br from-[#111] to-[#222] border-2 border-[#00FFAB]/30 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg shadow-[#00FFAB]/30 relative z-10"
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -10, 10, 0],
            borderColor: "#00FFAB",
            boxShadow: "0 0 30px rgba(0, 255, 171, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <motion.img
            src={step.icon}
            alt={step.title}
            className="w-8 h-8 md:w-10 md:h-10"
            animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Step number at bottom of circle - subtle integration */}
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00FFAB] to-[#00CC88] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black"
          initial={{ scale: 0, y: 10 }}
          animate={inView ? { scale: 1, y: 0 } : { scale: 0, y: 10 }}
          transition={{ delay: index * 0.05 + 0.3, type: "spring", stiffness: 400, duration: 0.4 }}
        >
          {index + 1}
        </motion.div>
      </motion.div>

      {/* Content with enhanced staggered animation */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          delay: index * 0.08 + 0.2, 
          duration: 0.5,
          type: "spring",
          stiffness: 150
        }}
      >
        <motion.h3 
          className="text-xl font-semibold text-white mb-4 group-hover:text-[#00FFAB] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-sm sm:text-base text-white/60 leading-snug group-hover:text-white/80 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {step.description}
        </motion.p>
      </motion.div>

      {/* Floating particles around each step */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00FFAB]/60 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                x: [-5, 5, -5],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 1.5,
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
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start bottom", "end top"]
  });

  // Create a ref for just the steps container
  const stepsRef = useRef(null);
  const { scrollYProgress: stepsScrollProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"]
  });

  // Monitor when all steps animation is complete
  useEffect(() => {
    const unsubscribe = stepsScrollProgress.onChange((latest) => {
      // All steps complete when scroll progress reaches 0.4 (40%)
      // This is after the last step (starts at 32% and ends at 38%)
      if (latest >= 0.4) {
        setAllStepsCompleted(true);
      } else {
        setAllStepsCompleted(false);
      }
    });

    return () => unsubscribe();
  }, [stepsScrollProgress]);

  const backgroundY = useTransform(stepsScrollProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      ref={processRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto overflow-hidden py-16 mb-32"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00FFAB]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFAB]/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFAB]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced section title */}
      <motion.div
        className="text-center relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
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
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A step by step journey to meaningful, measurable engagement tailored to your team.
        </motion.p>
      </motion.div>

      <div ref={stepsRef} className="relative z-10">
        {/* Enhanced progress bar */}
        <motion.div
          className="hidden md:block absolute top-[50px] left-0 w-full h-1 bg-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="hidden md:block absolute top-[50px] left-0 h-1 bg-gradient-to-r from-[#00FFAB] via-[#00CC88] to-[#00FFAB] rounded-full origin-left shadow-lg shadow-[#00FFAB]/50"
          style={{ scaleX: stepsScrollProgress }}
        />

        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-8 md:gap-4 z-10 relative pt-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              containerScrollProgress={stepsScrollProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default OurProcess;