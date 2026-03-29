'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingFAQButton() {
  const [isVisible, setIsVisible] = useState(false);
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
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center bg-gold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-5 py-3.5 ${
        shouldShow ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Questions fréquentes"
    >
      <span className="text-sm font-bold tracking-wider">FAQ</span>
    </Link>
  );
}
