import Link from 'next/link';

const services = [
  { name: 'Carrelage & Faïence', href: '/services/carrelage-faience' },
  { name: 'Mosaïque', href: '/services/mosaique' },
  { name: 'Salles de Bain', href: '/services/salles-de-bain' },
  { name: 'Terrasses & Extérieurs', href: '/services/exterieurs' },
  { name: 'Travaux de Préparation', href: '/services/preparation' },
];

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Nos Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Bandeau Professionnels & Particuliers */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gold font-semibold">Professionnels</span>
            </div>
            <span className="text-gold/50">&</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-gold font-semibold">Particuliers</span>
            </div>
            <span className="hidden sm:block text-gold/30">|</span>
            <span className="text-cream/70 text-sm">Agences, syndics, copropriétés bienvenues</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-gold bg-gold/10">
                <span className="font-serif text-2xl font-bold text-gold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-cream">
                  L&apos;as Du Carreau
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-warm-gray">
                  Artisan Carreleur
                </span>
              </div>
            </div>
            <p className="text-warm-gray leading-relaxed mb-6">
              Artisan carreleur mosaïste depuis 2011, fort de plus de 20 ans d&apos;expérience, 
              je mets un savoir-faire d&apos;exception au service de réalisations élégantes et durables.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Saint-Égrève & région Grenobloise</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FAF9F6' }}>
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-warm-gray hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FAF9F6' }}>
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FAF9F6' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-warm-gray text-sm">Téléphone</p>
                  <a 
                    href="tel:0629937294" 
                    className="text-cream font-medium hover:text-gold transition-colors"
                  >
                    06 29 93 72 94
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-warm-gray text-sm">Email</p>
                  <a 
                    href="mailto:ldc38120@gmail.com" 
                    className="text-cream font-medium hover:text-gold transition-colors"
                  >
                    ldc38120@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-warm-gray text-sm">Zone d&apos;intervention</p>
                  <p className="text-cream font-medium">Saint-Égrève & alentours</p>
                </div>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-block btn-primary text-xs"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-gray text-sm">
              © {new Date().getFullYear()} L&apos;as Du Carreau. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-warm-gray">
              <span>Artisan Carreleur Mosaïste</span>
              <span className="hidden md:inline">•</span>
              <span>+20 ans d&apos;expérience</span>
              <span className="hidden md:inline">•</span>
              <span>Pro & Particuliers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
