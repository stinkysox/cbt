import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight z-50">
          {siteData.global.shortForm}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-body text-sm tracking-wide">
          {siteData.navLinks.map((link) => (
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="magnetic-btn px-5 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Header Icons */}
        <div className="flex items-center gap-3 lg:hidden z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="min-h-full flex flex-col px-6 pt-24 pb-10">
              {/* Main Nav Links */}
              <div className="flex-1">
                <nav className="space-y-1 mb-10">
                  {siteData.navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    >
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-3xl sm:text-4xl font-display font-bold py-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className={`block text-3xl sm:text-4xl font-display font-bold py-2 transition-colors duration-300 ${
                            location.pathname === link.to
                              ? "text-gradient"
                              : "text-foreground/70 hover:text-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="h-px bg-border/40 mb-8 origin-left"
                />

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
                    Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {siteData.services.items.map((service) => (
                      <Link
                        key={service.title}
                        to="/services"
                        className="px-3 py-1.5 rounded-full bg-secondary/60 text-xs font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Legal Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mb-8"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
                    Legal
                  </p>
                  <div className="flex gap-4">
                    {siteData.legalLinks.map((link) => (
                      <Link key={link.label} to={link.to} onClick={() => setIsOpen(false)} className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
                    Follow Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {siteData.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-secondary/60 text-xs font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3 pt-6 border-t border-border/30"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-xs font-body text-muted-foreground">
                    B-66, First Floor, New Rajinder Nagar, New Delhi 110060
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-muted-foreground shrink-0" />
                  <a href={`mailto:${siteData.contact.email}`} className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors">
                    {siteData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-muted-foreground shrink-0" />
                  <a href="tel:+918800180670" className="text-xs font-body text-muted-foreground hover:text-foreground transition-colors">
                    +91 8800180670
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
