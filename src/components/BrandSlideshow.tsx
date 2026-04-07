import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { siteData } from "@/data/content";

const DURATION = 5000;

// ── Shimmer skeleton ──
const ShimmerBox = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative overflow-hidden bg-foreground/5 ${className}`}
    aria-hidden="true"
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
  </div>
);

// Add to your global CSS (or a <style> tag in your layout):
// @keyframes shimmer { to { transform: translateX(100%) } }

// ── Lazy image with shimmer ──
const LazyImage = memo(({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If already cached, naturalWidth > 0 immediately
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <ShimmerBox className="absolute inset-0 rounded-inherit" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
});
LazyImage.displayName = "LazyImage";

// ── Slideshow image with shimmer (used inside dark overlay panels) ──
const SlideshowImage = memo(({
  src,
  motionKey,
}: {
  src: string;
  motionKey: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoaded(false);
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-foreground/10 animate-pulse z-0" />
      )}
      <AnimatePresence mode="wait">
        <motion.img
          ref={imgRef}
          key={motionKey}
          src={src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </AnimatePresence>
    </>
  );
});
SlideshowImage.displayName = "SlideshowImage";

// ── Preload next image ──
function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

// ── Slideshow hook ──
const useSlideshow = (images: string[], active: boolean) => {
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
        setCurrentIndex((prev) => {
          const next = (prev + 1) % images.length;
          // Preload the one after next
          const upcoming = images[(next + 1) % images.length];
          if (upcoming) preloadImage(upcoming);
          return next;
        });
        startTimeRef.current = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    },
    [images]
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

  const goTo = useCallback((idx: number) => {
    startTimeRef.current = 0;
    setCurrentIndex(idx);
    setProgress(0);
  }, []);

  return { currentIndex, progress, goTo };
};

// ── Featured slideshow panel ──
const FeaturedSlideshow = memo(({
  brand,
}: {
  brand: { name: string; images: string[] };
}) => {
  const { currentIndex, progress, goTo } = useSlideshow(brand.images, true);

  // Preload all images for the active brand on mount
  useEffect(() => {
    brand.images.forEach(preloadImage);
  }, [brand.images]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#0e0e0e]">
      <SlideshowImage
        src={brand.images[currentIndex]}
        motionKey={`${brand.name}-${currentIndex}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
        <span className="block mb-2 text-xs font-mono tracking-[0.3em] uppercase text-white/80">
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
});
FeaturedSlideshow.displayName = "FeaturedSlideshow";

// ── Brand list item ──
const BrandListItem = memo(({
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
      <LazyImage src={brand.images[0]} alt="" className="w-full h-full object-cover" />
    </div>
  </button>
));
BrandListItem.displayName = "BrandListItem";

// ── Mobile card ──
const MobileCard = memo(({
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
  const { currentIndex, progress, goTo } = useSlideshow(brand.images, isActive);

  useEffect(() => {
    if (isActive) brand.images.forEach(preloadImage);
  }, [isActive, brand.images]);

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
          <div className="ml-auto w-10 h-10 rounded-lg overflow-hidden opacity-40 grayscale">
            <LazyImage src={brand.images[0]} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {isActive && (
        <>
          <SlideshowImage
            src={brand.images[currentIndex]}
            motionKey={String(currentIndex)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase mb-2 text-white/70">
              Digital Transformation & Strategy
            </span>
            <h3
              className="font-black text-white leading-none mb-4"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 8vw, 48px)",
                letterSpacing: "-0.03em",
              }}
            >
              {brand.name}
            </h3>
            <div className="flex items-center gap-2">
              {brand.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                  className="relative h-[2px] rounded-full overflow-hidden focus:outline-none"
                  style={{
                    width: idx === currentIndex ? 40 : 16,
                    background: "rgba(255,255,255,0.3)",
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
        </>
      )}
    </motion.div>
  );
});
MobileCard.displayName = "MobileCard";

// ── Main section ──
const BrandSlideshow = () => {
  const { title, subtitle, brands } = siteData.brandShowcase;
  const [activeBrand, setActiveBrand] = useState(0);

  // Preload first brand's images immediately + next brand on hover
  useEffect(() => {
    brands[0]?.images.forEach(preloadImage);
  }, [brands]);

  const handleBrandChange = useCallback((index: number) => {
    setActiveBrand(index);
    // Preload the following brand speculatively
    brands[index + 1]?.images.forEach(preloadImage);
  }, [brands]);

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

        {/* Desktop */}
        <div className="hidden md:grid gap-12 items-start" style={{ gridTemplateColumns: "1fr 1.6fr" }}>
          <nav className="flex flex-col">
            {brands.map((brand, index) => (
              <BrandListItem
                key={brand.name}
                brand={brand}
                index={index}
                isActive={activeBrand === index}
                onClick={() => handleBrandChange(index)}
              />
            ))}
          </nav>

          {/* ✅ No key= here — FeaturedSlideshow stays mounted, only prop changes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "clamp(450px, 50vw, 650px)" }}
          >
            <FeaturedSlideshow brand={brands[activeBrand]} />
          </motion.div>
        </div>

        {/* Mobile */}
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