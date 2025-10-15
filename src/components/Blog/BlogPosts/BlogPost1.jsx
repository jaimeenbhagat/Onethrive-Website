import React, { useState, useEffect, useRef } from "react";
import Blogimage1 from "../../../assets/Blogs/Blog1.webp";
import Blogimage8 from "../../../assets/Blogs/Blog8.webp";
import Blogimage3 from "../../../assets/Blogs/Blog3.webp";
import Blogimage7 from "../../../assets/Blogs/Blog7.webp";
import Blogimage1_1 from "../../../assets/Blogs/Blog1.1.png";
import { useNavigate } from "react-router-dom";
import Blog from "../../../pages/Blog";

// Content extracted and structured from the provided PDF
const blogData = {
  id: 1,
  title:
    "Beyond the Trust Fall: Smart Team Building Games That Aren't Cringe (and Actually Work)",
  category: "Team Building",
  author: "OneThrive",
  date: "October 25, 2025",
  readTime: "9 min read",
  heroImage: Blogimage1,
  relatedPosts: [
    {
      id: 8,
      title:
        "The CEO's Playbook: How to Build a High-Performing Culture That Drives Growth & Profit",
      thumbnail: Blogimage8,
      path: "/blogs/ceo-playbook",
    },
    {
      id: 3,
      title:
        "Measuring What Matters: Quantifying the ROI of Employee Engagement & Experience",
      thumbnail: Blogimage3,
      path: "/blogs/measuring-what-matters",
    },
    {
      id: 7,
      title:
        "The Founder's Guide: Unlocking Employee Engagement for Startup Success",
      thumbnail: Blogimage7,
      path: "/blogs/the-founders-guide",
    },
  ],
  content: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            'For many HR professionals, founders, and managers, the phrase "team building games" can conjure images of awkward icebreakers, forced laughter, or activities that feel more like a chore than a catalyst for connection. The skepticism is understandable: traditional "cringe-worthy" team building often fails to deliver genuine results, leaving employees disengaged and leaders questioning the investment.',
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "However, effective team building games are far from obsolete. When designed with ",
        },
        {
          type: "bold",
          content: "purpose, inclusivity, and genuine engagement",
        },
        {
          type: "text",
          content:
            " in mind, they are powerful tools for transforming a group of individual employees into a ",
        },
        { type: "bold", content: "cohesive, high-performing unit" },
        {
          type: "text",
          content:
            ". This guide cuts through the clichés to present smart, non-cringe team building games that foster real collaboration, build trust, and significantly boost morale and productivity. Discover how to turn skepticism into success and cultivate a thriving workplace culture.",
        },
      ],
    },
    {
      type: "subheading",
      text: 'Why "Cringe" Team Building Fails (and What Actually Works)',
      id: "why-cringe-team-building-fails",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "The negative perception of team building games often stems from activities that:",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Lack Clear Purpose:" },
            {
              type: "text",
              content:
                " Activities without a defined objective feel like a waste of time, leading to disengagement.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Force Vulnerability:" },
            {
              type: "text",
              content:
                " Requiring immediate, deep personal sharing can make employees uncomfortable and resistant, especially in new or formal teams.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Are Not Inclusive:" },
            {
              type: "text",
              content:
                " Activities that favor specific personality types or physical abilities can alienate a significant portion of the team.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Feel Childish or Superficial:" },
            {
              type: "text",
              content:
                " Games that don't connect to real-world workplace dynamics can seem irrelevant and patronizing.",
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "What actually works are smart team building games that are:",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Purpose-Driven:" },
            {
              type: "text",
              content:
                " Each activity has a clear goal (e.g., improve communication, foster creativity, build trust, solve problems).",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Inclusive & Adaptable:" },
            {
              type: "text",
              content:
                " Designed to engage diverse personalities and can be modified for remote, hybrid, or in-person settings.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Low-Pressure & Voluntary:" },
            {
              type: "text",
              content:
                " Encourage participation without forcing it, creating psychological safety.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Relevant & Applicable:" },
            {
              type: "text",
              content:
                " Connects, even subtly, to workplace skills like communication, problem-solving, or strategic thinking.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Authentically Engaging:" },
            {
              type: "text",
              content:
                " Genuinely fun and memorable, sparking real connection and laughter.",
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      text: "Smart Team Building Games That Aren't Cringe (and Actually Work!)",
      id: "smart-team-building-games",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            'Here are categories of team building games that are genuinely effective, applicable, and designed to avoid the "cringe" factor.',
        },
      ],
    },
    {
      type: "subheading",
      text: "1. Collaborative Problem-Solving & Strategic Thinking:",
      id: "collaborative-problem-solving",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Teams work together to solve complex puzzles, build structures, or navigate strategic scenarios, emphasizing collective intelligence and resourcefulness.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Examples:" },
        {
          type: "text",
          content: " Paper Tower Build, The Big Picture, Build A Bridge.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why it works:" },
        {
          type: "text",
          content:
            " Directly enhances critical thinking, communication, and teamwork under pressure. It's engaging because it's goal-oriented and taps into natural competitive instincts in a constructive way.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "OneThrive's Connection:" },
        { type: "text", content: " Our " },
        {
          type: "link",
          content: "Team-Building Experiences",
          href: "/services?category=team-building",
        },
        {
          type: "text",
          content:
            " specialize in designing immersive problem-solving challenges that foster genuine collaboration and strategic thinking.",
        },
      ],
    },
    {
      type: "subheading",
      text: "2. Interactive & Competitive Challenges:",
      id: "interactive-competitive-challenges",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Engaging, fast-paced games that test knowledge, quick thinking, or coordination, often with a competitive element and a clear winner.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Examples:" },
        {
          type: "text",
          content: " Trivia, Scavenger Hunt, Cornhole Tournaments.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why it works:" },
        {
          type: "text",
          content:
            " Infuses excitement and friendly competition, enhances knowledge sharing, and stimulates critical thinking. It's universally appealing and provides a fun mental break.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "OneThrive's Connection:" },
        {
          type: "text",
          content:
            " We can integrate customized trivia and game show elements into larger ",
        },
        { type: "link", content: "Corporate Entertainment", href: "/services?category=entertainment" },
        {
          type: "text",
          content:
            " events or standalone Team-Building sessions, ensuring high energy and engagement.",
        },
      ],
    },
    {
      type: "subheading",
      text: "3. Communication & Connection (Experiential & Expressive):",
      id: "communication-and-connection",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Activities designed to improve communication, foster empathy, and encourage creative expression in a low-stakes environment.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Examples:" },
        {
          type: "text",
          content:
            ' Improv Workshops, Storytelling, or "Ad Mad" (creating a humorous ad).',
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why it works:" },
        {
          type: "text",
          content:
            " Unlocks untapped potential, encourages out-of-the-box thinking, and provides a refreshing, tactile way to bond. It fosters psychological safety by celebrating diverse forms of contribution.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "OneThrive's Connection:" },
        { type: "text", content: " Our " },
        { type: "link", content: "Creative Workshops", href: "/services?category=creative-workshop" },
        {
          type: "text",
          content:
            " are specifically designed to unleash innovation and boost engagement through unique, hands-on experiences that are inherently non-cringe.",
        },
      ],
    },
    {
      type: "image",
      url: Blogimage1_1,
    },
    {
      type: "subheading",
      text: "Best Practices for Implementing Non-Cringe Team Building Games",
      id: "best-practices-for-implementing",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "To ensure your team building games are truly impactful and yield maximum benefits, HR leaders, founders, and managers should consider these overarching best practices:",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Define Clear Objectives:" },
            {
              type: "text",
              content:
                " Before selecting any game, clarify what specific outcome you want to achieve (e.g., improve communication, boost morale, foster innovation). This helps tailor the activity and measure success.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Know Your Audience:" },
            {
              type: "text",
              content:
                ' Understand your team\'s demographics, preferences, and pain points. Tailor activities to resonate with them, ensuring high engagement and relevance. Conduct surveys or informal polls to gauge interest and avoid "cringe" activities.',
            },
          ],
        },
        {
          parts: [
            {
              type: "bold",
              content: "Encourage Participation, Don't Force It:",
            },
            {
              type: "text",
              content:
                " Create a low-pressure environment where everyone feels comfortable contributing, but respect those who prefer to observe. Psychological safety is key.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Balance Structure with Flexibility:" },
            {
              type: "text",
              content:
                " Plan enough structure to guide activities, but allow room for spontaneous interaction and adaptation.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Lead by Example:" },
            {
              type: "text",
              content:
                " Managers and leaders must actively participate and model engaged behavior. Their involvement sets the tone for the entire team and signals the activity's importance. A recent study found that teams with high levels of ",
            },
            {
              type: "link",
              content: "psychological safety",
              href: "https://www.ccl.org/articles/leading-effectively-articles/what-is-psychological-safety-at-work/",
            },
            {
              type: "text",
              content:
                " reported higher levels of performance and lower levels of interpersonal conflict.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Gather Feedback and Iterate:" },
            {
              type: "text",
              content:
                " Continuously solicit feedback from participants to understand what resonated and what could be improved. Use this input to refine future activities and ensure lasting impact. A research paper on ",
            },
            {
              type: "link",
              content: "teamwork and collaboration",
              href: "https://www.researchgate.net/publication/260791275_Enhancing_Employees'_Collaboration_Through_Trust_in_Organizations_An_Emerging_Challenge_in_Human_Resource_Management",
            },
            {
              type: "text",
              content:
                " emphasizes that trust and collaboration are interdependent and that building trust requires open and honest communication.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Integrate into Culture:" },
            {
              type: "text",
              content:
                " Make team building a consistent part of your company culture, not just a one-off event. Regular engagement reinforces its value and benefits. A recent ",
            },
            {
              type: "link",
              content: "McKinsey & Company",
              href: "https://www.mckinsey.com/capabilities/m-and-a/our-insights/retain-integrate-thrive-a-strategy-for-managing-talent-during-m-and-a-transactions",
            },
            {
              type: "text",
              content:
                " report discusses the importance of team-building activities in strengthening an organization's culture.",
            },
          ],
        },
      ],
    },
    {
      type: "pullquote",
      text: 'Effective team building games are the bedrock of a successful, sustainable organization. By moving beyond outdated, "cringe-worthy" activities to strategically implement smart, purpose-driven games, organizations can transform challenges into unparalleled opportunities for collaboration, communication, trust, and morale.',
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "This is precisely where OneThrive excels. We are the architects of curated, meaningful interactions that are meticulously crafted to inspire your team, boost morale, and build a workplace culture where engagement and loyalty thrive. Our comprehensive suite of services—from dynamic Team-Building Experiences (including non-cringe games) and holistic ",
        },
        { type: "link", content: "Wellness Programs", href: "/services?category=wellness" },
        {
          type: "text",
          content: " to inspiring Creative Workshops, invigorating ",
        },
        { type: "link", content: "Sports Events", href: "/services?category=sports" },
        { type: "text", content: ", strategic " },
        { type: "link", content: "Offsites", href: "/services?category=office-olympics" },
        {
          type: "text",
          content:
            ", and memorable Corporate Entertainment—are all designed to seamlessly integrate into your overarching strategy. We help you empower your employees, connect your teams, and ensure every individual feels valued, respected, and engaged, creating moments that truly matter throughout their entire journey with your organization.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Ready to transform your team's dynamics with smart, non-cringe team building games that actually work? Partner with OneThrive today ",
        },
        { type: "link", content: "here", href: "/contact" },
        {
          type: "text",
          content:
            " to explore our customized solutions and discover how we can help your organization create moments that truly matter.",
        },
      ],
    },
  ],
};

const ContentBlock = ({ block }) => {
  const LinkRenderer = ({ parts }) => {
    if (!parts) return null;
    return (
      <>
        {parts.map((part, index) => {
          if (part.type === "text") {
            return <span key={index}>{part.content}</span>;
          } else if (part.type === "bold") {
            return (
              <strong key={index} className="text-[#00FFAB] font-bold">
                {part.content}
              </strong>
            );
          } else if (part.type === "link") {
            const isExternal = part.href.startsWith("http");
            const linkClasses =
              "text-[#00FFAB] hover:text-white transition-all duration-300 underline decoration-2 decoration-[#00FFAB] underline-offset-4 hover:decoration-white hover:shadow-[0_0_10px_rgba(0,255,171,0.4)]";
            return (
              <a
                key={index}
                href={part.href}
                className={linkClasses}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : ""}
              >
                {part.content}
              </a>
            );
          }
          return null;
        })}
      </>
    );
  };

  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white leading-relaxed">
          <LinkRenderer parts={block.parts} />
        </p>
      );
    case "subheading":
      return (
        <h3
          id={block.id}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-12 sm:mt-16 mb-4 sm:mb-6 text-[#00FFAB] relative"
        >
          <span className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#00FFAB] to-transparent rounded-full"></span>
          {block.text}
        </h3>
      );
    case "pullquote":
      return (
        <div className="my-12 sm:my-16 relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 to-transparent rounded-2xl"></div>
          <blockquote className="relative p-6 sm:p-8 md:p-12 bg-black/90 backdrop-blur-sm rounded-2xl border border-[#00FFAB]/30 text-lg sm:text-xl md:text-2xl font-semibold italic text-white leading-snug shadow-[0_0_30px_rgba(0,255,171,0.1)]">
            <div className="absolute top-2 sm:top-4 left-4 sm:left-8 text-[#00FFAB] text-4xl sm:text-6xl opacity-30 font-serif">
              "
            </div>
            <div className="relative z-10 px-4 sm:px-0">{block.text}</div>
            <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 text-[#00FFAB] text-4xl sm:text-6xl opacity-30 font-serif rotate-180">
              "
            </div>
          </blockquote>
        </div>
      );
    case "image":
      return (
        <figure className="my-8 sm:my-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#00FFAB]/20">
            <img
              src={block.url}
              alt={block.caption}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          {block.caption && (
            <figcaption className="mt-4 text-center text-white text-sm italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-base sm:text-lg text-white">
          {block.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#00FFAB] rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(0,255,171,0.5)]"></span>
              <div className="flex-1">
                <LinkRenderer parts={item.parts} />
              </div>
            </li>
          ))}
        </ul>
      );
    case "linkGroup":
      return (
        <div className="bg-black/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#00FFAB]/30 my-8 sm:my-12 shadow-[0_0_20px_rgba(0,255,171,0.1)]">
          <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#00FFAB]">
            {block.heading}
          </h4>
          <ul className="list-none space-y-3">
            {block.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00FFAB] transition-all duration-300 hover:underline decoration-2 decoration-[#00FFAB] underline-offset-4"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    case "link":
      return (
        <a
          href={block.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#00FFAB] font-semibold text-base sm:text-lg hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,171,0.4)] my-6 sm:my-8 underline decoration-2 decoration-[#00FFAB] underline-offset-4 hover:decoration-white"
        >
          {block.text}
        </a>
      );
    default:
      return null;
  }
};

const BlogPost1 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const headingsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const headings = headingsRef.current;
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id);
          break;
        }
      }
    };

    // Store headings
    headingsRef.current = blogData.content.filter(
      (block) => block.type === "subheading"
    );

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    const url = "[DYNAMIC_URL]";
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link:", err);
      });
  };

  const RelatedPostsCard = ({ post, onClick }) => (
    <div
      onClick={onClick}
      className="group flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-black/90 backdrop-blur-sm border border-[#00FFAB]/30 transition-all duration-500 transform-gpu hover:shadow-[0_0_40px_rgba(0,255,171,0.2)] hover:scale-105 hover:border-[#00FFAB]/60 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6 flex-1">
        <h4 className="text-base sm:text-lg font-bold leading-tight line-clamp-3 sm:line-clamp-2 transition-all duration-300 group-hover:text-[#00FFAB] group-hover:drop-shadow-[0_0_5px_rgba(0,255,171,0.5)]">
          {post.title}
        </h4>
      </div>
    </div>
  );

  const SocialButton = ({ href, children, label, className = "" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-black/80 backdrop-blur-sm p-2.5 rounded-full border border-[#00FFAB]/30 hover:border-[#00FFAB] hover:bg-[#00FFAB]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,171,0.3)] hover:scale-110 ${className}`}
      aria-label={label}
    >
      <div className="w-4 h-4 text-white group-hover:text-[#00FFAB] transition-colors duration-300">
        {children}
      </div>
    </a>
  );

  // Thin vertical share bar for laptops/desktops only (no mobile changes)
  const ThinShareItem = ({ href, onClick, label, children }) => {
    const classes =
      "flex items-center justify-center w-9 h-9 rounded-md bg-black/80 border border-[#00FFAB]/30 hover:border-[#00FFAB] hover:bg-[#00FFAB]/10 transition-all duration-300";
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={classes}
          title={label}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        onClick={onClick}
        aria-label={label}
        className={classes}
        title={label}
        type="button"
      >
        {children}
      </button>
    );
  };

  return (
    <div className="font-sans bg-black min-h-screen text-white relative mt-4 sm:mt-8">
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        .text-onethrive-aqua {
          color: #00FFAB;
        }
        .prose-custom ul {
          list-style-type: none;
          padding-left: 0;
        }
        .prose-custom li {
          margin-bottom: 0.75rem;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #00FFAB;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #00cc88;
        }

        /* Mobile menu styles */
        @media (max-width: 1023px) {
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
        }

        /* Hide social icons below 1355px */
        @media (max-width: 1355px) {
          .social-sidebar {
            display: none !important;
          }
        }
        
        /* Hide social icons between 1540px-1624px */
        @media (min-width: 1540px) and (max-width: 1624px) {
          .social-sidebar {
            display: none !important;
          }
        }
      `}</style>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00FFAB 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Mobile Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl z-40 lg:hidden border-r border-[#00FFAB]/30 ${
          showMobileMenu ? "open" : ""
        }`}
      >
        <div className="p-6 pt-16">
          {/* Mobile Table of Contents */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4 text-[#00FFAB] flex items-center">
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
              Table of Contents
            </h4>
            <ul className="space-y-2">
              {blogData.content
                .filter((block) => block.type === "subheading")
                .map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      onClick={() => setShowMobileMenu(false)}
                      className={`block text-sm px-3 py-2 rounded-lg transition-all duration-300 border-l-2 ${
                        activeSection === heading.id
                          ? "text-[#00FFAB] border-[#00FFAB] bg-[#00FFAB]/10 font-semibold"
                          : "text-white border-transparent hover:text-[#00FFAB] hover:border-[#00FFAB]/50 hover:bg-[#00FFAB]/5"
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Mobile Share Section (unchanged) */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#00FFAB] flex items-center">
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <SocialButton
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  "[DYNAMIC_URL]"
                )}`}
                label="Share on LinkedIn"
                className="w-full justify-center"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                  "[DYNAMIC_URL]"
                )}&text=${encodeURIComponent(blogData.title)}`}
                label="Share on Twitter"
                className="w-full justify-center"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.36 0-6.082 2.72-6.082 6.082 0 .476.056.938.164 1.378-5.056-.255-9.52-2.67-12.516-6.346-.525.908-.827 1.966-.827 3.101 0 2.105 1.071 3.965 2.693 5.064-.99.03-1.918-.304-2.727-.751v.079c0 2.967 2.114 5.448 4.912 6.012-.472.129-.971.196-1.485.196-.363 0-.71.035-1.05.099.78 2.427 3.031 4.195 5.764 4.248-2.083 1.631-4.723 2.585-7.589 2.585-.494 0-.978-.029-1.455-.084 2.684 1.742 5.867 2.76 9.284 2.76 11.13 0 17.221-9.227 17.221-17.221 0-.263-.008-.526-.017-.788.943-.679 1.765-1.533 2.417-2.529z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  blogData.title + " [DYNAMIC_URL]"
                )}`}
                label="Share on WhatsApp"
                className="w-full justify-center"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2.05c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.42 1.34 4.88l-1.39 5.04 5.23-1.37c1.4-.76 2.92-1.16 4.47-1.16 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.06c-1.46 0-2.84-.4-4.06-1.16l-3.52.92.93-3.38c-.76-1.29-1.16-2.75-1.16-4.24 0-4.48 3.65-8.12 8.12-8.12s8.12 3.65 8.12 8.12-3.64 8.12-8.12 8.12zm4.38-5.91c-.24-.12-.86-.42-.99-.47-.14-.06-.24-.09-.34.09-.09.18-.34.47-.42.56-.09.09-.17.1-.31.06-.14-.04-.59-.22-1.12-.69-.42-.37-.7-.84-.79-.99-.09-.15-.01-.15.06-.15s.16-.01.24-.01c.08-.01.14-.02.22-.05s.21-.05.32-.12c.1-.06.18-.17.24-.26s.08-.18.04-.34c-.04-.14-.34-.82-.47-1.1s-.26-.22-.34-.23-.17-.02-.24-.02h-.34c-.11-.01-.29-.02-.59.22-.29.23-1.12 1.09-1.12 2.65 0 1.55 1.15 3.07 1.31 3.28 0 0 0 0 0 0.15.21.29.35.59.45.29.1.59.15.89.15.42 0 1.25-.39 1.43-.51.18-.12.42-.19 1.12-.59.7-.42 1.16-.95 1.34-1.22.18-.28.18-.28.1-.41z" />
                </svg>
              </SocialButton>
              <button
                onClick={handleCopyLink}
                className="group bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-[#00FFAB]/30 hover:border-[#00FFAB] hover:bg-[#00FFAB]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,171,0.3)] hover:scale-110 w-full justify-center flex items-center"
                aria-label="Copy link"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#00FFAB] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 1h-12c-1.104 0-2 .896-2 2v14h2v-14c0-.551.448-1 1-1h12v-2zm-2 4h-10c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 16h-10v-14h10v14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thin vertical share rail on the left (DESKTOP ONLY) */}
      <div className="social-sidebar hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-3">
        {/* LinkedIn */}
        <ThinShareItem
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            "[DYNAMIC_URL]"
          )}`}
          label="Share on LinkedIn"
        >
          {/* LinkedIn official logo */}
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
            className="text-white"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.447-2.136 2.944v5.662H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.268 2.372 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.999 20.452H3.671V9h3.328v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </ThinShareItem>

        {/* X (formerly Twitter) */}
        <ThinShareItem
          href={`https://x.com/intent/tweet?url=${encodeURIComponent(
            "[DYNAMIC_URL]"
          )}&text=${encodeURIComponent(blogData.title)}`}
          label="Share on X"
        >
          {/* X logo */}
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
            className="text-white"
            fill="currentColor"
          >
            <path d="M18.244 2H21.5l-7.59 8.668L23 22h-6.59l-5.16-6.508L5.2 22H2l8.12-9.277L1 2h6.75l4.67 5.938L18.244 2zm-1.155 18h1.605L7.01 4H5.29l11.8 16z" />
          </svg>
        </ThinShareItem>

        {/* WhatsApp */}
        <ThinShareItem
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            blogData.title + " [DYNAMIC_URL]"
          )}`}
          label="Share on WhatsApp"
        >
          {/* WhatsApp official logo */}
          <svg
            viewBox="0 0 32 32"
            width="18"
            height="18"
            aria-hidden="true"
            className="text-white"
            fill="currentColor"
          >
            <path d="M19.11 17.19c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.51-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51-.18-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.25 5.16 4.55.72.31 1.29.49 1.73.63.73.23 1.39.2 1.92.12.59-.09 1.79-.73 2.05-1.43.25-.7.25-1.29.17-1.43-.08-.14-.27-.22-.57-.37z" />
            <path d="M26.7 5.3C23.9 2.5 20.2 1 16.2 1 8.5 1 2.3 7.2 2.3 14.9c0 2.41.63 4.77 1.83 6.86L2 30.8l9.21-2.01c1.99 1.09 4.23 1.66 6.5 1.66 7.7 0 13.9-6.2 13.9-13.9 0-3.99-1.55-7.7-4.41-10.55zM16.71 28.2c-2.07 0-4.06-.55-5.81-1.6l-.42-.25-5.46 1.2 1.16-5.33-.27-.44c-1.13-1.86-1.73-3.98-1.73-6.13 0-6.62 5.38-12 12-12 3.21 0 6.23 1.25 8.5 3.51 2.27 2.27 3.51 5.29 3.51 8.5-.01 6.63-5.39 12-12.07 12z" />
          </svg>
        </ThinShareItem>

        {/* Copy to clipboard (clipboard icon) */}
        <ThinShareItem onClick={handleCopyLink} label="Copy link">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
            className="text-white"
            fill="currentColor"
          >
            <path d="M16 4h-1.18A3 3 0 0012 2a3 3 0 00-2.82 2H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-4-1a1 1 0 011 1h-2a1 1 0 011-1zm4 15H8V6h8v12z" />
            <path d="M6 8H5a2 2 0 00-2 2v10a2 2 0 002 2h9a2 2 0 002-2v-1H6V8z" opacity=".6" />
          </svg>
        </ThinShareItem>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10 mt-12 sm:mt-0">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* Main Article Content */}
          <article className="w-full xl:w-3/4 max-w-none mx-auto xl:mx-0">
            {/* Enhanced Breadcrumb Navigation */}
            <nav className="text-white text-sm mb-6 sm:mb-8 flex items-center space-x-2 overflow-x-auto">
              <span
                onClick={() => (window.location.href = "/blogs")}
                className="hover:text-[#00FFAB] transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Blog
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hover:text-[#00FFAB] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                {blogData.category}
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-medium truncate">
                {blogData.title}
              </span>
            </nav>

            {/* Enhanced Article Header */}
            <header className="mb-12 sm:mb-16">
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8 bg-white bg-clip-text text-transparent">
                  {blogData.title}
                </h1>
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#00FFAB]/10 rounded-full blur-xl"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-gradient-to-r from-[#00FFAB]/20 to-[#00FFAB]/10 backdrop-blur-sm text-[#00FFAB] text-sm font-bold px-4 py-2 rounded-full border border-[#00FFAB]/30 shadow-[0_0_15px_rgba(0,255,171,0.2)] w-fit">
                  {blogData.category}
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white text-sm">
                  <span className="font-semibold text-[#00FFAB]">
                    {blogData.author}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>{blogData.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {blogData.readTime}
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-[#00FFAB]/20 group">
                <img
                  src={blogData.heroImage}
                  alt={blogData.title}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 ring-1 ring-[#00FFAB]/20 rounded-2xl sm:rounded-3xl"></div>
              </div>
            </header>

            {/* Enhanced Main Content Body */}
            <section className="prose-custom max-w-none">
              {blogData.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </section>

            {/* Enhanced Social Share Buttons (Mobile/Bottom) - UNCHANGED and hidden on xl */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-12 sm:my-16 xl:hidden">
              <SocialButton
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  "[DYNAMIC_URL]"
                )}`}
                label="Share on LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                  "[DYNAMIC_URL]"
                )}&text=${encodeURIComponent(blogData.title)}`}
                label="Share on Twitter"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.36 0-6.082 2.72-6.082 6.082 0 .476.056.938.164 1.378-5.056-.255-9.52-2.67-12.516-6.346-.525.908-.827 1.966-.827 3.101 0 2.105 1.071 3.965 2.693 5.064-.99.03-1.918-.304-2.727-.751v.079c0 2.967 2.114 5.448 4.912 6.012-.472.129-.971.196-1.485.196-.363 0-.71.035-1.05.099.78 2.427 3.031 4.195 5.764 4.248-2.083 1.631-4.723 2.585-7.589 2.585-.494 0-.978-.029-1.455-.084 2.684 1.742 5.867 2.76 9.284 2.76 11.13 0 17.221-9.227 17.221-17.221 0-.263-.008-.526-.017-.788.943-.679 1.765-1.533 2.417-2.529z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  blogData.title + " [DYNAMIC_URL]"
                )}`}
                label="Share on WhatsApp"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2.05c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.42 1.34 4.88l-1.39 5.04 5.23-1.37c1.4-.76 2.92-1.16 4.47-1.16 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.06c-1.46 0-2.84-.4-4.06-1.16l-3.52.92.93-3.38c-.76-1.29-1.16-2.75-1.16-4.24 0-4.48 3.65-8.12 8.12-8.12s8.12 3.65 8.12 8.12-3.64 8.12-8.12 8.12zm4.38-5.91c-.24-.12-.86-.42-.99-.47-.14-.06-.24-.09-.34.09-.09.18-.34.47-.42.56-.09.09-.17.1-.31.06-.14-.04-.59-.22-1.12-.69-.42-.37-.7-.84-.79-.99-.09-.15-.01-.15.06-.15s.16-.01.24-.01c.08-.01.14-.02.22-.05s.21-.05.32-.12c.1-.06.18-.17.24-.26s.08-.18.04-.34c-.04-.14-.34-.82-.47-1.1s-.26-.22-.34-.23-.17-.02-.24-.02h-.34c-.11-.01-.29-.02-.59.22-.29.23-1.12 1.09-1.12 2.65 0 1.55 1.15 3.07 1.31 3.28 0 0 0 0 0 0.15.21.29.35.59.45.29.1.59.15.89.15.42 0 1.25-.39 1.43-.51.18-.12.42-.19 1.12-.59.7-.42 1.16-.95 1.34-1.22.18-.28.18-.28.1-.41z" />
                </svg>
              </SocialButton>
              <button
                onClick={handleCopyLink}
                className="group bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-[#00FFAB]/30 hover:border-[#00FFAB] hover:bg-[#00FFAB]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,171,0.3)] hover:scale-110"
                aria-label="Copy link"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#00FFAB] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 1h-12c-1.104 0-2 .896-2 2v14h2v-14c0-.551.448-1 1-1h12v-2zm-2 4h-10c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm0 16h-10v-14h10v14z" />
                </svg>
              </button>
            </div>

            {/* Related Posts Section */}
            <section className="my-16 sm:my-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 bg-white bg-clip-text text-transparent">
                  Related Posts
                </h3>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#00FFAB] to-transparent mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogData.relatedPosts.map((post) => (
                  <RelatedPostsCard
                    key={post.id}
                    post={post}
                    onClick={() => navigate(post.path)}
                  />
                ))}
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative bg-gradient-to-br from-black via-black to-[#00FFAB]/5 p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl border border-[#00FFAB]/30 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 via-transparent to-[#00FFAB]/5 opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#00FFAB]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#00FFAB]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-white bg-clip-text text-transparent">
                  Book a Workshop with OneThrive
                </h4>
                <p className="text-white mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  Ready to transform your team's dynamics with smart, non-cringe
                  team building games that actually work? Partner with OneThrive
                  today to explore our customized solutions.
                </p>
                <button className="group bg-gradient-to-r from-[#00FFAB] to-[#00cc88] text-black font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,171,0.4)] transform-gpu text-sm sm:text-base">
                  <span className="flex items-center justify-center">
                    Plan Your Team Building Experience
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </section>
          </article>

          {/* Sidebar - Always visible on xl; only Table of Contents remains */}
          <div className="xl:w-1/4 xl:flex flex-col hidden space-y-6">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="bg-gradient-to-br from-black to-black/90 backdrop-blur-xl p-4 rounded-2xl border border-[#00FFAB]/30 shadow-2xl mb-6">
                <h4 className="text-lg font-bold mb-3 text-[#00FFAB] flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                  Table of Contents
                </h4>
                <ul className="space-y-2">
                  {blogData.content
                    .filter((block) => block.type === "subheading")
                    .map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className={`block text-xs px-3 py-2 rounded-lg transition-all duration-300 border-l-2 ${
                            activeSection === heading.id
                              ? "text-[#00FFAB] border-[#00FFAB] bg-[#00FFAB]/10 font-semibold"
                              : "text-white border-transparent hover:text-[#00FFAB] hover:border-[#00FFAB]/50 hover:bg-[#00FFAB]/5"
                          }`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Share Section was here on right side - REMOVED as requested */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost1;