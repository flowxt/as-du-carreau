import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0  opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              À Propos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Plus qu&apos;un métier,<br />une passion
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Depuis plus de vingt ans, je consacre ma vie professionnelle à un seul et même métier : 
              carreleur mosaïste. Un métier qui, pour moi, dépasse la simple technique.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Texte principal */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Un savoir-faire précieux, perfectionné chaque jour
              </h2>
              <div className="separator mb-8"></div>
              
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
            </div>

            {/* Image */}
            <div className="relative lg:sticky lg:top-32">
              <div className="aspect-[3/4] relative overflow-hidden shadow-xl">
                <Image
                  src="/photo/mickael.jpg"
                  alt="Mickael, fondateur de L'as Du Carreau"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Filigrane LDC */}
                <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded">
                  <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">
                    LDC
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mon Parcours
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              20 ans d&apos;expérience et de passion
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
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
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 lg:py-32 section-dark ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Domaines d&apos;expertise
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                Une maîtrise complète du carrelage
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-warm-gray leading-relaxed mb-8">
                Au fil des années, j&apos;ai développé une solide expérience dans de nombreux domaines. 
                Chaque matériau, chaque format et chaque configuration nécessite une maîtrise précise, 
                que j&apos;ai acquise au fil de multiples chantiers réalisés avec soin et rigueur.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 border border-white/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-gold flex-shrink-0"></div>
                  <span className="text-cream/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Mon Engagement
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            L&apos;accompagnement au cœur de ma démarche
          </h2>
          <div className="separator separator-center mb-8"></div>
          
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

          <div className="mt-12 p-8 bg-white shadow-lg border-l-4 border-gold">
            <p className="font-serif text-2xl text-charcoal italic leading-relaxed">
                    &ldquo;L&apos;as Du Carreau, c&apos;est la promesse d&apos;un artisanat authentique, d&apos;une expertise 
              reconnue et d&apos;un engagement constant : sublimer vos espaces, carreau après carreau, 
              avec élégance et précision.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0  opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
            Toujours disponible pour échanger, conseiller et accompagner, 
            je vous invite à me contacter pour tout renseignement ou pour obtenir un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/services" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Découvrir mes services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


