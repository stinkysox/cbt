import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/content";
import OfficePulse from "@/components/OfficePulse";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20 md:pt-24">

        {/* Hero Section */}
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

              </div>
            </div>

            {/* Office Pulse */}
            <div className="relative mt-12 lg:mt-0">
              <OfficePulse />
            </div>

          </div>
        </section>


        {/* Contact Form */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-foreground/[0.02]">

          <div className="max-w-4xl mx-auto">

            <div className="grid md:grid-cols-2 gap-10 md:gap-16">

              <div className="space-y-6">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold overflow-visible text-left">
                  Have a project <br />
                  <span className="italic text-gradient inline-block pr-[0.1em] pb-[0.1em] -mb-[0.1em] overflow-visible">in mind?</span>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground font-body">
                  Complete the form and we'll get back to you within 24 hours to discuss how we can bring your vision to life.
                </p>

              </div>


              <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>

                <div className="space-y-2">
                  <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                    Your Name
                  </label>

                  <input
                    type="text"
                    className="w-full bg-background border border-border/50 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="w-full bg-background border border-border/50 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">
                    Your Message
                  </label>

                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border/50 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-accent transition-colors font-body resize-none text-sm md:text-base"
                    placeholder="How can we help?"
                  />
                </div>

                <button className="w-full py-4 md:py-5 bg-foreground text-primary-foreground rounded-xl md:rounded-2xl font-display font-bold text-base md:text-lg hover:scale-[1.02] transition-transform">
                  {siteData.contactPage.submitBtnText}
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Contact;