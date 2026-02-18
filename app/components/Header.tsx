'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Salles de bain & Douches à l\'italienne', href: '/services/salles-de-bain' },
      { name: 'Carrelages & Faïences', href: '/services/carrelage-faience' },
      { name: 'Mosaïques et créations personnalisées', href: '/services/mosaique' },
      { name: 'Revêtements de sols', href: '/services/revetements-sols' },
      { name: 'Travaux de préparation', href: '/services/preparation' },
      { name: 'Terrasses, Piscines et Extérieurs', href: '/services/exterieurs' },
    ],
  },
  {
    name: 'Réalisations',
    href: '/realisations',
    submenu: [
      { name: 'Nos Réalisations', href: '/realisations' },
      { name: 'Avant / Après', href: '/realisations#avant-apres' },
    ],
  },
  {
    name: 'Avis & FAQ',
    href: '/avis',
    submenu: [
      { name: 'Avis Clients', href: '/avis' },
      { name: 'Partenaires', href: '/avis#partenaires' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const basePath = href.split('#')[0];
    if (basePath === '/') return pathname === '/';
    return pathname.startsWith(basePath);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div
                className={`w-11 h-11 flex items-center justify-center border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-gold bg-gold/5'
                    : 'border-gold-light bg-white/10'
                }`}
              >
                <span
                  className={`font-serif text-xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-gold' : 'text-gold-light'
                  }`}
                >
                  A
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gold opacity-60"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg font-semibold tracking-wide transition-colors duration-300 leading-tight ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                L&apos;as Du Carreau
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-slate' : 'text-white/70'
                }`}
              >
                Carreleur Mosaïste
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-4 xl:px-5 py-2 text-[13px] font-medium transition-all duration-300 relative group whitespace-nowrap ${
                    isScrolled
                      ? isActive(item.href)
                        ? 'text-gold'
                        : 'text-charcoal hover:text-gold'
                      : isActive(item.href)
                        ? 'text-gold-light'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 ${
                      isActive(item.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    } ${isScrolled ? 'bg-gold' : 'bg-gold-light'}`}
                  ></span>
                </Link>

                {/* Submenu dropdown */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-fade-in">
                    <div className="bg-white shadow-2xl border border-gray-100/80 py-2 min-w-[280px] rounded-sm">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100/80 rotate-45"></div>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-5 py-2.5 text-sm transition-all duration-200 ${
                            isActive(subItem.href)
                              ? 'text-gold bg-gold/5 border-l-2 border-gold'
                              : 'text-charcoal hover:text-gold hover:bg-cream hover:pl-6'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Séparateur + CTA */}
            <div className={`w-px h-6 mx-4 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
            <Link
              href="/contact"
              className="btn-primary text-[12px] py-2.5 px-5 whitespace-nowrap"
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white shadow-xl rounded-sm overflow-hidden">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-4 text-[15px] font-medium border-b border-gray-50 transition-colors ${
                      isActive(item.href)
                        ? 'text-gold border-l-4 border-l-gold bg-gold/5'
                        : 'text-charcoal hover:text-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="bg-cream/50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-10 py-3 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'text-gold font-medium border-l-2 border-gold bg-gold/5'
                              : 'text-slate hover:text-gold'
                          }`}
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
