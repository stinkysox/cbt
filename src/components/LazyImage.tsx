import { useState, memo } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  shimmerClassName?: string;
  variant?: "sweep" | "pulse";
}

/**
 * LazyImage — optimized replacement for <img>.
 * Supports sweep (moving highlight) and pulse (gentle fade) loading states.
 */
const LazyImage = memo(({
  src,
  alt,
  className = "",
  shimmerClassName = "",
  variant = "sweep",
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const shimmerClass = variant === "sweep" ? "lazy-shimmer" : "lazy-shimmer--pulse";

  return (
    <>
      {!loaded && !error && (
        <span
          className={`${shimmerClass} ${shimmerClassName}`}
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
    </>
  );
});

LazyImage.displayName = "LazyImage";

export default LazyImage;
