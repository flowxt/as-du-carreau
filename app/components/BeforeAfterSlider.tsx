'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  portrait?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Avant',
  afterAlt = 'Après',
  className = '',
  portrait = false,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`relative ${portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden cursor-ew-resize select-none group ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Image Après (en dessous) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
        {/* Filigrane LDC */}
        <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded z-10">
          <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">
            LDC
          </span>
        </div>
      </div>

      {/* Image Avant (au-dessus avec clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Label Avant - à gauche, visible uniquement si le slider laisse de la place */}
      <div 
        className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-red-600/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 z-20 transition-opacity duration-200"
        style={{ opacity: sliderPosition > 20 ? 1 : 0 }}
      >
        <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">Avant</span>
      </div>

      {/* Label Après - à droite, visible uniquement si le slider laisse de la place */}
      <div 
        className="absolute bottom-3 md:bottom-4 bg-green-600/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 z-20 transition-opacity duration-200"
        style={{ 
          opacity: sliderPosition < 80 ? 1 : 0, 
          right: '70px',
        }}
      >
        <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">Après</span>
      </div>

      {/* Ligne de séparation */}
      <div
        className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-lg z-20 transition-opacity"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Poignée de glissement */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 md:border-4 border-gold transition-transform group-hover:scale-110">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Instructions - caché sur mobile car tactile évident */}
      <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <span className="text-white text-xs font-medium">Glissez pour comparer</span>
      </div>
    </div>
  );
}
