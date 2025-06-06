import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

const AboutSection = () => {
  return (
    <section className="w-full text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Better Workplaces, <br /> One Team at a Time
          </h2>
          <p className="text-gray-400 mb-6">
            OneThrive is more than just an employee engagement company—we are workplace culture architects.
            We know that a motivated workforce drives business success. That’s why OneThrive is dedicated
            to delivering high-energy engagement solutions that make workplaces more dynamic, fulfilling,
            and fun.
          </p>
          <p className="text-gray-400">
            As a new player in this space, we bring a fresh perspective, commitment to excellence, and
            a client-first mindset to every project, helping you build a workplace that’s as dynamic as
            your thriving team.
          </p>
        </motion.div>

        {/* Image Section */}
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

      {/* Statistics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          { number: '10+', label: 'Teams Engaged\nIn Our Pilot\nPhase Programs' },
          { number: '80%', label: 'Positive Response\nIn Pre-Launch\nSurveys' },
          { number: '90%', label: 'Employee Participation\nIn Pilot Events' },
          { number: '100+', label: 'Activity Programs\nDesigned For\nMaximum Impact' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-[#00FFAB]/30 transition">
            <h3 className="text-3xl font-bold text-[#00FFAB] mb-2">{stat.number}</h3>
            <p className="text-gray-400 whitespace-pre-line text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Services Preview */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8">Our Engagement Offerings</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            'Team Building Games',
            'Wellness Programs',
            'Creative Workshops',
            'Sports Tournaments',
            'Entertainment Events',
            'Corporate Social Responsibility',
            'Offsite Retreats',
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] text-[#00FFAB] px-6 py-3 rounded-full font-medium shadow hover:shadow-[#00FFAB]/50 transition"
            >
              {service}
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-gray-400">
          Discover more on our <a href="/services" className="text-[#00FFAB] underline">Services Page</a>.
        </p>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Trusted by Amazing Teams</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((logo, idx) => (
            <div
              key={idx}
              className="h-24 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold shadow-md"
            >
              Logo {logo}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workplace?</h3>
        <a
          href="#contact"
          className="bg-[#00FFAB] hover:bg-[#00e69a] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition shadow-lg shadow-[#00FFAB]/30"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;