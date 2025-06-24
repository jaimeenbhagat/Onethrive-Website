import { motion } from "framer-motion";
import aboutImage from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center px-6 py-16 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <motion.div
          className="md:w-1/2 font-bold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#00FFAB] mb-6 leading-tight">
            Energize Your Team,
            <br />
            Elevate Your Culture
          </h2>
          <p className="text-lg text-white mb-4 font-bold leading-relaxed">
            Break free from one off events and spark genuine connection. OneThrive partners with HR leaders and directors to craft unforgettable experiences dynamic workshops, immersive offsites, and engaging activities that boost collaboration, lift morale, and energize your workforce.
          </p>
          <p className="text-lg text-white font-bold leading-relaxed">
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
            className="w-full h-120 rounded-2xl shadow-lg shadow-[#00FFAB]/30"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;