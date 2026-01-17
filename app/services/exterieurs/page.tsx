import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PhotoGallery from '../../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Terrasses, Piscines & Extérieurs | L'as Du Carreau",
  description: "Pose de carrelage extérieur, terrasses, piscines, margelles et escaliers. Solutions adaptées aux contraintes climatiques par un artisan expert à Saint-Égrève.",
};

const services = [
  {
    title: 'Terrasses',
    description: 'Pose de carrelage extérieur résistant au gel et aux intempéries pour des terrasses durables et esthétiques.',
  },
  {
    title: 'Piscines',
    description: 'Carrelage et mosaïque de piscine avec matériaux adaptés aux contraintes spécifiques : produits chimiques, variations de température.',
  },
  {
    title: 'Margelles',
    description: 'Pose de margelles autour des piscines et bassins, avec finitions antidérapantes pour la sécurité.',
  },
  {
    title: 'Escaliers Extérieurs',
    description: 'Habillage d\'escaliers en carrelage avec nez de marche antidérapants et finitions soignées.',
  },
  {
    title: 'Plages de Piscine',
    description: 'Aménagement complet des plages de piscine avec carrelage antidérapant et résistant.',
  },
  {
    title: 'Zones Techniques',
    description: 'Carrelage des locaux techniques, pool house et espaces de rangement extérieurs.',
  },
];

const constraints = [
  { title: 'Résistance au gel', desc: 'Carreaux certifiés pour supporter les cycles gel/dégel' },
  { title: 'Antidérapant', desc: 'Surfaces sécurisées selon les normes en vigueur' },
  { title: 'Drainage', desc: 'Pentes et joints adaptés à l\'évacuation des eaux' },
  { title: 'Durabilité', desc: 'Matériaux résistants aux UV et aux intempéries' },
];

const galleryPhotos = [
  { src: '/photo/ext-60_60.jpg', alt: 'Carrelage extérieur 60x60' },
  { src: '/photo/apres3.jpg', alt: 'Réalisation terrasse' },
  { src: '/photo/apres4.jpg', alt: 'Aménagement extérieur' },
  { src: '/photo/apres5.jpg', alt: 'Finition extérieure' },
];

export default function ExterieursPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0">
          <Image
            src="/photo/ext-60_60.jpg"
            alt="Carrelage extérieur"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0  opacity-30"></div>
        
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
              Terrasses, Piscines & Extérieurs
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Pose de carrelage extérieur, margelles, escaliers, terrasses et piscines. 
              Solutions adaptées aux contraintes climatiques et de sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Sublimez vos espaces extérieurs
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  Les espaces extérieurs sont soumis à des contraintes particulières : gel, 
                  pluie, UV, variations de température... Le choix des matériaux et la technique 
                  de pose doivent être adaptés pour garantir durabilité et sécurité.
                </p>
                <p>
                  Fort de mon expérience, je sélectionne des carrelages certifiés pour l&apos;extérieur 
                  et mets en œuvre des techniques de pose spécifiques : joints de dilatation, 
                  pentes d&apos;évacuation, finitions antidérapantes.
                </p>
                <p>
                  Terrasse, tour de piscine, escaliers ou allées : je vous accompagne dans 
                  l&apos;aménagement de tous vos espaces extérieurs.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/photo/ext-60_60.jpg"
                alt="Carrelage terrasse extérieure"
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
              Tous vos projets extérieurs
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
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Nos Réalisations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Aménagements extérieurs
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={2} />

          <div className="text-center mt-12">
            <Link href="/realisations" className="btn-secondary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Contraintes */}
      <section className="py-24 lg:py-32 section-dark ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Des solutions adaptées aux contraintes extérieures
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constraints.map((item) => (
              <div key={item.title} className="text-center p-6 border border-white/10 hover:border-gold/30 transition-colors">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream mb-2">{item.title}</h3>
                <p className="text-warm-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Projet d&apos;aménagement extérieur ?
          </h2>
          <p className="text-slate text-lg mb-8">
            Terrasse, piscine ou escaliers : discutons de votre projet pour créer des espaces 
            extérieurs à la fois beaux et durables.
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
