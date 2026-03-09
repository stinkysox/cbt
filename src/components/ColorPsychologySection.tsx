import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const colors = [
  { name: "Red", hue: "0, 72%, 55%", description: "Evokes passion, urgency, and power. Creates a sense of excitement and drives action.", angle: 0 },
  { name: "Blue", hue: "220, 75%, 55%", description: "Conveys trust, stability, and professionalism. The most universally preferred color.", angle: 60 },
  { name: "Yellow", hue: "45, 95%, 55%", description: "Represents optimism, warmth, and creativity. Captures attention and stimulates mental activity.", angle: 120 },
  { name: "Purple", hue: "270, 60%, 55%", description: "Symbolizes luxury, creativity, and wisdom. Associated with premium and imaginative brands.", angle: 180 },
  { name: "Orange", hue: "25, 90%, 55%", description: "Communicates enthusiasm, adventure, and confidence. Balances energy with approachability.", angle: 240 },
  { name: "Pink", hue: "330, 70%, 60%", description: "Expresses compassion, playfulness, and romance. Modern brands use it to convey boldness.", angle: 300 },
];

const ColorPsychologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Visual Strategy
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Impact of Color<br />
            <span className="text-gradient italic">Psychology</span> on Branding
          </h2>
        </motion.div>

        {/* Color network */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Center circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center z-10"
            style={{
              background: "linear-gradient(135deg, hsl(0,72%,55%), hsl(45,95%,55%), hsl(220,75%,55%), hsl(270,60%,55%))",
            }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
              <span className="font-display text-xs md:text-sm font-bold text-center leading-tight">Brand<br />Identity</span>
            </div>
          </motion.div>

          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
            {colors.map((color, i) => {
              const radius = 220;
              const cx = 400 + radius * Math.cos((color.angle * Math.PI) / 180);
              const cy = 300 + radius * Math.sin((color.angle * Math.PI) / 180);
              return (
                <motion.line
                  key={i}
                  x1="400" y1="300"
                  x2={cx} y2={cy}
                  stroke={`hsl(${color.hue})`}
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Color nodes */}
          {colors.map((color, i) => {
            const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 220;
            const x = radius * Math.cos((color.angle * Math.PI) / 180);
            const y = radius * Math.sin((color.angle * Math.PI) / 180);
            return (
              <motion.div
                key={color.name}
                className="absolute group"
                style={{
                  left: `calc(50% + ${x}px - 28px)`,
                  top: `calc(50% + ${y}px - 28px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.12, type: "spring" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125"
                    style={{
                      background: `hsl(${color.hue})`,
                      boxShadow: `0 0 30px -5px hsl(${color.hue} / 0.4)`,
                    }}
                  >
                    <span className="text-xs font-bold text-background font-body">{color.name}</span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 glass-card p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <p className="text-xs font-body text-muted-foreground leading-relaxed">
                      {color.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColorPsychologySection;
