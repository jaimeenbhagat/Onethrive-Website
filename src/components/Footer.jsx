import {
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cancellation & Refund", path: "/cancellation-refund" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Shipping & Exchanges", path: "/shipping-exchanges" },
  ];

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="relative bg-black text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#00FFAB] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gray-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#00FFAB] rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-20 py-16 font-interphase">
        {/* Main Grid Section */}
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-700 pt-16"
          variants={itemVariants}
        >
          {/* Company Info - Spans 2 columns on large screens */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <img src={logo} alt="OneThrive Logo" className="h-16 md:h-20" />
            </div>

            <p className="text-gray-300 text-lg font-bold leading-relaxed max-w-md">
              We empower organizations to build thriving workplace cultures through engaging team-building experiences, wellness initiatives, and curated employee programs. From fun to functional, our experiences are designed to inspire connection, boost morale, and drive lasting impact.
            </p>

            {/* Contact Info with Icons */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white hover:text-[#00FFAB] transition-colors cursor-pointer group">
                <div className="bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-800 p-3 rounded-full group-hover:shadow-lg group-hover:shadow-[#00FFAB]/30 transition-all">
                  <FaPhone className="text-black text-sm" />
                </div>
                <div>
                  <p className="font-bold text-lg">+91 9137849313</p>
                  <p className="text-sm text-gray-400 font-semibold">+91 7718840072</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white hover:text-[#00FFAB] transition-colors cursor-pointer group">
                <div className="bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-800 p-3 rounded-full group-hover:shadow-lg group-hover:shadow-[#00FFAB]/30 transition-all">
                  <FaEnvelope className="text-black text-sm" />
                </div>
                <a href="mailto:info@onethrive.in" className="font-bold text-lg">
                  info@onethrive.in
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                href="#"
                className="bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-700 p-4 rounded-xl text-black text-xl hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-700 p-4 rounded-xl text-black text-xl hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, path }, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    onClick={() => handleLinkClick(path)}
                    className="text-gray-300 hover:text-[#00FFAB] transition-all duration-300 text-lg font-bold relative group"
                  >
                    <span className="relative z-10">{name}</span>
                    <div className="absolute inset-0 bg-[#00FFAB]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-white relative">
              Our Policies
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#00FFAB] via-[#00FFAB] to-gray-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {policies.map(({ name, path }, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    onClick={() => handleLinkClick(path)}
                    className="text-gray-300 hover:text-[#00FFAB] transition-all duration-300 text-lg font-bold relative group"
                  >
                    <span className="relative z-10">{name}</span>
                    <div className="absolute inset-0 bg-[#00FFAB]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Reduced padding */}
        <motion.div
          className="max-w-7xl mx-auto mt-4 pt-4 border-t border-gray-700"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center text-center">
            <p className="text-gray-400 text-lg font-bold">
              © {new Date().getFullYear()}{" "}
              <span className="text-[#00FFAB] font-black text-xl">OneThrive</span>. All
              rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;