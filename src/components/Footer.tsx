import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "@/data/content";

const Footer = () => (
  <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-border/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="font-display text-xl font-bold mb-4 inline-block">
            {siteData.global.brandName}
          </Link>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            {siteData.global.tagline}
          </p>
          <div className="space-y-1.5 text-xs font-body text-muted-foreground">
            <p>{siteData.contact.address}</p>
            <p>
              <a href={`mailto:${siteData.contact.email}`} className="hover:text-foreground transition-colors">
                {siteData.contact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-foreground transition-colors">
                {siteData.contact.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2.5">
            {/* Nav links skipping Home */}
            {siteData.navLinks.slice(1).map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Services</h4>
          <ul className="space-y-2.5">
            {siteData.services.items.map((service) => (
              <li key={service.title}>
                <Link
                  to="/services"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Follow Us</h4>
          <div className="flex flex-wrap gap-2">
            {siteData.socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-secondary/60 text-xs font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-body">
          {siteData.global.footerCopyright}
        </p>
        <div className="flex gap-4">
          <Link to="/terms" className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
