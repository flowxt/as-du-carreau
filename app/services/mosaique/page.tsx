import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mosaïque | L'As Du Carreau - Créations Personnalisées",
  description: "Création de mosaïques personnalisées pour salle de bain, cuisine, piscine et éléments décoratifs. Artisan mosaïste expert à Saint-Égrève et région grenobloise.",
};

const applications = [
  {
    title: 'Salles de Bain',
    description: 'Habillage de douches, niches décoratives, sols et murs pour des espaces uniques.',
  },
  {
    title: 'Cuisines',
    description: 'Crédences originales et plans de travail qui apportent caractère et personnalité.',
  },
  {
    title: 'Piscines',
    description: 'Mosaïque de piscine résistante aux produits de traitement et aux variations de température.',
  },
  {
    title: 'Éléments Décoratifs',
    description: 'Fresques, motifs personnalisés, habillage de colonnes ou éléments architecturaux.',
  },
];

const types = [
  'Mosaïque de verre',
  'Mosaïque de pierre naturelle',
  'Mosaïque céramique',
  'Mosaïque métallique',
  'Motifs géométriques',
  'Créations sur mesure',
];

export default function MosaiquePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
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
              Mosaïque
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Décorative ou technique, la mosaïque apporte une touche unique à vos espaces. 
              Créations personnalisées pour sublimer votre intérieur et extérieur.
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
                L&apos;art de la mosaïque au service de votre créativité
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  La mosaïque est un art millénaire qui permet de créer des espaces véritablement 
                  uniques. Qu&apos;elle soit décorative ou technique, elle apporte une dimension 
                  artistique à vos projets tout en offrant une durabilité exceptionnelle.
                </p>
                <p>
                  En tant que carreleur mosaïste, je maîtrise les différentes techniques de pose 
                  et travaille avec une variété de matériaux : verre, pierre naturelle, céramique, 
                  métal... Chaque création est pensée pour s&apos;intégrer parfaitement à votre espace.
                </p>
                <p>
                  Du motif géométrique simple à la fresque complexe, je vous accompagne dans la 
                  conception et la réalisation de mosaïques qui vous ressemblent.
                </p>
              </div>
            </div>

            <div className="bg-charcoal aspect-[4/3] relative">
              <div className="absolute inset-0 bg-tile-pattern-dark"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-gold/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <p className="text-warm-gray text-sm">Photo à venir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Applications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Des possibilités infinies
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <div className="w-2 h-8 bg-gold mb-6"></div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {app.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de mosaïque */}
      <section className="py-24 lg:py-32 section-dark bg-tile-pattern-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Matériaux
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                Une variété de matériaux et de styles
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-warm-gray leading-relaxed mb-8">
                Chaque type de mosaïque offre des propriétés et un rendu esthétique différent. 
                Je vous guide dans le choix du matériau le plus adapté à votre projet, 
                en tenant compte de l&apos;usage, du style recherché et de votre budget.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {types.map((type) => (
                <div key={type} className="flex items-center gap-3 p-4 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="w-2 h-2 bg-gold"></div>
                  <span className="text-cream">{type}</span>
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
            Envie d&apos;une création unique ?
          </h2>
          <p className="text-slate text-lg mb-8">
            Partagez-moi votre vision et créons ensemble une mosaïque qui vous ressemble.
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


