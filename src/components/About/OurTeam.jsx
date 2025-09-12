import { motion } from "framer-motion";
import team1 from "../../assets/team/sujal.webp";
import team2 from "../../assets/team/smeet.webp";
import team3 from "../../assets/team/parth.webp";

const OurTeam = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto mb-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <div className="text-center mb-6">
        <motion.h2 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white font-bold text-3xl">Meet Our Team</span>
        </motion.h2>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <motion.p 
          className="text-md md:text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Driven by passion, guided by purpose meet the people who make OneThrive thrive.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
            className="group bg-black backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00FFAB] transition-all duration-500 relative overflow-hidden h-[420px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1
            }}
            whileHover={{ y: -8 }}
          >
            {/* Subtle background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            {/* Profile Section */}
            <div className="text-center mb-4 relative z-10">
              <motion.div 
                className="relative mb-4 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img loading="lazy"  
                  src={member.image} 
                  alt={member.name} 
                  className="w-28 h-28 rounded-2xl object-cover mx-auto border-2 border-gray-700 group-hover:border-[#00FFAB]/50 transition-colors duration-300"
                />
                
                {/* Professional accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#00FFAB] rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold mb-2 text-white group-hover:text-[#00FFAB] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {member.name}
              </motion.h3>
              
              <motion.p 
                className="text-[#00FFAB] font-semibold text-base mb-3"
              >
                {member.role}
              </motion.p>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-white leading-relaxed text-center relative z-10 flex-grow text-xs md:text-sm"
              whileHover={{ color: "#e5e7eb" }}
            >
              {member.desc}
            </motion.p>

            {/* Contact Section - Fixed at bottom */}
            <motion.div 
              className="flex justify-center space-x-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {/* LinkedIn */}
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-gray-800/60 hover:bg-[#0077B5] border border-gray-700/50 hover:border-[#0077B5] rounded-xl transition-all duration-300 group/link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover/link:text-white transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center w-11 h-11 bg-gray-800/60 hover:bg-[#00FFAB] border border-gray-700/50 hover:border-[#00FFAB] rounded-xl transition-all duration-300 group/link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover/link:text-white transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Professional corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#00FFAB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;