import Link from 'next/link';
import { Metadata } from 'next';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PhotoGallery from '../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Nos Réalisations | L'as Du Carreau - Avant/Après & Galerie Photos",
  description: "Découvrez les réalisations de L'as Du Carreau : transformations avant/après spectaculaires, salles de bain, carrelage, mosaïque. Plus de 20 ans de savoir-faire.",
};

const beforeAfterProjects = [
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
    id: 3,
    before: '/avant-apres/avant3.jpg',
    after: '/avant-apres/apres3.jpg',
    title: 'Pose soign\u00e9e',
    description: 'Mise en valeur des surfaces avec un carrelage raffin\u00e9',
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
    id: 6,
    before: '/avant-apres/avant6.jpg',
    after: '/avant-apres/apres6.jpg',
    title: 'Carrelage contemporain',
    description: 'Un style actuel et des finitions pr\u00e9cises',
  },
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
    id: 10,
    before: '/avant-apres/avant10.jpg',
    after: '/avant-apres/apres10.jpg',
    title: 'Finitions impeccables',
    description: 'Un rendu propre et parfaitement align\u00e9',
  },
  {
    id: 11,
    before: '/avant-apres/avant11.jpg',
    after: '/avant-apres/apres11.jpg',
    title: 'Transformation r\u00e9ussie',
    description: 'Des joints ma\u00eetris\u00e9s pour un r\u00e9sultat premium',
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
    id: 14,
    before: '/avant-apres/avant14.jpg',
    after: '/avant-apres/apres14.jpg',
    title: 'Carrelage haut de gamme',
    description: 'Pose de carrelage pour un espace lumineux et contemporain',
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

const galleryPhotos = [
  // Nouvelles photos
  { src: '/photo/balcon.jpg', alt: 'Carrelage balcon ext\u00e9rieur' },
  { src: '/photo/credence-magnifique.jpg', alt: 'Cr\u00e9dence cuisine design' },
  { src: '/photo/douche-new.jpg', alt: 'Douche moderne carrel\u00e9e' },
  { src: '/photo/full-douche.jpg', alt: 'Salle de bain compl\u00e8te' },
  { src: '/photo/mur.jpg', alt: 'Fa\u00efence murale noire' },
  { src: '/photo/new-douche.jpg', alt: 'Douche travertin et mosa\u00efque' },
  // R\u00e9alisations du dossier as-realisation
  { src: '/as-realisation/1000069758.jpg', alt: 'R\u00e9alisation carrelage' },
  { src: '/as-realisation/1000069769.jpg', alt: 'Pose carrelage' },
  { src: '/as-realisation/1000069773.jpg', alt: 'Carrelage int\u00e9rieur' },
  { src: '/as-realisation/1000069774.jpg', alt: 'Finitions carrelage' },
  { src: '/as-realisation/1000069775.jpg', alt: 'R\u00e9novation sol' },
  { src: '/as-realisation/1000069780.jpg', alt: 'Travaux carrelage' },
  { src: '/as-realisation/1000069795.jpg', alt: 'Carrelage moderne' },
  { src: '/as-realisation/1000069811.jpg', alt: 'Pose professionnelle' },
  { src: '/as-realisation/1000070335.jpg', alt: 'R\u00e9alisation artisanale' },
  { src: '/as-realisation/1000070336.jpg', alt: 'Carrelage design' },
  { src: '/as-realisation/1000070338.jpg', alt: 'Sol carrel\u00e9' },
  { src: '/as-realisation/1000070339.jpg', alt: 'Pose carrelage grand format' },
  { src: '/as-realisation/1000070340.jpg', alt: 'Finitions soign\u00e9es' },
  { src: '/as-realisation/1000070341.jpg', alt: 'Carrelage salle de bain' },
  { src: '/as-realisation/1000070345.jpg', alt: 'R\u00e9novation carrelage' },
  { src: '/as-realisation/1000070347.jpg', alt: 'Pose fa\u00efence' },
  { src: '/as-realisation/1000070348.jpg', alt: 'Carrelage mural' },
  { src: '/as-realisation/1000070349.jpg', alt: 'Travail artisan' },
  { src: '/as-realisation/1000070350.jpg', alt: 'Pose traditionnelle' },
  { src: '/as-realisation/1000070351.jpg', alt: 'Carrelage contemporain' },
  { src: '/as-realisation/1000070352.jpg', alt: 'R\u00e9alisation L\'as Du Carreau' },
  { src: '/as-realisation/1000070353.jpg', alt: 'Pose experte' },
  { src: '/as-realisation/1000070354.jpg', alt: 'Carrelage haut de gamme' },
  { src: '/as-realisation/1000070355.jpg', alt: 'Finition professionnelle' },
  { src: '/as-realisation/1000070356.jpg', alt: 'Carrelage \u00e9l\u00e9gant' },
  { src: '/as-realisation/1000070357.jpg', alt: 'Pose carreleur' },
  { src: '/as-realisation/1000070358.jpg', alt: 'Travaux r\u00e9novation' },
  { src: '/as-realisation/1000070359.jpg', alt: 'Carrelage int\u00e9rieur' },
  { src: '/as-realisation/1000070360.jpg', alt: 'Sol moderne' },
  { src: '/as-realisation/1000070361.jpg', alt: 'Carrelage tendance' },
  { src: '/as-realisation/1000070362.jpg', alt: 'Pose soign\u00e9e' },
  { src: '/as-realisation/1000070363.jpg', alt: 'R\u00e9alisation carrelage' },
  { src: '/as-realisation/1000070364.jpg', alt: 'Carrelage premium' },
  { src: '/as-realisation/1000070365.jpg', alt: 'Finitions parfaites' },
  { src: '/as-realisation/1000070366.jpg', alt: 'Pose carrelage expertise' },
  { src: '/as-realisation/1000070367.jpg', alt: 'Carrelage artisanal' },
  { src: '/as-realisation/1000070368.jpg', alt: 'R\u00e9novation totale' },
  { src: '/as-realisation/1000070369.jpg', alt: 'Carrelage qualit\u00e9' },
  { src: '/as-realisation/1000070378.jpg', alt: 'Pose professionnelle' },
  // Piscines
  { src: '/piscine.png', alt: 'Piscine carrel\u00e9e' },
  { src: '/piscine1.png', alt: 'Am\u00e9nagement piscine' },
  { src: '/piscine2.png', alt: 'Tour de piscine' },
  // Parements
  { src: '/parement.png', alt: 'Parement mural' },
  { src: '/photo/parement.jpg', alt: 'Parement d\u00e9coratif' },
  { src: '/photo/parement2.jpg', alt: 'Parement pierre' },
  { src: '/photo/parement3.jpg', alt: 'Parement int\u00e9rieur' },
  { src: '/photo/parement-pierre-nat.jpg', alt: 'Parement pierre naturelle' },
  // Salles de bain
  { src: '/photo/sdb.jpg', alt: 'Salle de bain moderne' },
  { src: '/photo/sdb8.jpg', alt: 'Douche \u00e0 l\'italienne' },
  { src: '/photo/sdb9.jpg', alt: 'Fa\u00efence contemporaine' },
  { src: '/photo/sdb10.jpg', alt: 'Carrelage grand format' },
  { src: '/photo/sdb11.jpg', alt: 'R\u00e9novation salle de bain' },
  { src: '/photo/sdb12.jpg', alt: 'Douche design' },
  { src: '/photo/sdb13.jpg', alt: 'Salle d\'eau moderne' },
  { src: '/photo/sdb14.jpg', alt: 'Finitions soign\u00e9es' },
  { src: '/photo/sdb15.jpg', alt: 'Carrelage mural' },
  { src: '/photo/sdb16.jpg', alt: 'Espace douche' },
  { src: '/photo/sdb17.jpg', alt: 'Salle de bain r\u00e9nov\u00e9e' },
  { src: '/photo/sdb18.jpg', alt: 'Design contemporain' },
  { src: '/photo/sdb19.jpg', alt: 'Travail artisanal' },
  { src: '/photo/sdb21.jpg', alt: 'Salle de bain \u00e9l\u00e9gante' },
  { src: '/photo/sdb24.jpg', alt: 'Salle de bain luxe' },
  { src: '/photo/renov-sdb.jpg', alt: 'R\u00e9novation compl\u00e8te' },
  { src: '/photo/renov-sdb1.jpg', alt: 'Transformation salle de bain' },
  { src: '/photo/renov-sdb2.jpg', alt: 'Nouvelle salle d\'eau' },
  { src: '/photo/renov-sdb3.jpg', alt: 'Am\u00e9nagement moderne' },
  { src: '/photo/renov-sdb4.jpg', alt: 'Douche italienne' },
  { src: '/photo/renov-sdb5.jpg', alt: 'Carrelage et fa\u00efence' },
  { src: '/photo/renov-sdb6.jpg', alt: 'Finition professionnelle' },
  { src: '/photo/renov-sdb7.jpg', alt: 'Espace optimis\u00e9' },
  { src: '/photo/renov-wc.jpg', alt: 'R\u00e9novation WC' },
  // Douches
  { src: '/photo/douche.jpg', alt: 'Douche moderne' },
  { src: '/photo/douche1.jpg', alt: 'Installation douche' },
  { src: '/photo/douche2.jpg', alt: 'Douche design' },
  // Carrelage & fa\u00efence
  { src: '/photo/carreau-80_80.jpg', alt: 'Carrelage 80x80' },
  { src: '/photo/carreaux-80-80.jpg', alt: 'Grands carreaux 80x80' },
  { src: '/photo/carrelage-effet-carreau-de-ciment.jpg', alt: 'Carrelage effet carreau de ciment' },
  { src: '/photo/carrelage-imitation-bois.jpg', alt: 'Carrelage imitation bois' },
  { src: '/photo/faience-gres-cerame.jpg', alt: 'Fa\u00efence gr\u00e8s c\u00e9rame' },
  { src: '/photo/faience-metro-blanc.jpg', alt: 'Fa\u00efence m\u00e9tro blanc' },
  { src: '/photo/faience-metro.jpg', alt: 'Fa\u00efence m\u00e9tro' },
  { src: '/photo/zellige.jpg', alt: 'Zellige artisanal' },
  { src: '/photo/zellige2.jpg', alt: 'Pose de zellige' },
  // Cr\u00e9dences & mosa\u00efque
  { src: '/photo/credence-sur-mesure.jpg', alt: 'Cr\u00e9dence sur mesure' },
  { src: '/photo/pose-credence-mosaique.jpg', alt: 'Cr\u00e9dence mosa\u00efque' },
  // Ext\u00e9rieur
  { src: '/photo/ext-60_60.jpg', alt: 'Carrelage ext\u00e9rieur 60x60' },
  // Rev\u00eatements de sol
  { src: '/photo/lame-pvc-clipsable.jpg', alt: 'Lame PVC clipsable' },
  { src: '/photo/parquet-contrecolle-chene-massif.jpg', alt: 'Parquet contrecoll\u00e9 ch\u00eane' },
  // Pr\u00e9paration & technique
  { src: '/photo/chape.jpg', alt: 'R\u00e9alisation chape' },
  { src: '/photo/ragr\u00e9age.jpg', alt: 'Ragr\u00e9age sol' },
  // Apr\u00e8s (r\u00e9sultats finaux)
  { src: '/photo/apres1.jpg', alt: 'R\u00e9sultat final r\u00e9novation' },
  { src: '/photo/apres2.jpg', alt: 'Transformation r\u00e9ussie' },
  { src: '/photo/apres3.jpg', alt: 'Am\u00e9nagement ext\u00e9rieur fini' },
  { src: '/photo/apres4.jpg', alt: 'Habillage muret termin\u00e9' },
  { src: '/photo/apres5.jpg', alt: 'Terrasse r\u00e9nov\u00e9e' },
  { src: '/photo/apres6-1.jpg', alt: 'Projet finalis\u00e9' },
  { src: '/photo/apres7.jpg', alt: 'R\u00e9novation achev\u00e9e' },
  { src: '/photo/apres8.jpg', alt: 'Finitions parfaites' },
  { src: '/photo/apres9.jpg', alt: 'Design final' },
  { src: '/photo/1000069811.jpg', alt: 'R\u00e9alisation professionnelle' },
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
              Nos R\u00e9alisations
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Plus de 20 ans de savoir-faire
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              D\u00e9couvrez quelques-unes de nos r\u00e9alisations et transformations. 
              Chaque projet t\u00e9moigne de notre passion pour le m\u00e9tier et notre souci du d\u00e9tail.
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
              Agences immobili\u00e8res, syndics, copropri\u00e9t\u00e9s... Nous intervenons pour tous vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Section Avant/Apr\u00e8s */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Transformations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Avant / Apr\u00e8s
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Glissez le curseur sur les images pour d\u00e9couvrir les transformations spectaculaires 
              r\u00e9alis\u00e9es par L&apos;as Du Carreau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project) => (
              <div key={project.id} className="bg-white p-4 shadow-lg hover-lift">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`${project.title} - Avant`}
                  afterAlt={`${project.title} - Apr\u00e8s`}
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
              Un aper\u00e7u de la qualit\u00e9 et du soin apport\u00e9s \u00e0 chaque r\u00e9alisation. 
              Cliquez sur une image pour l&apos;agrandir et naviguez avec les fl\u00e8ches.
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
              D\u00e9couvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
