import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { siteData } from "@/data/content";

const BrandSlideshowCard = ({
  brand,
  index,
}: {
  brand: { name: string; images: string[] };
  index: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 4000;

  const startTimer = () => {
    setProgress(0);
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        setCurrentIndex((prev) => (prev + 1) % brand.images.length);
        clearInterval(intervalRef.current!);
        startTimer();
      }
    }, 30);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current!);
  }, [brand.images.length]);

  const goTo = (idx: number) => {
    clearInterval(intervalRef.current!);
    setCurrentIndex(idx);
    setTimeout(() => startTimer(), 0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e]"
      style={{ height: "clamp(300px, 38vw, 480px)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full-bleed image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={brand.images[currentIndex]}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: isHovered ? 1.04 : 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Gradient overlay — heavier on brand-name side */}
      <div
        className={`absolute inset-0 z-10 ${
          isEven
            ? "bg-gradient-to-r from-black/90 via-black/50 to-black/10"
            : "bg-gradient-to-l from-black/90 via-black/50 to-black/10"
        }`}
      />
      {/* Bottom vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Index number — watermark */}
      <div
        className={`absolute top-0 ${
          isEven ? "right-0" : "left-0"
        } z-20 p-7 select-none pointer-events-none`}
      >
        <span
          className="text-white/[0.06] font-black leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 160px)",
            fontFamily: "Georgia, serif",
            letterSpacing: "-0.04em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Brand content */}
      <div
        className={`absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12 ${
          isEven ? "" : "items-end text-right"
        }`}
      >
        {/* Top row */}
        <div className={`flex items-center justify-between w-full`}>
          {/* Counter */}
          <span className="text-white/40 text-xs font-mono tracking-widest tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(brand.images.length).padStart(2, "0")}
          </span>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {brand.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                style={{
                  width: idx === currentIndex ? 40 : 16,
                  background: "rgba(255,255,255,0.2)",
                }}
              >
                {idx === currentIndex && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom: brand name + subtitle (CTA row removed) */}
        <div className={`${isEven ? "" : "flex flex-col items-end"}`}>
          {/* Tag */}
          <motion.span
            className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent, #e34a4a)" }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            Digital Transformation & Strategy
          </motion.span>

          {/* Brand name */}
          <motion.h3
            className="font-black text-white leading-none"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(48px, 8vw, 100px)",
              letterSpacing: "-0.03em",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
            }}
            animate={{ y: isHovered ? -6 : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {brand.name}
          </motion.h3>
        </div>
      </div>

      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 z-30 rounded-2xl pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const BrandSlideshow = () => {
  const { title, subtitle, brands } = siteData.brandShowcase;

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span
              className="block mb-4 text-xs font-mono tracking-[0.45em] uppercase"
              style={{ color: "var(--accent, #e34a4a)" }}
            >
              Impact
            </span>
            <h2
              className="text-5xl md:text-7xl font-black leading-none tracking-tight text-foreground"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {title}
            </h2>
          </div>
          <p className="max-w-xs text-sm md:text-base leading-relaxed text-muted-foreground md:text-right">
            {subtitle}
          </p>
        </motion.div>

        {/* Vertical stack */}
        <div className="flex flex-col gap-4 md:gap-5">
          {brands.map((brand, index) => (
            <BrandSlideshowCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlideshow;