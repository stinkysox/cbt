import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background overflow-hidden relative">
      {/* Background glitch elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-[10rem] md:text-[15rem] font-display font-black leading-none tracking-tighter text-foreground/5 relative">
            404
            <motion.span
              animate={{
                x: [-2, 2, -1, 1, 0],
                opacity: [0.5, 0.8, 0.4, 0.9, 0.8],
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute inset-0 text-accent/20 translate-x-1"
            >
              404
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Lost in <span className="italic text-gradient">Imagination?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-md mx-auto mb-10">
            The page you're looking for has drifted beyond our creative boundaries.
          </p>

          <Link
            to="/"
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-primary-foreground text-base font-medium hover:scale-105 transition-all duration-300 group"
          >
            Back to Reality
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1 rotate-180">→</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="mt-16 text-xs tracking-[0.3em] uppercase text-muted-foreground font-body"
        >
          {siteData.global.brandName}
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
