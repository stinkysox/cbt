import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const blocks = siteData.aboutPage.blocks;
const values = siteData.aboutPage.valuesList;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
          <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/20 via-agency-blue/10 to-agency-red/20" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
          >
            {siteData.aboutPage.heroTag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6"
          >
            {siteData.aboutPage.heroTitleLine1}<span className="italic text-gradient">{siteData.aboutPage.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto"
          >
            {siteData.aboutPage.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Who We Are Content */}
      <section className="section-padding relative overflow-hidden">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-muted-foreground font-body text-lg leading-relaxed mb-12"
              >
                {siteData.aboutPage.missionBody}
              </motion.p>

              <div className="space-y-8">
                {blocks.map((block, i) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                    className="pl-6 border-l-2 border-border hover:border-accent transition-colors duration-500"
                  >
                    <h3 className="font-display text-lg font-bold mb-1">{block.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{block.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {[
                  { size: "100%", color: "hsl(var(--color-blue) / 0.15)", delay: 0 },
                  { size: "75%", color: "hsl(var(--color-purple) / 0.2)", delay: 1 },
                  { size: "50%", color: "hsl(var(--color-red) / 0.25)", delay: 2 },
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
                  <span className="font-display text-2xl font-bold text-gradient">{siteData.aboutPage.brandInitials}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative">
        <div ref={valuesRef} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
              {siteData.aboutPage.valuesTag}
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              {siteData.aboutPage.valuesTitleLine1}<span className="italic text-gradient">{siteData.aboutPage.valuesHighlight}</span>{siteData.aboutPage.valuesTitleLine2}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card-hover p-8 group"
              >
                <span className="text-5xl font-display font-bold text-gradient opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                  {value.number}
                </span>
                <h3 className="font-display text-xl font-bold mt-3 mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{value.text}</p>
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {siteData.aboutPage.ctaTitle}<span className="italic text-gradient">{siteData.aboutPage.ctaHighlight}</span>{siteData.aboutPage.ctaPunctuation}
          </h2>
          <Link
            to={siteData.aboutPage.ctaBtnLink}
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            {siteData.aboutPage.ctaBtnText}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default About;
