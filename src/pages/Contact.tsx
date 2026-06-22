import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { siteData } from "@/data/content";
import useSEOHelmet from "@/hooks/useSEOHelmet";
import OfficePulse from "@/components/OfficePulse";
import { Link } from "react-router-dom";
import { seoConfig } from "@/config/seo.config";
import PageSEO from "@/components/PageSEO";
import { pageSEOConfig } from "@/lib/seo";

const WHATSAPP_NUMBER = "918800180670"; // country code + number, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I visited your website and I'd like to discuss a project with Creativity Beyond Thoughts.",
);

const Contact = () => {
  const metadata = seoConfig.contact;
  useSEOHelmet({
    ...metadata,
    breadcrumbs: [{ name: "Contact", url: metadata.url }],
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.message.trim()) e.message = "Please tell us about your project.";
    if (!agreed) e.agreed = "You must accept our Terms & Conditions to submit.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={pageSEOConfig.contact.title}
        description={pageSEOConfig.contact.description}
        keywords={pageSEOConfig.contact.keywords}
        canonical={pageSEOConfig.contact.canonical}
      />
      <main className="pt-20 md:pt-24">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs md:text-sm font-display font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase text-accent mb-4 md:mb-6 block"
              >
                {siteData.contactPage.sectionTitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1] md:leading-none tracking-tight mb-6 md:mb-10 overflow-visible"
              >
                {siteData.contactPage.heroTitleLine1} <br />
                <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">
                  {siteData.contactPage.heroHighlight}
                </span>
                {siteData.contactPage.heroPunctuation}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-xl leading-relaxed mb-10 md:mb-12"
              >
                {siteData.contactPage.heroDescription}
              </motion.p>

              {/* Contact Items */}
              <div className="space-y-6 md:space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">
                      Email us
                    </p>
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-base md:text-lg font-display font-bold hover:text-accent transition-colors break-all"
                    >
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">
                      Call us
                    </p>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-base md:text-lg font-display font-bold hover:text-accent transition-colors"
                    >
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">
                      Visit us
                    </p>
                    <p className="text-base md:text-lg font-display font-bold leading-tight max-w-xs">
                      {siteData.contact.address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#25D366] text-white font-display font-bold text-base shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 group"
                >
                  <MessageCircle size={20} className="shrink-0" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink
                    size={14}
                    className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              </div>
            </div>

            {/* Office Pulse */}
            <div className="relative mt-12 lg:mt-0">
              <OfficePulse />
            </div>
          </div>
        </section>

        {/* ── Contact Form ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-foreground/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Left copy */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold overflow-visible text-left">
                  Have a project <br />
                  <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">
                    in mind?
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground font-body">
                  Complete the form and we'll get back to you within 24 hours to
                  discuss how we can bring your vision to life.
                </p>

                {/* WhatsApp quick link (repeated smaller in form col) */}
                <div className="hidden md:block pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground font-body mb-3 uppercase tracking-widest">
                    Prefer instant chat?
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#25D366] hover:underline transition-colors"
                  >
                    <MessageCircle size={16} />
                    Message us on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Form */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 text-center py-16 rounded-3xl bg-background border border-border/40"
                >
                  <CheckCircle2 size={48} className="text-[#25D366]" />
                  <h3 className="text-2xl font-display font-bold">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground font-body text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-display font-bold text-sm"
                  >
                    <MessageCircle size={16} />
                    Also chat on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form
                  className="space-y-5 md:space-y-6"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className={`w-full bg-background border rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body text-sm md:text-base ${errors.name ? "border-red-500" : "border-border/50"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-body">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className={`w-full bg-background border rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body text-sm md:text-base ${errors.email ? "border-red-500" : "border-border/50"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-body">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                      Service Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, service: e.target.value }))
                      }
                      className="w-full bg-background border border-border/50 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body text-sm md:text-base text-foreground"
                    >
                      <option value="">Select a service…</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="visual-identity">
                        Visual Identity / Logo Design
                      </option>
                      <option value="web-development">
                        Web Design & Development
                      </option>
                      <option value="app-development">App Development</option>
                      <option value="video-editing">
                        Video Editing & Motion Graphics
                      </option>
                      <option value="social-media">Social Media Content</option>
                      <option value="wedding">
                        Wedding / Event Photography & Video
                      </option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                      Your Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className={`w-full bg-background border rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body resize-none text-sm md:text-base ${errors.message ? "border-red-500" : "border-border/50"}`}
                      placeholder="Tell us about your project, goals, and timeline…"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-body">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* ── T&C Checkbox ─────────────────────────────── */}
                  <div
                    className={`rounded-xl border p-4 transition-colors ${errors.agreed ? "border-red-500 bg-red-500/5" : "border-border/40 bg-foreground/[0.02]"}`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => {
                            setAgreed(e.target.checked);
                            if (e.target.checked)
                              setErrors((prev) => {
                                const n = { ...prev };
                                delete n.agreed;
                                return n;
                              });
                          }}
                          className="sr-only peer"
                          id="tc-agree"
                        />
                        <div className="w-5 h-5 rounded-md border-2 border-border/60 peer-checked:border-accent peer-checked:bg-accent flex items-center justify-center transition-all duration-200 group-hover:border-accent/60">
                          {agreed && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 12 12"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-body text-muted-foreground leading-relaxed">
                        I have read and agree to the{" "}
                        <Link
                          to="/terms"
                          target="_blank"
                          className="text-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors"
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          target="_blank"
                          className="text-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors"
                        >
                          Privacy Policy
                        </Link>
                        . I consent to Creativity Beyond Thoughts collecting and
                        using my information to respond to this enquiry.
                        <span className="text-accent ml-1">*</span>
                      </span>
                    </label>
                    {errors.agreed && (
                      <p className="text-xs text-red-500 font-body mt-2 ml-8">
                        {errors.agreed}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 md:py-5 bg-foreground text-primary-foreground rounded-xl md:rounded-2xl font-display font-bold text-base md:text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <Send
                      size={18}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                    {siteData.contactPage.submitBtnText}
                  </button>

                  {/* WhatsApp fallback under submit */}
                  <div className="text-center pt-1">
                    <p className="text-xs text-muted-foreground font-body mb-2">
                      Or reach us instantly
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#25D366] hover:underline"
                    >
                      <MessageCircle size={16} />
                      WhatsApp us →
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
