import React, { useState, useEffect, useRef } from "react";
import Blogimage2 from "../../../assets/Blogs/Blog2.webp";
import Blogimage8 from "../../../assets/Blogs/Blog8.webp";
import Blogimage3 from "../../../assets/Blogs/Blog3.webp";
import Blogimage7 from "../../../assets/Blogs/Blog7.webp";
import Blogimage2_2 from "../../../assets/Blogs/Blog2.1.png";
import { useNavigate } from "react-router-dom";

// Content for Creative Workshops blog
const blogData = {
  id: 2,
  title:
    "Unleashing Innovation: How Creative Workshops Spark Employee Engagement",
  category: "Creative Workshops",
  author: "OneThrive",
  date: "October 25, 2025",
  readTime: "8 min read",
  heroImage: Blogimage2,
  relatedPosts: [
    {
      id: 8,
      title:
        "The CEO's Playbook: How to Build a High-Performing Culture That Drives Growth & Profit",
      thumbnail: Blogimage8,
      path: "/blogs/ceos-playbook",
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
      path: "/blogs/founders-guide",
    },
  ],
  content: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "In today's dynamic business landscape, organizations constantly seek new ways to foster innovation, boost morale, and keep their teams engaged. Traditional methods can sometimes lead to stagnation, a lack of fresh ideas, and even disengagement among employees. The modern workforce thrives on opportunities for growth, connection, and meaningful contribution, moving beyond routine tasks to seek purpose and creative outlets.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "This is where " },
        { type: "bold", content: "creative workshops" },
        {
          type: "text",
          content:
            " for employees become a powerful solution. Far from being mere recreational activities, these high-impact experiences are strategically designed to ",
        },
        {
          type: "bold",
          content:
            "unlock untapped potential, stimulate original thinking, and build stronger, more collaborative teams",
        },
        {
          type: "text",
          content:
            ". By providing a structured yet playful environment, creative workshops empower individuals to explore new perspectives, solve problems innovatively, and reignite their passion for work, ultimately sparking profound employee engagement.",
        },
      ],
    },
    {
      type: "subheading",
      text: "Why Creative Workshops are Essential for Modern Teams",
      id: "why-creative-workshops-are-essential",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "The challenges of maintaining a vibrant and innovative workplace are more pronounced than ever. Teams can fall into a routine, leading to a decline in creative output and a sense of monotony. This stagnation can result in a lack of new ideas, reduced problem-solving capabilities, and a general dip in employee morale and engagement. In a competitive market, an organization's ability to innovate is directly tied to the creativity and collaborative spirit of its workforce. For more on the challenges of disengagement, read our blog on ",
        },
        {
          type: "link",
          content:
            "The CEO's Playbook: How to Build a High-Performing Culture That Drives Growth & Profit",
          href: "/blogs/ceos-playbook",
        },
        { type: "text", content: "." },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Creative workshops directly address these pain points by offering a refreshing departure from conventional work. They provide a safe space for experimentation, encouraging employees to step outside their comfort zones and approach challenges from novel angles. This not only revitalizes individual creativity but also strengthens team dynamics, fostering an environment where diverse ideas are welcomed and collaboration flourishes. A ",
        },
        {
          type: "link",
          content: "Forbes article",
          href:
            "https://www.forbes.com/sites/yec/2018/03/13/seven-ways-to-cultivate-innovation-and-creativity-in-business/",
        },
        {
          type: "text",
          content:
            " on cultivating innovation states that a great way to spark new ideas is to encourage collaboration and brainstorming walks, which get employees away from their desks and into a new environment.",
        },
      ],
    },
    {
      type: "subheading",
      text: "Beyond Brainstorming: The Unique Benefits of Creative Workshops",
      id: "beyond-brainstorming",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Implementing creative workshops for employees yields a wide array of benefits that extend far beyond a simple brainstorming session:",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Unleashes Innovation and Problem-Solving:" },
            {
              type: "text",
              content:
                " By engaging in hands-on, imaginative tasks, employees develop new ways of thinking, leading to breakthrough ideas and more effective solutions to complex problems.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Boosts Employee Engagement and Morale:" },
            {
              type: "text",
              content:
                " These unique experiences provide a refreshing break from routine, making work more enjoyable and fostering a sense of excitement and purpose.",
            },
          ],
        },
        {
          parts: [
            {
              type: "bold",
              content: "Strengthens Team Collaboration and Communication:",
            },
            {
              type: "text",
              content:
                " Working together on creative projects encourages open dialogue, active listening, and a deeper understanding of team members' strengths and perspectives.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Reduces Stress and Promotes Well-being:" },
            {
              type: "text",
              content:
                " Engaging in creative activities can be a powerful stress reliever, offering a mental escape and promoting a sense of accomplishment and well-being.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Fosters a Culture of experimentation:" },
            {
              type: "text",
              content:
                ' Creative workshops encourage a "fail-forward" mindset, where experimentation is valued, and mistakes are seen as learning opportunities, driving continuous improvement.',
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Develops New Skills:" },
            {
              type: "text",
              content:
                " Participants often learn new artistic, strategic, or collaborative skills that can be directly applied back to their roles, enhancing professional development. A recent ",
            },
            {
              type: "link",
              content: "PwC report",
              href:
                "https://www.pwc.com/gx/en/news-room/press-releases/2025/pwc-global-entertainment-media-outlook.html",
            },
            {
              type: "text",
              content:
                " highlights how highly innovative companies prioritize collaboration and are three times more likely to jointly develop new products with external partners than their less innovative counterparts.",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      url: Blogimage2_2,
    },
    {
      type: "subheading",
      text: "Engaging Creative Workshop Ideas for Your Team",
      id: "engaging-creative-workshop-ideas",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Here are some engaging creative workshops designed to ignite your team's imagination and boost engagement.",
        },
      ],
    },
    {
      type: "subheading",
      text: "1. Hands-On Art & Craft Experiences:",
      id: "hands-on-art-craft",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Guided sessions focused on tactile creation, such as sculpting with clay, pottery wheel throwing, painting, or general art exploration. These can be virtual or in-person.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why employees love it:" },
        {
          type: "text",
          content:
            " Offers a relaxing, tactile way to collaborate and unwind. No prior art skills are required, making it accessible and fun for everyone. It's a unique approach to team bonding and stress relief, allowing participants to express themselves creatively and take home a tangible reminder of their shared experience.",
        },
      ],
    },
    {
      type: "subheading",
      text: "2. Collaborative Vision & Strategic Art:",
      id: "collaborative-vision-strategic",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Workshops that use creative processes to foster strategic alignment and shared vision. Teams might work together on large-scale art projects that visually represent company goals, or engage in exercises that connect individual ideas into a cohesive whole.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why employees love it:" },
        {
          type: "text",
          content:
            " Encourages collective problem-solving and strategic thinking in a non-traditional, highly engaging format. It helps teams visualize complex ideas, understand interdependencies, and build a unified sense of purpose, making abstract concepts tangible and exciting.",
        },
      ],
    },
    {
      type: "subheading",
      text: "3. Improv Workshops:",
      id: "improv-workshops",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Sessions focused on improvisational theater games and exercises.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why employees love it:" },
        {
          type: "text",
          content:
            ' Builds trust, adaptability, quick thinking, and team chemistry, all while generating plenty of laughter. It encourages participants to "say yes-and!" to ideas, fostering a more open and collaborative mindset.',
        },
      ],
    },
    {
      type: "subheading",
      text: "4. Storytelling & Values Expression:",
      id: "storytelling-values-expression",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Workshops focused on developing compelling narratives around company values, mission, or shared experiences. This could involve creative writing, visual storytelling, or performance-based activities to articulate core principles.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why employees love it:" },
        {
          type: "text",
          content:
            " Enhances communication skills, helps teams articulate ideas more effectively, and fosters a deeper understanding of shared experiences and company purpose.",
        },
      ],
    },
    {
      type: "subheading",
      text: "5. Photography Outings/Workshops:",
      id: "photography-outings-workshops",
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "What it is:" },
        {
          type: "text",
          content:
            " Guided photo walks or workshops focusing on capturing moments, perspectives, and visual storytelling. Can involve mobile photography or more advanced techniques.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "bold", content: "Why employees love it:" },
        {
          type: "text",
          content:
            ' Encourages team members to "look closer," observe their environment differently, and share unique perspectives. It\'s a creative way to explore surroundings and bond outside the office.',
        },
      ],
    },
    {
      type: "subheading",
      text: "Best Practices for Implementing Creative Workshops",
      id: "best-practices-for-implementing",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "To ensure your creative workshops for employees are truly impactful and yield maximum benefits, consider these best practices:",
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
                " Before planning, clarify what you aim to achieve (e.g., boost innovation, improve team cohesion, reduce stress). This helps tailor the workshop content and measure success.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Choose the Right Facilitator:" },
            {
              type: "text",
              content:
                " A skilled facilitator can guide activities, encourage participation, and ensure a positive, inclusive environment.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Encourage Psychological Safety:" },
            {
              type: "text",
              content:
                " Create a space where employees feel comfortable taking risks, sharing unconventional ideas, and making mistakes without fear of judgment.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Balance Structure with Freedom:" },
            {
              type: "text",
              content:
                " Provide enough structure to guide the activities, but allow ample room for individual expression and spontaneous creativity.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Connect to Real-World Application:" },
            {
              type: "text",
              content:
                " Where possible, link the creative exercises back to real workplace challenges or company goals to demonstrate practical value.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Gather Feedback and Iterate:" },
            {
              type: "text",
              content:
                " After each workshop, collect feedback from participants to understand what resonated and what could be improved for future sessions. This aligns with the importance of data-driven decisions discussed in our blog ",
            },
            {
              type: "link",
              content:
                "Measuring What Matters: Quantifying the ROI of Employee Engagement & Experience",
              href: "/blogs/measuring-what-matters",
            },
            { type: "text", content: ". A recent study from " },
            {
              type: "link",
              content: "Gallup",
              href:
                "https://www.gallup.com/workplace/692954/anemic-employee-engagement-points-leadership-challenges.aspx",
            },
            {
              type: "text",
              content:
                " shows that companies that act on employee feedback have a higher engagement rate, which underscores the importance of gathering and acting on feedback.",
            },
          ],
        },
      ],
    },
    {
      type: "pullquote",
      text:
        "In a world that increasingly values innovation and adaptability, fostering a creative and engaged workforce is paramount. Creative workshops for employees offer a powerful pathway to achieve this, moving beyond traditional team-building to cultivate genuine connection, spark new ideas, and enhance overall well-being. The key lies in their expert design and execution.",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "This is precisely where OneThrive excels. We are the architects of curated, meaningful interactions that are meticulously crafted to inspire your team, boost morale, and build a workplace culture where innovation thrives. Our unique expertise in seamlessly blending creativity, connection, and well-being ensures that every experience we provide is not merely an event, but a strategic investment in your team's future and your organization's success. For more information on how we can help with team building, check out our blog on ",
        },
        {
          type: "link",
          content:
            "Beyond the Trust Fall: Smart Team Building Games That Aren't Cringe",
          href: "/blogs/smart-team-building-games",
        },
        { type: "text", content: "." },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Ready to unleash your team's creative potential and spark unparalleled employee engagement? A recent ",
        },
        {
          type: "link",
          content: "McKinsey & Company",
          href: "https://www.mckinsey.com/featured-insights/future-of-work",
        },
        {
          type: "text",
          content:
            " report highlights that organizations that foster an environment of creativity and innovation consistently outperform their peers. Partner with OneThrive today ",
        },
        { type: "link", content: "here", href: "/contact" },
        {
          type: "text",
          content:
            " to explore our customized creative workshop solutions and discover how we can help your organization create moments that truly matter.",
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

const BlogPost2 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showShareSection, setShowShareSection] = useState(false); // kept, but not used (no mobile changes requested)
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const headingsRef = useRef([]);
  const relatedPostsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Check if we've reached the Related Posts section
      const relatedPostsElement = relatedPostsRef.current;
      if (relatedPostsElement) {
        const relatedPostsRect = relatedPostsElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Show share section when Related Posts section comes into view
        const shouldShowShare = relatedPostsRect.top <= viewportHeight * 0.8;
        setShowShareSection(shouldShowShare);
      }

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
      className={`group bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-[#00FFAB]/30 hover:border-[#00FFAB] hover:bg-[#00FFAB]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,171,0.3)] hover:scale-110 ${className}`}
      aria-label={label}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#00FFAB] transition-colors duration-300">
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
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-3">
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
            <path
              d="M6 8H5a2 2 0 00-2 2v10a2 2 0 002 2h9a2 2 0 002-2v-1H6V8z"
              opacity=".6"
            />
          </svg>
        </ThinShareItem>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-4 py-8 sm:py-12 md:py-16 lg:py-24 relative z-10 mt-12 sm:mt-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Article Content */}
          <article className="w-full lg:w-3/4 max-w-none mx-auto lg:mx-0">
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

            {/* Bottom Share Buttons (Mobile/Tablet only) - unchanged and hidden on lg */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-12 sm:my-16 lg:hidden">
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
            <section ref={relatedPostsRef} className="my-16 sm:my-20">
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
                  Ready to unleash your team's creative potential and spark
                  unparalleled employee engagement? Partner with OneThrive today
                  to explore our customized creative workshop solutions.
                </p>
                <button className="group bg-gradient-to-r from-[#00FFAB] to-[#00cc88] text-black font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,171,0.4)] transform-gpu text-sm sm:text-base">
                  <span className="flex items-center justify-center">
                    Plan Your Creative Workshop
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

          {/* Sidebar - Always visible on lg; only Table of Contents remains */}
          <div className="lg:w-1/4 lg:flex flex-col hidden space-y-6">
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

              {/* Share Section removed from right side as requested */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost2;