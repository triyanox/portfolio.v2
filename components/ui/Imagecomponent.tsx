import { useState } from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  blurDataURL: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  blurDataURL,
}: ImageProps) {
  // const [loaded, setLoaded] = useState<boolean>(false)
  // const zoom = loaded ? 'zoom' : ''

  return (
    <div className="container">
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        quality={100}
        className="rounded-xl object-cover object-center"
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
      />

      <style jsx>
        {`
          .container {
            overflow: hidden;
          }
          .zoom {
            animation: zoom 0.3s linear;
          }
          @keyframes zoom {
            from {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
}
