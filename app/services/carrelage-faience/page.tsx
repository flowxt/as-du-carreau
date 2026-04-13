import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '../../components/animations';

export const metadata: Metadata = {
  title: "Carrelages & Faïences - Pose Traditionnelle & Grands Formats",
  description: "Pose de carrelage et faïence par un artisan expert. Pose traditionnelle, grands formats, travertin, zellige, isolation phonique. Finitions soignées à Saint-Égrève.",
  alternates: {
    canonical: 'https://las-du-carreau.fr/services/carrelage-faience',
  },
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
    description: 'Art du zellige pour des créations uniques et authentiques.',
  },
  {
    title: 'Escalier Intérieur',
    description: 'Habillage et pose de carrelage sur escaliers intérieurs : traitement des nez de marche, finitions sécurisées et rendu esthétique harmonieux.',
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
        <div className="absolute inset-0  opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 transition-colors mb-8" style={{ color: '#6B7280' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux services
          </Link>
          
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#6B7280' }}>
              Service
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Carrelages & Faïences
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Pose traditionnelle, grands formats, finitions soignées et conseils personnalisés 
              pour un résultat durable et harmonieux.
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
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/realisation/1000069762.jpg"
                alt="Meuble vasque et faïence moderne"
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

      {/* Features */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mes Spécialités
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Une expertise complète
            </h2>
            <div className="separator separator-center"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <span className="text-gold text-2xl block mb-6">◆</span>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {feature.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Isolation Phonique */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
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
                <p>
                  Grâce à la pose d&apos;une sous-couche acoustique, le revêtement est désolidarisé du support, 
                  ce qui limite efficacement la transmission des bruits d&apos;impact.
                </p>
              </div>
            </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
            <div className="bg-white p-8 md:p-12 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-6">Avantages</h3>
              <StaggerContainer className="space-y-4">
                {[
                  'Réduction des bruits d\'impact',
                  'Amélioration du confort acoustique',
                  'Compatible chauffage au sol',
                  'Pose durable et conforme aux normes',
                ].map((item, index) => (
                  <StaggerItem key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 lg:py-32 bg-cream ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Applications
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Pour tous vos espaces
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-black leading-relaxed mb-8">
                Le carrelage et la faïence s&apos;adaptent à tous les espaces de votre habitation. 
                Je vous conseille sur les meilleurs choix selon l&apos;usage, le style recherché 
                et les contraintes techniques de chaque pièce.
              </p>
            </div>
            </SlideIn>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {applications.map((app) => (
                <StaggerItem key={app} className="flex items-center gap-3 p-4 border border-charcoal/10 hover:border-gold/30 transition-colors">
                  <span className="text-gold text-xs flex-shrink-0">◆</span>
                  <span className="text-charcoal">{app}</span>
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
        </FadeIn>
      </section>
    </>
  );
}
