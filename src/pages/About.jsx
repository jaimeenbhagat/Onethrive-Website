import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import team1 from "../assets/team/sujal.png";
import team2 from "../assets/team/smeet.png";
import team3 from "../assets/team/parth.png";

import discoveryIcon from "../assets/process/discovery.png";
import planningIcon from "../assets/process/planning.png";
import executionIcon from "../assets/process/execution.png";
import engagementIcon from "../assets/process/engagement.png";
import evaluationIcon from "../assets/process/evaluation.png";

const timeline = [
  {
    title: "The Realization",
    description:
      "It started with a simple realization—workplace culture isn't just about deadlines, meetings, and paychecks. It's about people. The energy they bring, the connections they form, and the experiences that shape their professional journey.",
  },
  {
    title: "Identifying the Gap",
    description:
      "At OneThrive, we saw a gap in corporate engagement. Employees were burning out, teams were disconnected, and companies were struggling to create a workplace that people truly wanted to be part of.",
  },
  {
    title: "Building the Solution",
    description:
      "That's why we built a company dedicated to transforming work into an experience. From team-building challenges to wellness initiatives, we create moments that leave lasting impacts.",
  },
  {
    title: "Our Mission",
    description:
      "To help organizations build a culture where employees feel valued, connected, and excited to come to work. Because a thriving team isn't just good for business—it's the foundation of success.",
  },
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
      <motion.div className="relative mb-6">
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

const AboutUs = () => {
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
    <section className="w-full text-white bg-black py-30 px-6 md:px-20 font-interphase relative overflow-hidden">
      {/* Global floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFAB]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Company About Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 text-center relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] animate-pulse">
            About Us
          </span>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#00FFAB]/20 via-transparent to-[#00FFAB]/20 blur-lg -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

        <motion.p 
          className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          OneThrive is a dynamic employee engagement company specializing in creating vibrant and connected workplace communities. We believe that engaged employees are the key to sustained success, and we partner with organizations to design tailored strategies that boost morale, enhance communication, recognize achievements, and create a truly fulfilling work environment for everyone.
        </motion.p>
      </motion.div>

      {/* Vision and Mission */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background glow effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-[#00FFAB]/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] border border-[#00FFAB]/20 rounded-2xl p-8 shadow-lg hover:shadow-[#00FFAB]/30 transition-all duration-500 relative overflow-hidden group"
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(0, 255, 171, 0.4)",
            boxShadow: "0 20px 40px rgba(0, 255, 171, 0.1)"
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-[#00FFAB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          
          {/* Floating corner accent */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-[#00FFAB] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.h3 
            className="text-3xl font-semibold text-[#00FFAB] mb-4 relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            Our Vision
          </motion.h3>
          <p className="text-white/80 text-lg leading-relaxed relative z-10">
            At OneThrive, we elevate workplace culture through tailored experiences that inspire team bonding, ignite creativity, and promote holistic employee well-being. By blending engagement with performance, we help organizations build happier, stronger, and more resilient teams.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-bl from-[#111] via-[#0a0a0a] to-[#111] border border-[#00FFAB]/20 rounded-2xl p-8 shadow-lg hover:shadow-[#00FFAB]/30 transition-all duration-500 relative overflow-hidden group"
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(0, 255, 171, 0.4)",
            boxShadow: "0 20px 40px rgba(0, 255, 171, 0.1)"
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-[#00FFAB]/5 via-transparent to-[#00FFAB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          
          {/* Floating corner accent */}
          <motion.div
            className="absolute top-4 left-4 w-3 h-3 bg-[#00FFAB] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.h3 
            className="text-3xl font-semibold text-[#00FFAB] mb-4 relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            Our Mission
          </motion.h3>
          <p className="text-white/80 text-lg leading-relaxed relative z-10">
            At OneThrive, we aim to redefine employee engagement by becoming the go-to partner for building vibrant, purpose-driven teams. We envision workplaces as thriving ecosystems of collaboration, creativity, and connection—where employees are empowered to grow, perform, and truly belong.
          </p>
        </motion.div>
      </motion.div>

      {/* Our Process - Enhanced Version (Unchanged as requested) */}
      <motion.div
        ref={processRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto overflow-hidden py-6 mb-32"
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
          className="text-center mb-5 relative z-10"
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
            className="hidden md:block absolute top-[50px] left-0 w-full h-1 bg-white/10 rounded-full "
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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

      {/* Meet the Team */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background elements */}
        <motion.div
          className="absolute top-0 left-1/2 w-40 h-40 bg-[#00FFAB]/5 rounded-full blur-3xl transform -translate-x-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h2 
          className="text-4xl font-bold text-center mb-4 relative"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB]">
            Meet Our Team
          </span>
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#00FFAB]/10 via-transparent to-[#00FFAB]/10 blur-xl -z-10"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <motion.p 
          className="text-center text-gray-400 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Driven by passion, guided by purpose — meet the people who make OneThrive thrive.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          {[ 
            {
              name: "Sujal Jain",
              role: "Founder",
              image: team1,
              desc: "With a deep passion for organizational culture, he envisioned a company that blends fun, creativity, and purpose to engage employees like never before."
            },
            {
              name: "Smeet Shah",
              role: "Founder",
              image: team2,
              desc: "He is the logistical genius who makes OneThrive's magic happen. With his skills in sports management, he ensures every event runs like clockwork."
            },
            {
              name: "Parth Patva",
              role: "Co-founder",
              image: team3,
              desc: "The creative strategist behind OneThrive's vision. Parth brings innovation and clarity to our mission, making sure every idea resonates with purpose and impact."
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="text-center relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/10 via-[#00FFAB]/5 to-[#00FFAB]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile image with animated border */}
              <motion.div className="relative mb-6">
                <motion.img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full object-cover mx-auto relative z-10 border-4 border-black"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                {/* Floating accent dots */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-[#00FFAB] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-8 left-2 w-1.5 h-1.5 bg-[#00FFAB]/70 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>

              <motion.h3 
                className="text-xl font-semibold mb-2 group-hover:text-[#00FFAB] transition-colors duration-300 relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB]">
                  {member.name}
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-sm text-gray-400 mb-4 relative"
                whileHover={{ color: "#00FFAB" }}
              >
                {member.role}
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#00FFAB] group-hover:w-full group-hover:left-0 transition-all duration-300"
                />
              </motion.p>
              
              <motion.p 
                className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed group-hover:text-white/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {member.desc}
              </motion.p>

              {/* Floating particles around team member */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#00FFAB]/60 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [-5, -20, -5],
                      x: [-3, 3, -3],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.2 + Math.random() * 0.5,
                      repeat: Infinity,
                      delay: Math.random() * 1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Company Journey */}
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background gradient effects */}
        <motion.div
          className="absolute top-20 right-0 w-32 h-32 bg-[#00FFAB]/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-24 h-24 bg-[#00FFAB]/8 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.h2 
          className="text-4xl font-bold text-center mb-12 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB]">
            Company Journey
          </span>
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-[#00FFAB]/10 via-transparent to-[#00FFAB]/10 blur-xl -z-10"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

        <div className="relative">
          {/* Enhanced timeline line with gradient and glow */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00FFAB] via-[#00FFAB]/60 to-[#00FFAB]/30 rounded-full shadow-lg shadow-[#00FFAB]/30"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Animated progress indicator */}
          <motion.div
            className="absolute left-3.5 top-0 w-2 h-2 bg-[#00FFAB] rounded-full shadow-lg shadow-[#00FFAB]/50"
            animate={{
              y: [0, 400, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="pl-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-16 relative group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot with enhanced animation */}
                <motion.div 
                  className="absolute -left-16 top-2 w-6 h-6 bg-gradient-to-r from-[#00FFAB] to-[#00CC88] rounded-full shadow-lg shadow-[#00FFAB]/40 border-2 border-black flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(0, 255, 171, 0.6)"
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-black rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Content card with enhanced styling */}
                <motion.div
                  className="bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] border border-[#00FFAB]/20 rounded-xl p-6 shadow-lg hover:shadow-[#00FFAB]/20 transition-all duration-500 relative overflow-hidden group-hover:border-[#00FFAB]/40"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 255, 171, 0.1)"
                  }}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-[#00FFAB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-[#00FFAB] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  />

                  <motion.h3 
                    className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-white relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed relative z-10 group-hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.01 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Floating particles within cards */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#00FFAB]/50 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          x: [-2, 2, -2],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5 + Math.random() * 0.5,
                          repeat: Infinity,
                          delay: Math.random() * 1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;