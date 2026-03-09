import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShape = ({
  color,
  size,
  mobileSize,
  initialX,
  initialY,
  delay,
}: {
  color: string;
  size: number;
  mobileSize: number;
  initialX: string;
  initialY: string;
  delay: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 md:opacity-30"
      style={{
        width: isMobile ? mobileSize : size,
        height: isMobile ? mobileSize : size,
        background: color,
        left: initialX,
        top: initialY,
      }}
      animate={{
        y: [0, -20, 10, -15, 0],
        x: [0, 10, -8, 12, 0],
        scale: [1, 1.08, 0.96, 1.04, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
};

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dims, setDims] = useState({ w: 1200, h: 800 });
  const bgX = useTransform(mouseX, [0, dims.w], [-15, 15]);
  const bgY = useTransform(mouseY, [0, dims.h], [-15, 15]);

  useEffect(() => {
    setDims({ w: window.innerWidth, h: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const words = ["Building", "Beyond", "the", "Ordinary"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
        <FloatingShape color="hsl(0, 72%, 55%)" size={400} mobileSize={200} initialX="10%" initialY="20%" delay={0} />
        <FloatingShape color="hsl(220, 75%, 55%)" size={350} mobileSize={180} initialX="60%" initialY="10%" delay={2} />
        <FloatingShape color="hsl(45, 95%, 55%)" size={300} mobileSize={160} initialX="70%" initialY="60%" delay={4} />
        <FloatingShape color="hsl(270, 60%, 55%)" size={280} mobileSize={140} initialX="20%" initialY="70%" delay={1} />
        <FloatingShape color="hsl(25, 90%, 55%)" size={250} mobileSize={130} initialX="45%" initialY="40%" delay={3} />
      </motion.div>

      <div className="relative z-10 text-center px-5 md:px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground mb-6 md:mb-8 font-body"
        >
          Creativity Beyond Thoughts
        </motion.p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.95] tracking-tight mb-6 md:mb-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`inline-block mr-[0.2em] ${i === 1 ? "italic text-gradient" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-base md:text-xl text-muted-foreground max-w-md md:max-w-xl mx-auto mb-10 md:mb-12 font-body font-light"
        >
          Your partner in design, video and digital excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-3 px-7 py-3.5 md:px-8 md:py-4 rounded-full bg-foreground text-primary-foreground text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            Let's Discuss
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
