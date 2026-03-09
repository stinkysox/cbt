import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-background/70 backdrop-blur-xl border-b border-border/20"
    >
      <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight">
        Creativity<span className="text-accent">.</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
        {["About", "Services", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="magnetic-btn px-5 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
};

export default Navbar;
