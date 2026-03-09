import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.3, staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-agency-red/20 via-agency-orange/10 to-agency-yellow/20" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6"
          >
            {siteData.contactPage.heroTitleLine1}<br /><span className="italic text-gradient">{siteData.contactPage.heroHighlight}</span>{siteData.contactPage.heroPunctuation}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto"
          >
            {siteData.contactPage.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding relative">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card p-8 md:p-10 space-y-8"
            >
              <h3 className="font-display text-2xl font-bold">{siteData.contactPage.sectionTitle}</h3>
              {[
                { icon: Mail, label: siteData.contact.email },
                { icon: Phone, label: siteData.contact.phone },
                { icon: MapPin, label: siteData.contact.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground shrink-0 mt-0.5">
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm font-body text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="glass-card p-8 md:p-10 space-y-5"
            >
              {[
                { name: "name" as const, label: "Name", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
              ].map((field) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <label className="text-xs font-body text-muted-foreground mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <label className="text-xs font-body text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-sm font-body text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                className="magnetic-btn w-full py-3.5 rounded-xl bg-foreground text-primary-foreground text-sm font-medium hover:scale-[1.02] transition-transform duration-300"
              >
                {siteData.contactPage.submitBtnText}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
