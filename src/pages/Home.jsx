import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "../assets/about.png";
import HeroSection from "../components/HeroSection";
import FAQs from "../components/FAQs";
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
  {
    title: "Team Building Games",
    description:
      "Fun and energizing activities that strengthen collaboration and communication within your team.",
    image: service1,
  },
  {
    title: "Wellness Programs",
    description:
      "Health-focused initiatives designed to boost employee well-being and work-life balance.",
    image: service2,
  },
  {
    title: "Creative Workshops",
    description:
      "Innovative sessions that spark imagination and enhance creative problem-solving.",
    image: service3,
  },
  {
    title: "Sports Tournaments",
    description:
      "Team sports and contests to encourage active lifestyles and friendly competition.",
    image: service4,
  },
  {
    title: "Entertainment Events",
    description:
      "Exciting events like comedy shows, movie nights, and music gigs to uplift team spirit.",
    image: service5,
  },
  {
    title: "Offsite Retreats",
    description:
      "Exciting events like comedy shows, movie nights, and music gigs to uplift team spirit.",
    image: service7,
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your goals, challenges, and culture to create a tailored approach.",
    icon: discoveryIcon,
  },
  {
    title: "Planning",
    description:
      "We strategize the timeline, resources, and activities aligned with your team's dynamics.",
    icon: planningIcon,
  },
  {
    title: "Execution",
    description:
      "Our team brings the plan to life with precision, creativity, and real-time coordination.",
    icon: executionIcon,
  },
  {
    title: "Engagement",
    description:
      "We actively engage your team through interactive, fun, and meaningful experiences.",
    icon: engagementIcon,
  },
  {
    title: "Evaluation",
    description:
      "We assess the outcomes, gather feedback, and continuously refine for future success.",
    icon: evaluationIcon,
  },
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    setCurrentIndex((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + processSteps.length) % processSteps.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleSteps = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push({
        step: processSteps[(currentIndex + i) % processSteps.length],
        stepNumber: ((currentIndex + i) % processSteps.length) + 1,
        key: `${currentIndex}-${i}`,
      });
    }
    return visible;
  };

  const visibleSteps = getVisibleSteps();

  return (
    <section className="w-full text-white pt-2 pb-24 overflow-hidden">
      {/* Hero */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* About */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 pt-12 md:px-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6  text-[#00FFAB] leading-tight">
            Building Better Workplaces,
            <br />
            One Team at a Time
          </h2>
          <p className="text-[white mb-6">
            OneThrive is more than just an employee engagement company—we are
            workplace culture architects...
          </p>
          <p className="text-white">
            As a new player in this space, we bring a fresh perspective...
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About OneThrive"
            className="w-full rounded-2xl shadow-lg shadow-[#00FFAB]/30"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            number: "10+",
            label: "Teams Engaged\nIn Our Pilot\nPhase Programs",
          },
          { number: "80%", label: "Positive Response\nIn Pre-Launch\nSurveys" },
          { number: "90%", label: "Employee Participation\nIn Pilot Events" },
          {
            number: "100+",
            label: "Activity Programs\nDesigned For\nMaximum Impact",
          },
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-xl shadow-md">
            <h3 className="text-5xl font-bold text-white mb-2">
              {stat.number}
            </h3>
            <p className="text-white whitespace-pre-line text-lg leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Services */}
      <motion.div
        className="mt-20 px-6 md:px-20 max-w-8xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            ONE PLATFORM FOR ALL YOUR
          </h2>
          <h2 className="text-5xl font-bold text-[#00FFAB] mb-4">
            ENGAGEMENT NEEDS
          </h2>
          <div className="w-24 h-1 bg-[#00FFAB] mx-auto rounded-full"></div>
        </div>

        {/* Service Cards Grid: 6 services in two rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-black rounded-3xl cursor-pointer overflow-hidden relative group shadow-2xl h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              onClick={() => (window.location.href = "/services")}
            >
              <div className="w-full h-full relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <motion.button
            className="bg-[#00FFAB] text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-[#00FFAB]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/services")}
          >
            Explore All Services
          </motion.button>
        </div>
      </motion.div>

      {/* Our Process */}
      <motion.div
        className="mt-24 px-6 md:px-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-[#00FFAB]">
          Our Process
        </h2>
        <p className="text-center text-white max-w-3xl mx-auto mb-12">
          We follow a 5-step journey to ensure impactful outcomes and lasting
          workplace engagement.
        </p>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-stretch gap-6">
            <AnimatePresence mode="popLayout">
              {visibleSteps.map((item, index) => (
                <motion.div
                  key={item.key}
                  layout
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    layout: { duration: 0.6 },
                  }}
                  className="bg-black border border-white shadow-[10px_10px_0px_rgba(255,255,255,1)] p-6  w-[350px] h-[480px] flex flex-col"
                >
                  <img
                    src={item.step.icon}
                    alt={item.step.title}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <div className="text-white text-sm uppercase pt-10 font-bold">
                    Step {item.stepNumber}
                  </div>
                  <h3 className="text-3xl font-bold text-white pt-10 ">
                    {item.step.title}
                  </h3>
                  <p className="text-base text-[#00FFAB]/80 leading-relaxed pt-10">
                    {item.step.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <div className="flex justify-center mt-10 space-x-8">
            <button
              onClick={prevStep}
              aria-label="Previous Step"
              className="bg-white text-black text-xl p-3 rounded-full hover:bg-[#00FFAB] hover:text-black transition"
            >
              &#8592;
            </button>
            <button
              onClick={nextStep}
              aria-label="Next Step"
              className="bg-white text-black text-xl p-3 rounded-full hover:bg-[#00FFAB] hover:text-black transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </motion.div>
      <div className="w-full">
        <FAQs />
      </div>
    </section>
  );
};

export default AboutSection;
