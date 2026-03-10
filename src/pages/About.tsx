import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import InteractiveJourney from "@/components/InteractiveJourney";
import TeamGrid from "@/components/TeamGrid";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-display font-medium tracking-[0.4em] uppercase text-accent mb-6 block"
            >
              {siteData.aboutPage.heroTag}
            </motion.span>
        <motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.9] tracking-tighter mb-10"
>
  {siteData.aboutPage.heroTitleLine1}<br />
  {/* Added inline-block and horizontal padding */}
  <span className="italic text-gradient inline-block px-4">
    {siteData.aboutPage.heroHighlight}
  </span>
</motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl leading-relaxed"
            >
              {siteData.aboutPage.heroDescription}
            </motion.p>
          </div>
          
          {/* Background Initials Decoration */}
          <div className="absolute top-[20%] right-[-5%] select-none pointer-events-none opacity-[0.03]">
            <span className="text-[30rem] font-display font-black leading-none">{siteData.aboutPage.brandInitials}</span>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-6 bg-foreground/[0.02] relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold leading-tight mb-16 text-center"
            >
              {siteData.aboutPage.missionBody}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12 mt-24">
              {siteData.aboutPage.blocks.map((block, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-background border border-border/50 hover:border-accent/40 transition-colors group"
                >
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{block.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{block.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Journey Component */}
        <InteractiveJourney />

        {/* Values Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="text-sm font-display font-medium tracking-[0.4em] uppercase text-muted-foreground mb-4 block">
                {siteData.aboutPage.valuesTag}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                {siteData.aboutPage.valuesTitleLine1}<span className="italic text-gradient">{siteData.aboutPage.valuesHighlight}</span>{siteData.aboutPage.valuesTitleLine2}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteData.aboutPage.valuesList.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-foreground/[0.03] border border-border/50 hover:border-accent/50 transition-colors group"
                >
                  <span className="text-4xl font-display font-black text-accent/20 mb-6 block group-hover:text-accent transition-colors">{value.number}</span>
                  <h3 className="text-xl font-display font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid Component */}
        <TeamGrid />

        {/* CTA Section */}
        <section className="py-32 px-6 bg-foreground text-primary-foreground text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-10"
            >
              {siteData.aboutPage.ctaTitle}<span className="italic opacity-50">{siteData.aboutPage.ctaHighlight}</span>{siteData.aboutPage.ctaPunctuation}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href={siteData.aboutPage.ctaBtnLink}
                className="inline-block px-10 py-5 bg-background text-foreground rounded-full font-display font-bold text-lg hover:scale-105 transition-transform"
              >
                {siteData.aboutPage.ctaBtnText}
              </a>
            </motion.div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-30 blur-3xl pointer-events-none" />
        </section>
      </main>
    </div>
  );
};

export default About;
