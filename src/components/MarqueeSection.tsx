import { motion } from "framer-motion";
import { siteData } from "@/data/content";

const MarqueeSection = () => {
  const words = siteData.marqueeWords;
  
  // Duplicate words array to ensure smooth infinite scrolling
  const duplicatedWords = [...words, ...words];

  return (
    <div className="w-full bg-foreground py-10 overflow-hidden relative border-y border-white/10">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 sm:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
        >
          {duplicatedWords.map((word, i) => (
            <div key={`${word}-${i}`} className="flex items-center gap-12 sm:gap-24">
              <span className="text-3xl sm:text-5xl md:text-7xl font-display font-medium text-white/90">
                {word}
              </span>
              <span className="text-accent text-3xl sm:text-5xl md:text-7xl">*</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
