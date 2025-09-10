import { motion } from "framer-motion";
import aboutImage from "../../assets/about.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center px-4 py-8 sm:px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00FFAB] mb-4 sm:mb-6 leading-tight">
            Energizing Teams,
            <br />
            Elevating Culture
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed">
              Break free from one-off events and spark genuine connection. OneThrive partners with HR leaders and directors to craft unforgettable experiences dynamic workshops, immersive offsites, and engaging activities that boost collaboration, lift morale, and energize your workforce.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed">
              Ready to build a workplace everyone talks about?
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Let's get started.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            <img 
              loading="lazy" 
              src={aboutImage}
              alt="About OneThrive - Team building and workplace culture"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-xl sm:rounded-2xl shadow-xl shadow-[#00FFAB]/20 hover:shadow-[#00FFAB]/30 transition-shadow duration-300"
            />
            {/* Optional gradient overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;