'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Carrelage & Faïence', href: '/services/carrelage-faience' },
      { name: 'Mosaïque', href: '/services/mosaique' },
      { name: 'Salles de Bain', href: '/services/salles-de-bain' },
      { name: 'Terrasses & Extérieurs', href: '/services/exterieurs' },
      { name: 'Travaux de Préparation', href: '/services/preparation' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-gold bg-gold/5'
                    : 'border-gold-light bg-white/10'
                }`}
              >
                <span
                  className={`font-serif text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-gold' : 'text-gold-light'
                  }`}
                >
                  A
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold opacity-60"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                L&apos;As Du Carreau
              </span>
              <span
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-slate' : 'text-white/70'
                }`}
              >
                Artisan Carreleur
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-5 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                    isScrolled
                      ? 'text-charcoal hover:text-gold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-gold' : 'bg-gold-light'
                    }`}
                  ></span>
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white shadow-xl border border-gray-100 py-3 min-w-[240px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-charcoal hover:text-gold hover:bg-cream transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-6 btn-primary text-xs py-3 px-6"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white shadow-xl">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-charcoal font-medium border-b border-gray-100 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="bg-cream">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-10 py-3 text-sm text-slate hover:text-gold transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary block text-center text-sm"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


