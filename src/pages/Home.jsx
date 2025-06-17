import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroSection from "../components/HeroSection";
import FAQs from "../components/FAQs";
import aboutImage from "../assets/about.png";

import service1 from "../assets/services/services1.png";
import service2 from "../assets/services/services2.png";
import service3 from "../assets/services/services3.png";
import service4 from "../assets/services/services4.png";
import service5 from "../assets/services/services5.png";
import service7 from "../assets/services/services7.png";

import discoveryIcon from "../assets/process/discovery.png";
import planningIcon from "../assets/process/planning.png";
import executionIcon from "../assets/process/execution.png";
import engagementIcon from "../assets/process/engagement.png";
import evaluationIcon from "../assets/process/evaluation.png";

const services = [
  { title: "Team Building Games", image: service1 },
  { title: "Wellness Programs", image: service2 },
  { title: "Creative Workshops", image: service3 },
  { title: "Sports Tournaments", image: service4 },
  { title: "Entertainment Events", image: service5 },
  { title: "Offsite Retreats", image: service7 },
];

const processSteps = [
  {
    title: "Discovery",
    description: "Understand your goals, challenges, and culture.",
    icon: discoveryIcon,
  },
  {
    title: "Planning",
    description: "Strategize timeline, resources, and activities.",
    icon: planningIcon,
  },
  {
    title: "Execution",
    description: "Bring the plan to life with creativity and precision.",
    icon: executionIcon,
  },
  {
    title: "Engagement",
    description: "Interactive and meaningful team participation.",
    icon: engagementIcon,
  },
  {
    title: "Evaluation",
    description: "Measure success and refine future programs.",
    icon: evaluationIcon,
  },
];

const ProcessStep = ({ step, index, containerScrollProgress }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  
  // Updated scroll ranges for sequential animation
  const stepStart = index * 0.16; // 0%, 16%, 32%, 48%, 64%
  const stepEnd = stepStart + 0.10; // 10%, 26%, 42%, 58%, 74%
  
  const stepProgress = useTransform(
    containerScrollProgress,
    [stepStart, stepEnd],
    [0, 1]
  );

  // Once animated in, steps stay fully visible (opacity stays at 1)
  const opacity = useTransform(stepProgress, [0, 1], [0, 1]);
  const scale = useTransform(stepProgress, [0, 1], [0.9, 1]);
  const y = useTransform(stepProgress, [0, 1], [30, 0]);

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
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360]
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Step icon with enhanced animations */}
      <motion.div className="relative mb-6">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#00FFAB]/40"
          animate={inView ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="bg-gradient-to-br from-[#111] to-[#222] border-2 border-[#00FFAB]/30 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg shadow-[#00FFAB]/30 relative z-10"
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -10, 10, 0],
            borderColor: "#00FFAB",
            boxShadow: "0 0 30px rgba(0, 255, 171, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.img
            src={step.icon}
            alt={step.title}
            className="w-8 h-8 md:w-10 md:h-10"
            animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Step number indicator */}
        <motion.div
          className="absolute -top-2 -right-2 bg-[#00FFAB] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
        >
          {index + 1}
        </motion.div>
      </motion.div>

      {/* Content with enhanced staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          delay: index * 0.15 + 0.3, 
          duration: 0.8,
          type: "spring",
          stiffness: 100
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

      {/* Connection line with progress animation */}
      {index < processSteps.length - 1 && (
        <motion.div
          className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00FFAB] via-[#00FFAB]/50 to-transparent origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
        />
      )}

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

const AboutSection = () => {
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start bottom", "end top"] // Start when steps area enters, not the title
  });

  // Create a ref for just the steps container
  const stepsRef = useRef(null);
  const { scrollYProgress: stepsScrollProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"] // Animation triggers when steps are in center
  });

  const backgroundY = useTransform(stepsScrollProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="w-full text-white bg-black font-interphase">
      <HeroSection />

      {/* About */}
      <div className="min-h-screen flex items-center px-6 py-16 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold text-[#00FFAB] mb-6 leading-tight">
              Building Better Workplaces,
              <br />
              One Team at a Time
            </h2>
            <p className="text-lg text-white mb-4 leading-relaxed">
              OneThrive is more than just an employee engagement company—we're
              workplace culture architects.
            </p>
            <p className="text-lg text-white leading-relaxed">
              As a new player in this space, we bring a fresh, fun, and
              forward-thinking approach.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImage}
              alt="About"
              className="w-full rounded-2xl shadow-lg shadow-[#00FFAB]/30"
            />
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <motion.div
        className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-white mb-2">
            ONE PLATFORM FOR ALL YOUR
          </h2>
          <h2 className="text-4xl font-bold text-[#00FFAB]">
            ENGAGEMENT NEEDS
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-black rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[240px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => (window.location.href = "/services")}
            >
              <div className="relative w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-2">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-4  ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/services")}
            className="bg-[#00FFAB] text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white transition"
          >
            Explore All Services
          </motion.button>
        </div>
      </motion.div>

      {/* Our Process - Enhanced Version */}
      <motion.div
        ref={processRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto overflow-hidden py-20"
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00FFAB]/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
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

        {/* Enhanced section title */}
        <motion.div
          className="text-center mb-16 relative z-10"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A step-by-step journey to meaningful, measurable engagement — tailored to your team.
          </motion.p>
        </motion.div>

        <div ref={stepsRef} className="relative z-10">
          {/* Enhanced progress bar */}
          <motion.div
            className="hidden md:block absolute top-[50px] left-0 w-full h-1 bg-white/10 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="hidden md:block absolute top-[50px] left-0 h-1 bg-gradient-to-r from-[#00FFAB] via-[#00CC88] to-[#00FFAB] rounded-full origin-left shadow-lg shadow-[#00FFAB]/50"
            style={{ scaleX: stepsScrollProgress }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 z-10 relative">
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

      <FAQs />
    </section>
  );
};

export default AboutSection;