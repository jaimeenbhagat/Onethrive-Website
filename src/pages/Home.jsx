import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";
import HeroSection from '../components/HeroSection'
import service1 from "../assets/services/services1.png";
import service2 from "../assets/services/services2.png";
import service3 from "../assets/services/services3.png";
import service4 from "../assets/services/services4.png";
import service5 from "../assets/services/services5.png";
import service7 from "../assets/services/services7.png";

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
      "Refreshing getaways that combine fun, bonding, and strategic team alignment.",
    image: service7,
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your goals, challenges, and culture to create a tailored approach.",
  },
  {
    title: "Planning",
    description:
      "We strategize the timeline, resources, and activities aligned with your team's dynamics.",
  },
  {
    title: "Execution",
    description:
      "Our team brings the plan to life with precision, creativity, and real-time coordination.",
  },
  {
    title: "Engagement",
    description:
      "We actively engage your team through interactive, fun, and meaningful experiences.",
  },
  {
    title: "Evaluation",
    description:
      "We assess the outcomes, gather feedback, and continuously refine for future success.",
  },
];

const AboutSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const childWidth = carouselRef.current.children[0].offsetWidth + 24; // card width + gap
      carouselRef.current.scrollTo({
        left: index * childWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = processSteps.length - 3;
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const maxIndex = processSteps.length - 3;
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    
    <section className="w-full text-white pt-2 pb-24 px-6 md:px-20 overflow-hidden">
      <HeroSection />
      {/* Title Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Better Workplaces,<br /> One Team at a Time
          </h2>
          <p className="text-gray-400 mb-6">
            OneThrive is more than just an employee engagement company—we are workplace culture architects...
          </p>
          <p className="text-gray-400">
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
          <img src={aboutImage} alt="About OneThrive" className="w-full rounded-2xl shadow-lg shadow-[#00FFAB]/30" />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          { number: "10+", label: "Teams Engaged\nIn Our Pilot\nPhase Programs" },
          { number: "80%", label: "Positive Response\nIn Pre-Launch\nSurveys" },
          { number: "90%", label: "Employee Participation\nIn Pilot Events" },
          { number: "100+", label: "Activity Programs\nDesigned For\nMaximum Impact" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-[#00FFAB]/40 transition-all">
            <h3 className="text-3xl font-bold text-[#00FFAB] mb-2">{stat.number}</h3>
            <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Services */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Our Engagement Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx}
              className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-[#00FFAB]/40 hover:scale-110 transition-all text-left cursor-pointer"
              onClick={() => (window.location.href = "/services")}
            >
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-[#00FFAB] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Our Process Carousel */}
      <motion.div className="mt-24" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-center mb-6 text-[#00FFAB]">Our Process</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          We follow a 5-step journey to ensure impactful outcomes and lasting workplace engagement.
        </p>

        <div className="relative">
          <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 z-10 px-2">
            <button onClick={prevSlide} className="bg-[#111] text-[#00FFAB] px-3 py-2 rounded-full shadow-md hover:bg-[#00ffab]/10 transition">
              ←
            </button>
            <button onClick={nextSlide} className="bg-[#111] text-[#00FFAB] px-3 py-2 rounded-full shadow-md hover:bg-[#00ffab]/10 transition">
              →
            </button>
          </div>
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-6 px-4 sm:px-10 py-4"
          >
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111] min-w-[280px] sm:min-w-[300px] md:min-w-[340px] p-6 rounded-xl text-left border border-[#1f1f1f] shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#00FFAB] mb-2">{`${idx + 1}. ${step.title}`}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Trusted by Amazing Teams
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((logo, idx) => (
            <div key={idx} className="h-24 bg-[#1a1a1a] rounded-lg flex items-center justify-center shadow-md hover:shadow-[#00FFAB]/50 transition-all cursor-pointer">
              <img src={`/clients/client${logo}.png`} alt={`Client ${logo}`} className="max-h-14" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
