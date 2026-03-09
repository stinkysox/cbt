import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  circles: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M8 24C8 24 14 12 24 12C34 12 40 24 40 24C40 24 34 36 24 36C14 36 8 24 8 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M24 6V42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 6C24 6 18 14 18 20C18 26 24 28 24 28C24 28 30 26 30 20C30 14 24 6 24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 34L24 42L34 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const blocks = siteData.whoWeAre.pillars;

const Work = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const pillarsRef = useRef(null);
  const { scrollYProgress: pillarsScroll } = useScroll({
    target: pillarsRef,
    offset: ["start end", "center center"],
  });

  const pillarOpacities = [
    useTransform(pillarsScroll, [0, 0.4], [0, 1]),
    useTransform(pillarsScroll, [0.2, 0.6], [0, 1]),
    useTransform(pillarsScroll, [0.4, 0.8], [0, 1])
  ];

  const pillarYs = [
    useTransform(pillarsScroll, [0, 0.4], [100, 0]),
    useTransform(pillarsScroll, [0.2, 0.6], [100, 0]),
    useTransform(pillarsScroll, [0.4, 0.8], [100, 0])
  ];

  return (
    <>
      {/* Hero Banner */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/20 via-agency-blue/10 to-agency-red/20" />
        </motion.div>

        {/* Decorative wave line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.svg
            viewBox="0 0 1440 400"
            className="absolute bottom-0 left-0 w-full opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <motion.path
              d="M0,200 C180,100 360,300 540,200 C720,100 900,300 1080,200 C1260,100 1440,300 1440,200 L1440,400 L0,400 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
          </motion.svg>
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
          >
            {siteData.whoWeAre.heroTag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6"
          >
            {siteData.whoWeAre.heroTitle1}<span className="italic text-gradient">{siteData.whoWeAre.heroTitleHighlight}</span>{siteData.whoWeAre.heroTitle2}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto"
          >
            {siteData.whoWeAre.heroDescription}
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight"
          >
            {siteData.whoWeAre.missionText1}
            <span className="italic text-gradient">{siteData.whoWeAre.missionHighlight1}</span>
            {siteData.whoWeAre.missionHighlightOrWord1}
            <span className="italic text-gradient">{siteData.whoWeAre.missionHighlight2}</span>
            {siteData.whoWeAre.missionHighlightOrWord2}
            <span className="italic text-gradient">{siteData.whoWeAre.missionHighlight3}</span>
            {siteData.whoWeAre.missionPunctuation}
          </motion.h2>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding relative pt-0">
        <div ref={pillarsRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blocks.map((block, i) => (
              <motion.div
                key={block.title}
                style={{ opacity: pillarOpacities[i], y: pillarYs[i] }}
                className="glass-card-hover p-8 md:p-10 group relative overflow-hidden"
              >
                {/* Decorative icon */}
                <div className="w-14 h-14 mb-6 text-muted-foreground/40 group-hover:text-accent transition-colors duration-500">
                  {iconMap[block.iconType] || iconMap.target}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {block.text}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {siteData.whoWeAre.ctaTitle}<span className="italic text-gradient">{siteData.whoWeAre.ctaHighlight}</span>{siteData.whoWeAre.ctaPunctuation}
          </h2>
          <Link
            to={siteData.whoWeAre.ctaBtnLink}
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            {siteData.whoWeAre.ctaBtnText}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Work;
