import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const FloatingShape = ({
  color,
  size,
  initialX,
  initialY,
  delay,
}: {
  color: string;
  size: number;
  initialX: string;
  initialY: string;
  delay: number;
}) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-30"
    style={{
      width: size,
      height: size,
      background: color,
      left: initialX,
      top: initialY,
    }}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 15, -10, 20, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating shapes */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
        <FloatingShape color="hsl(0, 72%, 55%)" size={400} initialX="10%" initialY="20%" delay={0} />
        <FloatingShape color="hsl(220, 75%, 55%)" size={350} initialX="60%" initialY="10%" delay={2} />
        <FloatingShape color="hsl(45, 95%, 55%)" size={300} initialX="70%" initialY="60%" delay={4} />
        <FloatingShape color="hsl(270, 60%, 55%)" size={280} initialX="20%" initialY="70%" delay={1} />
        <FloatingShape color="hsl(25, 90%, 55%)" size={250} initialX="45%" initialY="40%" delay={3} />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-8 font-body"
        >
          {siteData.global.brandName.replace(".", "")}
        </motion.p>

        {/* CHANGES:
            1. Increased leading to 1.2 to ensure the browser allocates enough height for the font.
            2. Added overflow-visible to the h1.
        */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[1.2] tracking-tight mb-8 overflow-visible">
          {siteData.hero.words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              /* THE FIX: 
                 - pb-[0.15em]: Extends the bottom of the span's bounding box.
                 - -mb-[0.15em]: Pulls the following layout back up so the extra padding doesn't create a gap.
                 - overflow-visible: Forces the browser to render parts of the letter that fall outside the box.
              */
              className={`inline-block mr-[0.15em] pb-[0.15em] -mb-[0.15em] pr-[0.1em] overflow-visible ${
                i === 1 ? "italic text-gradient" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body font-light"
        >
          {siteData.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="pointer-events-auto"
        >
          <Link
            to={siteData.hero.ctaLink}
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            {siteData.hero.ctaText}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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