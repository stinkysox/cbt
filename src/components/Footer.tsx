import { motion } from "framer-motion";

const socials = [
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Behance", url: "#" },
  { name: "Dribbble", url: "#" },
];

const Footer = () => (
  <footer className="px-5 md:px-12 lg:px-24 py-12 md:py-16 border-t border-border/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">
            Creativity<span className="text-accent">.</span>
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Building beyond the ordinary.<br />
            Your partner in design, video and digital excellence.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm font-body text-muted-foreground">
            <p>123 Creative Blvd, New York, NY</p>
            <p>hello@creativitybeyond.com</p>
            <p>+1 (555) 000-0000</p>
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Follow Us</h4>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.url}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-secondary/60 text-xs font-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                {s.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Creativity Beyond Thoughts. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
