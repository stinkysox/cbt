/**
 * SEO Configuration Module
 * Centralized metadata management for all pages
 * Supports Helmet & pre-rendering optimization
 */

export interface PageMetadata {
  title: string;
  description: string;
  url: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
}

const BASE_DOMAIN = "https://creativitybeyondthoughts.com";
const DEFAULT_IMAGE = `${BASE_DOMAIN}/cbt-preview.jpeg`;
const BRAND_NAME = "Creativity Beyond Thoughts";

export const seoConfig: Record<string, PageMetadata> = {
  home: {
    title: "Creativity Beyond Thoughts | Premium Creative Agency",
    description:
      "A digital creative agency crafting elite visual identities, next-gen web design, and high-end interactive experiences that elevate brands.",
    url: `${BASE_DOMAIN}/`,
    canonical: `${BASE_DOMAIN}/`,
    ogTitle: "Creativity Beyond Thoughts | Premium Creative Agency",
    ogDescription:
      "A digital creative agency crafting elite visual identities, next-gen web design, and high-end interactive experiences that elevate brands.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    twitterCard: "summary_large_image",
    keywords:
      "creative agency, branding, web design, UI UX design, digital design, brand identity, visual identity, design agency Delhi",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },

  about: {
    title: "About Us | Creativity Beyond Thoughts",
    description:
      "Meet our creative team at Creativity Beyond Thoughts. We transform brands through strategic design and innovative digital experiences.",
    url: `${BASE_DOMAIN}/about`,
    canonical: `${BASE_DOMAIN}/about`,
    ogTitle: "About Creativity Beyond Thoughts",
    ogDescription:
      "Meet our creative team and discover our approach to design excellence.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    keywords:
      "about us, creative team, design team, brand strategy, creative services",
    robots: "index, follow",
  },

  services: {
    title: "Creative Services | Brand Design & Web Development",
    description:
      "Explore our comprehensive creative services: brand identity, web design, app development, UI/UX design, and digital strategy solutions.",
    url: `${BASE_DOMAIN}/services`,
    canonical: `${BASE_DOMAIN}/services`,
    ogTitle: "Creative Services | Design & Development",
    ogDescription:
      "Premium brand design, web development, and digital strategy services.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    keywords:
      "creative services, brand design, web design, app development, UI design, UX design, digital strategy",
    robots: "index, follow",
  },

  work: {
    title: "Our Work & Portfolio | Creative Projects & Case Studies",
    description:
      "Explore our portfolio of award-winning creative projects, brand transformations, and successful digital experiences.",
    url: `${BASE_DOMAIN}/work`,
    canonical: `${BASE_DOMAIN}/work`,
    ogTitle: "Our Portfolio | Creative Excellence",
    ogDescription:
      "Discover our award-winning creative projects and case studies.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    keywords:
      "portfolio, creative work, case studies, brand projects, design portfolio",
    robots: "index, follow",
  },

  contact: {
    title: "Contact Us | Start Your Creative Project",
    description:
      "Get in touch with our creative team in New Delhi. Schedule a consultation for your branding, web design, or app development project.",
    url: `${BASE_DOMAIN}/contact`,
    canonical: `${BASE_DOMAIN}/contact`,
    ogTitle: "Contact Creativity Beyond Thoughts",
    ogDescription:
      "Reach out to discuss your creative project with our expert team.",
    ogImage: DEFAULT_IMAGE,
    ogType: "website",
    keywords: "contact, creative consultation, project inquiry, get in touch",
    robots: "index, follow",
  },

  terms: {
    title: "Terms & Conditions | Creativity Beyond Thoughts",
    description:
      "Read our terms and conditions for services and website usage.",
    url: `${BASE_DOMAIN}/terms`,
    canonical: `${BASE_DOMAIN}/terms`,
    ogTitle: "Terms & Conditions",
    ogType: "website",
    keywords: "terms, conditions, legal",
    robots: "noindex, follow",
  },

  privacy: {
    title: "Privacy Policy | Creativity Beyond Thoughts",
    description:
      "Our privacy policy explains how we handle and protect your personal information.",
    url: `${BASE_DOMAIN}/privacy`,
    canonical: `${BASE_DOMAIN}/privacy`,
    ogTitle: "Privacy Policy",
    ogType: "website",
    keywords: "privacy, policy, data protection",
    robots: "noindex, follow",
  },
};

/**
 * Generate JSON-LD Organization Schema
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_DOMAIN}/#organization`,
  name: BRAND_NAME,
  alternateName: "CBT",
  description:
    "A digital creative agency specializing in brand identity, web design, app development, and interactive digital experiences.",
  url: BASE_DOMAIN,
  image: DEFAULT_IMAGE,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_IMAGE,
    width: 1200,
    height: 630,
  },
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-66, First Floor, New Rajinder Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110060",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-8800180670",
      email: "info@creativitybeyondthoughts.com",
      areaServed: ["IN", "IN-DL"],
      availableLanguage: ["en", "hi"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/creativitybeyondthoughts",
    "https://www.facebook.com/creativitybeyondthoughts",
    "https://www.linkedin.com/company/creativity-beyond-thoughts",
  ],
  knowsAbout: [
    "Brand Strategy",
    "Visual Identity Design",
    "Web Design & Development",
    "UI/UX Design",
    "App Development",
    "Digital Marketing",
    "Interactive Experiences",
  ],
});

/**
 * Generate JSON-LD Website Schema with Search Action
 */
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_DOMAIN}/#website`,
  url: BASE_DOMAIN,
  name: BRAND_NAME,
  description:
    "A digital creative agency specializing in branding, visual identity, web design, and interactive digital experiences.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_DOMAIN}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

/**
 * Generate Breadcrumb Schema for hierarchical navigation
 */
export const getBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
