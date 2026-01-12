import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PhotoGallery from '../../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Travaux de Préparation | L'As Du Carreau - Ragréage, Chapes",
  description: "Préparation des supports avant pose de carrelage : ragréage, chapes, nivellement. Une base parfaite pour une pose durable par un artisan expert.",
};

const services = [
  {
    title: 'Ragréage',
    description: 'Mise à niveau des sols irréguliers avec des produits de ragréage adaptés au support et à l\'usage.',
  },
  {
    title: 'Chapes',
    description: 'Réalisation de chapes traditionnelles ou allégées pour créer une base de pose parfaite.',
  },
  {
    title: 'Nivellement',
    description: 'Correction des défauts de planéité pour garantir une pose de carrelage sans faille.',
  },
  {
    title: 'Traitement des Supports',
    description: 'Préparation adaptée selon le type de support : béton, ancien carrelage, plancher...',
  },
  {
    title: 'Primaire d\'Accrochage',
    description: 'Application de primaires pour optimiser l\'adhérence du carrelage sur tous supports.',
  },
  {
    title: 'Conseils Techniques',
    description: 'Diagnostic et recommandations pour choisir la meilleure solution de préparation.',
  },
];

const importance = [
  'Garantit la planéité parfaite du sol fini',
  'Évite les fissures et décollements futurs',
  'Optimise l\'adhérence du carrelage',
  'Compense les irrégularités du support',
  'Assure la durabilité de l\'ouvrage',
  'Permet une pose dans les règles de l\'art',
];

const galleryPhotos = [
  { src: '/photo/ragréage.jpg', alt: 'Ragréage en cours' },
  { src: '/photo/chape.jpg', alt: 'Réalisation de chape' },
];

export default function PreparationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0">
          <Image
            src="/photo/ragréage.jpg"
            alt="Travaux de ragréage"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 transition-colors mb-8" style={{ color: '#C9A962' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux services
          </Link>
          
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Service
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Travaux de Préparation
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Ragréage, chapes, nivellement du support et conseils techniques. 
              Une préparation rigoureuse pour garantir une pose parfaite.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                La base d&apos;un travail réussi
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  Une pose de carrelage de qualité commence toujours par une préparation 
                  irréprochable du support. C&apos;est une étape souvent invisible dans le 
                  résultat final, mais absolument déterminante pour la durabilité de l&apos;ouvrage.
                </p>
                <p>
                  Fort de plus de 20 ans d&apos;expérience, je sais qu&apos;un support mal préparé 
                  entraîne inévitablement des problèmes : carreaux qui sonnent creux, fissures, 
                  décollements... C&apos;est pourquoi j&apos;accorde une attention particulière à 
                  cette phase cruciale.
                </p>
                <p>
                  Ragréage, chapes, traitement des supports anciens : je maîtrise toutes 
                  les techniques pour créer une base parfaite, quelle que soit la configuration.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/photo/chape.jpg"
                alt="Réalisation de chape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded">
                <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">LDC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Prestations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Des solutions adaptées à chaque situation
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <div className="w-2 h-8 bg-gold mb-6"></div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              En Images
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Travaux de préparation
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={2} />
        </div>
      </section>

      {/* Importance */}
      <section className="py-24 lg:py-32 section-dark bg-tile-pattern-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Pourquoi c&apos;est essentiel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                L&apos;importance d&apos;une bonne préparation
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-warm-gray leading-relaxed mb-8">
                La préparation du support est l&apos;étape fondamentale qui conditionne la qualité 
                et la durabilité de votre carrelage. Un support bien préparé, c&apos;est la garantie 
                d&apos;un résultat parfait et pérenne.
              </p>
            </div>

            <div className="space-y-4">
              {importance.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-cream">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream bg-tile-pattern">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Besoin d&apos;un diagnostic ?
          </h2>
          <p className="text-slate text-lg mb-8">
            Contactez-moi pour évaluer l&apos;état de vos supports et définir ensemble 
            la meilleure solution de préparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis
            </Link>
            <Link href="/services" className="btn-secondary">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
