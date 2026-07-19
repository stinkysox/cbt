import { motion } from "framer-motion";
import { siteData } from "@/data/content";
import LazyImage from "@/components/LazyImage";

const WeddingSection = () => {
  const { tag, title, highlight, description } = siteData.weddingSection;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center px-6 py-28 text-center">
      {/* Background Image & Stronger High-Contrast Overlays */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://i.postimg.cc/ydzhykyS/behance-img-48.jpg"
          alt="Wedding Cinematography"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark overall tint */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Heavy vignette/radial gradient to darken the middle text area */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div {...fadeInUp} className="mb-6 flex items-center gap-4">
          <div className="h-px w-8 bg-white/30" />
          <span className="text-[12px] tracking-[0.45em] uppercase text-red-500 font-semibold font-sans">
            {tag}
          </span>
          <div className="h-px w-8 bg-white/30" />
        </motion.div>

        {/* Title & Highlight */}
        <motion.h2 
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white leading-[0.95] tracking-tight font-serif font-bold text-[clamp(48px,8vw,100px)] mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        >
          {title} 
          {/* Increased visibility on the italic portion using text-white instead of white/70 */}
          <span className="block text-white italic font-normal mt-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            {highlight}
          </span>
        </motion.h2>

        {/* Description - Increased text opacity for legibility */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-white/80 leading-relaxed font-normal font-sans text-[clamp(15px,1.4vw,17px)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          {description}
        </motion.p>

        {/* CTA Button - Enhanced backdrop blur and subtle background fill for maximum visibility */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="https://www.cbtweddings.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-10 py-4 overflow-hidden shadow-lg transition-all duration-300 hover:border-transparent"
          >
            {/* Hover Background Transition */}
            <span className="absolute inset-0 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            
            {/* Button Text */}
            <span className="relative z-10 text-white text-xs tracking-[0.35em] uppercase font-bold font-sans">
              Explore
            </span>
            
            {/* Button Icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 13"
              fill="none"
              className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingSection;