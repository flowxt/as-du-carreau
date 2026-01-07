import Link from 'next/link';
import { Metadata } from 'next';

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

export default function CarrelageFaiencePage() {
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

            <div className="bg-charcoal aspect-[4/3] relative">
              <div className="absolute inset-0 bg-tile-pattern-dark"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-gold/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                  <p className="text-warm-gray text-sm">Photo à venir</p>
                </div>
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


