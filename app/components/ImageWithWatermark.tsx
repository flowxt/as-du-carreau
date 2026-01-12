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
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded">
          <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">
            LDC
          </span>
        </div>
      </div>
      
      {/* Filigrane répété en diagonal pour protection */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
        <div className="absolute inset-0 flex items-center justify-center rotate-[-30deg] scale-150">
          <div className="grid grid-cols-3 gap-24">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="text-white font-serif text-4xl font-bold tracking-widest whitespace-nowrap">
                LDC
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
