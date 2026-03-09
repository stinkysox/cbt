import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-8 group relative"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
          style={{
            background: `hsl(${service.color} / 0.1)`,
            color: `hsl(${service.color})`,
          }}
        >
          <service.icon size={28} />
        </div>
        <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-5 font-body leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.points.map((point: string) => (
            <li key={point} className="text-xs text-muted-foreground font-body flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: `hsl(${service.color})` }} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-agency-yellow/20 via-agency-orange/10 to-agency-red/20" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
          >
            {siteData.services.heroSubtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6"
          >
            {siteData.services.heroTitle}<span className="italic text-gradient">{siteData.services.heroTitleHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto"
          >
            {siteData.services.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding relative">
        <div ref={ref} className="max-w-6xl mx-auto" style={{ perspective: 1000 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {siteData.services.ctaTitle}<span className="italic text-gradient">{siteData.services.ctaHighlight}</span>
          </h2>
          <Link
            to={siteData.services.ctaBtnLink}
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            {siteData.services.ctaBtnText}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
