'use client';

import Image from 'next/image';

interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithWatermark({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: ImageWithWatermarkProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes={sizes}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
          sizes={sizes}
        />
      )}
      
      {/* Filigrane LDC */}
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <Image
          src="/monogramme-blanc.png"
          alt="LDC"
          width={32}
          height={32}
          className="w-8 h-8 opacity-60 drop-shadow-md"
        />
      </div>
    </div>
  );
}
