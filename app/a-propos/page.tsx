import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/animations';

export const metadata: Metadata = {
  title: "À Propos | L'as Du Carreau - Artisan Carreleur depuis 20 ans",
  description: "Découvrez le parcours et l'engagement de L'as Du Carreau, artisan carreleur mosaïste passionné depuis plus de 20 ans à Saint-Égrève.",
};

const timeline = [
  {
    year: 'Début de carrière',
    title: 'Les premières années',
    description: 'Entrée dans le métier de carreleur, apprentissage des techniques traditionnelles et développement de la passion pour ce métier d\'exception.',
  },
  {
    year: '2011',
    title: 'Création de L\'as du Carreau',
    description: 'Fondation de l\'entreprise avec une ambition claire : proposer un service artisanal d\'excellence où précision, écoute et maîtrise des matériaux se conjuguent.',
  },
  {
    year: 'Aujourd\'hui',
    title: '+20 ans d\'expertise',
    description: 'Une solide expérience dans tous types de projets : carrelage, faïence, mosaïque, salles de bain, terrasses et piscines.',
  },
];

const expertise = [
  'Pose de carrelage et faïence',
  'Mosaïque personnalisée',
  'Création de douches à l\'italienne',
  'Ragréage et réalisation de chapes',
  'Salles de bain clé en main',
  'Pose en extérieur : terrasses, piscines',
  'Crédences de cuisine',
  'Grands formats et travertin',
  'Pose de zellige',
];

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
        <div className="absolute inset-0  opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn delay={0}>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                À Propos
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                Plus qu&apos;un métier,<br />une passion
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="separator mb-8"></div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl leading-relaxed text-black">
                Depuis plus de vingt ans, je consacre ma vie professionnelle à un seul et même métier : 
                carreleur mosaïste. Un métier qui, pour moi, dépasse la simple technique.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Texte principal */}
            <SlideIn direction="left" delay={0}>
              <div>
                <FadeIn delay={0}>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                    Un savoir-faire précieux, perfectionné chaque jour
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="separator mb-8"></div>
                </FadeIn>
                
                <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  C&apos;est une <strong className="text-charcoal">passion</strong>, un savoir-faire 
                  précieux que je développe et perfectionne chaque jour pour offrir à mes clients 
                  des réalisations haut de gamme, élégantes et durables.
                </p>
                <p>
                  En 2011, j&apos;ai fondé <strong className="text-charcoal">L&apos;as Du Carreau</strong> avec 
                  une ambition claire : proposer un service artisanal d&apos;excellence, où la précision, 
                  l&apos;écoute et la maîtrise des matériaux se conjuguent pour créer des espaces uniques.
                </p>
                <p>
                  Mon expérience m&apos;a appris que la beauté d&apos;un ouvrage réside autant dans la qualité 
                  des matériaux que dans le soin apporté à chaque détail. C&apos;est pourquoi j&apos;accorde 
                  une attention particulière aux finitions, aux alignements, aux découpes les plus 
                  complexes, ainsi qu&apos;au choix des techniques les plus adaptées.
                </p>
                <p>
                  Chaque projet est abordé comme une pièce sur mesure, pensée pour s&apos;intégrer 
                  harmonieusement dans votre intérieur ou votre extérieur.
                </p>
              </div>
              <p className="text-right mt-8 text-3xl text-gold" style={{ fontFamily: 'var(--font-signature)' }}>
                Mickaël
              </p>
              </div>
            </SlideIn>

            {/* Image */}
            <SlideIn direction="right" delay={0.1}>
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[3/4] relative overflow-hidden shadow-xl">
                <Image
                  src="/mickael.jpeg"
                  alt="Mickael, fondateur de L'as Du Carreau"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Filigrane LDC */}
                <ScaleIn delay={0.3}>
                  <div className="absolute bottom-3 right-3">
                    <Image
                      src="/monogramme-blanc.png"
                      alt="LDC"
                      width={32}
                      height={32}
                      className="w-8 h-8 opacity-60 drop-shadow-md"
                    />
                  </div>
                </ScaleIn>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10"></div>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn delay={0}>
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Mon Parcours
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                20 ans d&apos;expérience et de passion
              </h2>
              <div className="separator separator-center"></div>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <StaggerItem key={index}>
                <div className="relative pl-8 pb-12 last:pb-0">
                  {/* Ligne verticale */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[3px] top-6 bottom-0 w-0.5 bg-gold/20"></div>
                  )}
                  {/* Point */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 bg-gold"></div>
                  
                  <div className="bg-cream p-6 border-l-2 border-gold/30 hover:border-gold transition-colors duration-300">
                    <span className="text-gold text-sm font-semibold tracking-wide">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 lg:py-32 bg-cream ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0}>
              <div>
                <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                  Domaines d&apos;expertise
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                  Une maîtrise complète du carrelage
                </h2>
                <div className="separator mb-8"></div>
                <p className="text-black leading-relaxed mb-8">
                  Au fil des années, j&apos;ai développé une solide expérience dans de nombreux domaines. 
                  Chaque matériau, chaque format et chaque configuration nécessite une maîtrise précise, 
                  que j&apos;ai acquise au fil de multiples chantiers réalisés avec soin et rigueur.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <StaggerItem key={index}>
                  <div
                    className="flex items-center gap-3 p-4 border border-charcoal/10 hover:border-gold/30 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gold flex-shrink-0"></div>
                    <span className="text-charcoal">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn delay={0}>
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mon Engagement
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              L&apos;accompagnement au cœur de ma démarche
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="separator separator-center mb-8"></div>
          </FadeIn>
          
          <div className="text-slate leading-relaxed space-y-6 text-left md:text-center">
            <p>
              Au-delà de la réalisation, l&apos;accompagnement occupe une place centrale dans ma démarche. 
              Je prends le temps de comprendre vos envies, de vous conseiller avec justesse, et de vous 
              guider vers des solutions esthétiques et techniques qui correspondent à votre mode de vie 
              et à vos exigences.
            </p>
            <p>
              Parce que chaque projet est unique, j&apos;accorde une attention particulière à vos attentes : 
              style, contraintes techniques, ambiance souhaitée, choix des matériaux… Mon objectif est 
              de concevoir avec vous un espace qui vous ressemble, durable, esthétique et parfaitement réalisé.
            </p>
          </div>

          <ScaleIn delay={0.2}>
          <div className="mt-12 p-8 bg-white shadow-lg border-l-4 border-gold">
            <p className="font-serif text-2xl text-charcoal italic leading-relaxed">
                    &ldquo;L&apos;as Du Carreau, c&apos;est la promesse d&apos;un artisanat authentique, d&apos;une expertise 
              reconnue et d&apos;un engagement constant : sublimer vos espaces, carreau après carreau, 
              avec élégance et précision.&rdquo;
            </p>
            <p className="text-right mt-6 text-3xl text-gold" style={{ fontFamily: 'var(--font-signature)' }}>
              Mickaël
            </p>
          </div>
          </ScaleIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-cream">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #111212, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn delay={0}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-charcoal">
              Prêt à donner vie à votre projet ?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg mb-8 text-black">
              Toujours disponible pour échanger, conseiller et accompagner, 
              je vous invite à me contacter pour tout renseignement ou pour obtenir un devis gratuit.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/services" className="btn-secondary">
              Découvrir mes services
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}


