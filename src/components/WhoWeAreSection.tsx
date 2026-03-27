import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/content";

const WhoWeAreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blocks = siteData.aboutPage.blocks;

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-display font-medium"
            >
              {siteData.aboutPage.heroTag}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 overflow-visible"
            >
              {siteData.aboutPage.heroTitleLine1} <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">{siteData.aboutPage.heroHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground font-body text-lg leading-relaxed mb-12"
            >
              {siteData.aboutPage.heroDescription}
            </motion.p>

            <div className="space-y-8">
              {blocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="pl-6 border-l-2 border-border/50 hover:border-accent transition-colors duration-500"
                >
                  <h3 className="font-display text-xl font-bold mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{block.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {[
                { size: "100%", color: "hsl(var(--color-blue) / 0.1)", delay: 0 },
                { size: "75%", color: "hsl(var(--color-purple) / 0.15)", delay: 1 },
                { size: "50%", color: "hsl(var(--color-red) / 0.2)", delay: 2 },
              ].map((ring, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    background: ring.color,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: ring.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-4xl font-black text-gradient opacity-40">{siteData.aboutPage.brandInitials}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
