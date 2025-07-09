import { motion } from "framer-motion";
import aboutImage from "../../assets/about.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center px-12 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 w-full max-w-none mx-auto">
        <motion.div
          className="w-full md:w-1/2 font-bold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00FFAB] mb-6 leading-tight">
            Energizing Teams,
            <br />
            Elevating Culture
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 font-medium leading-relaxed">
            Break free from one off events and spark genuine connection. OneThrive partners with HR leaders and directors to craft unforgettable experiences dynamic workshops, immersive offsites, and engaging activities that boost collaboration, lift morale, and energize your workforce.
          </p>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            Ready to build a workplace everyone talks about? <br /> Let's get started.
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img loading="lazy" 
            src={aboutImage}
            alt="About"
            className="w-full h-auto max-h-[500px] md:max-h-[600px] object-cover rounded-2xl shadow-lg shadow-[#00FFAB]/30"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;