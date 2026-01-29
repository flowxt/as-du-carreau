'use client';

import { useState, useEffect, useCallback } from 'react';
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, photos.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, photos.length]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext, closeLightbox]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 ${className}`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-4/3 overflow-hidden cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
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

      {/* Modal lightbox avec navigation */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/80 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Compteur */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 text-white/70 text-sm font-medium">
            {selectedIndex + 1} / {photos.length}
          </div>

          {/* Bouton précédent */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Photo précédente"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Bouton suivant */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Photo suivante"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image principale */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            
            {/* Filigrane LDC en grand */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
              <span className="text-white/90 font-serif text-lg font-semibold tracking-wider">
                LDC
              </span>
            </div>
          </div>
          
          {/* Description de l'image */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center max-w-md px-4">
            {selectedPhoto.alt}
          </p>

          {/* Indication navigation clavier (desktop) */}
          <div className="hidden md:flex absolute bottom-4 right-6 items-center gap-3 text-white/40 text-xs">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>
              <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>
              Navigation
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd>
              Fermer
            </span>
          </div>
        </div>
      )}
    </>
  );
}
