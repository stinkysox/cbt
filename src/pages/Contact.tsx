import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/data/content";
import OfficePulse from "@/components/OfficePulse";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-display font-medium tracking-[0.4em] uppercase text-accent mb-6 block"
              >
                 {siteData.contactPage.sectionTitle}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-black leading-none tracking-tighter mb-10"
              >
                {siteData.contactPage.heroTitleLine1} <br />
                <span className="italic text-gradient">{siteData.contactPage.heroHighlight}</span>
                {siteData.contactPage.heroPunctuation}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground font-body max-w-xl leading-relaxed mb-12"
              >
                {siteData.contactPage.heroDescription}
              </motion.p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">Email us</p>
                    <a href={`mailto:${siteData.contact.email}`} className="text-lg font-display font-bold hover:text-accent transition-colors">{siteData.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">Call us</p>
                    <a href={`tel:${siteData.contact.phone}`} className="text-lg font-display font-bold hover:text-accent transition-colors">{siteData.contact.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-display font-medium text-muted-foreground uppercase tracking-widest mb-1">Visit us</p>
                    <p className="text-lg font-display font-bold leading-tight max-w-xs">{siteData.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 Office Pulse Widget */}
            <div className="relative">
              <OfficePulse />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 bg-foreground/[0.02]">
           <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                 <div className="space-y-6">
                    <h2 className="text-4xl font-display font-bold">Have a project <br /><span className="italic text-gradient">in mind?</span></h2>
                    <p className="text-muted-foreground font-body">Complete the form and we'll get back to you within 24 hours to discuss how we can bring your vision to life.</p>
                 </div>
                 
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">Your Name</label>
                       <input type="text" className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors font-body" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">Email Address</label>
                       <input type="email" className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors font-body" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-display font-medium uppercase tracking-widest text-muted-foreground">Your Message</label>
                       <textarea rows={4} className="w-full bg-background border border-border/50 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors font-body resize-none" placeholder="How can we help?"></textarea>
                    </div>
                    <button className="w-full py-5 bg-foreground text-primary-foreground rounded-2xl font-display font-bold text-lg hover:scale-[1.02] transition-transform">
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
