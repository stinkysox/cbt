import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/data/content";

const WeddingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const { tag, title, highlight, description, link } = siteData.weddingSection;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-black"
      style={{ minHeight: "100vh" }}
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Cinematography"
          className="w-full h-full object-cover"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>



      {/* Main content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center">
        <motion.div
          style={{ y: textY }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-white/25" />
            <span
              className="text-[11px] tracking-[0.45em] uppercase"
              style={{ color: "var(--accent, #e34a4a)", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              {tag}
            </span>
            <div className="h-px w-10 bg-white/25" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white leading-[0.95] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 700,
            }}
          >
            {title}
          </motion.h2>

          {/* Italic highlight on its own line */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="relative"
          >
            <span
              className="block text-white/70 italic leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(52px, 9vw, 120px)",
                fontWeight: 400,
              }}
            >
              {highlight}
            </span>
            {/* Underline flourish */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-2 h-px origin-left bg-white/20"
              style={{ width: "60%" }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-10 max-w-xl text-white/50 leading-relaxed font-light"
            style={{ fontSize: "clamp(14px, 1.4vw, 17px)", fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-14"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full px-10 py-4"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}
            >
              {/* Hover fill */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--accent, #e34a4a)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              <span
                className="relative z-10 text-white text-xs tracking-[0.35em] uppercase transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Explore
              </span>

              {/* Arrow */}
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M2 11L11 2M11 2H5M11 2V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner text — bottom left */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block select-none pointer-events-none">
        <span
          className="text-white/[0.06] font-black leading-none"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(60px, 9vw, 110px)",
            letterSpacing: "-0.04em",
          }}
        >
          Wedding
        </span>
      </div>

      {/* Decorative scroll cue */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <div
          className="h-10 w-px"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))",
          }}
        />
        <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mt-1"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default WeddingSection;