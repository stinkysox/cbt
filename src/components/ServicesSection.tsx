import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/content";

const services = siteData.services.items;

const ServiceCard = ({ service, index, isInView }: { service: any, index: number, isInView: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ["--glow-color" as string]: `hsl(${service.color})` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-8 group relative"
    >
      <div style={{ transform: "translateZ(30px)" }}>
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
          {service.points.map((point: string) => (
            <li key={point} className="text-xs text-muted-foreground font-body flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ background: `hsl(${service.color})` }} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto" style={{ perspective: 1000 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pointer-events-none"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            {siteData.services.heroSubtitle}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold overflow-visible">
            What We <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">Do</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
