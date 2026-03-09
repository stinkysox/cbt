import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteData } from "@/data/content";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteData.testimonials.items;

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding overflow-hidden relative">
      {/* Decorative quotes in background */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-foreground/[0.03] -rotate-12 pointer-events-none" />
      <Quote className="absolute bottom-10 right-10 w-64 h-64 text-foreground/[0.03] rotate-12 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body"
          >
            {siteData.testimonials.sectionTag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
          >
            {siteData.testimonials.titleLine1}
            <span className="italic text-gradient">{siteData.testimonials.titleHighlight}</span>
            {siteData.testimonials.titleLine2}
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20 p-1">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-display italic leading-relaxed text-foreground mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div>
                <cite className="not-italic font-body font-bold text-lg block">
                  {testimonials[currentIndex].name}
                </cite>
                <span className="text-sm text-muted-foreground uppercase tracking-widest font-body">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
