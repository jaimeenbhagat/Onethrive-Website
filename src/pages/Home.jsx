import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  { title: "Discovery", description: "Understand your goals, challenges, and culture.", icon: discoveryIcon },
  { title: "Planning", description: "Strategize timeline, resources, and activities.", icon: planningIcon },
  { title: "Execution", description: "Bring the plan to life with creativity and precision.", icon: executionIcon },
  { title: "Engagement", description: "Interactive and meaningful team participation.", icon: engagementIcon },
  { title: "Evaluation", description: "Measure success and refine future programs.", icon: evaluationIcon },
];

// Step animation component
const ProcessStep = ({ step, index, direction }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  const variants = {
    hidden: { opacity: 0, y: direction === "down" ? 60 : -60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center md:w-1/5 group"
    >
      <div className="bg-[#111] border border-white/20 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-md group-hover:scale-105 transition">
        <img src={step.icon} alt={step.title} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <h3 className="text-xl font-semibold text-white my-4">{step.title}</h3>
      <p className="text-sm sm:text-base text-white/60 leading-snug">{step.description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollDir(current > lastScroll ? "down" : "up");
      lastScroll = current <= 0 ? 0 : current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full text-white bg-black font-interphase">
      <HeroSection />

      {/* About */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-16 md:px-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-[#00FFAB] mb-6 leading-tight">
            Building Better Workplaces,<br />One Team at a Time
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            OneThrive is more than just an employee engagement company we’re workplace culture architects.
          </p>
          <p className="text-lg text-white leading-relaxed">
            As a new player in this space, we bring a fresh, fun, and forward thinking approach.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={aboutImage} alt="About" className="w-full rounded-2xl shadow-lg shadow-[#00FFAB]/30" />
        </motion.div>
      </div>

      {/* Services */}
      <motion.div
        className="py-20 px-6 md:px-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-2">ONE PLATFORM FOR ALL YOUR</h2>
          <h2 className="text-5xl font-bold text-[#00FFAB]">ENGAGEMENT NEEDS</h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-black rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => (window.location.href = "/services")}
            >
              <div className="relative w-full h-full">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">{service.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
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

      {/* Our Process */}
      <motion.div
        className="py-24 px-6 md:px-20 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#00FFAB] mb-4">Our Process</h2>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            A step by step journey to meaningful, measurable engagement tailored to your team.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-1 bg-white/20 z-0" />
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 z-10 relative">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} direction={scrollDir} />
            ))}
          </div>
        </div>
      </motion.div>

      <FAQs />
    </section>
  );
};

export default AboutSection;
