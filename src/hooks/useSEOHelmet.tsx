/**
 * useSEOHelmet Hook
 * Provides a reusable way to set page metadata using Helmet
 * Ensures consistency across all pages
 */

import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageMetadata, getBreadcrumbSchema } from "@/config/seo.config";

interface UseSEOHelmetProps extends PageMetadata {
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const useSEOHelmet = ({
  title,
  description,
  url,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  breadcrumbs,
}: UseSEOHelmetProps) => {
  const breadcrumbSchema = useMemo(
    () =>
      breadcrumbs
        ? getBreadcrumbSchema([
            { name: "Home", url: "https://creativitybeyondthoughts.com/" },
            ...breadcrumbs,
          ])
        : null,
    [breadcrumbs],
  );

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Creativity Beyond Thoughts" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={
          ogImage || "https://creativitybeyondthoughts.com/cbt-preview.jpeg"
        }
      />
      <meta property="og:site_name" content="Creativity Beyond Thoughts" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta
        name="twitter:image"
        content={
          ogImage || "https://creativitybeyondthoughts.com/cbt-preview.jpeg"
        }
      />
      <meta name="twitter:site" content="@CBTcreatives" />

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default useSEOHelmet;
