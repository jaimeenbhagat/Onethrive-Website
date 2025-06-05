import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png' // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and tagline */}
        <div>
          <img src={logo} alt="OneThrive Logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm">
            Empowering workforces through immersive engagement experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {['Home', 'About Us', 'Services', 'Process', 'FAQs', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-[#00FFAB] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded-full text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#00FFAB] text-black font-semibold px-6 py-2 rounded-full hover:brightness-110 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} OneThrive. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#00FFAB]"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#00FFAB]"><FaInstagram /></a>
          <a href="#" className="hover:text-[#00FFAB]"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-[#00FFAB]"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
