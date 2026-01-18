import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import PhotoGallery from '../../components/PhotoGallery';

export const metadata: Metadata = {
  title: "Salles de Bain & Douches à l'Italienne | L'as Du Carreau",
  description: "Création et rénovation de salles de bain, douches à l'italienne avec étanchéité parfaite. Salles de bain clé en main en partenariat avec plombier professionnel.",
};

const services = [
  {
    title: 'Douches à l\'Italienne',
    description: 'Création de douches de plain-pied avec système d\'étanchéité professionnel pour un résultat durable et esthétique.',
  },
  {
    title: 'Étanchéité SPEC',
    description: 'Mise en œuvre de systèmes d\'étanchéité sous carrelage conformes aux normes pour une protection optimale.',
  },
  {
    title: 'Faïence Murale',
    description: 'Pose de faïence sur tous types de supports avec finitions soignées et joints parfaits.',
  },
  {
    title: 'Sols de Salle de Bain',
    description: 'Le carrelage de sol permet d\'assurer une continuité esthétique entre les différentes pièces de l\'habitation. Décliné en de nombreux formats, textures et finitions, il s\'adapte aussi bien aux ambiances modernes que traditionnelles.',
  },
  {
    title: 'Niches & Rangements',
    description: 'Création de niches intégrées et éléments de rangement carrelés pour un espace optimisé.',
  },
  {
    title: 'Clé en Main',
    description: 'Rénovation complète en partenariat avec un plombier professionnel pour un service tout inclus.',
  },
];

const process = [
  { step: '01', title: 'Étude du projet', desc: 'Analyse de l\'existant, de vos besoins et de vos envies' },
  { step: '02', title: 'Préparation', desc: 'Dépose, traitement du support, mise en place de l\'étanchéité' },
  { step: '03', title: 'Pose', desc: 'Installation du carrelage et de la faïence avec précision' },
  { step: '04', title: 'Finitions', desc: 'Joints, silicone, nettoyage et contrôle qualité' },
];

const galleryPhotos = [
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
];

export default function SallesDeBainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0">
          <Image
            src="/photo/sdb17.jpg"
            alt="Salle de bain réalisée par L'as Du Carreau"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0  opacity-30"></div>
        
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
              Douches à l&apos;Italienne & Salles de Bain
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Conception complète ou rénovation, création de douches à l&apos;italienne avec étanchéité 
              parfaite. Possibilité de salles de bain clé en main.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                La salle de bain, un espace d&apos;exception
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-6 text-slate leading-relaxed">
                <p>
                  La salle de bain est une pièce technique qui nécessite un savoir-faire particulier. 
                  L&apos;étanchéité, le choix des matériaux résistants à l&apos;humidité et la précision 
                  de la pose sont essentiels pour garantir un résultat durable.
                </p>
                <p>
                  Spécialiste de la <strong className="text-charcoal">douche à l&apos;italienne</strong>, 
                  je maîtrise les techniques d&apos;étanchéité SPEC et les contraintes spécifiques 
                  de ce type d&apos;installation : pente, siphon, receveur extra-plat ou maçonné.
                </p>
                <p>
                  Pour une rénovation complète, je travaille en partenariat avec un 
                  <strong className="text-charcoal"> plombier professionnel</strong> pour vous proposer 
                  une solution clé en main, de la dépose à la finition.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src="/photo/douche.jpg"
                alt="Douche à l'italienne"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded">
                <span className="text-white/80 font-serif text-sm font-semibold tracking-wider">LDC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Prestations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Une offre complète pour votre salle de bain
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover-lift">
                <div className="w-2 h-8 bg-gold mb-6"></div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Nos Réalisations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Salles de bain réalisées
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <PhotoGallery photos={galleryPhotos} columns={3} />

          <div className="text-center mt-12">
            <Link href="/realisations" className="btn-secondary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 section-dark ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Méthodologie
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Une réalisation dans les règles de l&apos;art
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-bold text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">{item.title}</h3>
                <p className="text-warm-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étanchéité */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-cream p-8 md:p-12 shadow-lg border-l-4 border-gold">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
              L&apos;importance de l&apos;étanchéité
            </h3>
            <p className="text-slate leading-relaxed mb-4">
              Une douche à l&apos;italienne ou une salle de bain mal étanchée peut causer des 
              dégâts importants : infiltrations, moisissures, dégradation des structures...
            </p>
            <p className="text-slate leading-relaxed">
              Je mets en œuvre des systèmes d&apos;étanchéité professionnels (SPEC) qui garantissent 
              une protection durable de vos ouvrages. Cette étape cruciale fait partie intégrante 
              de mes prestations pour vous assurer un résultat sans compromis.
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
            Projet de salle de bain ?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
            Création ou rénovation, je vous accompagne de A à Z pour créer l&apos;espace 
            dont vous rêvez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis
            </Link>
            <Link href="/services" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
