import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ColorPsychologySection from "@/components/ColorPsychologySection";
import BentoGallery from "@/components/BentoGallery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const Index = () => {
  return (
    <>
      <HeroSection />
      
      {/* Infinite Marquee section providing dynamic movement early on */}
      <MarqueeSection />
      
      <ColorPsychologySection />
      
      {/* Dynamic interactive bento grid gallery displaying work/highlights */}
      <BentoGallery />

      {/* CTA Section */}
      <section className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            {siteData.bottomCta.subtitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {siteData.bottomCta.titleLine1}<br />
            <span className="italic text-gradient">{siteData.bottomCta.titleHighlight}</span>{siteData.bottomCta.titlePunctuation}
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            {siteData.bottomCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={siteData.bottomCta.primaryBtn.to}
              className="magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
            >
              {siteData.bottomCta.primaryBtn.text}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to={siteData.bottomCta.secondaryBtn.to}
              className="magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground text-base font-medium hover:border-foreground/40 hover:scale-105 transition-all duration-300"
            >
              {siteData.bottomCta.secondaryBtn.text}
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
