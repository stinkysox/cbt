import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import BrandSlideshow from "@/components/BrandSlideshow";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto overflow-visible pl-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-display font-medium tracking-[0.4em] uppercase text-accent mb-6 block"
            >
              {siteData.whoWeAre.heroTag}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[1.3] tracking-tighter mb-10 overflow-visible pt-6 pb-4"
            >
              {siteData.whoWeAre.heroTitle1} <br />
              <span className="italic text-gradient inline-block pl-[0.1em] pr-[0.15em] pb-[0.15em] overflow-visible">{siteData.whoWeAre.heroTitleHighlight}</span> <br />
              {siteData.whoWeAre.heroTitle2}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl leading-relaxed"
            >
              {siteData.whoWeAre.heroDescription}
            </motion.p>
          </div>
        </section>

        {/* Brand Slideshow Section */}
        <BrandSlideshow />

        {/* Phase 5 Project Spotlight (Horizontal Scroll) */}

        {/* CTA Section */}
        <section className="py-32 px-6 bg-foreground text-primary-foreground text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-10"
            >
              {siteData.whoWeAre.ctaTitle}<span className="italic opacity-50">{siteData.whoWeAre.ctaHighlight}</span>{siteData.whoWeAre.ctaPunctuation}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href={siteData.whoWeAre.ctaBtnLink}
                className="inline-block px-10 py-5 bg-background text-foreground rounded-full font-display font-bold text-lg hover:scale-105 transition-transform"
              >
                {siteData.whoWeAre.ctaBtnText}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;