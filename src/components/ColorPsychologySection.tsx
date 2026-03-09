import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { siteData } from "@/data/content";

const colors = siteData.colorPsychology.colors;

const ColorPsychologySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalColors = colors.length;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to color index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * totalColors),
      totalColors - 1
    );
    if (index !== activeIndex && index >= 0) {
      setActiveIndex(index);
    }
  });

  return (
    <section id="work" className="relative">
      {/* Tall scroll container */}
      <div
        ref={containerRef}
        style={{ height: `${(totalColors + 1) * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 transition-colors duration-700 ease-out"
            style={{ 
              backgroundColor: isDark 
                ? `hsl(${colors[activeIndex].hue.split(",")[0]} 30% 10%)` 
                : colors[activeIndex].bgLight 
            }}
          />

          {/* Floating orbs in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: 400,
                height: 400,
                background: colors[activeIndex].bg,
                left: "10%",
                top: "20%",
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full blur-3xl opacity-15"
              style={{
                width: 300,
                height: 300,
                background: colors[activeIndex].bg,
                right: "15%",
                bottom: "20%",
              }}
              animate={{
                x: [0, -20, 30, 0],
                y: [0, 30, -20, 0],
                scale: [1, 0.9, 1.15, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col h-full justify-center">
            {/* Section heading */}
            <motion.div
              className="mb-8 md:mb-12 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
                y: useTransform(scrollYProgress, [0, 0.08], [0, -40]),
              }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
                {siteData.colorPsychology.sectionTag}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                {siteData.colorPsychology.titleLine1}
                <span className="italic" style={{ color: colors[activeIndex].bg, transition: "color 0.6s ease" }}>
                  {siteData.colorPsychology.titleHighlight}
                </span>{" "}
                {siteData.colorPsychology.titleLine2}
              </h2>
            </motion.div>

            {/* Color cards */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left: big color orb */}
              <div className="flex-shrink-0 relative">
                <motion.div
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full relative"
                  animate={{
                    backgroundColor: colors[activeIndex].bg,
                    boxShadow: `0 0 80px -10px ${colors[activeIndex].bg}`,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Inner ring */}
                  <div className="absolute inset-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <motion.span
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white/90"
                    >
                      {colors[activeIndex].name[0]}
                    </motion.span>
                  </div>

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute -inset-3 rounded-full border-2"
                    style={{ borderColor: colors[activeIndex].bg }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Right: color info */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p
                    className="text-sm tracking-[0.3em] uppercase font-body mb-3 font-medium"
                    style={{ color: colors[activeIndex].bg }}
                  >
                    {colors[activeIndex].keyword}
                  </p>
                  <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-foreground/90">
                    {colors[activeIndex].name}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
                    {colors[activeIndex].description}
                  </p>
                </motion.div>

                {/* Progress dots */}
                <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                  {colors.map((color, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full cursor-pointer"
                      style={{ backgroundColor: color.bg }}
                      animate={{
                        scale: i === activeIndex ? 1.4 : 1,
                        opacity: i === activeIndex ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 scale-75 xs:scale-100"
            style={{
              opacity: useTransform(scrollYProgress, [0.85, 0.95], [1, 0]),
            }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] xs:text-xs font-body text-muted-foreground tracking-widest uppercase text-center whitespace-nowrap">
                Scroll to explore
              </span>
              <div className="w-4 h-7 xs:w-5 xs:h-8 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1">
                <motion.div className="w-1 h-1.5 xs:h-2 rounded-full bg-foreground/40" />
              </div>
            </motion.div>
          </motion.div>

          {/* Color index counter */}
          <div className="absolute bottom-8 right-6 md:right-12">
            <span className="font-display text-sm text-muted-foreground">
              <span className="text-foreground font-bold text-lg">{String(activeIndex + 1).padStart(2, "0")}</span>
              {" / "}
              {String(totalColors).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPsychologySection;
