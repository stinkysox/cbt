import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  shimmerClassName?: string;
}

/**
 * LazyImage — drops in as a replacement for <img>.
 * Shows an animated shimmer skeleton until the image finishes loading,
 * then cross-fades to the real image.
 */
const LazyImage = ({
  src,
  alt,
  className = "",
  shimmerClassName = "",
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <span className="lazy-image-wrapper" style={{ display: "contents" }}>
      {/* Shimmer placeholder — hidden once the image loads */}
      {!loaded && !error && (
        <span
          className={`lazy-shimmer ${shimmerClassName}`}
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setError(true); }}
        className={`${className} lazy-image ${loaded ? "lazy-image--loaded" : "lazy-image--loading"}`}
        {...rest}
      />
    </span>
  );
};

export default LazyImage;
