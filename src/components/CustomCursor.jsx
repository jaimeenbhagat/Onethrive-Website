import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);
    const hoverables = document.querySelectorAll("a, button, .cursor-hover");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none rounded-full"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        scale: hovered ? 1.8 : 1,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{
        width: 12,
        height: 12,
        backgroundColor: "#00FFAB",
        boxShadow: "0 0 10px #00FFAB, 0 0 20px #00FFAB",
        // Removed mixBlendMode to fix maroon effect
        // mixBlendMode: "normal",
      }}
    />
  );
};

export default CustomCursor;
