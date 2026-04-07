import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // useMotionValue avoids React re-renders on every mouse move
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Two separate springs — inner dot is snappy, outer ring lags behind
  const dotX = useSpring(rawX, { stiffness: 500, damping: 30, mass: 0.4 });
  const dotY = useSpring(rawY, { stiffness: 500, damping: 30, mass: 0.4 });
  const ringX = useSpring(rawX, { stiffness: 200, damping: 22, mass: 0.8 });
  const ringY = useSpring(rawY, { stiffness: 200, damping: 22, mass: 0.8 });

  const [isHovering, setIsHovering] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Don't render cursor on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], .magnetic-btn, .cursor-interactive"));
      setIsInteractive(!!target.closest(".group"));
    };

    // passive: true lets the browser skip calling preventDefault — improves scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [rawX, rawY]);

  if (isTouchDevice) return null;

  const scale = isHovering ? 2.5 : 1;
  const dotSize = isInteractive ? 60 : 16;

  return (
    <>
      {/* Inner dot — snappy, mix-blend-difference */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-foreground/80 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          translateX: isInteractive ? -30 : -8,
          translateY: isInteractive ? -30 : -8,
          scale,
        }}
      >
        {isInteractive && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[8px] font-display font-black tracking-widest text-primary-foreground uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Outer ring — laggy, fades when interactive */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-foreground/20 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: -20,
          translateY: -20,
          scale: isHovering ? 1.5 : 1,
          opacity: isInteractive ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
