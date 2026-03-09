import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/content";

const InteractiveJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our <span className="italic text-gradient">Journey</span></h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A decade of pushing boundaries and redefining digital excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {siteData.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className="relative flex flex-col md:flex-row items-center">
                  {/* Year Bubble */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-accent items-center justify-center z-10 font-display font-bold text-sm">
                    {item.year.slice(2)}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}
                  >
                    <span className="inline-block md:hidden text-accent font-display font-bold mb-2">{item.year}</span>
                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveJourney;
