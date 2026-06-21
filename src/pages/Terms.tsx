import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Scale, CreditCard, Lock, AlertTriangle, Globe, MessageSquare, RefreshCcw, ShieldCheck, Cookie } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction & Acceptance",
    content: [
      "These Terms and Conditions (\u201cTerms\u201d) constitute a legally binding agreement between you (\u201cClient,\u201d \u201cyou,\u201d or \u201cyour\u201d) and Creativity Beyond Thought (\u201cCBT,\u201d \u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d), a creative agency with its registered office at B-66, First Floor, New Rajinder Nagar, New Delhi 110060, India.",
      "By accessing our website at creativitybeyondthoughts.com, submitting an inquiry, or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.",
      "If you do not agree with any part of these Terms, you must not use our website or engage our services. We reserve the right to update these Terms at any time; continued use of our services after any changes constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    icon: Globe,
    title: "2. Services Offered",
    content: [
      "Creativity Beyond Thought provides the following professional creative services: Brand Strategy & Positioning, Visual Identity Design (Logo, Typography, Color Systems, Brand Collateral), UI/UX Design & Prototyping, Web & App Development (Full-Stack), Video Production, Editing & Motion Graphics, 3D Animation, Social Media Content Creation, Wedding & Event Photography/Videography, and Digital Marketing Strategy.",
      "All services are subject to a separate, signed Statement of Work (SOW), Project Brief, or Service Agreement that details scope, deliverables, timelines, and pricing. Nothing in these Terms shall constitute a commitment by us to provide any specific service unless documented in a signed agreement.",
      "We reserve the right to decline or discontinue any project at our sole discretion, including situations involving unethical content, intellectual property infringement, or breach of these Terms.",
    ],
  },
  {
    icon: CreditCard,
    title: "3. Payment Terms & Billing",
    content: [
      "Fees for services are agreed upon in writing prior to project commencement. Unless stated otherwise in your project agreement, our standard payment schedule requires: 50% advance payment before work begins, and the remaining 50% upon delivery of final files or launch of the project.",
      "All payments must be made in Indian Rupees (INR) unless explicitly agreed otherwise. Payments may be made via bank transfer, UPI, or other methods specified in your invoice. Invoices are due within 7 working days of issuance.",
      "Late payments will accrue interest at 2% per month on the outstanding balance. We reserve the right to suspend or pause all project work — including halting delivery of files, hosting, or maintenance — until all outstanding dues are cleared.",
      "All fees quoted are exclusive of applicable taxes (GST and other government levies). You are responsible for any taxes applicable to your jurisdiction.",
      "Refunds: Advance payments are non-refundable once project work has commenced. If we are unable to deliver agreed services due to reasons on our end, we will offer a pro-rated refund for uncompleted work.",
    ],
  },
  {
    icon: Lock,
    title: "4. Intellectual Property Rights",
    content: [
      "All creative work, designs, concepts, code, videos, photographs, and materials produced by Creativity Beyond Thought remain the exclusive intellectual property of CBT until full payment of all agreed fees has been received.",
      "Upon receipt of full and final payment, ownership of the agreed deliverables (as specified in your SOW) shall transfer to you. This transfer includes final artwork, source files (where agreed), and associated assets.",
      "CBT retains the right to: (a) use all work produced in our portfolio, case studies, social media, marketing materials, and award submissions unless you specifically request otherwise in writing before project commencement; (b) retain copyright in preliminary concepts, unused designs, methodologies, and processes developed during the project.",
      "You must not reproduce, distribute, modify, or use any of our pre-existing intellectual property, tools, frameworks, or templates outside the scope of the delivered project without our explicit written consent.",
      "You represent and warrant that all materials, content, images, trademarks, or data you provide to us are either owned by you or that you have the necessary rights and permissions to use them. You shall indemnify CBT against any claims arising from infringement of third-party intellectual property rights.",
    ],
  },
  {
    icon: Lock,
    title: "5. Confidentiality & Non-Disclosure",
    content: [
      "Both parties agree to maintain the strict confidentiality of all proprietary information, business strategies, client data, pricing, unreleased products, and creative concepts shared during the course of the engagement.",
      "Confidential information shall not be disclosed to any third party without prior written consent, except where required by law or court order. This obligation continues for a period of two (2) years after the conclusion of our engagement.",
      "CBT will not sell, rent, or share your personal or business data with third parties for commercial purposes. Please refer to our Privacy Policy for full details on how we handle your personal information.",
    ],
  },
  {
    icon: Cookie,
    title: "6. Data Collection & Cookie Policy",
    content: [
      "By using our website, you consent to our collection and use of data as described in our Privacy Policy. We collect personal information such as name, email address, phone number, and project details when you contact us via our website form, email, or WhatsApp.",
      "Our website uses cookies and similar tracking technologies to: (a) remember your preferences and settings; (b) analyse website traffic and user behaviour (via tools such as Google Analytics); (c) improve our services and content; (d) deliver relevant information and measure marketing effectiveness.",
      "You may manage your cookie preferences at any time using the cookie consent banner on our site, or through your browser settings. Note that disabling certain cookies may affect the functionality of our website.",
      "By submitting a contact form on our website, you consent to being contacted by Creativity Beyond Thought via email, phone, or WhatsApp regarding your inquiry. You may opt out of communications at any time by contacting us directly.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "7. Revisions & Change Requests",
    content: [
      "Each project scope includes a defined number of revision rounds as specified in your SOW. Revisions are understood to mean minor adjustments within the original agreed scope — changes in direction, concept, or significant additions constitute a new scope of work and will be billed accordingly.",
      "Revision requests must be submitted in writing (email or WhatsApp) within the review period specified in your project timeline. Feedback received after this period may be treated as a new request.",
      "We strive to accommodate reasonable change requests; however, CBT reserves the right to decline changes that are outside the agreed scope, technically infeasible, or ethically objectionable.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "8. Limitation of Liability & Disclaimers",
    content: [
      "To the fullest extent permitted by applicable law, Creativity Beyond Thought and its directors, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or business opportunities, arising out of or in connection with your use of our services or website.",
      "Our total aggregate liability for any claim arising from our services shall not exceed the total fees paid by you to CBT in the three (3) months preceding the claim.",
      "Our website and services are provided on an 'as is' basis. We make no warranties, express or implied, regarding the accuracy, completeness, or fitness for a particular purpose of any content on our website.",
      "We are not responsible for any third-party platforms, tools, or services (including social media platforms, hosting providers, or payment gateways) referenced or integrated into delivered projects.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "9. Client Responsibilities",
    content: [
      "You agree to provide accurate, complete, and timely information, content, assets, and feedback necessary for us to perform the agreed services. Delays caused by late provision of required materials may affect project timelines and are not the responsibility of CBT.",
      "You are responsible for ensuring that all content you provide (text, images, trademarks, data) does not infringe upon the rights of any third party and complies with all applicable laws.",
      "You agree not to use our services for any unlawful purpose, including but not limited to creating content that is defamatory, discriminatory, obscene, fraudulent, or that promotes violence or illegal activity.",
    ],
  },
  {
    icon: Scale,
    title: "10. Governing Law & Dispute Resolution",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of India, specifically the Information Technology Act, 2000, the Indian Contract Act, 1872, and other applicable statutes.",
      "Any disputes, claims, or controversies arising out of or relating to these Terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If negotiation fails, disputes shall be submitted to binding arbitration in New Delhi, India, in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English and the decision shall be final and binding.",
      "For any legal proceedings not subject to arbitration, you agree to submit to the exclusive jurisdiction of the courts of New Delhi, India.",
    ],
  },
  {
    icon: MessageSquare,
    title: "11. Communication & Notifications",
    content: [
      "All official project communications, approvals, and change requests must be provided in writing via email to info@creativitybeyondthoughts.com. WhatsApp communications are accepted for general correspondence and quick queries but may not substitute written approvals for scope changes or payment agreements.",
      "Notices required or permitted under these Terms shall be sent to the addresses provided at the time of engagement. It is your responsibility to keep your contact information up to date.",
    ],
  },
  {
    icon: FileText,
    title: "12. Termination",
    content: [
      "Either party may terminate the engagement with 14 days' written notice. In the event of termination: (a) you shall pay for all work completed up to the termination date on a pro-rated basis; (b) CBT will provide all completed deliverables upon receipt of outstanding payment; (c) any advance payments for work not yet commenced may be refunded at CBT's discretion.",
      "CBT reserves the right to immediately terminate an engagement without notice in cases of: non-payment beyond 30 days, breach of these Terms, provision of illegal or unethical content, or behaviour that creates a hostile working environment for our team.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "13. Changes to These Terms",
    content: [
      "We reserve the right to modify these Terms at any time. When we do, we will update the 'Last Updated' date at the top of this page. It is your responsibility to review these Terms periodically.",
      "Your continued use of our website or services after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree with any updated terms, you must cease using our services and notify us in writing.",
    ],
  },
  {
    icon: MessageSquare,
    title: "14. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:",
      "📧 Email: info@creativitybeyondthoughts.com",
      "📞 Phone / WhatsApp: +91 8800180670",
      "📍 Office: B-66, First Floor, New Rajinder Nagar, New Delhi 110060, India",
      "We aim to respond to all inquiries within 2 business days.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Terms = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-agency-blue/10 via-transparent to-agency-purple/10" />
        {/* Decorative large text */}
        <div className="absolute top-[10%] right-[-5%] select-none pointer-events-none opacity-[0.025]">
          <span className="text-[20rem] font-display font-black leading-none">T&C</span>
        </div>
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
            Please read these terms carefully before using our services. By engaging with Creativity Beyond Thought, you agree to the following conditions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground font-body mt-4"
          >
            Last updated: June 2026 · Effective immediately
          </motion.p>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="py-8 px-6 border-y border-border/30 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {["Services", "Payment", "IP Rights", "Cookies", "Liability", "Governing Law", "Contact"].map((item) => (
            <span
              key={item}
              className="text-xs font-display font-medium px-3 py-1.5 rounded-full bg-foreground/[0.05] border border-border/40 text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto space-y-6"
        >
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-3xl bg-foreground/[0.02] border border-border/40 hover:border-accent/30 transition-colors duration-300 overflow-hidden group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <h2 className="font-display text-lg md:text-xl font-bold">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((para, j) => (
                      <p key={j} className="text-sm text-muted-foreground font-body leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
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
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy →
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact Us →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Terms;
