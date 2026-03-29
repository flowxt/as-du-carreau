'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingFAQButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hideAtFooter, setHideAtFooter] = useState(false);
  const pathname = usePathname();

  const isFAQPage = pathname === '/faq';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setHideAtFooter(footerTop < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isFAQPage) return null;

  const shouldShow = isVisible && !hideAtFooter;

  return (
    <Link
      href="/faq"
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 bg-gold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      style={{ 
        padding: isHovered ? '14px 20px' : '14px',
        width: isHovered ? 'auto' : '52px',
        height: isHovered ? 'auto' : '52px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Questions fréquentes"
    >
      <span className="text-lg font-bold leading-none">?</span>
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
