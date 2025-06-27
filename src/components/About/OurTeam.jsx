import { motion } from "framer-motion";
import team1 from "../../assets/team/sujal.png";
import team2 from "../../assets/team/smeet.png";
import team3 from "../../assets/team/parth.png";

const OurTeam = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto mb-24 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-1/2 w-40 h-40 bg-[#00FFAB]/5 rounded-full blur-3xl transform -translate-x-1/2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2 
        className="text-4xl font-bold text-center mb-4 relative"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB]">
          Meet Our Team
        </span>
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#00FFAB]/10 via-transparent to-[#00FFAB]/10 blur-xl -z-10"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.h2>

      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <motion.p 
        className="text-center text-gray-400 max-w-xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Driven by passion, guided by purpose — meet the people who make OneThrive thrive.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
        {[ 
          {
            name: "Sujal Jain",
            role: "Co-founder",
            image: team1,
            desc: "With a deep passion for organizational culture, he envisioned a company that blends fun, creativity, and purpose to engage employees like never before.",
            email: "sujal@onethrive.in",
            linkedin: "https://www.linkedin.com/in/sujal-jain-7072b6252/"
          },
          {
            name: "Smeet Shah",
            role: "Co-founder",
            image: team2,
            desc: "He is the logistical genius who makes OneThrive's magic happen. With his skills in sports management, he ensures every event runs like clockwork.",
            email: "smeet.s@onethrive.in",
            linkedin: "https://www.linkedin.com/in/smeet-shah-86333b228/"
          },
          {
            name: "Parth Patva",
            role: "Co-founder",
            image: team3,
            desc: "The creative strategist behind OneThrive's vision. Parth brings innovation and clarity to our mission, making sure every idea resonates with purpose and impact.",
            email: "parth@onethrive.in",
            linkedin: "https://www.linkedin.com/in/parth-patva-909452174/"
          },
        ].map((member, index) => (
          <motion.div
            key={index}
            className="text-center relative group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/10 via-[#00FFAB]/5 to-[#00FFAB]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile image with animated border */}
            <motion.div className="relative mb-6">
              <motion.img 
                src={member.image} 
                alt={member.name} 
                className="w-40 h-40 rounded-full object-cover mx-auto relative z-10 border-4 border-black"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Floating accent dots */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-[#00FFAB] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 left-2 w-1.5 h-1.5 bg-[#00FFAB]/70 rounded-full"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            <motion.h3 
              className="text-xl font-semibold mb-2 group-hover:text-[#00FFAB] transition-colors duration-300 relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] via-white to-[#00FFAB]">
                {member.name}
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-sm text-gray-400 mb-4 relative"
              whileHover={{ color: "#00FFAB" }}
            >
              {member.role}
              <motion.div
                className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#00FFAB] group-hover:w-full group-hover:left-0 transition-all duration-300"
              />
            </motion.p>
            
            <motion.p 
              className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              {member.desc}
            </motion.p>

            {/* Contact Links */}
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {/* LinkedIn Link */}
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/30 hover:border-[#0077B5]/60 rounded-full transition-all duration-300 group/link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 text-[#0077B5] group-hover/link:text-white transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <motion.div
                  className="absolute inset-0 bg-[#0077B5]/20 rounded-full opacity-0 group-hover/link:opacity-100 blur-sm transition-opacity duration-300"
                />
              </motion.a>

              {/* Email Link */}
              <motion.a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center w-10 h-10 bg-[#00FFAB]/10 hover:bg-[#00FFAB]/20 border border-[#00FFAB]/30 hover:border-[#00FFAB]/60 rounded-full transition-all duration-300 group/link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 text-[#00FFAB] group-hover/link:text-white transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <motion.div
                  className="absolute inset-0 bg-[#00FFAB]/20 rounded-full opacity-0 group-hover/link:opacity-100 blur-sm transition-opacity duration-300"
                />
              </motion.a>
            </motion.div>

            {/* Floating particles around team member */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#00FFAB]/60 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-5, -20, -5],
                    x: [-3, 3, -3],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.2 + Math.random() * 0.5,
                    repeat: Infinity,
                    delay: Math.random() * 1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;