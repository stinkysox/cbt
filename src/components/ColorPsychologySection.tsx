import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const colors = [
  { name: "Red", hue: "0, 72%, 55%", description: "Evokes passion, urgency, and power. Creates a sense of excitement and drives action.", emoji: "🔴" },
  { name: "Blue", hue: "220, 75%, 55%", description: "Conveys trust, stability, and professionalism. The most universally preferred color.", emoji: "🔵" },
  { name: "Yellow", hue: "45, 95%, 55%", description: "Represents optimism, warmth, and creativity. Captures attention and stimulates mental activity.", emoji: "🟡" },
  { name: "Purple", hue: "270, 60%, 55%", description: "Symbolizes luxury, creativity, and wisdom. Associated with premium and imaginative brands.", emoji: "🟣" },
  { name: "Orange", hue: "25, 90%, 55%", description: "Communicates enthusiasm, adventure, and confidence. Balances energy with approachability.", emoji: "🟠" },
  { name: "Pink", hue: "330, 70%, 60%", description: "Expresses compassion, playfulness, and romance. Modern brands use it to convey boldness.", emoji: "🩷" },
];

const ColorPsychologySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="work" className="relative">
      <div ref={containerRef} className="py-16 md:py-24 px-5 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
              Visual Strategy
            </p>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Impact of Color<br />
              <span className="text-gradient italic">Psychology</span> on Branding
            </h2>
          </motion.div>

          {/* Network visualization - desktop */}
          <div className="hidden md:block">
            <NetworkVisualization scrollYProgress={scrollYProgress} />
          </div>

          {/* Scroll cards - mobile & desktop */}
          <div className="space-y-6 md:space-y-8 mt-8 md:mt-16">
            {colors.map((color, i) => (
              <ColorCard key={color.name} color={color} index={i} />
            ))}
          </div>

          {/* Final merge message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-20 text-center"
          >
            <div
              className="inline-flex w-20 h-20 md:w-28 md:h-28 rounded-full items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, hsl(0,72%,55%), hsl(45,95%,55%), hsl(220,75%,55%), hsl(270,60%,55%))",
              }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
                <span className="font-display text-xs md:text-sm font-bold text-center leading-tight">Brand<br />Identity</span>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm md:text-base max-w-md mx-auto">
              Together, these colors form a powerful brand identity — each evoking unique emotions that connect with your audience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const NetworkVisualization = ({ scrollYProgress }: { scrollYProgress: ReturnType<typeof useTransform> }) => {
  const opacity = useTransform(scrollYProgress as any, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress as any, [0, 0.3], [0.8, 1]);

  const positions = [
    { x: 0, y: -130 },
    { x: 120, y: -65 },
    { x: 120, y: 65 },
    { x: 0, y: 130 },
    { x: -120, y: 65 },
    { x: -120, y: -65 },
  ];

  return (
    <motion.div style={{ opacity, scale }} className="relative flex items-center justify-center h-[380px]">
      {/* Center */}
      <div
        className="absolute w-24 h-24 rounded-full flex items-center justify-center z-10"
        style={{
          background: "linear-gradient(135deg, hsl(0,72%,55%), hsl(45,95%,55%), hsl(220,75%,55%), hsl(270,60%,55%))",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
          <span className="font-display text-[10px] font-bold text-center leading-tight">Brand<br />Identity</span>
        </div>
      </div>

      {/* SVG lines */}
      <svg className="absolute w-full h-full pointer-events-none" viewBox="-200 -200 400 400">
        {positions.map((pos, i) => (
          <line
            key={i}
            x1="0" y1="0" x2={pos.x} y2={pos.y}
            stroke={`hsl(${colors[i].hue})`}
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.35"
          />
        ))}
      </svg>

      {/* Nodes */}
      {colors.map((color, i) => (
        <motion.div
          key={color.name}
          className="absolute"
          style={{
            left: `calc(50% + ${positions[i].x}px - 24px)`,
            top: `calc(50% + ${positions[i].y}px - 24px)`,
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: `hsl(${color.hue})`,
              boxShadow: `0 0 25px -5px hsl(${color.hue} / 0.4)`,
            }}
          >
            <span className="text-[10px] font-bold text-background font-body">{color.name}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ColorCard = ({ color, index }: { color: typeof colors[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="glass-card p-5 md:p-8 flex items-start gap-4 md:gap-6 group hover:border-border/50 transition-all duration-500"
    style={{
      borderLeft: `3px solid hsl(${color.hue})`,
    }}
  >
    <div
      className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
      style={{
        background: `hsl(${color.hue})`,
        boxShadow: `0 0 30px -8px hsl(${color.hue} / 0.4)`,
      }}
    >
      <span className="text-sm md:text-base font-bold text-background font-body">{color.name}</span>
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-display text-lg md:text-xl font-bold mb-1" style={{ color: `hsl(${color.hue})` }}>
        {color.name}
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed">
        {color.description}
      </p>
    </div>
  </motion.div>
);

export default ColorPsychologySection;
