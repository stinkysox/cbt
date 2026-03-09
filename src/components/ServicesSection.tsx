import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Globe, Film, Layout, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting meaningful narratives that define your brand's position in the market.",
    points: ["Market Research", "Brand Positioning", "Competitive Analysis"],
    color: "var(--color-yellow)",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Creating distinctive visual systems that communicate your brand essence.",
    points: ["Logo Design", "Color Systems", "Typography"],
    color: "var(--color-red)",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Building performant digital products with cutting-edge technology.",
    points: ["Full-Stack Development", "API Integration", "Cloud Architecture"],
    color: "var(--color-blue)",
  },
  {
    icon: Layout,
    title: "Web & App Designing",
    description: "Designing intuitive interfaces that delight users at every touchpoint.",
    points: ["UI/UX Design", "Prototyping", "Design Systems"],
    color: "var(--color-purple)",
  },
  {
    icon: Film,
    title: "Video & Animation",
    description: "Producing cinematic content that captures attention and tells stories.",
    points: ["Motion Graphics", "Video Production", "3D Animation"],
    color: "var(--color-orange)",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            What We <span className="italic text-gradient">Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card-hover p-8 group"
              style={{ ["--glow-color" as string]: `hsl(${service.color})` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `hsl(${service.color} / 0.1)`,
                  color: `hsl(${service.color})`,
                }}
              >
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="text-xs text-muted-foreground font-body flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: `hsl(${service.color})` }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
