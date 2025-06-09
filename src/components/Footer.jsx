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
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <motion.footer
      className="text-white px-6 md:px-20 py-16 bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-12">

        {/* Logo and tagline */}
        <div>
          <img src={logo} alt="OneThrive Logo" className="h-16 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering workforces through immersive engagement experiences that inspire collaboration and culture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center ">Quick Links</h3>
          <ul className="space-y-2 text-center text-sm ">
            {quickLinks.map(({ name, path }, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(path)}
                  className="text-[#00FFAB] hover:underline transition hover:cursor-pointer"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="md:pl-10">
          <h3 className="text-lg font-semibold mb-4">Contact & Socials</h3>
          <ul className="space-y-3 text-sm text-[#00FFAB]">
            <li>📞 +91 9137849313</li>
            <li>📞 +91 7718840072</li>
            <li>
              📧 <a href="mailto:info.onethrive@gmail.com" className="hover:underline">info.onethrive@gmail.com</a>
            </li>
            <li className="flex gap-4 mt-2">
              <a href="#" className="text-lg hover:text-white transition"><FaInstagram /></a>
              <a href="#" className="text-lg hover:text-white transition"><FaLinkedinIn /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Center Line */}
      <div className="mt-10 flex justify-center text-sm text-white text-center">
        <p>© {new Date().getFullYear()} OneThrive. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
