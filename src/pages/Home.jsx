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

// Client logos - Replace these with your actual client logo imports
import client1 from "../assets/services/services1.png";
import client2 from "../assets/services/services1.png";
import client3 from "../assets/services/services1.png";
import client4 from "../assets/services/services1.png";
import client5 from "../assets/services/services1.png";
import client6 from "../assets/services/services1.png";
import client7 from "../assets/services/services1.png";
import client8 from "../assets/services/services1.png";

const services = [
  { title: "Team Building Games", image: service1 },
  { title: "Wellness Programs", image: service2 },
  { title: "Creative Workshops", image: service3 },
  { title: "Sports Tournaments", image: service4 },
  { title: "Entertainment Events", image: service5 },
  { title: "Offsite Retreats", image: service7 },
];

const whyChooseUs = [
  {
    title: "Expert Facilitation",
    description: "With over 10+ years of experience.",
    icon: "👥"
  },
  {
    title: "Scalable Programs",
    description: "For companies of all sizes & capacities.",
    icon: "📈"
  },
  {
    title: "Customized Solutions",
    description: "Tailored to your specific needs.",
    icon: "🎯"
  },
  {
    title: "Diverse Offerings",
    description: "With over 100+ activities to choose from.",
    icon: "🎪"
  },
  {
    title: "Result Driven Approach",
    description: "Delivering outcomes that matter.",
    icon: "📊"
  },
  {
    title: "Transparency and Reliability",
    description: "Trusted for our consistency and clarity.",
    icon: "🔒"
  }
];

const clientLogos = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
];

const ClientLogosCarousel = () => {
  return (
    <motion.div
      className="min-h-[300px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Join the growing list of companies that have transformed their workplace culture with OneThrive
        </p>
        <div className="w-24 h-1 bg-[#00FFAB] mx-auto mt-6 rounded-full" />
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden h-36">
        {/* Gradient overlays for seamless loop effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* Moving logos */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * clientLogos.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: `${clientLogos.length * 200}px` }}
        >
          {/* First set of logos */}
          {clientLogos.map((client, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-full flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-[#00FFAB]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 171, 0.1)" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-40 max-h-28 object-contain filter  transition-all duration-300"
              />
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((client, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-[#00FFAB]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 171, 0.1)" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-40 max-h-28 object-contain filter transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Home = () => {
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
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-[#00FFAB] mb-6 leading-tight">
              Energize Your Team,
              <br />
              Elevate Your Culture
            </h2>
            <p className="text-lg text-white mb-4 leading-relaxed">
              Break free from one-off events and spark genuine connection. OneThrive partners with HR leaders and directors to craft unforgettable experiences—dynamic workshops, immersive offsites, and engaging activities that boost collaboration, lift morale, and energize your workforce.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Ready to build a workplace everyone talks about? Let's get started.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-80 rounded-2xl shadow-lg shadow-[#00FFAB]/30"
            />
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <motion.div
        className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
              className="bg-black rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[200px]"
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

        <div className="text-center mt-4">
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

      {/* Why Choose Us */}
      <motion.div
        className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose OneThrive?
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We don't just organize events we create transformative experiences that drive real results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#111] to-[#222] border border-[#00FFAB]/20 rounded-2xl p-8 group hover:border-[#00FFAB]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFAB]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-[#00FFAB] mb-4 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {item.description}
              </p>

              {/* Animated background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 via-[#00FFAB]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

      
      </motion.div>

      {/* Client Logos Carousel */}
      <ClientLogosCarousel />

      {/* FAQs */}
      <FAQs />
    </section>
  );
};

export default Home;