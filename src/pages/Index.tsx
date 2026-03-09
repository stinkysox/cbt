import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ColorPsychologySection from "@/components/ColorPsychologySection";
import ServicesSection from "@/components/ServicesSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ColorPsychologySection />
      <ServicesSection />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
