import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Prestations | L'as du Carreau - Carrelage, Mosaïque, Salles de Bain",
  description: "Découvrez toutes les prestations de L'as du Carreau : pose de carrelage, faïence, mosaïque, isolation phonique, revêtements de sols, douches à l'italienne, terrasses.",
};

const services = [
  {
    title: 'Pose de Carrelage & Faïence',
    description: 'Pose traditionnelle, grands formats, murs et sols, avec un travail soigné et des conseils personnalisés pour un résultat harmonieux et durable.',
    href: '/services/carrelage-faience',
    image: '/photo/faience-metro.jpg',
    features: ['Pose traditionnelle', 'Grands formats', 'Murs et sols', 'Conseils personnalisés'],
  },
  {
    title: 'Revêtements de Sols',
    description: 'Parquet contrecollé, parquet massif en pose flottante, lames PVC clipsables. Solutions pratiques, résistantes et esthétiques pour tous types d\'intérieurs.',
    href: '/services/revetements-sols',
    image: '/photo/parquet-contrecolle-chene-massif.jpg',
    features: ['Parquet contrecollé', 'Parquet massif', 'Lames PVC clipsables', 'Pose flottante'],
  },
  {
    title: 'Mosaïque & Créations Personnalisées',
    description: 'Décorative ou technique, la mosaïque apporte une touche unique à vos espaces : salles de bain, cuisines, piscines, crédences et éléments décoratifs sur mesure.',
    href: '/services/mosaique',
    image: '/photo/pose-credence-mosaique.jpg',
    features: ['Créations personnalisées', 'Salles de bain', 'Cuisines & crédences', 'Piscines'],
  },
  {
    title: 'Douches à l\'Italienne & Salles de Bain',
    description: 'Création ou rénovation complète de salles de bain, conception de douches à l\'italienne, étanchéité, faïence, sols et murs. Possibilité de salle de bain clé en main.',
    href: '/services/salles-de-bain',
    image: '/photo/sdb9.jpg',
    features: ['Douches à l\'italienne', 'Étanchéité garantie', 'Rénovation complète', 'Clé en main'],
  },
  {
    title: 'Terrasses, Piscines & Extérieurs',
    description: 'Pose de carrelage extérieur, terrasses, margelles, escaliers, plages de piscine et zones techniques, avec des matériaux adaptés aux contraintes climatiques et de sécurité.',
    href: '/services/exterieurs',
    image: '/photo/ext-60_60.jpg',
    features: ['Terrasses', 'Piscines & margelles', 'Escaliers extérieurs', 'Antidérapant'],
  },
  {
    title: 'Travaux de Préparation',
    description: 'Ragréage, réalisation de chapes, étanchéité des surfaces, nivellement précis des supports. La base indispensable d\'un résultat fiable et durable.',
    href: '/services/preparation',
    image: '/photo/ragréage.jpg',
    features: ['Ragréage', 'Chapes', 'Étanchéité', 'Nivellement'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Mes Prestations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Un savoir-faire complet pour tous vos projets
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              De la préparation du support à la finition la plus minutieuse, 
              je vous accompagne à chaque étape avec expertise et passion.
            </p>
          </div>
        </div>
      </section>

      {/* Badge Pro & Particuliers */}
      <section className="py-6 bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-semibold">Professionnels</span>
            </div>
            <span className="hidden md:block text-white/60">&</span>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white font-semibold">Particuliers</span>
            </div>
            <span className="hidden md:block text-white/40">|</span>
            <p className="text-white/90 text-sm">
              Agences, syndics, copropriétés bienvenues
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Filigrane LDC */}
                    <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded z-10">
                      <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">LDC</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="text-gold text-sm font-semibold tracking-wide">
                    0{index + 1}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
                    {service.title}
                  </h2>
                  <div className="separator mb-6"></div>
                  <p className="text-slate leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-charcoal">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300"
                  >
                    En savoir plus
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Isolation Phonique */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Prestation complémentaire
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Isolation Phonique sous Carrelage
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  L&apos;isolation phonique sous carrelage permet de réduire efficacement les bruits d&apos;impact 
                  (pas, chocs, déplacements de meubles) tout en conservant un sol esthétique et durable.
                </p>
                <p>
                  Elle est idéale en appartement, maison à étage et logement collectif, en rénovation comme 
                  en construction neuve.
                </p>
                <p className="font-medium text-charcoal">
                  Une solution acoustique performante
                </p>
                <p>
                  Grâce à la pose d&apos;une sous-couche acoustique sous carrelage, le carrelage est désolidarisé 
                  du support, limitant la transmission du bruit.
                </p>
              </div>
            </div>

            <div className="bg-cream p-8 md:p-12">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-6">Avantages</h3>
              <ul className="space-y-4">
                {[
                  'Réduction des bruits d\'impact',
                  'Amélioration du confort acoustique',
                  'Compatible chauffage au sol',
                  'Pose durable et conforme aux normes',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gold/20">
                <h4 className="font-semibold text-charcoal mb-2">Pose professionnelle</h4>
                <p className="text-slate text-sm">
                  Grâce à la pose d&apos;une sous-couche acoustique, le revêtement est désolidarisé du support, 
                  ce qui limite efficacement la transmission des bruits d&apos;impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Ma Méthode
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Comment je travaille
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Échange', desc: 'Discussion de votre projet, vos envies et contraintes' },
              { step: '02', title: 'Conseil', desc: 'Recommandations techniques et esthétiques personnalisées' },
              { step: '03', title: 'Devis', desc: 'Proposition détaillée, transparente et sans engagement' },
              { step: '04', title: 'Réalisation', desc: 'Exécution soignée dans le respect des délais' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-bold text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            Un projet en tête ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Contactez-moi pour discuter de votre projet et obtenir un devis gratuit personnalisé. 
            Professionnels et particuliers, je suis à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/realisations" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
