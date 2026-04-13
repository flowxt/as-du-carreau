'use client';

import { useState } from 'react';
import Link from 'next/link';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PhotoGallery from '../components/PhotoGallery';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/animations';

const beforeAfterLandscape = [
  {
    id: 1,
    before: '/avant-apres/avant1.jpg',
    after: '/avant-apres/apres1.jpg',
    title: 'Transformation compl\u00e8te',
    description: 'R\u00e9novation int\u00e9grale avec un r\u00e9sultat soign\u00e9 et durable',
  },
  {
    id: 2,
    before: '/avant-apres/avant2.jpg',
    after: '/avant-apres/apres2.jpg',
    title: 'R\u00e9novation moderne',
    description: 'Un espace repens\u00e9 avec des finitions contemporaines',
  },
  {
    id: 4,
    before: '/avant-apres/avant4.jpg',
    after: '/avant-apres/apres4.jpg',
    title: 'Relooking int\u00e9rieur',
    description: 'Un avant/apr\u00e8s qui change l\'ambiance de la pi\u00e8ce',
  },
  {
    id: 5,
    before: '/avant-apres/avant5.jpg',
    after: '/avant-apres/apres5.jpg',
    title: 'R\u00e9novation lumineuse',
    description: 'Un espace plus clair et plus chaleureux',
  },
  {
    id: 10,
    before: '/avant-apres/avant10.jpg',
    after: '/avant-apres/apres10.jpg',
    title: 'Finitions impeccables',
    description: 'Un rendu propre et parfaitement align\u00e9',
  },
  {
    id: 14,
    before: '/avant-apres/avant14.jpg',
    after: '/avant-apres/apres14.jpg',
    title: 'Carrelage haut de gamme',
    description: 'Pose de carrelage pour un espace lumineux et contemporain',
  },
];

const beforeAfterPortrait = [
  {
    id: 7,
    before: '/avant-apres/avant7.jpg',
    after: '/avant-apres/apres7.jpg',
    title: 'Chantier modernis\u00e9',
    description: 'Une pose nette pour un rendu durable',
  },
  {
    id: 8,
    before: '/avant-apres/avant8.jpg',
    after: '/avant-apres/apres8.jpg',
    title: 'R\u00e9novation \u00e9l\u00e9gante',
    description: 'Des lignes propres et un rendu homog\u00e8ne',
  },
  {
    id: 9,
    before: '/avant-apres/avant9.jpg',
    after: '/avant-apres/apres9.jpg',
    title: 'Mise en valeur',
    description: 'Le d\u00e9tail qui fait toute la diff\u00e9rence',
  },
  {
    id: 12,
    before: '/avant-apres/avant12.jpg',
    after: '/avant-apres/apres12.jpg',
    title: 'R\u00e9novation compl\u00e8te',
    description: 'Du sol aux murs, une transformation int\u00e9grale',
  },
  {
    id: 13,
    before: '/avant-apres/avant13.jpg',
    after: '/avant-apres/apres13.jpg',
    title: 'Espace repens\u00e9',
    description: 'Un r\u00e9sultat net et durable, du sol aux d\u00e9tails',
  },
  {
    id: 15,
    before: '/avant-apres/avant15.jpg',
    after: '/avant-apres/apres15.jpg',
    title: 'Am\u00e9nagement soign\u00e9',
    description: 'Cr\u00e9ation d\'un espace fonctionnel avec finitions soign\u00e9es',
  },
  {
    id: 16,
    before: '/avant-apres/avant16.jpg',
    after: '/avant-apres/apres16.jpg',
    title: 'R\u00e9novation design',
    description: 'Un espace enti\u00e8rement repens\u00e9 avec un rendu moderne',
  },
  {
    id: 17,
    before: '/avant-apres/avant17.jpg',
    after: '/avant-apres/apres17.jpg',
    title: 'Transformation totale',
    description: 'Un savoir-faire artisanal pour un r\u00e9sultat d\'exception',
  },
];

const galleryCategories = [
  'Tout',
  'Salles de bain & Douches',
  'Carrelages & Fa\u00efences',
  'Mosa\u00efques & Cr\u00e9ations',
  'Rev\u00eatements de sols',
  'Terrasses, Piscines & Ext\u00e9rieurs',
  'Travaux de pr\u00e9paration',
];

const galleryPhotos = [
  // Salles de bain & Douches à l'italienne
  { src: '/realisation/1000007080.jpg', alt: 'Salle de bain travertin et mosa\u00efque', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069749.jpg', alt: 'Salle de bain avec douche et frise', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069750.jpg', alt: 'Douche sous combles', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069751.jpg', alt: 'Salle de bain carreaux de ciment', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069752.jpg', alt: 'Vasque et cr\u00e9dence m\u00e9tro blanc', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000069753.jpg', alt: 'Baignoire fa\u00efence m\u00e9tro', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069761.jpg', alt: 'Baignoire \u00eelot anthracite', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069762.jpg', alt: 'Meuble vasque et fa\u00efence moderne', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000069764.jpg', alt: 'Douche \u00e0 l\'italienne grise', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069766.jpg', alt: 'Salle de bain baignoire et douche', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069769.jpg', alt: 'Salle de bain fa\u00efence 3D', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069774.jpg', alt: 'Fa\u00efence avec frise mosa\u00efque', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069775.jpg', alt: 'Salle de bain travertin et bois', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069784.jpg', alt: 'Salle d\'eau douche et WC', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069789.jpg', alt: 'Douche italienne carrelage bois', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069793.jpg', alt: 'Baignoire fa\u00efence et mosa\u00efque', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000069814.jpg', alt: 'Salle de bain sol imitation bois', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000070534.jpg', alt: 'Douche pierre naturelle', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074368.jpg', alt: 'Grande douche italienne anthracite', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074371.jpg', alt: 'Salle de bain classique', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074372.jpg', alt: 'Douche moderne paroi vitr\u00e9e', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074373.jpg', alt: 'Am\u00e9nagement salle de bain complet', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074376.jpg', alt: 'Salle de bain r\u00e9nov\u00e9e', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074379.jpg', alt: 'Espace douche contemporain', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074381.jpg', alt: 'Douche et vasque design', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074382.jpg', alt: 'Salle d\'eau finitions soign\u00e9es', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074384.jpg', alt: 'Douche \u00e0 l\'italienne moderne', category: 'Salles de bain & Douches' },
  // Carrelages & Fa\u00efences
  { src: '/realisation/1000069771.jpg', alt: 'Sol carreaux de ciment d\u00e9coratifs', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000069785.jpg', alt: 'Carrelage grand format pi\u00e8ce \u00e0 vivre', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000069765.jpg', alt: 'WC suspendu carrelage grand format', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000070335.jpg', alt: 'Sol grand format gris', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000070338.jpg', alt: 'Carrelage int\u00e9rieur moderne', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000070339.jpg', alt: 'Pose carrelage grand format', category: 'Rev\u00eatements de sols' },
  { src: '/realisation/1000070340.jpg', alt: 'Sol carrelage finitions soign\u00e9es', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000070352.jpg', alt: 'Carrelage pi\u00e8ce de vie', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000070353.jpg', alt: 'Sol carrelage pose experte', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000070357.jpg', alt: 'Carrelage int\u00e9rieur lumineux', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000070359.jpg', alt: 'Sol contemporain', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000070361.jpg', alt: 'Carrelage tendance', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000070362.jpg', alt: 'Pose carrelage soign\u00e9e', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000070367.jpg', alt: 'Carrelage artisanal', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000070368.jpg', alt: 'R\u00e9novation sol compl\u00e8te', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000070378.jpg', alt: 'Pose professionnelle carrelage', category: 'Carrelages & Fa\u00efences' },
  // Mosa\u00efques & Cr\u00e9ations personnalis\u00e9es
  { src: '/realisation/1000008431.jpg', alt: 'Cr\u00e9dence noire brillante', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000069760.jpg', alt: '\u00celot cuisine fa\u00efence noire', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000069767.jpg', alt: 'Cr\u00e9dence marbre noir cuisine', category: 'Mosa\u00efques & Cr\u00e9ations' },
  { src: '/realisation/1000074416.jpg', alt: 'Cuisine cr\u00e9dence et plan de travail', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074488.png', alt: 'Am\u00e9nagement cuisine carrel\u00e9e', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074490.png', alt: 'Cr\u00e9dence cuisine design', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000074493.png', alt: 'Cuisine fa\u00efence et finitions', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  // Rev\u00eatements de sols
  { src: '/realisation/1000069768.jpg', alt: 'Sol PVC imitation bois', category: 'Rev\u00eatements de sols' },
  { src: '/realisation/1000074356.jpg', alt: 'Parquet contrecoll\u00e9 chambre', category: 'Rev\u00eatements de sols' },
  { src: '/realisation/1000074360.jpg', alt: 'Parquet massif ch\u00eane palier', category: 'Rev\u00eatements de sols' },
  { src: '/realisation/1000074494.jpg', alt: 'Pose rev\u00eatement de sol', category: 'Carrelages & Fa\u00efences' },
  { src: '/realisation/1000074505.jpg', alt: 'Sol stratifi\u00e9 finitions', category: 'Salles de bain & Douches' },
  { src: '/realisation/1000074506.jpg', alt: 'Rev\u00eatement sol int\u00e9rieur', category: 'Carrelages & Fa\u00efences' },
  // Terrasses, Piscines & Ext\u00e9rieurs
  { src: '/realisation/1000033744.jpg', alt: 'Carrelage balcon ext\u00e9rieur', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000007218.jpg', alt: 'Parement pierre ext\u00e9rieur piscine', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  { src: '/realisation/1000069794.jpg', alt: 'Muret parement pierre naturelle', category: 'Terrasses, Piscines & Ext\u00e9rieurs' },
  // Carrelages & Faïences (ajouts)
  { src: '/photo/carreaux-80-80.jpg', alt: 'Carreaux grand format 80x80', category: 'Carrelages & Faïences' },
  { src: '/photo/faience-metro.jpg', alt: 'Faïence métro', category: 'Carrelages & Faïences' },
  // Travaux de préparation
  { src: '/photo/ragréage.jpg', alt: 'Ragréage en cours', category: 'Travaux de préparation' },
  { src: '/photo/chape.jpg', alt: 'Réalisation de chape', category: 'Travaux de préparation' },
];

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredPhotos = activeCategory === 'Tout'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block text-gold">
                Nos R&#233;alisations
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                Plus de 20 ans de savoir-faire
              </h1>
              <div className="separator mb-8"></div>
              <p className="text-xl leading-relaxed text-black">
                D&#233;couvrez quelques-unes de nos r&#233;alisations et transformations.
                Chaque projet t&#233;moigne de notre passion pour le m&#233;tier et notre souci du d&#233;tail.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Badge Pro & Particuliers */}
      <section className="py-8 bg-white border-y border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-charcoal font-semibold text-lg">Professionnels</span>
            </div>
            <span className="hidden md:block text-charcoal/40 text-2xl">&amp;</span>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-charcoal font-semibold text-lg">Particuliers</span>
            </div>
            <span className="hidden md:block text-charcoal/30">|</span>
            <p className="text-charcoal/70 text-sm md:text-base">
              Agences immobilières, syndics, copropriétés... Nous intervenons pour tous vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section id="galerie" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Galerie
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Nos réalisations
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Un aper&#231;u de la qualit&#233; et du soin apport&#233;s &#224; chaque r&#233;alisation.
              Cliquez sur une image pour l&apos;agrandir et naviguez avec les fl&#232;ches.
            </p>
          </FadeIn>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-white text-slate border border-gray-200 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <PhotoGallery photos={filteredPhotos} columns={3} />
        </div>
      </section>

      {/* Section Avant/Après */}
      <section id="avant-apres" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Transformations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Avant / Apr&#232;s
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Glissez le curseur sur les images pour d&#233;couvrir les transformations spectaculaires
              r&#233;alis&#233;es par L&apos;as Du Carreau.
            </p>
          </FadeIn>

          {/* Paysages */}
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-8" staggerDelay={0.15}>
            {beforeAfterLandscape.map((project) => (
              <StaggerItem key={project.id}>
              <div className="bg-white p-4 shadow-lg hover-lift">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt="Avant"
                  afterAlt="Après"
                />
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Portraits */}
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {beforeAfterPortrait.map((project) => (
              <StaggerItem key={project.id}>
              <div className="bg-white p-4 shadow-lg hover-lift">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt="Avant"
                  afterAlt="Après"
                  portrait
                />
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #111212, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-charcoal">
            Envie d&apos;une transformation similaire ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
            Contactez-moi pour discuter de votre projet. Devis gratuit et sans engagement
            pour les professionnels comme pour les particuliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/services" className="btn-secondary">
              D&#233;couvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
