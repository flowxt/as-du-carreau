'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingFAQButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  // Ne pas afficher sur la page FAQ elle-même
  const isFAQPage = pathname === '/faq';

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après avoir scrollé un peu
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    // Vérifier au chargement
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isFAQPage) return null;

  return (
    <Link
      href="/faq"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ 
        padding: isHovered ? '14px 20px' : '14px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Questions fréquentes"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      <span 
        className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isHovered ? 'max-w-32 opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        FAQ
      </span>
    </Link>
  );
}
