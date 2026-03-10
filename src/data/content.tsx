import { Lightbulb, Palette, Layout, Globe, Pen, Film } from "lucide-react";

export const siteData = {
  // Global / Branding Settings
  global: {
    brandName: "CBT",
    tagline: "Building beyond the ordinary. Your partner in design, video and digital excellence.",
    ctaText: "Let's Talk",
    footerCopyright: "© 2026 Creative Beyond Imagination. All rights reserved.",
  },

  // Contact Information
  contact: {
    address: "B-66, First Floor, New Rajinder Nagar, New Delhi 110060",
    email: "info@creativebeyondimagination.com",
    phone: "+91 8800180670",
  },

  // Social Media Links
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
  ],

  // Navigation Links
  navLinks: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "What We Do", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ],

  legalLinks: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],

  // Home Page - Hero Section
  hero: {
    words: ["Building", "Beyond", "the", "Ordinary"],
    subtitle: "We blend creative vision with strategic thinking to craft digital experiences that leave a lasting impact.",
    ctaLink: "/work",
    ctaText: "Explore our work",
  },

  // Home Page - Bottom Call to Action
  bottomCta: {
    subtitle: "Let's Build Together",
    titleLine1: "Ready to create a",
    titleHighlight: "breakthrough",
    titlePunctuation: "?",
    description: "From brand strategy to digital products — we bring your vision to life.",
    primaryBtn: { text: "Our Services", to: "/services" },
    secondaryBtn: { text: "Get in Touch", to: "/contact" },
  },

  // Marquee Words
  marqueeWords: [
    "Innovation", "Design", "Strategy", "Experiences", "Digital", "Creative", "Growth", "Motion", "Impact", "Branding"
  ],

  // Bento Gallery
  bentoGallery: {
    sectionTag: "Our Work",
    titleLine1: "Creative ",
    titleHighlight: "Excellence",
    items: [
      {
        id: "1",
        title: "Brand Evolution",
        category: "Strategy & Design",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop",
        colSpan: 2, 
        rowSpan: 2
      },
      {
        id: "2",
        title: "Digital Platform",
        category: "Web & App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        colSpan: 1,
        rowSpan: 1
      },
      {
        id: "3",
        title: "Product Launch",
        category: "Video & Animation",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        colSpan: 1,
        rowSpan: 1
      },
      {
        id: "4",
        title: "Visual Identity",
        category: "Design Systems",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
        colSpan: 2,
        rowSpan: 1
      }
    ]
  },

  // Services
  services: {
    heroSubtitle: "Our Expertise",
    heroTitle: "Our ",
    heroTitleHighlight: "Services",
    heroDescription: "From strategy to execution, we offer end-to-end creative solutions that transform your brand.",
    ctaTitle: "Let's build something ",
    ctaHighlight: "extraordinary",
    ctaBtnText: "Start a Project",
    ctaBtnLink: "/contact",
    items: [
      {
        icon: Lightbulb,
        title: "Brand Strategy",
        description: "Crafting meaningful narratives that define your brand's position in the market. We help you discover your unique voice and develop a roadmap for long-term success.",
        points: ["Market Research", "Brand Positioning", "Competitive Analysis", "Brand Guidelines"],
        color: "var(--color-yellow)",
      },
      {
        icon: Palette,
        title: "Visual Identity",
        description: "Creating distinctive visual systems that communicate your brand essence across every touchpoint.",
        points: ["Logo Design", "Color Systems", "Typography", "Brand Collateral"],
        color: "var(--color-red)",
      },
      {
        icon: Layout,
        title: "Web & App Designing",
        description: "Designing intuitive interfaces that delight users and drive engagement at every interaction.",
        points: ["UI/UX Design", "Prototyping", "Design Systems", "User Research"],
        color: "var(--color-purple)",
      },
      {
        icon: Globe,
        title: "Web & App Development",
        description: "Building performant digital products with cutting-edge technology that scales with your business.",
        points: ["Full-Stack Development", "API Integration", "Cloud Architecture", "Performance Optimization"],
        color: "var(--color-blue)",
      },
      {
        icon: Pen,
        title: "UI/UX Designing",
        description: "Creating user experiences grounded in research, psychology, and best practices to maximize conversions.",
        points: ["User Research", "Wireframing", "Interaction Design", "Usability Testing"],
        color: "var(--color-pink)",
      },
      {
        icon: Film,
        title: "Video Editing & Animation",
        description: "Producing cinematic content that captures attention, tells stories, and amplifies your brand message.",
        points: ["Motion Graphics", "Video Production", "3D Animation", "Social Media Content"],
        color: "var(--color-orange)",
      },
    ],
  },

  // Who We Are (Work Page)
  whoWeAre: {
    heroTag: "Who We Are",
    heroTitle1: "We are ",
    heroTitleHighlight: "pioneering",
    heroTitle2: " a new kind of agency",
    heroDescription: "That uncovers growth opportunities for clients and drives their success.",
    missionText1: "We transform brands through ",
    missionHighlight1: "strategy",
    missionHighlightOrWord1: ", ",
    missionHighlight2: "design",
    missionHighlightOrWord2: " and ",
    missionHighlight3: "technology",
    missionPunctuation: ".",
    ctaTitle: "Ready to ",
    ctaHighlight: "collaborate",
    ctaPunctuation: "?",
    ctaBtnText: "Get in Touch",
    ctaBtnLink: "/contact",
    pillars: [
      {
        title: "Game-Changer for Brands",
        text: "Our team empowers some of the world's leading brands to leverage media in redefining consumer interactions. We guide them in navigating new channels, emerging genres, innovative commerce platforms, and transformative experiences.",
        iconType: "circles", // Mapped in component
      },
      {
        title: "Client-Centric",
        text: "We have a profound understanding of our clients' goals and aspirations, acting as an extension of their team to accelerate growth—be it driving engagement on platforms like Google, Facebook, and Instagram.",
        iconType: "target",
      },
      {
        title: "A Place to Grow",
        text: "Our people are central to navigating the intersections of culture, content, and technology. We are dedicated to building an agency that empowers employees, prioritizes diversity, and fosters opportunities for everyone.",
        iconType: "chart",
      },
    ],
  },

  // Color Psychology Section
  colorPsychology: {
    sectionTag: "Visual Strategy",
    titleLine1: "Impact of Color ",
    titleHighlight: "Psychology",
    titleLine2: " on Branding",
    colors: [
      {
        name: "Red",
        hue: "0, 72%, 55%",
        bg: "hsl(0 72% 55%)",
        bgLight: "hsl(0 72% 95%)",
        description: "Evokes passion, urgency, and power. Creates a sense of excitement and drives action.",
        keyword: "Passion",
      },
      {
        name: "Blue",
        hue: "220, 75%, 55%",
        bg: "hsl(220 75% 55%)",
        bgLight: "hsl(220 75% 95%)",
        description: "Conveys trust, stability, and professionalism. The most universally preferred color.",
        keyword: "Trust",
      },
      {
        name: "Yellow",
        hue: "45, 95%, 55%",
        bg: "hsl(45 95% 55%)",
        bgLight: "hsl(45 95% 95%)",
        description: "Represents optimism, warmth, and creativity. Captures attention and stimulates mental activity.",
        keyword: "Optimism",
      },
      {
        name: "Purple",
        hue: "270, 60%, 55%",
        bg: "hsl(270 60% 55%)",
        bgLight: "hsl(270 60% 95%)",
        description: "Symbolizes luxury, creativity, and wisdom. Associated with premium and imaginative brands.",
        keyword: "Luxury",
      },
      {
        name: "Orange",
        hue: "25, 90%, 55%",
        bg: "hsl(25 90% 55%)",
        bgLight: "hsl(25 90% 95%)",
        description: "Communicates enthusiasm, adventure, and confidence. Balances energy with approachability.",
        keyword: "Energy",
      },
      {
        name: "Pink",
        hue: "330, 70%, 60%",
        bg: "hsl(330 70% 60%)",
        bgLight: "hsl(330 70% 95%)",
        description: "Expresses compassion, playfulness, and romance. Modern brands use it to convey boldness.",
        keyword: "Boldness",
      },
    ],
  },

  // Contact Page Config
  contactPage: {
    heroTitleLine1: "Ready to create a",
    heroHighlight: "breakthrough",
    heroPunctuation: "?",
    heroDescription: "Let's collaborate and build your brand's future together.",
    sectionTitle: "Get in Touch",
    submitBtnText: "Send Message",
  },

  // About Page
  aboutPage: {
    heroTag: "About Us",
    heroTitleLine1: "Who We",
    heroHighlight: "Are",
    heroDescription: "We are pioneering a new kind of agency that uncovers growth opportunities for clients and drives their success.",
    missionBody: "At Creative Beyond Imagination, we blend strategic thinking with creative excellence to help brands stand out. Based in New Delhi, we serve clients worldwide with a passion for design, technology, and storytelling.",
    brandInitials: "CBT",
    blocks: [
      {
        title: "Game-Changer for Brands",
        text: "We don't just follow trends — we set them. Our strategic approach transforms how brands connect with their audiences.",
      },
      {
        title: "Client-Centric",
        text: "Every decision is rooted in understanding your goals. We become an extension of your team, invested in your success.",
      },
      {
        title: "A Place to Grow",
        text: "We build scalable solutions that evolve with your business. Today's foundation becomes tomorrow's competitive advantage.",
      },
    ],
    valuesTag: "Our Values",
    valuesTitleLine1: "What ",
    valuesHighlight: "Drives",
    valuesTitleLine2: " Us",
    valuesList: [
      {
        number: "01",
        title: "Innovation First",
        text: "We push creative boundaries to deliver solutions that stand out in crowded markets.",
      },
      {
        number: "02",
        title: "Data-Driven Design",
        text: "Every design decision is backed by research, analytics, and proven design psychology.",
      },
      {
        number: "03",
        title: "Collaborative Spirit",
        text: "We believe in transparent partnerships, working closely with you at every stage of the process.",
      },
      {
        number: "04",
        title: "Results Obsessed",
        text: "Beautiful design is meaningless without measurable impact. We track, iterate, and optimize.",
      },
    ],
    ctaTitle: "Ready to ",
    ctaHighlight: "collaborate",
    ctaPunctuation: "?",
    ctaBtnText: "Get in Touch",
    ctaBtnLink: "/contact",
  },

  // Terms Page
  termsPage: {
    heroTitleLine1: "Terms & ",
    heroHighlight: "Conditions",
    lastUpdated: "Last updated: March 2026",
    sections: [
      {
        title: "1. Introduction",
        content: "Welcome to Creative Beyond Imagination. By accessing and using our website and services, you agree to comply with these terms and conditions. Please read them carefully before engaging with our services."
      },
      {
        title: "2. Services",
        content: "We provide brand strategy, visual identity design, web & app development, UI/UX design, and video editing & animation services. All services are subject to a separate statement of work or contract agreed upon before commencement."
      },
      {
        title: "3. Intellectual Property",
        content: "All content, designs, and materials created by Creative Beyond Imagination remain our intellectual property until full payment is received. Upon payment, ownership of deliverables transfers to the client as specified in the contract."
      },
      {
        title: "4. Payment Terms",
        content: "Payment terms are outlined in individual project contracts. Late payments may incur additional charges. We reserve the right to pause work on projects with outstanding payments."
      },
      {
        title: "5. Confidentiality",
        content: "We respect the confidentiality of your business information. All project details and proprietary data shared with us will be treated as confidential and will not be disclosed to third parties."
      },
      {
        title: "6. Limitation of Liability",
        content: "Creative Beyond Imagination shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website."
      },
      {
        title: "7. Contact",
        content: "For questions about these terms, please contact us at info@creativebeyondimagination.com or visit our office at B-66, First Floor, New Rajinder Nagar, New Delhi 110060."
      },
    ]
  },

  // Privacy Policy Page
  privacyPage: {
    heroTitleLine1: "Privacy ",
    heroHighlight: "Policy",
    lastUpdated: "Last updated: March 2026",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We collect information you provide directly, such as your name, email address, phone number, and project details when you contact us or use our services. We may also collect usage data through cookies and analytics tools."
      },
      {
        title: "2. How We Use Your Information",
        content: "Your information is used to communicate with you about projects, provide our services, improve our website experience, and send relevant updates about our work. We will never sell your personal data to third parties."
      },
      {
        title: "3. Data Protection",
        content: "We implement industry-standard security measures to protect your personal information. All data is stored securely and access is restricted to authorized personnel only."
      },
      {
        title: "4. Cookies",
        content: "Our website uses cookies to enhance your browsing experience and analyze traffic. You can manage cookie preferences through your browser settings."
      },
      {
        title: "5. Third-Party Services",
        content: "We may use third-party services for analytics, hosting, and email communication. These services have their own privacy policies that govern data handling."
      },
      {
        title: "6. Your Rights",
        content: "You have the right to access, modify, or delete your personal information. You may also opt out of marketing communications at any time by contacting us."
      },
      {
        title: "7. Contact",
        content: "For privacy-related inquiries, please contact us at info@creativebeyondimagination.com or write to us at B-66, First Floor, New Rajinder Nagar, New Delhi 110060."
      },
    ]
  },

  // NEW Phase 4 Content
  process: {
    sectionTag: "How We Work",
    titleLine1: "Our Creative ",
    titleHighlight: "Process",
    steps: [
      {
        number: "01",
        title: "Discover",
        description: "We dive deep into your brand, market, and audience to uncover insights that drive strategy.",
        iconType: "search"
      },
      {
        number: "02",
        title: "Design",
        description: "Translating strategy into stunning visuals and intuitive user experiences.",
        iconType: "pen-tool"
      },
      {
        number: "03",
        title: "Develop",
        description: "Building robust, scalable digital products using modern technology stacks.",
        iconType: "code"
      },
      {
        number: "04",
        title: "Deploy",
        description: "Launching your project to the world and ensuring it achieves maximum impact.",
        iconType: "rocket"
      }
    ]
  },

  stats: [
    { label: "Projects Completed", value: "250", suffix: "+" },
    { label: "Happy Clients", value: "120", suffix: "+" },
    { label: "Awards Won", value: "15", suffix: "" },
    { label: "Years Experience", value: "10", suffix: "+" }
  ],

  testimonials: {
    sectionTag: "Testimonials",
    titleLine1: "What Our ",
    titleHighlight: "Clients",
    titleLine2: " Say",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechNova",
        text: "The team at Creative Beyond Imagination transformed our brand identity into something truly world-class. Their attention to detail is unmatched.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Michael Chen",
        role: "Marketing Director, GlobalFlow",
        text: "Working with them was a seamless experience. They understood our vision perfectly and delivered a platform that exceeded our expectations.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Elena Rodriguez",
        role: "Founder, Artistry Co.",
        text: "Their creative process is truly out of the box. They helped us find a unique voice in a crowded market.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
      }
    ]
  },

  // Phase 5: Journey & Milestones
  journey: [
    { year: "2016", title: "The Spark", description: "Founded in New Delhi with a vision to redefine digital storytelling." },
    { year: "2018", title: "Global Reach", description: "Expanded operations to serve clients across three continents." },
    { year: "2020", title: "Creative Pivot", description: "Integrated advanced motion graphics and 3D into our core services." },
    { year: "2023", title: "God Mode", description: "Launched our proprietary strategic framework for brand breakthroughs." },
    { year: "2026", title: "Future Forward", description: "Leading the next wave of interactive digital excellence." },
  ],

  // Phase 5: Team Aesthetic
  team: [
    { name: "Aarav Sharma", role: "Creative Director", energy: "var(--color-red)", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Ishaan Verma", role: "Lead Strategist", energy: "var(--color-blue)", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Ananya Gupta", role: "Design Lead", energy: "var(--color-purple)", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
    { name: "Rohan Malhotra", role: "Tech Architect", energy: "var(--color-pink)", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970&auto=format&fit=crop" },
  ],

  // Phase 5: Case Studies (Spotlight)
  projects: [
    { title: "Lumina Vision", category: "Brand Identity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop" },
    { title: "Velocity X", category: "Web Platform", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "Aura Motion", category: "3D Animation", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" },
    { title: "Zenith Digital", category: "Strategy", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop" },
  ],

  // Phase 5: Office Pulse
  officePulse: {
    location: "New Delhi, IN",
    coordinates: "28.6139° N, 77.2090° E",
    timezone: "Asia/Kolkata",
    workingHours: "10:00 AM - 7:00 PM IST",
  }
};
