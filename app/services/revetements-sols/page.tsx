import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '../../components/animations';

export const metadata: Metadata = {
  title: "Revêtements de Sols | L'as Du Carreau - Parquet, PVC Clipsable",
  description: "Pose de revêtements de sols : parquet contrecollé, parquet massif en pose flottante, lames PVC clipsables. Solutions durables et esthétiques à Saint-Égrève.",
};

const revetements = [
  {
    title: 'Parquet Contrecollé en Pose Flottante',
    description: 'Installation durable et élégante, adaptée à toutes les pièces. Le parquet contrecollé offre un excellent rapport qualité-prix tout en apportant la chaleur du bois à votre intérieur.',
    features: ['Durabilité', 'Élégance', 'Adapté toutes pièces', 'Pose rapide'],
  },
  {
    title: 'Parquet Massif en Pose Flottante',
    description: 'Rendu naturel haut de gamme, avec confort et stabilité sans fixation directe au sol. Le parquet massif apporte authenticité et noblesse à vos espaces de vie.',
    features: ['Haut de gamme', 'Rendu naturel', 'Confort optimal', 'Stabilité'],
  },
  {
    title: 'Lames PVC Clipsables',
    description: 'Solution pratique, résistante et esthétique, facile à entretenir. Les lames PVC clipsables sont idéales pour les pièces à fort passage ou les environnements humides.',
    features: ['Pratique', 'Résistant', 'Facile d\'entretien', 'Pièces humides'],
  },
];

const avantages = [
  'Installation soignée et précise',
  'Finitions parfaites',
  'Conseils personnalisés sur le choix du revêtement',
  'Résultat stable, confortable et harmonieux',
  'Cohérence avec le reste des travaux',
  'Respect des normes de pose',
];

export default function RevetementsSolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0">
          <Image
            src="/photo/parquet-contrecolle-chene-massif.jpg"
            alt="Parquet contrecollé"
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
              Revêtements de Sols
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Pour compléter l&apos;offre de carrelage, je propose également la pose de sols flottants 
              et clipsables, adaptée à tous types d&apos;intérieurs.
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
                Des solutions adaptées à chaque projet
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  Au-delà du carrelage, je vous accompagne également dans la pose de revêtements de sols 
                  alternatifs. Parquet contrecollé, parquet massif ou lames PVC clipsables : chaque solution 
                  a ses avantages et répond à des besoins spécifiques.
                </p>
                <p>
                  Ces revêtements sont particulièrement adaptés pour les pièces où vous recherchez la chaleur 
                  du bois ou une solution pratique et résistante, tout en bénéficiant d&apos;une pose 
                  professionnelle garantissant un résultat impeccable.
                </p>
                <p>
                  Chaque installation est réalisée avec soin et précision, afin de garantir un résultat 
                  stable, confortable et harmonieux, en parfaite cohérence avec le reste des travaux.
                </p>
              </div>
            </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/photo/lame-pvc-clipsable.jpg"
                alt="Lames PVC clipsables"
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

      {/* Types de revêtements */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Types de revêtements
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Trois solutions pour vos sols
            </h2>
            <div className="separator separator-center"></div>
          </FadeIn>

          <div className="space-y-12">
            {revetements.map((rev, index) => (
              <div key={rev.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <SlideIn direction={index % 2 === 1 ? 'right' : 'left'} delay={index * 0.1} className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-cream p-8 md:p-12">
                    <span className="text-gold text-sm font-semibold mb-4 block">0{index + 1}</span>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                      {rev.title}
                    </h3>
                    <p className="text-slate leading-relaxed mb-6">
                      {rev.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {rev.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gold"></div>
                          <span className="text-charcoal text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SlideIn>
                <SlideIn direction={index % 2 === 1 ? 'left' : 'right'} delay={0.2} className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="h-64 bg-charcoal/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                        <span className="font-serif text-2xl font-bold text-gold">0{index + 1}</span>
                      </div>
                      <p className="text-charcoal font-medium">{rev.title.split(' ')[0]}</p>
                    </div>
                  </div>
                </SlideIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 lg:py-32 section-dark ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Pose professionnelle
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Pourquoi faire appel à un professionnel ?
            </h2>
            <div className="separator separator-center"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {avantages.map((item, index) => (
              <StaggerItem key={index} className="flex items-center gap-4 p-4 border border-white/10 hover:border-gold/30 transition-colors">
                <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-cream text-sm">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <FadeIn className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Un projet de revêtement de sol ?
          </h2>
          <p className="text-slate text-lg mb-8">
            Contactez-moi pour discuter de votre projet et choisir le revêtement le plus adapté 
            à vos besoins et à votre budget.
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
