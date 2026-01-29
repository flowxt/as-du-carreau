import Link from 'next/link';
import { Metadata } from 'next';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PhotoGallery from '../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Nos Réalisations | L'as Du Carreau - Avant/Après & Galerie Photos",
  description: "Découvrez les réalisations de L'as Du Carreau : transformations avant/après spectaculaires, salles de bain, carrelage, mosaïque. Plus de 20 ans de savoir-faire.",
};

const beforeAfterProjects = [
  // Nouveaux avant/après du dossier ascarreau2 avant apres
  {
    id: 1,
    before: '/ascarreau2 avant apres/avant_1.jpg',
    after: '/ascarreau2 avant apres/apres_1.jpg',
    title: 'Rénovation carrelage',
    description: 'Avant / après pour révéler un rendu net et harmonieux',
  },
  {
    id: 2,
    before: '/ascarreau2 avant apres/avant_2.jpg',
    after: '/ascarreau2 avant apres/apres_2.jpg',
    title: 'Pose soignée',
    description: 'Mise en valeur des finitions et de l’alignement',
  },
  {
    id: 3,
    before: '/ascarreau2 avant apres/avant_3.jpg',
    after: '/ascarreau2 avant apres/apres_3.jpg',
    title: 'Transformation intérieure',
    description: 'Un espace modernisé avec un carrelage raffiné',
  },
  {
    id: 4,
    before: '/ascarreau2 avant apres/avant_4.jpg',
    after: '/ascarreau2 avant apres/apres_4.jpg',
    title: 'Relooking complet',
    description: 'Un avant/après qui change l’ambiance de la pièce',
  },
  {
    id: 5,
    before: '/ascarreau2 avant apres/avant_5.jpg',
    after: '/ascarreau2 avant apres/apres_5.jpg',
    title: 'Rénovation lumineuse',
    description: 'Un sol plus clair pour un espace plus chaleureux',
  },
  {
    id: 6,
    before: '/ascarreau2 avant apres/avant_6.jpg',
    after: '/ascarreau2 avant apres/apres_6.jpg',
    title: 'Carrelage contemporain',
    description: 'Un style actuel et des finitions précises',
  },
  {
    id: 7,
    before: '/ascarreau2 avant apres/avant_7.jpg',
    after: '/ascarreau2 avant apres/apres_7.jpg',
    title: 'Chantier modernisé',
    description: 'Une pose nette pour un rendu durable',
  },
  {
    id: 8,
    before: '/ascarreau2 avant apres/avant_8.jpg',
    after: '/ascarreau2 avant apres/apres_8.jpg',
    title: 'Rénovation élégante',
    description: 'Des lignes propres et un rendu homogène',
  },
  {
    id: 9,
    before: '/ascarreau2 avant apres/avant_9.jpg',
    after: '/ascarreau2 avant apres/apres_9.jpg',
    title: 'Mise en valeur',
    description: 'Le détail qui fait toute la différence',
  },
  {
    id: 10,
    before: '/ascarreau2 avant apres/avant_10.jpg',
    after: '/ascarreau2 avant apres/apres_10.jpg',
    title: 'Rénovation soignée',
    description: 'Un rendu propre et parfaitement aligné',
  },
  {
    id: 11,
    before: '/ascarreau2 avant apres/avant_11.jpg',
    after: '/ascarreau2 avant apres/apres_11.jpg',
    title: 'Finitions impeccables',
    description: 'Des joints maîtrisés pour un résultat premium',
  },
  {
    id: 12,
    before: '/ascarreau2 avant apres/avant_12.jpg',
    after: '/ascarreau2 avant apres/apres_12.jpg',
    title: 'Transformation complète',
    description: 'Un résultat net et durable, du sol aux détails',
  },
  // Nouveaux avant/après du dossier asavantapres
  {
    id: 13,
    before: '/asavantapres/avant-1.jpg',
    after: '/asavantapres/apres-1.jpg',
    title: 'Rénovation salle de bain',
    description: 'Transformation complète avec douche à l\'italienne et faïence moderne',
  },
  {
    id: 14,
    before: '/asavantapres/avant-2.jpg',
    after: '/asavantapres/apres-2.jpg',
    title: 'Carrelage pièce de vie',
    description: 'Pose de carrelage grand format pour un espace lumineux et contemporain',
  },
  {
    id: 15,
    before: '/asavantapres/avant-3.jpg',
    after: '/asavantapres/apres-3.jpg',
    title: 'Aménagement espace douche',
    description: 'Création d\'un espace douche fonctionnel avec finitions soignées',
  },
  {
    id: 16,
    before: '/asavantapres/avant-4.jpg',
    after: '/asavantapres/apres-4.jpg',
    title: 'Rénovation complète',
    description: 'Du sol aux murs, une transformation intégrale',
  },
  {
    id: 17,
    before: '/asavantapres/avant-5.jpg',
    after: '/asavantapres/apres-5.jpg',
    title: 'Modernisation sol',
    description: 'Remplacement du revêtement pour un rendu moderne et élégant',
  },
  {
    id: 18,
    before: '/asavantapres/avant-6.jpg',
    after: '/asavantapres/apres-6.jpg',
    title: 'Transformation totale',
    description: 'Un espace entièrement repensé avec carrelage haut de gamme',
  },
  // Anciens avant/après
  {
    id: 19,
    before: '/photo/avant1.jpg',
    after: '/photo/apres1.jpg',
    title: 'Rénovation pièce à vivre',
    description: 'Pose de carrelage grand format pour un espace modernisé',
  },
  {
    id: 20,
    before: '/photo/avant2.jpg',
    after: '/photo/apres2.jpg',
    title: 'Carrelage contemporain',
    description: 'Transformation complète du sol avec finitions soignées',
  },
  {
    id: 21,
    before: '/photo/avant3.jpg',
    after: '/photo/apres3.jpg',
    title: 'Aménagement extérieur',
    description: 'Pose de carrelage pour terrasse et espaces extérieurs',
  },
  {
    id: 22,
    before: '/photo/avant4.jpg',
    after: '/photo/apres4.jpg',
    title: 'Habillage muret',
    description: 'Création et finition d\'un muret avec carrelage décoratif',
  },
  {
    id: 23,
    before: '/photo/avant5.jpg',
    after: '/photo/apres5.jpg',
    title: 'Terrasse extérieure',
    description: 'Rénovation complète avec carrelage adapté aux contraintes extérieures',
  },
  {
    id: 24,
    before: '/photo/avant9.jpg',
    after: '/photo/apres9.jpg',
    title: 'Rénovation design',
    description: 'Finitions soignées et style contemporain',
  },
];

const galleryPhotos = [
  // Réalisations du dossier as-realisation
  { src: '/as-realisation/1000069758.jpg', alt: 'Réalisation carrelage' },
  { src: '/as-realisation/1000069769.jpg', alt: 'Pose carrelage' },
  { src: '/as-realisation/1000069773.jpg', alt: 'Carrelage intérieur' },
  { src: '/as-realisation/1000069774.jpg', alt: 'Finitions carrelage' },
  { src: '/as-realisation/1000069775.jpg', alt: 'Rénovation sol' },
  { src: '/as-realisation/1000069780.jpg', alt: 'Travaux carrelage' },
  { src: '/as-realisation/1000069795.jpg', alt: 'Carrelage moderne' },
  { src: '/as-realisation/1000069811.jpg', alt: 'Pose professionnelle' },
  { src: '/as-realisation/1000070335.jpg', alt: 'Réalisation artisanale' },
  { src: '/as-realisation/1000070336.jpg', alt: 'Carrelage design' },
  { src: '/as-realisation/1000070338.jpg', alt: 'Sol carrelé' },
  { src: '/as-realisation/1000070339.jpg', alt: 'Pose carrelage grand format' },
  { src: '/as-realisation/1000070340.jpg', alt: 'Finitions soignées' },
  { src: '/as-realisation/1000070341.jpg', alt: 'Carrelage salle de bain' },
  { src: '/as-realisation/1000070345.jpg', alt: 'Rénovation carrelage' },
  { src: '/as-realisation/1000070347.jpg', alt: 'Pose faïence' },
  { src: '/as-realisation/1000070348.jpg', alt: 'Carrelage mural' },
  { src: '/as-realisation/1000070349.jpg', alt: 'Travail artisan' },
  { src: '/as-realisation/1000070350.jpg', alt: 'Pose traditionnelle' },
  { src: '/as-realisation/1000070351.jpg', alt: 'Carrelage contemporain' },
  { src: '/as-realisation/1000070352.jpg', alt: 'Réalisation L\'as Du Carreau' },
  { src: '/as-realisation/1000070353.jpg', alt: 'Pose experte' },
  { src: '/as-realisation/1000070354.jpg', alt: 'Carrelage haut de gamme' },
  { src: '/as-realisation/1000070355.jpg', alt: 'Finition professionnelle' },
  { src: '/as-realisation/1000070356.jpg', alt: 'Carrelage élégant' },
  { src: '/as-realisation/1000070357.jpg', alt: 'Pose carreleur' },
  { src: '/as-realisation/1000070358.jpg', alt: 'Travaux rénovation' },
  { src: '/as-realisation/1000070359.jpg', alt: 'Carrelage intérieur' },
  { src: '/as-realisation/1000070360.jpg', alt: 'Sol moderne' },
  { src: '/as-realisation/1000070361.jpg', alt: 'Carrelage tendance' },
  { src: '/as-realisation/1000070362.jpg', alt: 'Pose soignée' },
  { src: '/as-realisation/1000070363.jpg', alt: 'Réalisation carrelage' },
  { src: '/as-realisation/1000070364.jpg', alt: 'Carrelage premium' },
  { src: '/as-realisation/1000070365.jpg', alt: 'Finitions parfaites' },
  { src: '/as-realisation/1000070366.jpg', alt: 'Pose carrelage expertise' },
  { src: '/as-realisation/1000070367.jpg', alt: 'Carrelage artisanal' },
  { src: '/as-realisation/1000070368.jpg', alt: 'Rénovation totale' },
  { src: '/as-realisation/1000070369.jpg', alt: 'Carrelage qualité' },
  { src: '/as-realisation/1000070378.jpg', alt: 'Pose professionnelle' },
  // Piscines
  { src: '/piscine.png', alt: 'Piscine carrelée' },
  { src: '/piscine1.png', alt: 'Aménagement piscine' },
  { src: '/piscine2.png', alt: 'Tour de piscine' },
  // Parements
  { src: '/parement.png', alt: 'Parement mural' },
  { src: '/photo/parement.jpg', alt: 'Parement décoratif' },
  { src: '/photo/parement2.jpg', alt: 'Parement pierre' },
  { src: '/photo/parement3.jpg', alt: 'Parement intérieur' },
  { src: '/photo/parement-pierre-nat.jpg', alt: 'Parement pierre naturelle' },
  // Salles de bain
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
  { src: '/photo/sdb21.jpg', alt: 'Salle de bain élégante' },
  { src: '/photo/sdb24.jpg', alt: 'Salle de bain luxe' },
  { src: '/photo/renov-sdb.jpg', alt: 'Rénovation complète' },
  { src: '/photo/renov-sdb1.jpg', alt: 'Transformation salle de bain' },
  { src: '/photo/renov-sdb2.jpg', alt: 'Nouvelle salle d\'eau' },
  { src: '/photo/renov-sdb3.jpg', alt: 'Aménagement moderne' },
  { src: '/photo/renov-sdb4.jpg', alt: 'Douche italienne' },
  { src: '/photo/renov-sdb5.jpg', alt: 'Carrelage et faïence' },
  { src: '/photo/renov-sdb6.jpg', alt: 'Finition professionnelle' },
  { src: '/photo/renov-sdb7.jpg', alt: 'Espace optimisé' },
  { src: '/photo/renov-wc.jpg', alt: 'Rénovation WC' },
  // Douches
  { src: '/photo/douche.jpg', alt: 'Douche moderne' },
  { src: '/photo/douche1.jpg', alt: 'Installation douche' },
  { src: '/photo/douche2.jpg', alt: 'Douche design' },
  // Carrelage & faïence
  { src: '/photo/carreau-80_80.jpg', alt: 'Carrelage 80x80' },
  { src: '/photo/carreaux-80-80.jpg', alt: 'Grands carreaux 80x80' },
  { src: '/photo/carrelage-effet-carreau-de-ciment.jpg', alt: 'Carrelage effet carreau de ciment' },
  { src: '/photo/carrelage-imitation-bois.jpg', alt: 'Carrelage imitation bois' },
  { src: '/photo/faience-gres-cerame.jpg', alt: 'Faïence grès cérame' },
  { src: '/photo/faience-metro-blanc.jpg', alt: 'Faïence métro blanc' },
  { src: '/photo/faience-metro.jpg', alt: 'Faïence métro' },
  { src: '/photo/zellige.jpg', alt: 'Zellige artisanal' },
  { src: '/photo/zellige2.jpg', alt: 'Pose de zellige' },
  // Crédences & mosaïque
  { src: '/photo/credence-sur-mesure.jpg', alt: 'Crédence sur mesure' },
  { src: '/photo/pose-credence-mosaique.jpg', alt: 'Crédence mosaïque' },
  // Extérieur
  { src: '/photo/ext-60_60.jpg', alt: 'Carrelage extérieur 60x60' },
  // Revêtements de sol
  { src: '/photo/lame-pvc-clipsable.jpg', alt: 'Lame PVC clipsable' },
  { src: '/photo/parquet-contrecolle-chene-massif.jpg', alt: 'Parquet contrecollé chêne' },
  // Préparation & technique
  { src: '/photo/chape.jpg', alt: 'Réalisation chape' },
  { src: '/photo/ragréage.jpg', alt: 'Ragréage sol' },
  // Après (résultats finaux)
  { src: '/photo/apres1.jpg', alt: 'Résultat final rénovation' },
  { src: '/photo/apres2.jpg', alt: 'Transformation réussie' },
  { src: '/photo/apres3.jpg', alt: 'Aménagement extérieur fini' },
  { src: '/photo/apres4.jpg', alt: 'Habillage muret terminé' },
  { src: '/photo/apres5.jpg', alt: 'Terrasse rénovée' },
  { src: '/photo/apres6-1.jpg', alt: 'Projet finalisé' },
  { src: '/photo/apres7.jpg', alt: 'Rénovation achevée' },
  { src: '/photo/apres8.jpg', alt: 'Finitions parfaites' },
  { src: '/photo/apres9.jpg', alt: 'Design final' },
  { src: '/photo/1000069811.jpg', alt: 'Réalisation professionnelle' },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0  opacity-30"></div>
        
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
      <section className="py-24 lg:py-32 bg-cream">
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
              réalisées par L&apos;as Du Carreau.
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
              Cliquez sur une image pour l&apos;agrandir et naviguez avec les flèches.
            </p>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0  opacity-30"></div>
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
