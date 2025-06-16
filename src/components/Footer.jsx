import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <motion.footer
      className="bg-black text-white px-6 sm:px-10 md:px-20 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-gray-800 pb-12">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={logo} alt="OneThrive Logo" className="h-14 sm:h-16 mb-4" />
        </div>

        {/* Contact Info + Social */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact & Socials</h3>
          <ul className="space-y-2 text-sm text-[#00FFAB]">
            <li>📞 +91 9137849313</li>
            <li>📞 +91 7718840072</li>
            <li>
              📧 <a href="mailto:info@onethrive.in" className="hover:underline">info@onethrive.in</a>
            </li>
            <li className="flex justify-center sm:justify-start gap-4 mt-3 text-white">
              <a href="#" className="text-lg hover:text-[#00FFAB] transition"><FaInstagram /></a>
              <a href="#" className="text-lg hover:text-[#00FFAB] transition"><FaLinkedinIn /></a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-right md:text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ name, path }, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(path)}
                  className="text-white hover:underline transition"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs sm:text-sm text-white/70">
        <p>© {new Date().getFullYear()} OneThrive. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
