import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import logo from '../assets/Logo.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white px-6 md:px-20 py-16"
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
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm text-center">
            {['Home', 'About Us', 'Services', 'Process', 'FAQs', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="transition duration-300 ease-in-out hover:text-[#00FFAB]"
                  style={{ color: '#00FFAB', textDecoration: 'none' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="pl-20">
          <h3 className="text-lg font-semibold mb-4">Contact & Socials</h3>
          <ul className="space-y-3 text-gray-400 text-sm" style={{ color: '#00FFAB', textDecoration: 'none' }}>
            <li>📞 +91 9137849313</li>
            <li>📞 +91 7718840072</li>
            <li>📧 <a href="mailto:info.onethrive@gmail.com" className="hover:text-[#00FFAB]" style={{ color: '#00FFAB', textDecoration: 'none' }}>info.onethrive@gmail.com</a></li>
            <li className="flex gap-4 mt-2">
              <a href="#" className="hover:text-[#00FFAB] transition text-lg" style={{ color: '#00FFAB', textDecoration: 'none' }}><FaInstagram /></a>
              <a href="#" className="hover:text-[#00FFAB] transition text-lg" style={{ color: '#00FFAB', textDecoration: 'none' }}><FaLinkedinIn /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Center Line */}
      <div className="mt-10 flex justify-center text-lg text-white ">
        <p>© {new Date().getFullYear()} OneThrive. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
