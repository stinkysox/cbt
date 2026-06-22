import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ColorPsychologySection from "@/components/ColorPsychologySection";
import BentoGallery from "@/components/BentoGallery";
import WeddingSection from "@/components/WeddingSection";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";
import {
  seoConfig,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/config/seo.config";

const Index = () => {
  const metadata = seoConfig.home;
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content="Creativity Beyond Thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL - CRITICAL FOR FIXING BREADCRUMB BUG */}
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Creativity Beyond Thoughts" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:title" content={metadata.ogTitle} />
        <meta name="twitter:description" content={metadata.ogDescription} />
        <meta name="twitter:image" content={metadata.ogImage} />
        <meta name="twitter:image:alt" content={metadata.ogTitle} />
        <meta name="twitter:site" content="@CBTcreatives" />
        <meta name="twitter:creator" content="@CBTcreatives" />

        {/* Geo-targeting Meta Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi, India" />
        <meta name="geo.position" content="28.6381;77.1769" />
        <meta name="ICBM" content="28.6381, 77.1769" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="format-detection" content="telephone=no,email=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* JSON-LD Structured Data Scripts */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <HeroSection />

      {/* Infinite Marquee section providing dynamic movement early on */}
      <MarqueeSection />

      <ColorPsychologySection />

      {/* Dynamic interactive bento grid gallery displaying work/highlights */}
      <BentoGallery />

      {/* Wedding Artistry Section */}
      <WeddingSection />

      {/* CTA Section */}
      <section
        className="section-padding text-center"
        aria-labelledby="cta-heading"
      >
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
          <h2
            id="cta-heading"
            className="text-4xl md:text-6xl font-display font-bold mb-6 overflow-visible"
          >
            {siteData.bottomCta.titleLine1}
            <br />
            <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">
              {siteData.bottomCta.titleHighlight}
            </span>
            {siteData.bottomCta.titlePunctuation}
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
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
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
