import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Search, Sparkles, Rocket, Puzzle, Target } from "lucide-react";

const offerings = [
  { icon: Zap, title: "Breakthrough", description: "Pushing boundaries to create innovative solutions that disrupt markets.", color: "var(--color-yellow)" },
  { icon: Search, title: "Discoveries", description: "Uncovering hidden insights through deep research and analysis.", color: "var(--color-blue)" },
  { icon: Sparkles, title: "Experiences", description: "Crafting memorable interactions that forge lasting emotional connections.", color: "var(--color-purple)" },
  { icon: Rocket, title: "Invention", description: "Building novel products and services that redefine possibilities.", color: "var(--color-orange)" },
  { icon: Puzzle, title: "Integration", description: "Seamlessly connecting strategies, platforms, and teams for maximum impact.", color: "var(--color-pink)" },
  { icon: Target, title: "Impact", description: "Delivering measurable results that drive real business growth.", color: "var(--color-red)" },
];

const WhatWeOfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Value Pillars
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            What We <span className="italic text-gradient">Offer</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 md:p-8 text-center group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: `hsl(${item.color} / 0.1)`,
                  color: `hsl(${item.color})`,
                }}
              >
                <item.icon size={26} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
