import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useSEOHelmet from "@/hooks/useSEOHelmet";
import { seoConfig } from "@/config/seo.config";
import { FileText, MessageSquare } from "lucide-react";

const Terms = () => {
  const metadata = seoConfig.terms;
  useSEOHelmet({
    ...metadata,
    breadcrumbs: [{ name: "Terms & Conditions", url: metadata.url }],
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-agency-blue/10 via-transparent to-agency-purple/10" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-display font-medium tracking-[0.4em] uppercase text-accent mb-6 block"
          >
            Legal · Updated June 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 overflow-visible"
          >
            Terms &{" "}
            <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">
              Conditions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            Please read these terms carefully. By engaging with Creativity
            Beyond Thoughts, you agree to these conditions.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              icon: FileText,
              title: "1. Services & Scope",
              content: [
                "Creativity Beyond Thoughts provides professional creative services including brand strategy, visual identity design, web design, app development, and digital marketing solutions.",
                "All services are subject to a separate signed agreement detailing scope, deliverables, timelines, and pricing.",
              ],
            },
            {
              icon: FileText,
              title: "2. Payment Terms",
              content: [
                "Standard payment: 50% advance before work begins, 50% on delivery. All payments in INR unless otherwise agreed.",
                "Advance payments are non-refundable once work has commenced. All fees are exclusive of applicable taxes (GST).",
              ],
            },
            {
              icon: FileText,
              title: "3. Intellectual Property",
              content: [
                "Upon full payment, ownership of agreed deliverables transfers to you. CBT retains the right to display work in portfolio.",
                "You warrant that all materials provided are owned by you or you have rights to use them.",
              ],
            },
            {
              icon: FileText,
              title: "4. Confidentiality",
              content: [
                "Both parties maintain strict confidentiality of proprietary information for 2 years after engagement.",
                "CBT does not sell or share personal data for commercial purposes.",
              ],
            },
            {
              icon: FileText,
              title: "5. Governing Law",
              content: [
                "These Terms are governed by the laws of India, specifically the Information Technology Act, 2000.",
                "Disputes shall be resolved through negotiation, followed by binding arbitration in New Delhi if necessary.",
              ],
            },
            {
              icon: MessageSquare,
              title: "6. Contact",
              content: [
                "📧 Email: info@creativitybeyondthoughts.com",
                "📞 Phone / WhatsApp: +91 8800180670",
                "📍 Office: B-66, First Floor, New Rajinder Nagar, New Delhi 110060, India",
              ],
            },
          ].map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-foreground/[0.02] border border-border/40 p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-6 h-6 text-accent" />
                  <h2 className="font-display text-2xl font-bold">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground font-body leading-relaxed">
                  {section.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Footer nav */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-border/30">
            <Link
              to="/"
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
            <div className="flex gap-4 text-sm font-body text-muted-foreground">
              <Link
                to="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy →
              </Link>
              <Link
                to="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
