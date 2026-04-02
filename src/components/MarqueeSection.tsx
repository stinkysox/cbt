import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { siteData } from "@/data/content";

const MarqueeSection = () => {
  const words = siteData.marqueeWords;
  const duplicatedWords = [...words, ...words, ...words];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-neutral-950 py-6 overflow-hidden relative border-y border-white/5 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setHoveredIndex(null); }}
      >
        <motion.div
          className="flex items-center gap-0"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {duplicatedWords.map((word, i) => {
            const isHovered = hoveredIndex === i;
            const isAdjacent = hoveredIndex !== null && Math.abs(hoveredIndex - i) === 1;
            const isFar = hoveredIndex !== null && !isHovered && !isAdjacent;

            return (
              <div
                key={`${word}-${i}`}
                className="flex items-center cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
              >
                <motion.span
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold px-5 py-1 select-none inline-block"
                  animate={{
                    color: isHovered
                      ? "#ffffff"
                      : isAdjacent
                      ? "rgba(255,255,255,0.5)"
                      : isFar
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.7)",
                    scale: isHovered ? 1.08 : isAdjacent ? 1.02 : 1,
                    letterSpacing: isHovered ? "0.04em" : "0em",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {word}
                </motion.span>

                {/* Separator */}
                <motion.span
                  className="select-none text-xs"
                  animate={{
                    color: isFar
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.2)",
                    scale: isHovered || isAdjacent ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  ✦
                </motion.span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;