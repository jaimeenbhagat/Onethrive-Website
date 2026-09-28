import { motion } from "framer-motion";
import { useRef } from "react";

import discoveryIcon from "../../assets/process/1.png";
import planningIcon from "../../assets/process/2.png";
import executionIcon from "../../assets/process/3.png";
import engagementIcon from "../../assets/process/4.png";
import evaluationIcon from "../../assets/process/5.png";
import { useCmsContent } from "../../admin/useCmsContent";

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

const ProcessStep = ({ step, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`flex items-center w-full relative ${isLeft ? 'justify-start' : 'justify-end'} mb-16 md:mb-24`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      {/* Connection line to center */}
      <div
        className={`absolute top-1/2 w-16 md:w-24 h-0.5 bg-gradient-to-r ${
          isLeft
            ? 'right-0 from-transparent to-[#00FFAB]'
            : 'left-0 from-[#00FFAB] to-transparent'
        }`}
      />

      {/* Process step card */}
      <div
        className={`flex items-center gap-6 max-w-md ${isLeft ? 'flex-row' : 'flex-row-reverse'}
          bg-gradient-to-br from-[#111]/90 to-[#222]/90
          border border-[#00FFAB]/20 rounded-2xl p-6 md:p-8 group
          hover:border-[#00FFAB]/60 hover:shadow-xl hover:shadow-[#00FFAB]/10
          transition-all duration-300`}
      >
        {/* Icon container */}
        <div className="relative flex-shrink-0">
          <div className="bg-gradient-to-br from-[#111] to-[#222] border-2 border-[#00FFAB]/30
            w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg">
            <img
              loading="lazy"
              src={step.icon}
              alt={step.title}
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-[#00FFAB] transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const OurProcess = () => {
  const processRef = useRef(null);
  const cmsProcess = useCmsContent("about-process");
  const processContent = cmsProcess.find(({ slug }) => slug === "about.process")?.data || {};
  const steps = processContent.steps?.length ? processContent.steps : processSteps;

  return (
    <div className="relative bg-black overflow-hidden">
      <motion.div
        ref={processRef}
        className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto py-16"
      >
        {/* Section title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {processContent.heading || "Our Process"}
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-6" />

          <p className="text-lg md:text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            {processContent.description || "A step-by-step journey to meaningful, measurable engagement tailored to your team."}
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[#00FFAB]/30 to-transparent" />

          {/* Process steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurProcess;