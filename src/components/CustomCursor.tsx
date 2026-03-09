import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("a, button, [role='button'], .magnetic-btn, .cursor-interactive");
      
      setIsHovering(!!closest);
      setIsInteractive(!!target.closest(".group")); // For project cards and menu items
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-foreground/80 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
        animate={{
          x: position.x - (isInteractive ? 30 : 8),
          y: position.y - (isInteractive ? 30 : 8),
          scale: isHovering ? 2.5 : 1,
          width: isInteractive ? 60 : 16,
          height: isInteractive ? 60 : 16,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
      >
        {isInteractive && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[8px] font-display font-black tracking-widest text-primary-foreground uppercase"
          >
            PULSE
          </motion.span>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-foreground/20 pointer-events-none z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isInteractive ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
