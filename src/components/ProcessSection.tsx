import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { siteData } from "@/data/content";

const iconMap = {
  search: Search,
  "pen-tool": PenTool,
  code: Code,
  rocket: Rocket,
};

const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body"
          >
            {siteData.process.sectionTag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
          >
            {siteData.process.titleLine1}
            <span className="italic text-gradient">{siteData.process.titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-border/50 -translate-y-1/2 z-0" />

          {siteData.process.steps.map((step, i) => {
            const Icon = iconMap[step.iconType as keyof typeof iconMap] || Search;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 -mr-2 -mt-2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                  <Icon className="w-8 h-8 text-accent/80 group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
