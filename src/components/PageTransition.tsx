import { motion } from "framer-motion";
import { useRef } from "react";

const colors = [
  "hsl(330 70% 60%)",
  "hsl(270 60% 55%)",
  "hsl(220 75% 55%)",
  "hsl(0 72% 55%)",
  "hsl(25 90% 55%)",
  "hsl(45 95% 55%)",
];

let activeColor = colors[Math.floor(Math.random() * colors.length)];

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const color = useRef<string>(null!);

  // Grab current color and immediately rotate for the next mount
  if (color.current === null) {
    color.current = activeColor;
    const next = colors.filter(c => c !== activeColor);
    activeColor = next[Math.floor(Math.random() * next.length)];
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          key={color.current}
          className="rounded-full w-[100vw] h-[100vw] origin-center"
          style={{ backgroundColor: color.current }}
          initial={{ scale: 40 }}
          animate={{ scale: 0 }}
          // No exit — prevents two balls colliding and page getting stuck
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </div>
    </>
  );
};

export default PageTransition;