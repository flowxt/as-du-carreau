'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function PhotoGallery({
  photos,
  columns = 3,
  className = '',
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 ${className}`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Filigrane LDC */}
            <div className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded">
              <span className="text-white/80 font-serif text-xs font-semibold tracking-wider">
                LDC
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            
            {/* Filigrane LDC en grand */}
            <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
              <span className="text-white/90 font-serif text-lg font-semibold tracking-wider">
                LDC
              </span>
            </div>
          </div>
          
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedPhoto.alt}
          </p>
        </div>
      )}
    </>
  );
}
