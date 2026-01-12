import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PhotoGallery from '../../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Carrelage & Faïence | L'As Du Carreau - Pose Traditionnelle & Grands Formats",
  description: "Pose de carrelage et faïence par un artisan expert. Pose traditionnelle, grands formats, travertin, zellige. Finitions soignées et conseils personnalisés à Saint-Égrève.",
};

const features = [
  {
    title: 'Pose Traditionnelle',
    description: 'Maîtrise des techniques classiques pour un résultat intemporel et durable.',
  },
  {
    title: 'Grands Formats',
    description: 'Expertise dans la pose de carreaux grand format nécessitant précision et équipement adapté.',
  },
  {
    title: 'Travertin',
    description: 'Pose de cette pierre naturelle noble qui apporte élégance et chaleur à vos espaces.',
  },
  {
    title: 'Zellige',
    description: 'Art du zellige marocain pour des créations uniques et authentiques.',
  },
  {
    title: 'Finitions Soignées',
    description: 'Attention particulière aux joints, découpes et finitions pour un rendu parfait.',
  },
  {
    title: 'Conseils Personnalisés',
    description: 'Accompagnement dans le choix des matériaux et des motifs selon votre projet.',
  },
];

const applications = [
  'Sols intérieurs',
  'Murs et crédences',
  'Salles de bain',
  'Cuisines',
  'Entrées et couloirs',
  'Pièces à vivre',
];

const galleryPhotos = [
  { src: '/photo/carreaux-80-80.jpg', alt: 'Carrelage grand format 80x80' },
  { src: '/photo/carreau-80_80.jpg', alt: 'Pose carreaux 80x80' },
  { src: '/photo/carrelage-effet-carreau-de-ciment.jpg', alt: 'Carrelage effet carreau de ciment' },
  { src: '/photo/zellige.jpg', alt: 'Zellige artisanal' },
  { src: '/photo/zellige2.jpg', alt: 'Pose de zellige' },
  { src: '/photo/faience-gres-cerame.jpg', alt: 'Faïence grès cérame' },
  { src: '/photo/faience-metro-blanc.jpg', alt: 'Faïence métro blanc' },
  { src: '/photo/faience-metro.jpg', alt: 'Faïence métro' },
];

export default function CarrelageFaiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0">
          <Image
            src="/photo/carreaux-80-80.jpg"
            alt="Carrelage grand format"
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
              Carrelage & Faïence
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Pose traditionnelle, grands formats, finitions soignées et conseils personnalisés 
              pour un résultat durable et harmonieux.
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
                L&apos;art du carrelage, maîtrisé avec passion
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  Le carrelage est le cœur de mon métier depuis plus de 20 ans. Qu&apos;il s&apos;agisse 
                  d&apos;une pose traditionnelle ou de grands formats contemporains, chaque projet 
                  bénéficie de la même attention aux détails et du même niveau d&apos;exigence.
                </p>
                <p>
                  Je travaille avec une grande variété de matériaux : céramique, grès cérame, 
                  travertin, zellige... Chacun nécessite une technique adaptée que j&apos;ai 
                  perfectionnée au fil des années pour garantir un résultat impeccable.
                </p>
                <p>
                  De la préparation du support jusqu&apos;aux finitions, je veille à chaque étape 
                  pour vous offrir un carrelage posé dans les règles de l&apos;art, durable et esthétique.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/photo/zellige.jpg"
                alt="Zellige artisanal"
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

      {/* Features */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mes Spécialités
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Une expertise complète
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <div className="w-2 h-8 bg-gold mb-6"></div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {feature.description}
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
              Nos Réalisations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Carrelages & faïences posés
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={3} />

          <div className="text-center mt-12">
            <Link href="/realisations" className="btn-secondary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 lg:py-32 section-dark bg-tile-pattern-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Applications
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                Pour tous vos espaces
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-warm-gray leading-relaxed mb-8">
                Le carrelage et la faïence s&apos;adaptent à tous les espaces de votre habitation. 
                Je vous conseille sur les meilleurs choix selon l&apos;usage, le style recherché 
                et les contraintes techniques de chaque pièce.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {applications.map((app) => (
                <div key={app} className="flex items-center gap-3 p-4 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="w-2 h-2 bg-gold"></div>
                  <span className="text-cream">{app}</span>
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
            Un projet de carrelage ?
          </h2>
          <p className="text-slate text-lg mb-8">
            Contactez-moi pour discuter de votre projet et bénéficier de conseils personnalisés.
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
