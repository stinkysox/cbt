import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const Privacy = () => {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/10 via-transparent to-agency-pink/10" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-4 overflow-visible"
          >
            {siteData.privacyPage.heroTitleLine1}<span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">{siteData.privacyPage.heroHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground font-body"
          >
            {siteData.privacyPage.lastUpdated}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {siteData.privacyPage.sections.map((section, i) => (
            <div key={i} className="glass-card p-6 md:p-8">
              <h2 className="font-display text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="text-center pt-8">
            <Link
              to="/"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Privacy;
