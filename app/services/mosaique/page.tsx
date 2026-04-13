import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '../../components/animations';

export const metadata: Metadata = {
  title: "Mosaïque & Créations Personnalisées",
  description: "Création de mosaïques personnalisées pour salle de bain, cuisine, piscine et éléments décoratifs. Artisan mosaïste expert à Saint-Égrève et région grenobloise.",
  alternates: {
    canonical: 'https://las-du-carreau.fr/services/mosaique',
  },
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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <Image
            src="/photo/pose-credence-mosaique.jpg"
            alt="Mosaïque crédence"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0  opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 transition-colors mb-8 text-gold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux services
          </Link>
          
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block text-gold">
              Service
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
              Mosaïque et Créations Personnalisées
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed text-black">
              Décorative ou technique, la mosaïque apporte une touche unique à vos espaces. 
              Créations personnalisées pour sublimer votre intérieur et extérieur.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
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
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/realisation/1000070352.jpg"
                alt="Mosaïque pièce de vie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 right-3">
                <img src="/monogramme-blanc.png" alt="LDC" className="w-8 h-8 opacity-60 drop-shadow-md" />
              </div>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Applications
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Des possibilités infinies
            </h2>
            <div className="separator separator-center"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {applications.map((app) => (
              <StaggerItem key={app.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <span className="text-gold text-2xl block mb-6">◆</span>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {app.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {app.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Types de mosaïque */}
      <section className="py-24 lg:py-32 bg-cream ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Matériaux
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Une variété de matériaux et de styles
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-black leading-relaxed mb-8">
                Chaque type de mosaïque offre des propriétés et un rendu esthétique différent. 
                Je vous guide dans le choix du matériau le plus adapté à votre projet, 
                en tenant compte de l&apos;usage, du style recherché et de votre budget.
              </p>
            </div>
            </SlideIn>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {types.map((type) => (
                <StaggerItem key={type} className="flex items-center gap-3 p-4 border border-charcoal/10 hover:border-gold/30 transition-colors">
                  <span className="text-gold text-xs flex-shrink-0">◆</span>
                  <span className="text-charcoal">{type}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <FadeIn className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
        </FadeIn>
      </section>
    </>
  );
}
