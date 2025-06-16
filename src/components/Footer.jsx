import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cancellation & Refund', path: '/cancellation-refund' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Shipping & Exchanges', path: '/shipping-exchanges' }
  ];

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <motion.footer
      className="bg-black text-white px-6 sm:px-10 md:px-20 py-12 font-interphase"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-gray-800 pb-12">

        {/* 1. Logo + Contact + Socials */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <img src={logo} alt="OneThrive Logo" className="h-14 sm:h-16 mb-2" />
          <div className="space-y-1 text-white text-sm mt-2">
            <p>📞 +91 9137849313</p>
            <p>📞 +91 7718840072</p>
            <p>📧 <a href="mailto:info@onethrive.in" className="hover:underline text-white">info@onethrive.in</a></p>
          </div>
          <div className="flex gap-3 mt-3 text-white text-lg">
            <a href="#" className="hover:text-[#00FFAB]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#00FFAB]"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="text-left sm:text-left">
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

        {/* 3. Our Policies */}
        <div className="text-left sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Our Policies</h3>
          <ul className="space-y-2 text-sm text-white">
            {policies.map(({ name, path }, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(path)}
                  className="hover:underline transition"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-xs sm:text-sm text-white/70">
        <p>© {new Date().getFullYear()} OneThrive. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
