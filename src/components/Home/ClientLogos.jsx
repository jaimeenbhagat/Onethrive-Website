import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";
import client3 from "../../assets/ClientLogo/KONSULTRA.webp";
import client4 from "../../assets/ClientLogo/PRISMAAI.png";
import client5 from "../../assets/ClientLogo/AsianElectronic.png";
import client6 from "../../assets/ClientLogo/LadyLoveLogo.png";
import client7 from "../../assets/ClientLogo/MystiqueAI.png";
import client8 from "../../assets/ClientLogo/SalesDuo.png";
import client9 from "../../assets/ClientLogo/IIFL.PNG";
import client10 from "../../assets/ClientLogo/Laxmi.PNG";
import client11 from "../../assets/ClientLogo/BDO.PNG";
import client12 from "../../assets/ClientLogo/Drager_Logo.png";
import client13 from "../../assets/ClientLogo/Happi Planet.png";
import client14 from "../../assets/ClientLogo/Glide Tech Logo.png";
import client15 from "../../assets/ClientLogo/Infytrix Logo.png";
import client16 from "../../assets/ClientLogo/SF Edu Logo.png";
import client17 from "../../assets/ClientLogo/VGuard Logo.png";
import { useCmsContent } from "../../admin/useCmsContent";


// Client logos with actual imported images
const defaultClientLogos = [
  { 
    name: "DJSCE", 
    logo: client2,
    description: "Premier Engineering Institute" 
  },
  {
    name: "BDO",
    logo: client11,
    description: "Professional Services Firm"
  },
  {
    name: "IIFL Capital",
    logo: client9,
    description: "Financial Services Company"
  },
  {
    name: "Happi Planet",
    logo: client13,
    description: "Workplace Wellbeing Partner"
  },
  {
    name: "Drager",
    logo: client12,
    description: "Healthcare Technology Leader"
  },
  {
    name: "Laxmi Dental Limited",
    logo: client10,
    description: "Consumer Goods Brand"
  },
  { 
    name: "Prisma AI", 
    logo: client4,
    description: "AI-Powered Business Solutions" 
  },
  {
    name: "Sales Duo",
    logo: client8,
    description: "Sales Enablement Platform"
  },
  {
    name: "Mystique AI",
    logo: client7,
    description: "Cutting-Edge AI Technologies"
  },
  { 
    name: "Konsultra", 
    logo: client3,
    description: "Innovative Consulting Services" 
  },
  {
    name: "Lady Love",
    logo: client6,
    description: "Fashion and Lifestyle Brand"
  },
  {
    name: "Asian Electronics",
    logo: client5,
    description: "Consumer Electronics Leader"
  },
  { 
    name: "EDS International", 
    logo: client1,
    description: "Leading Technology Solutions" 
  },
  {
    name: "Glide Tech",
    logo: client14,
    description: "Technology Solutions"
  },
  {
    name: "Infytrix",
    logo: client15,
    description: "IT Services Provider"
  },
  {
    name: "SF Edu",
    logo: client16,
    description: "Educational Technology"
  },
  {
    name: "V-Guard",
    logo: client17,
    description: "Consumer Electricals"
  }
];

const ClientLogos = () => {
  const cmsClientLogos = useCmsContent("client-logos");
  const clientLogos = cmsClientLogos.length > 0
    ? cmsClientLogos.map(({ data }) => ({
        name: data.name || "Client",
        logo: data.logo || client1,
        description: data.description || "OneThrive client",
      }))
    : defaultClientLogos;
  const [isPaused, setIsPaused] = useState(false);
  const touchTimerRef = useRef(null);

  // Mobile: tap to pause for 2 seconds, then auto-resume
  const handleTouchStart = useCallback(() => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsPaused(true);
    touchTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(${-(250 + 64) * clientLogos.length}px); }
          }
          @keyframes scroll-mobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(${-(150 + 32) * clientLogos.length}px); }
          }
          .logo-track {
            animation: scroll-mobile 30s linear infinite;
          }
          @media (min-width: 768px) {
            .logo-track {
              animation: scroll 35s linear infinite;
            }
          }
          .logo-card {
            width: 150px;
            height: 100px;
            min-width: 150px;
          }
          .logo-card img {
            width: 120px;
            height: 75px;
          }
          @media (min-width: 768px) {
            .logo-card {
              width: 250px;
              height: 160px;
              min-width: 250px;
            }
            .logo-card img {
              width: 200px;
              height: 120px;
            }
          }
        `}
      </style>
    <motion.div
      className="md:min-h-[500px] flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto md:py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12 md:mb-20 mt-8 md:mt-0">
        <motion.h2 
          className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Leaders
        </motion.h2>
        <motion.div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-3 md:mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        <motion.p 
          className="text-md md:text-xl text-white max-w-5xl mx-auto font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the companies transforming workplace culture with OneThrive
        </motion.p>
      </div>

      {/* Infinite Carousel - No Arrows */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <div 
          className="logo-track flex gap-8 md:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform'
          }}
        >
          {/* Original logos */}
          {clientLogos.map((client, index) => (
            <div
              key={`original-${index}`}
              className="logo-card flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-3 md:p-6"
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {clientLogos.map((client, index) => (
            <div
              key={`duplicate-${index}`}
              className="logo-card flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-3 md:p-6"
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 transition-all duration-300"
              />
            </div>
          ))}
          {/* Triple set for extra smooth loop */}
          {clientLogos.map((client, index) => (
            <div
              key={`triple-${index}`}
              className="logo-card flex-shrink-0 flex justify-center items-center bg-white/5 rounded-xl p-3 md:p-6"
            >
              <img 
                loading="lazy" 
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
    </>
  );
};

export default ClientLogos;