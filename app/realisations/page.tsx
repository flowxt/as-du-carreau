import Link from 'next/link';
import { Metadata } from 'next';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PhotoGallery from '../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Nos Réalisations | L'as du Carreau - Avant/Après & Galerie Photos",
  description: "Découvrez les réalisations de L'as du Carreau : transformations avant/après spectaculaires, salles de bain, carrelage, mosaïque. Plus de 20 ans de savoir-faire.",
};

const beforeAfterProjects = [
  {
    id: 1,
    before: '/photo/avant1.jpg',
    after: '/photo/apres1.jpg',
    title: 'Rénovation complète salle de bain',
    description: 'Transformation totale avec douche à l\'italienne et faïence moderne',
  },
  {
    id: 2,
    before: '/photo/avant2.jpg',
    after: '/photo/apres2.jpg',
    title: 'Création espace douche',
    description: 'Aménagement d\'un espace douche contemporain',
  },
  {
    id: 3,
    before: '/photo/avant3.jpg',
    after: '/photo/apres3.jpg',
    title: 'Rénovation salle d\'eau',
    description: 'Modernisation complète avec carrelage grand format',
  },
  {
    id: 4,
    before: '/photo/avant4.jpg',
    after: '/photo/apres4.jpg',
    title: 'Transformation salle de bain',
    description: 'Du sol au plafond, une rénovation intégrale',
  },
  {
    id: 5,
    before: '/photo/avant5.jpg',
    after: '/photo/apres5.jpg',
    title: 'Nouvelle douche italienne',
    description: 'Création d\'une douche moderne avec étanchéité parfaite',
  },
  {
    id: 6,
    before: '/photo/avant6-1.jpg',
    after: '/photo/apres6.jpg',
    title: 'Espace bien-être',
    description: 'Réaménagement complet pour plus de confort',
  },
  {
    id: 7,
    before: '/photo/avant7.jpg',
    after: '/photo/apres7.jpg',
    title: 'Rénovation design',
    description: 'Finitions soignées et style contemporain',
  },
  {
    id: 8,
    before: '/photo/avant8.jpg',
    after: '/photo/apres8.jpg',
    title: 'Métamorphose totale',
    description: 'Un espace entièrement repensé et sublimé',
  },
];

const galleryPhotos = [
  { src: '/photo/sdb.jpg', alt: 'Salle de bain moderne' },
  { src: '/photo/sdb8.jpg', alt: 'Douche à l\'italienne' },
  { src: '/photo/sdb9.jpg', alt: 'Faïence contemporaine' },
  { src: '/photo/sdb10.jpg', alt: 'Carrelage grand format' },
  { src: '/photo/sdb11.jpg', alt: 'Rénovation salle de bain' },
  { src: '/photo/sdb12.jpg', alt: 'Douche design' },
  { src: '/photo/sdb13.jpg', alt: 'Salle d\'eau moderne' },
  { src: '/photo/sdb14.jpg', alt: 'Finitions soignées' },
  { src: '/photo/sdb15.jpg', alt: 'Carrelage mural' },
  { src: '/photo/sdb16.jpg', alt: 'Espace douche' },
  { src: '/photo/sdb17.jpg', alt: 'Salle de bain rénovée' },
  { src: '/photo/sdb18.jpg', alt: 'Design contemporain' },
  { src: '/photo/sdb19.jpg', alt: 'Travail artisanal' },
  { src: '/photo/renov-sdb.jpg', alt: 'Rénovation complète' },
  { src: '/photo/renov-sdb1.jpg', alt: 'Transformation salle de bain' },
  { src: '/photo/renov-sdb2.jpg', alt: 'Nouvelle salle d\'eau' },
  { src: '/photo/renov-sdb3.jpg', alt: 'Aménagement moderne' },
  { src: '/photo/renov-sdb4.jpg', alt: 'Douche italienne' },
  { src: '/photo/renov-sdb5.jpg', alt: 'Carrelage et faïence' },
  { src: '/photo/renov-sdb6.jpg', alt: 'Finition professionnelle' },
  { src: '/photo/renov-sdb7.jpg', alt: 'Espace optimisé' },
  { src: '/photo/renov-wc.jpg', alt: 'Rénovation WC' },
  { src: '/photo/douche.jpg', alt: 'Douche moderne' },
  { src: '/photo/douche1.jpg', alt: 'Installation douche' },
  { src: '/photo/douche2.jpg', alt: 'Douche design' },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Nos Réalisations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Plus de 20 ans de savoir-faire
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Découvrez quelques-unes de nos réalisations et transformations. 
              Chaque projet témoigne de notre passion pour le métier et notre souci du détail.
            </p>
          </div>
        </div>
      </section>

      {/* Badge Pro & Particuliers */}
      <section className="py-8 bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-semibold text-lg">Professionnels</span>
            </div>
            <span className="hidden md:block text-white/60 text-2xl">&</span>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white font-semibold text-lg">Particuliers</span>
            </div>
            <span className="hidden md:block text-white/40">|</span>
            <p className="text-white/90 text-sm md:text-base">
              Agences immobilières, syndics, copropriétés... Nous intervenons pour tous vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Section Avant/Après */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Transformations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Avant / Après
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Glissez le curseur sur les images pour découvrir les transformations spectaculaires 
              réalisées par L&apos;as du Carreau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project) => (
              <div key={project.id} className="bg-white p-4 shadow-lg hover-lift">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`${project.title} - Avant`}
                  afterAlt={`${project.title} - Après`}
                />
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Galerie
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Nos derniers travaux
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Un aperçu de la qualité et du soin apportés à chaque réalisation. 
              Cliquez sur une image pour l&apos;agrandir.
            </p>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            Envie d&apos;une transformation similaire ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Contactez-moi pour discuter de votre projet. Devis gratuit et sans engagement 
            pour les professionnels comme pour les particuliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/services" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
