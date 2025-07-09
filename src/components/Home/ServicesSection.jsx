import { motion } from "framer-motion";
import service1 from "../../assets/services/services1.png";
import service2 from "../../assets/services/services2.png";
import service3 from "../../assets/services/services3.png";
import service4 from "../../assets/services/services4.png";
import service5 from "../../assets/services/services5.png";
import service7 from "../../assets/services/services7.png";

const services = [
  { title: "Team Building Games", image: service1 },
  { title: "Wellness Programs", image: service2 },
  { title: "Creative Workshops", image: service3 },
  { title: "Sports Tournaments", image: service4 },
  { title: "Entertainment Events", image: service5 },
  { title: "Offsite Retreats", image: service7 },
];

const ServicesSection = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-8xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <div className="text-center mb-4 mt-4 sm:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          ONE PLATFORM FOR ALL YOUR
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-[#00FFAB]">
          ENGAGEMENT NEEDS
        </h2>
        <div className="w-24 h-1 bg-[#00FFAB] mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid - Mobile: 2 columns, 3 rows | Laptop: 3 columns responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-black rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[140px] sm:h-[180px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => (window.location.href = "/services")}
          >
            <div className="relative w-full h-full">
              <img
                loading="lazy"
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />

              {/* Mobile: Always show title */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center sm:hidden">
                <h3 className="text-white text-base font-bold text-center px-2 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Tablet: Always show title */}
              <div className="absolute inset-0 bg-black/70  items-center justify-center hidden sm:flex md:hidden">
                <h3 className="text-white text-xl font-bold text-center px-2">
                  {service.title}
                </h3>
              </div>

              {/* Laptop: Show title on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all items-center justify-center hidden md:flex">
                <h3 className="text-white text-xl font-bold text-center px-2">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
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
  );
};

export default ServicesSection;