import { Lightbulb, Palette, Layout, Globe, Pen, Film } from "lucide-react";

export const siteData = {
  // Global / Branding Settings
  global: {
    brandName: "Creativity Beyond Thoughts",
    shortForm: "CBT",
    tagline: "Building beyond the ordinary. Your partner in design, video and digital excellence.",
    ctaText: "Let's Talk",
    footerCopyright: "© 2026 Creativity Beyond Thoughts. All rights reserved.",
  },

  // Contact Information
  contact: {
    address: "B-66, First Floor, New Rajinder Nagar, New Delhi 110060",
    email: "info@creativitybeyondthoughts.com",
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
    { label: "Wedding", to: "https://www.instagram.com/creativitybeyondthoughts", external: true },
    { label: "Contact", to: "/contact" },
  ],

  legalLinks: [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],

  // Home Page - Hero Section
  hero: {
    words: ["Creativity", "Beyond", "Thoughts"],
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
    description: "A curated selection of our most impactful work, where strategic vision meets meticulous craft to create digital experiences that resonate.",
    featured: [
      {
        id: "feat-1",
        title: "The Next Frontier",
        category: "Featured Strategy",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        description: "A deep dive into the future of digital interaction and immersive branding.",
      }
    ],
    items: [
      {
        id: "1",
        title: "Brand Evolution",
        category: "Strategy & Design",
        image: "https://i.postimg.cc/wvSf0s2C/MAV04966.webp",
        colSpan: 2,
        rowSpan: 2
      },
      {
        id: "2",
        title: "Digital Platform",
        category: "Web & App",
        image: "https://i.postimg.cc/qMsrsr0x/Whats-App-Image-2026-04-03-at-3-41-21-PM.jpg",
        colSpan: 1,
        rowSpan: 1
      },
      {
        id: "3",
        title: "Product Launch",
        category: "Video & Animation",
        image: "https://i.postimg.cc/V63GDb4z/MAV05212.webp",
        colSpan: 1,
        rowSpan: 1
      },
      {
        id: "4",
        title: "Visual Identity",
        category: "Design Systems",
        image: "https://i.postimg.cc/rmvnQtgV/MAV05225.webp",
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
        icon: Globe,
        title: "Digital Product Design & Development",
        description: "We bring your ideas to life with beautiful designs and websites that actually work. From sketching out the first scroll to launching your app, we handle the look, the feel, and the build so you don't have to worry about a thing.",
        points: ["UI/UX Design & Prototyping", "Full-Stack Web & App Development", "Performance Optimization", "Scalable Cloud Architecture"],
        color: "var(--color-blue)",
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
        iconType: "circles",
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
    missionBody: "At Creativity Beyond Thoughts, we blend strategic thinking with creative excellence to help brands stand out. Based in New Delhi, we serve clients worldwide with a passion for design, technology, and storytelling.",
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
        content: "Welcome to Creativity Beyond Thoughts. By accessing and using our website and services, you agree to comply with these terms and conditions. Please read them carefully before engaging with our services."
      },
      {
        title: "2. Services",
        content: "We provide brand strategy, visual identity design, web & app development, UI/UX design, and video editing & animation services. All services are subject to a separate statement of work or contract agreed upon before commencement."
      },
      {
        title: "3. Intellectual Property",
        content: "All content, designs, and materials created by Creativity Beyond Thoughts remain our intellectual property until full payment is received. Upon payment, ownership of deliverables transfers to the client as specified in the contract."
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
        content: "Creativity Beyond Thoughts shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website."
      },
      {
        title: "7. Contact",
        content: "For questions about these terms, please contact us at info@creativitybeyondthoughts.com or visit our office at B-66, First Floor, New Rajinder Nagar, New Delhi 110060."
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
        content: "For privacy-related inquiries, please contact us at info@creativitybeyondthoughts.com or write to us at B-66, First Floor, New Rajinder Nagar, New Delhi 110060."
      },
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
    { name: "Akshay Barman", role: "Creative Architect", energy: "var(--color-red)", image: "/1. Akshay Barman.jpg" },
    { name: "Brijesh Kumar", role: "Master of Concepts", energy: "var(--color-blue)", image: "/2. Brijesh Kumar.jpg" },
    { name: "Abhijeet Kumar", role: "Visual Storyteller", energy: "var(--color-purple)", image: "/3. Abhijeet Kumar.jpg" },
    { name: "Ritivik Sharma", role: "Photo Alchemist", energy: "var(--color-orange)", image: "/4. Ritivik Sharma.jpg" },
    { name: "Nishant", role: "Visual Craftsperson", energy: "var(--color-pink)", image: "/5. Nishant.jpg" },
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
  },

  // Brand Slideshow Data
  brandShowcase: {
    title: "Brands We've Empowered",
    subtitle: "Strategic partnerships that drive growth",
    brands: [
      {
        name: "MG",
        images: [
          "https://i.postimg.cc/wvSf0s2C/MAV04966.webp",
          "https://i.postimg.cc/gJfSN642/MAV04994-(1).webp",
          "https://i.postimg.cc/V63GDb4z/MAV05212.webp",
          "https://i.postimg.cc/rmvnQtgV/MAV05225.webp",
          "https://i.postimg.cc/qMsrsr0x/Whats-App-Image-2026-04-03-at-3-41-21-PM.jpg"
        ]
      },
      {
        name: "Events",
        images: [
          "https://i.postimg.cc/Prbq8fwk/gdxjbhierunvdzo0z4ez.webp",
          "https://i.postimg.cc/t4X4d034/jmdgjdavwkquobbmjn3c.webp",
          "https://i.postimg.cc/fRwR74cM/khnoj08xbhlcosoi5i8d.webp",
          "https://i.postimg.cc/MpWp0k7T/lu1hiv3yqccakf6wsgx1.webp",
          "https://i.postimg.cc/7ZxZ1v3C/wjhflkcjdyfwn5yqtmo9.webp",
          "https://i.postimg.cc/CxFxCyGB/y2n7cly0hjom72zr1hwr.webp"
        ]
      },
      {
        name: "Fashion",
        images: [
          "https://i.postimg.cc/8cJysPP1/DSC05259-copy.webp",
          "https://i.postimg.cc/MTG32mCk/DSC05367-copy.webp",
          "https://i.postimg.cc/LX0CHZSn/DSC05662-copy.webp",
          "https://i.postimg.cc/sxQn1DfK/MAV01017.webp",
          "https://i.postimg.cc/j5j304pd/MAV01155.webp",
          "https://i.postimg.cc/pTdcbJwm/MAV01615.webp",
          "https://i.postimg.cc/j5j304pL/MAV01833.webp",
          "https://i.postimg.cc/8cJysPPS/MAV03713.webp",
          "https://i.postimg.cc/PJp6Nrfy/MAV03908.webp",
          "https://i.postimg.cc/nzwRHQx0/MAV06622.webp"
        ]
      },
      {
        name: "Sleepycat",
        images: [
          "https://i.postimg.cc/gjMbv03h/MAV05674.jpg",
          "https://i.postimg.cc/x1NVzN8L/MAV05675.jpg",
          "https://i.postimg.cc/W1qckTz9/MAV05921.jpg",
          "https://i.postimg.cc/0yK1wPj4/MAV05977.jpg",
          "https://i.postimg.cc/3x0QvYN6/MAV06015.jpg",
          "https://i.postimg.cc/MGk20NjZ/MAV06036.jpg"
        ]
      }
    ]
  },

  // Wedding Section (Homepage)
  weddingSection: {
    tag: "Artistry",
    title: "Eternal Moments",
    highlight: "Wedding Work",
    description: "Capturing the soul of celebration through cinematic storytelling and soulful imagery.",
    ctaText: "Explore @creativitybeyondthoughts",
    link: "https://www.instagram.com/creativitybeyondthoughts"
  }
};