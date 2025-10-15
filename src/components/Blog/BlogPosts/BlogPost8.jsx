import React, { useState, useEffect, useRef } from "react";
import Blogimage8 from "../../../assets/Blogs/Blog8.webp";
import Blogimage2 from "../../../assets/Blogs/Blog2.webp";
import Blogimage3 from "../../../assets/Blogs/Blog3.webp";
import Blogimage5 from "../../../assets/Blogs/Blog5.webp";
import Blogimage8_1 from "../../../assets/Blogs/Blog8.1.png";
import { useNavigate } from "react-router-dom";

// Content for CEO's Playbook blog
const blogData = {
  id: 8,
  title:
    "The CEO's Playbook: How to Build a High-Performing Culture That Drives Growth & Profit",
  category: "Leadership",
  author: "OneThrive",
  date: "September 20, 2025",
  readTime: "10 min read",
  heroImage: Blogimage8,
  relatedPosts: [
    {
      id: 2,
      title:
        "Measuring What Matters: Quantifying the ROI of Employee Engagement & Experience",
      thumbnail: Blogimage2,
      path: "/blogs/measuring-what-matters",
    },
    {
      id: 10,
      title:
        "Cultivating a Thriving Workplace: Leadership Strategies for Unlocking Employee Engagement",
      thumbnail: Blogimage3,
      path: "/blogs/cultivating-thriving-workplace",
    },
    {
      id: 16,
      title:
        "Beyond the Bonus: How Strategic Employee Recognition Drives Engagement and Retention",
      thumbnail: Blogimage5,
      path: "/blogs/beyond-the-bonus",
    },
  ],
  content: [
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "For founders, CEOs, and senior leaders, the ultimate goal is sustained growth and profitability. While market strategy and product innovation are crucial, the true engine of long-term success lies within: a ",
        },
        {
          type: "bold",
          content: "high-performing culture",
        },
        {
          type: "text",
          content:
            ". This isn't just about perks or happy hours; it's a meticulously cultivated environment where every employee is engaged, empowered, and aligned with the organization's mission, directly impacting the bottom line. In today's volatile landscape, with persistent disengagement, talent shortages, and rapid technological shifts, building such a culture is no longer optional—it's the CEO's strategic imperative. This playbook outlines the core pillars of a high-performing culture, offering actionable strategies to transform your workforce into a loyal, productive, and thriving asset that consistently drives growth and profit.",
        },
      ],
    },
    {
      type: "subheading",
      text: "The Business Case for Culture: Why It's Your Ultimate Competitive Advantage",
      id: "the-business-case-for-culture",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            'Many leaders still view culture as a "soft" HR issue, but data unequivocally proves its direct impact on hard business outcomes. Neglecting culture can lead to ',
        },
        {
          type: "bold",
          content: "staggering costs",
        },
        {
          type: "text",
          content: ":",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Trillions in Lost Productivity:" },
            {
              type: "text",
              content:
                " Low employee engagement costs the global economy nearly $9 trillion annually. Disengaged employees are less productive, more prone to errors, and often do the bare minimum.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Skyrocketing Turnover Costs:" },
            {
              type: "text",
              content:
                " A toxic culture is 10 times more likely to drive employees away than compensation, leading to continuous financial drain and disruption. Replacing a single mid-level manager can cost $30,000-$45,000.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Hindered Innovation:" },
            {
              type: "text",
              content:
                " A culture lacking psychological safety or diverse perspectives stifles creativity, preventing breakthrough ideas and limiting market adaptability.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Burnout Epidemic:" },
            {
              type: "text",
              content:
                " With 82% of white-collar workers reporting burnout, organizations face increased absenteeism, higher healthcare costs, and a decline in overall performance.",
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "Conversely, companies with strong, positive cultures consistently " },
        { type: "bold", content: "outperform competitors" },
        { type: "text", content: ":" },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Higher Profitability:" },
            {
              type: "text",
              content:
                " Engaged business units in the top quartile of employee engagement are 23% more profitable than those in the bottom quartile.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Increased Productivity:" },
            { type: "text", content: " They are also 18% more productive." },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Superior Talent Attraction & Retention:" },
            {
              type: "text",
              content:
                " Attract and retain top talent more effectively, reducing recruitment costs and preserving institutional knowledge.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Enhanced Customer Satisfaction:" },
            {
              type: "text",
              content:
                " Engaged employees deliver better customer service, leading to greater loyalty and revenue.",
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
            "A high-performing culture is, therefore, a strategic asset that directly fuels growth and profit.",
        },
      ],
    },
    {
      type: "subheading",
      text: "The CEO's Playbook: Pillars of a High-Performing Culture",
      id: "the-ceos-playbook",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Building a high-performing culture requires intentional design and continuous investment across several interconnected pillars. Here's how to implement them, and how OneThrive's high-impact experiences can be integrated as powerful solutions:",
        },
      ],
    },
    {
      type: "subheading",
      text: "1. Purpose-Driven Alignment & Vision",
      id: "purpose-driven-alignment-and-vision",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Strategic Imperative: Employees, especially younger generations, seek meaning beyond tasks. Leaders must clearly articulate the company's mission, values, and how individual contributions align with the bigger picture.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our " },
        { type: "link", content: "Offsite & Retreat Planning", href: "/services" },
        { type: "text", content: " services are ideal for " },
        { type: "bold", content: "strategic alignment sessions" },
        {
          type: "text",
          content:
            ". These immersive experiences help leadership teams define and communicate a compelling vision, ensuring every employee understands their role in achieving collective goals. To learn more about how clear purpose drives engagement, read our blog on ",
        },
        {
          type: "link",
          content:
            "The Founder's Guide: Unlocking Employee Engagement for Startup Success",
          href: "/blogs/founders-guide-employee-engagement",
        },
        { type: "text", content: "." },
      ],
    },
    {
      type: "subheading",
      text: "2. Empowered & Engaged Employees",
      id: "empowered-and-engaged-employees",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Strategic Imperative: Foster autonomy, provide continuous growth opportunities, and implement robust recognition programs. Engaged employees are motivated to go above and beyond.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our " },
        { type: "link", content: "Creative Workshops", href: "/services" },
        {
          type: "text",
          content:
            " develop new skills and foster innovative thinking, directly contributing to professional growth. Our Corporate Entertainment and Sports Events provide platforms for public celebration and ",
        },
        { type: "bold", content: "meaningful recognition" },
        {
          type: "text",
          content:
            ", transforming apathy into active participation and boosting morale.",
        },
      ],
    },
    {
      type: "subheading",
      text: "3. Strong, Empathetic Leadership",
      id: "strong-empathetic-leadership",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Strategic Imperative: Managers drive 70% of team engagement. Leaders must model desired behaviors, communicate transparently, and be equipped to support their teams through change and uncertainty.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our " },
        { type: "bold", content: "Leadership Development Programs" },
        {
          type: "text",
          content:
            " (often integrated into Offsites) focus on communication, trust-building, and problem-solving. These experiences equip managers to inspire their teams, foster psychological safety, and create a ripple effect of engagement. For more insights on this topic, see our blog on ",
        },
        {
          type: "link",
          content:
            "Cultivating a Thriving Workplace: Leadership Strategies for Unlocking Employee Engagement",
          href: "/blogs/leadership-strategies-employee-engagement",
        },
        { type: "text", content: "." },
      ],
    },
    {
      type: "subheading",
      text: "4. Psychological Safety & Trust",
      id: "psychological-safety-and-trust",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Strategic Imperative: Create an environment where employees feel safe to take risks, share ideas, and voice concerns without fear of judgment. Trust is the foundation of open communication and innovation.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our diverse " },
        { type: "link", content: "Team-Building Experiences", href: "/services" },
        {
          type: "text",
          content:
            ' are designed to cultivate genuine connections and break down silos. Activities like collaborative problem-solving challenges or "Two Truths and a Lie" foster trust and camaraderie, making it easier for employees to contribute authentically. To learn more about effective team-building games, read our blog ',
        },
        {
          type: "link",
          content: "Beyond the Trust Fall: Smart Team Building Games That Aren't Cringe",
          href: "/blogs/smart-team-building-games",
        },
        { type: "text", content: "." },
      ],
    },
    {
      type: "subheading",
      text: "5. Holistic Well-being & Work-Life Integration",
      id: "holistic-well-being-and-work-life-integration",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            'Strategic Imperative: Address burnout, stress, and the "always-on" culture. Prioritize comprehensive wellness (physical, mental, emotional, financial) and flexible work arrangements.',
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our comprehensive " },
        { type: "link", content: "Wellness Programs", href: "/services" },
        {
          type: "text",
          content:
            " offer tailored solutions like mindfulness workshops, physical fitness challenges, and financial wellness seminars. These initiatives directly combat burnout and foster overall well-being, leading to a more resilient workforce.",
        },
      ],
    },
    {
      type: "subheading",
      text: "6. Adaptability & Continuous Learning",
      id: "adaptability-and-continuous-learning",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Strategic Imperative: In an AI-driven world, organizations must foster a culture of continuous learning, upskilling, and reskilling to remain agile and innovative. Leaders must address AI anxiety transparently. A recent ",
        },
        {
          type: "link",
          content: "McKinsey & Company",
          href: "https://www.mckinsey.com/featured-insights/future-of-work",
        },
        {
          type: "text",
          content:
            " report highlights that the demand for ",
        },
        { type: "bold", content: "social and emotional skills" },
        {
          type: "text",
          content:
            " (communication, negotiation, leadership) will rise by 24% by 2030, even as technical tasks become automated.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "OneThrive's Solution: Our Creative Workshops can develop crucial " },
        { type: "bold", content: "soft skills" },
        {
          type: "text",
          content:
            " (critical thinking, creativity, collaboration) essential for an AI-driven workplace. Our Wellness Programs can also help manage the stress and anxiety associated with technological change, ensuring employees feel supported through transitions.",
        },
      ],
    },
    {
      type: "image",
      url: Blogimage8_1,
    },
    {
      type: "subheading",
      text: "Measuring What Matters: Quantifying Your Culture's ROI",
      id: "measuring-what-matters",
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", content: "For founders and managers, demonstrating the " },
        { type: "bold", content: "ROI of cultural investments" },
        {
          type: "text",
          content:
            " is paramount. A high-performing culture directly impacts key business metrics:",
        },
      ],
    },
    {
      type: "list",
      items: [
        {
          parts: [
            { type: "bold", content: "Reduced Turnover:" },
            {
              type: "text",
              content:
                " Lower turnover rates translate to significant cost savings (tens of thousands per employee) in recruitment and training. Business units in the top quartile of employee engagement experienced 21% lower turnover in high-turnover organizations and 51% lower turnover in low-turnover organizations.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Increased Productivity:" },
            {
              type: "text",
              content:
                " Engaged teams are more efficient, make fewer errors, and drive higher output, directly impacting revenue and profitability. Business units with high engagement see a 14% increase in productivity.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Lower Absenteeism:" },
            {
              type: "text",
              content:
                " Engaged employees are more likely to be present and committed, reducing lost productivity and associated costs. A recent ",
            },
            {
              type: "link",
              content: "Forbes",
              href: "https://www.forbes.com/sites/forbeshumanresourcescouncil/2020/03/25/how-to-deal-with-excessive-employee-absenteeism-12-proven-methods/",
            },
            {
              type: "text",
              content:
                " article emphasized the link between a positive workplace and reduced absenteeism.",
            },
          ],
        },
        {
          parts: [
            { type: "bold", content: "Enhanced Innovation:" },
            {
              type: "text",
              content:
                " A culture of psychological safety and collaboration leads to more new ideas and successful implementations, driving competitive advantage.",
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
            "By tracking metrics like turnover rate, productivity per employee, absenteeism, and innovation metrics, you can quantify the tangible benefits of your cultural investments.",
        },
      ],
    },
    {
      type: "pullquote",
      text:
        "Building a high-performing culture is the ultimate CEO's playbook for driving sustainable growth and profit. It demands strategic foresight, unwavering commitment, and a holistic approach to nurturing every aspect of the employee journey. By understanding that culture is not just a 'soft' issue but a hard business imperative, leaders can transform their organizations into resilient, innovative, and highly profitable entities.",
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "This is precisely where OneThrive excels. We are the architects of curated, meaningful interactions that are meticulously crafted to inspire your team, boost morale, and build a workplace culture where engagement, loyalty, and high performance thrive. Our comprehensive suite of services—from dynamic team-building and holistic wellness programs to inspiring creative workshops, invigorating sports events, strategic offsites, and memorable entertainment—are all designed to seamlessly integrate into your overarching cultural strategy. We help you empower your leaders, connect your teams, and ensure every employee feels valued, respected, and engaged, creating moments that truly matter throughout their entire journey with your organization, delivering measurable impact that fuels your company's success.",
        },
      ],
    },
    {
      type: "paragraph",
      parts: [
        {
          type: "text",
          content:
            "Ready to build a high-performing culture that drives unparalleled growth and profit for your organization? Partner with OneThrive today ",
        },
        { type: "link", content: "here", href: "/contact" },
        {
          type: "text",
          content:
            " to explore our customized solutions and discover how we can help you write the next chapter of your company's success story.",
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

const BlogPost8 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showShareSection, setShowShareSection] = useState(false); // kept for parity, not used in sidebar
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

        // Show share section when Related Posts section comes into view (no sidebar share now)
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

  // Thin vertical share rail for laptops/desktops only
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
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
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

          {/* Mobile Share Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#00FFAB] flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v-5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                  <path d="M18.244 2H21.5l-7.59 8.668L23 22h-6.59l-5.16-6.508L5.2 22H2l8.12-9.277L1 2h6.75l4.67 5.938L18.244 2zm-1.155 18h1.605L7.01 4H5.29l11.8 16z" />
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

        {/* Copy link */}
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
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hover:text-[#00FFAB] transition-colors duration-200 cursor-pointer whitespace-nowrap">
                {blogData.category}
              </span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
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
                  <path d="M18.244 2H21.5l-7.59 8.668L23 22h-6.59l-5.16-6.508L5.2 22H2l8.12-9.277L1 2h6.75l4.67 5.938L18.244 2zm-1.155 18h1.605L7.01 4H5.29l11.8 16z" />
                </svg>
              </SocialButton>
              <SocialButton
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  blogData.title + " [DYNAMIC_URL]"
                )}`}
                label="Share on WhatsApp"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2.05c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.42 1.34 4.88l-1.39 5.04 5.23-1.37c1.4-.76 2.92-1.16 4.47-1.16 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.06c-1.46 0-2.84-.4-4.06-1.16l-3.52.92.93-3.38c-.76-1.29-1.16-2.75-1.16-4.24 0-4.48 3.65-8.12 8.12-8.12s8.12 3.65 8.12 8.12-3.64 8.12-8.12 8.12zm4.38-5.91c-.24-.12-.86-.42-.99-.47-.14-.06-.24-.09-.34 .09-.09 .18-.34 .47-.42 .56-.09 .09-.17 .1-.31 .06-.14 -.04-.59 -.22-1.12 -.69-.42 -.37-.7 -.84-.79 -.99-.09 -.15-.01 -.15.06 -.15s.16 -.01.24 -.01c.08 -.01.14 -.02.22 -.05s.21 -.05.32 -.12c.1 -.06.18 -.17.24 -.26s.08 -.18.04 -.34c-.04 -.14-.34 -.82-.47 -1.1s-.26 -.22-.34 -.23-.17 -.02-.24 -.02h-.34c-.11 -.01-.29 -.02-.59 .22-.29 .23-1.12 1.09-1.12 2.65 0 1.55 1.15 3.07 1.31 3.28 0 0 0 0 0 0.15.21 .29.35 .59.45 .29.1 .59.15 .89.15.42 0 1.25 -.39 1.43 -.51.18 -.12.42 -.19 1.12 -.59.7 -.42 1.16 -.95 1.34 -1.22.18 -.28.18 -.28.1 -.41z" />
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
                  Ready to build a high-performing culture that drives unparalleled growth and profit for your organization? Partner with OneThrive today to explore our customized solutions.
                </p>
                <button className="group bg-gradient-to-r from-[#00FFAB] to-[#00cc88] text-black font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,171,0.4)] transform-gpu text-sm sm:text-base">
                  <span className="flex items-center justify-center">
                    Plan Your Corporate Retreat
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
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
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

              {/* Share Section removed from right side */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost8;