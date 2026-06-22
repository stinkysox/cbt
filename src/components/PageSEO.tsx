import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

/**
 * PageSEO Component
 * Updates document head with SEO meta tags for each page
 * Usage: <PageSEO title="..." description="..." />
 */
export const PageSEO = ({
  title,
  description,
  keywords = [],
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage,
}: PageSEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`,
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        isProperty
          ? element.setAttribute("property", name)
          : element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Set standard meta tags
    setMetaTag("description", description);
    if (keywords.length > 0) {
      setMetaTag("keywords", keywords.join(", "));
    }

    // Set canonical link
    if (canonical) {
      let canonicalLink = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Set Open Graph tags
    setMetaTag("og:title", ogTitle || title, true);
    setMetaTag("og:description", ogDescription || description, true);
    if (ogImage) {
      setMetaTag("og:image", ogImage, true);
    }
    setMetaTag("og:type", ogType, true);

    // Set Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", twitterTitle || title);
    setMetaTag("twitter:description", twitterDescription || description);
    if (twitterImage) {
      setMetaTag("twitter:image", twitterImage);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);

    return () => {
      // Cleanup if needed
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterTitle,
    twitterDescription,
    twitterImage,
  ]);

  return null;
};

export default PageSEO;
