import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { siteData } from "@/data/content";

const DURATION = 5000;

const useSlideshow = (imageCount: number, active: boolean) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const tick = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= DURATION) {
        setCurrentIndex((prev) => (prev + 1) % imageCount);
        startTimeRef.current = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    },
    [imageCount]
  );

  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setProgress(0);
      return;
    }
    startTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, tick]);

  const goTo = (idx: number) => {
    startTimeRef.current = 0;
    setCurrentIndex(idx);
    setProgress(0);
  };

  return { currentIndex, progress, goTo };
};

/* ── Single featured slideshow panel (ALL internal text white) ── */
const FeaturedSlideshow = ({
  brand,
}: {
  brand: { name: string; images: string[] };
}) => {
  const { currentIndex, progress, goTo } = useSlideshow(brand.images.length, true);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#0e0e0e]">
      <AnimatePresence mode="wait">
        <motion.img
          key={`${brand.name}-${currentIndex}`}
          src={brand.images[currentIndex]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
        <span
          className="block mb-2 text-xs font-mono tracking-[0.3em] uppercase text-white/80"
          // Removed var(--accent) to force white
        >
          Digital Transformation & Strategy
        </span>

        <AnimatePresence mode="wait">
          <motion.h3
            key={brand.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-black leading-none mb-6 text-white" 
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(40px, 5vw, 72px)",
              letterSpacing: "-0.03em",
            }}
          >
            {brand.name}
          </motion.h3>
        </AnimatePresence>

        <div className="flex items-center gap-2">
          {brand.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="relative h-[2px] rounded-full overflow-hidden focus:outline-none transition-all duration-300"
              style={{
                width: idx === currentIndex ? 48 : 20,
                background: "rgba(255,255,255,0.25)",
              }}
            >
              {idx === currentIndex && (
                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Brand list item (Sidebar - Theme Responsive) ── */
const BrandListItem = ({
  brand,
  index,
  isActive,
  onClick,
}: {
  brand: { name: string; images: string[] };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group w-full text-left flex items-center gap-4 py-6 border-b transition-colors duration-200 focus:outline-none ${
      isActive ? "border-foreground/20" : "border-foreground/5 hover:border-foreground/10"
    }`}
  >
    <div className="relative w-[2px] h-8 rounded-full overflow-hidden shrink-0 bg-foreground/10">
      <motion.div
        className="absolute inset-0 bg-foreground"
        initial={false}
        animate={{ scaleY: isActive ? 1 : 0, originY: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>

    <span
      className={`font-mono text-xs tracking-widest tabular-nums transition-colors duration-200 ${
        isActive ? "text-foreground" : "text-foreground/30"
      }`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <span
      className={`font-black leading-none transition-colors duration-200 ${
        isActive ? "text-foreground" : "text-foreground/30"
      }`}
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(20px, 2.2vw, 30px)",
        letterSpacing: "-0.02em",
      }}
    >
      {brand.name}
    </span>

    <div className="ml-auto shrink-0 w-12 h-12 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
      <img src={brand.images[0]} alt="" className="w-full h-full object-cover" />
    </div>
  </button>
);

/* ── Mobile card ── */
const MobileCard = ({
  brand,
  index,
  isActive,
  onClick,
}: {
  brand: { name: string; images: string[] };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { currentIndex, progress, goTo } = useSlideshow(brand.images.length, isActive);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className={`relative overflow-hidden rounded-2xl border cursor-pointer transition-colors duration-300 ${
        isActive ? "border-transparent bg-[#0e0e0e]" : "border-foreground/10 bg-transparent"
      }`}
      style={{ height: isActive ? "clamp(300px, 65vw, 450px)" : 85 }}
      onClick={onClick}
    >
      {!isActive && (
        <div className="absolute inset-0 flex items-center px-6 gap-4 z-10">
          <span className="font-mono text-xs text-foreground/30 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-black text-foreground/60 leading-none"
            style={{ fontFamily: "Georgia, serif", fontSize: 22 }}
          >
            {brand.name}
          </span>
          <div className="ml-auto w-10 h-10 rounded-lg overflow-hidden opacity-40 grayscale transition-all">
            <img src={brand.images[0]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {isActive && (
        <>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={brand.images[currentIndex]}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase mb-2 text-white/70">
              Digital Transformation & Strategy
            </span>
            <h3
              className="font-black text-white leading-none mb-4"
              style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 8vw, 48px)", letterSpacing: "-0.03em" }}
            >
              {brand.name}
            </h3>
            <div className="flex items-center gap-2">
              {brand.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                  className="relative h-[2px] rounded-full overflow-hidden focus:outline-none"
                  style={{ width: idx === currentIndex ? 40 : 16, background: "rgba(255,255,255,0.3)" }}
                >
                  {idx === currentIndex && (
                    <div className="absolute inset-y-0 left-0 bg-white rounded-full" style={{ width: `${progress}%` }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

/* ── Main section ── */
const BrandSlideshow = () => {
  const { title, subtitle, brands } = siteData.brandShowcase;
  const [activeBrand, setActiveBrand] = useState(0);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span
              className="block mb-4 text-xs font-mono tracking-[0.45em] uppercase"
              style={{ color: "var(--accent, #e34a4a)" }}
            >
              Impact
            </span>
            <h2
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-foreground"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {title}
            </h2>
          </div>
          <p className="max-w-xs text-sm md:text-base leading-relaxed text-muted-foreground md:text-right">
            {subtitle}
          </p>
        </motion.div>

        <div className="hidden md:grid gap-12 items-start" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
          <nav className="flex flex-col">
            {brands.map((brand, index) => (
              <BrandListItem
                key={brand.name}
                brand={brand}
                index={index}
                isActive={activeBrand === index}
                onClick={() => setActiveBrand(index)}
              />
            ))}
          </nav>

          <motion.div
            key={activeBrand}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "clamp(450px, 50vw, 650px)" }}
          >
            <FeaturedSlideshow brand={brands[activeBrand]} />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {brands.map((brand, index) => (
            <MobileCard
              key={brand.name}
              brand={brand}
              index={index}
              isActive={activeBrand === index}
              onClick={() => setActiveBrand(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlideshow;