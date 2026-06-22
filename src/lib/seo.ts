/**
 * SEO Metadata Utility
 * Generates optimized meta tags for each page
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  author?: string;
  lastModified?: string;
  robots?: string;
}

export const generateSEOMeta = (meta: SEOMetadata) => {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(", "),
    canonical: meta.canonical || "https://creativitybeyondthoughts.com/",
    ogTitle: meta.ogTitle || meta.title,
    ogDescription: meta.ogDescription || meta.description,
    ogImage:
      meta.ogImage || "https://creativitybeyondthoughts.com/cbt-preview.jpeg",
    ogType: meta.ogType || "website",
    twitterCard: meta.twitterCard || "summary_large_image",
    twitterTitle: meta.twitterTitle || meta.title,
    twitterDescription: meta.twitterDescription || meta.description,
    twitterImage:
      meta.twitterImage ||
      "https://creativitybeyondthoughts.com/cbt-preview.jpeg",
    author: meta.author || "Creativity Beyond Thoughts",
    robots:
      meta.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
};

// Page-specific SEO configurations
export const pageSEOConfig = {
  home: {
    title:
      "Creativity Beyond Thoughts | Premium Creative Agency",
    description:
      "A digital creative agency crafting elite visual identities, next-gen web design, and high-end interactive experiences that elevate brands.",
    keywords: [
      "creative agency",
      "branding agency",
      "web design agency",
      "UI UX design",
      "digital creative studio",
      "brand strategy",
      "logo design",
      "app development",
      "digital marketing",
      "creative agency Delhi",
      "CBT creative",
    ],
    canonical: "https://creativitybeyondthoughts.com/",
    ogType: "website",
  },
  about: {
    title: "About Creativity Beyond Thoughts | Creative Agency",
    description:
      "Learn about our creative team, our approach to design and strategy, and how we help brands thrive through innovative digital solutions.",
    keywords: [
      "about CBT",
      "creative team",
      "design agency",
      "creative services",
      "brand transformation",
      "creative strategy",
    ],
    canonical: "https://creativitybeyondthoughts.com/about",
  },
  services: {
    title: "Creative Services | Branding, Web Design & App Development",
    description:
      "Explore our full range of creative services: brand identity design, web development, UI/UX design, app development, video production, and digital strategy.",
    keywords: [
      "creative services",
      "branding services",
      "web design services",
      "app development services",
      "UI/UX design services",
      "digital strategy services",
      "brand identity",
      "video production",
    ],
    canonical: "https://creativitybeyondthoughts.com/services",
  },
  work: {
    title: "Our Work & Portfolio | Creativity Beyond Thoughts",
    description:
      "View our portfolio of successful creative projects, brand transformations, and digital experiences we've created for clients.",
    keywords: [
      "creative portfolio",
      "design portfolio",
      "case studies",
      "brand projects",
      "web design portfolio",
      "creative work",
    ],
    canonical: "https://creativitybeyondthoughts.com/work",
  },
  contact: {
    title:
      "Contact Creativity Beyond Thoughts | Get Your Creative Project Started",
    description:
      "Ready to elevate your brand? Contact our creative team in Delhi for a consultation on your branding, web design, or app development project.",
    keywords: [
      "contact creative agency",
      "creative consultation",
      "get in touch",
      "creative services inquiry",
    ],
    canonical: "https://creativitybeyondthoughts.com/contact",
  },
};

// Structured data generators
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (
  items: Array<{ question: string; answer: string }>,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

export const generateArticleSchema = (data: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image:
      data.image || "https://creativitybeyondthoughts.com/cbt-preview.jpeg",
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: data.author || "Creativity Beyond Thoughts",
    },
  };
};
