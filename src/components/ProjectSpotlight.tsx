import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/content";
import LazyImage from "@/components/LazyImage";

const ProjectSpotlight = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-foreground/[0.02]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 md:left-24 z-10">
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter opacity-10 uppercase select-none">Project Spotlight</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
          {siteData.projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[60vw] flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-900 border border-white/5"
            >
              <LazyImage 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <motion.span 
                  className="text-accent font-display font-medium text-sm md:text-base mb-2 tracking-[0.2em] uppercase"
                >
                  {project.category}
                </motion.span>
                <h3 className="text-white text-4xl md:text-6xl font-display font-bold max-w-2xl leading-tight">
                  {project.title}
                </h3>
                
                <div className="mt-8 overflow-hidden">
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-4 text-white/60 font-body text-sm uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer"
                    >
                        View Project 
                        <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
                    </motion.div>
                </div>
              </div>
            </div>
          ))}

          {/* End card with a creative CTA */}
          <div className="h-[60vh] md:h-[70vh] w-[80vw] md:w-[40vw] flex-shrink-0 flex items-center justify-center border-2 border-dashed border-border/20 rounded-3xl">
             <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Your Project <span className="italic text-gradient">Next?</span></h3>
                <button className="px-8 py-3 rounded-full bg-foreground text-primary-foreground font-medium hover:scale-105 transition-transform">
                   Start a Journey
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
