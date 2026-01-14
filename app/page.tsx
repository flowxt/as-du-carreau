import Link from 'next/link';
import Image from 'next/image';
import BeforeAfterSlider from './components/BeforeAfterSlider';

const services = [
  {
    title: 'Carrelage & Faïence',
    description: 'Pose traditionnelle, grands formats, murs et sols, avec un travail soigné et des conseils personnalisés pour un résultat harmonieux et durable.',
    href: '/services/carrelage-faience',
    image: '/photo/faience-metro.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: 'Mosaïque & Créations',
    description: 'Décorative ou technique, la mosaïque apporte une touche unique à vos espaces : salles de bain, cuisines, piscines, crédences et éléments décoratifs sur mesure.',
    href: '/services/mosaique',
    image: '/photo/pose-credence-mosaique.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Salles de Bain',
    description: 'Création ou rénovation complète de salles de bain, conception de douches à l\'italienne, étanchéité, faïence, sols et murs. Possibilité de clé en main.',
    href: '/services/salles-de-bain',
    image: '/photo/renov-sdb4.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Terrasses & Extérieurs',
    description: 'Pose de carrelage extérieur, terrasses, margelles, escaliers, plages de piscine et zones techniques, avec des matériaux adaptés aux contraintes climatiques.',
    href: '/services/exterieurs',
    image: '/photo/ext-60_60.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
  },
  {
    title: 'Travaux de Préparation',
    description: 'Ragréage, chapes, étanchéité des surfaces, nivellement précis des supports. La base indispensable d\'un résultat fiable et durable.',
    href: '/services/preparation',
    image: '/photo/ragréage.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const engagements = [
  'Plus de 20 ans d\'expérience',
  'Travail artisanal soigné et précis',
  'Projets 100 % personnalisés',
  'Matériaux professionnels de qualité',
  'Respect des délais annoncés',
];

const savoirFaire = [
  'Salles de bain',
  'Douches à l\'italienne',
  'Cuisines',
  'Terrasses',
  'Piscines',
  'Escaliers et zones extérieures',
];

const featuredBeforeAfter = [
  {
    before: '/photo/avant1.jpg',
    after: '/photo/apres1.jpg',
    title: 'Rénovation salle de bain',
  },
  {
    before: '/photo/avant3.jpg',
    after: '/photo/apres3.jpg',
    title: 'Transformation complète',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#2C2C2C' }}>
        {/* Background pattern sobre */}
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ background: 'rgba(201, 169, 98, 0.1)', border: '1px solid rgba(201, 169, 98, 0.3)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#C9A962' }}></span>
            <span className="text-sm font-medium tracking-wide" style={{ color: '#C9A962' }}>Artisan Carreleur Mosaïste à Saint-Égrève (Isère)</span>
          </div>

          {/* Titre principal */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            L&apos;as du Carreau
          </h1>

          {/* Séparateur */}
          <div className="separator separator-center mb-8"></div>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 font-light" style={{ color: '#9CA3AF' }}>
            Plus de 20 ans d&apos;expérience au service de vos projets.
          </p>

          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: 'rgba(156, 163, 175, 0.8)' }}>
            Carrelage, faïence, mosaïque, douches à l&apos;italienne, salles de bain et extérieurs.
            <br />La précision d&apos;un artisan, la passion d&apos;un métier.
          </p>

          {/* Badge Pro & Particuliers */}
          <div className="inline-flex items-center gap-4 mb-12 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
            <span className="text-gold font-medium">Professionnels</span>
            <span className="text-gold/50">&</span>
            <span className="text-gold font-medium">Particuliers</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/realisations" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Qui suis-je
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                La passion du métier,<br />l&apos;excellence du résultat
              </h2>
              <div className="separator mb-8"></div>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Depuis plus de vingt ans, je mets mon expertise de carreleur mosaïste au service de chaque chantier. 
                  Formé dès le début de ma carrière avec un CAP et un Brevet Professionnel, j&apos;ai acquis une maîtrise 
                  complète des techniques de pose de carrelage et de mosaïque, en neuf comme en rénovation.
                </p>
                <p>
                  Depuis 2011, je poursuis cette passion en tant qu&apos;artisan indépendant avec <strong className="text-charcoal">L&apos;as du Carreau</strong>, 
                  garantissant des réalisations précises, durables et sur mesure.
                </p>
                <p>
                  Le carrelage est mon unique métier, celui que j&apos;ai choisi et auquel je me consacre pleinement, 
                  chantier après chantier. Chaque projet est conçu comme une réalisation sur mesure, avec un objectif 
                  constant : un rendu esthétique, durable et parfaitement exécuté, à la hauteur de votre confiance.
                </p>
              </div>
              <Link href="/a-propos" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300 mt-8">
                En savoir plus sur mon parcours
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden shadow-xl">
                <Image
                  src="/photo/sdb21.jpg"
                  alt="Salle de bain - L'as du Carreau"
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
                {/* Cadre décoratif */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10"></div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
                <p className="font-serif text-4xl font-bold text-gold">20+</p>
                <p className="text-charcoal font-medium">Années d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Savoir-Faire */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Un savoir-faire artisanal<br />au service de projets uniques
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-3xl mx-auto">
              Au fil des années, j&apos;ai développé une solide expérience dans la pose de carrelage, faïence, 
              mosaïque, travertin, zellige et grands formats, ainsi que dans l&apos;aménagement d&apos;espaces 
              techniques et décoratifs, intérieurs comme extérieurs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {savoirFaire.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-cream border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="w-2 h-2 bg-gold flex-shrink-0"></div>
                <span className="text-charcoal font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate mt-12 max-w-3xl mx-auto">
            Chaque matériau, chaque format et chaque configuration nécessitent une approche spécifique. 
            J&apos;accorde une attention particulière à la préparation des supports, à la précision des découpes, 
            à l&apos;alignement parfait et à la qualité des finitions, éléments essentiels à la durabilité et 
            à l&apos;esthétique de l&apos;ouvrage.
          </p>
        </div>
      </section>

      {/* Section Avant/Après Preview */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Transformations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Avant / Après
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Glissez le curseur pour découvrir nos transformations spectaculaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredBeforeAfter.map((project, index) => (
              <div key={index} className="bg-white p-4 shadow-lg hover-lift">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`${project.title} - Avant`}
                  afterAlt={`${project.title} - Après`}
                />
                <p className="mt-4 text-center font-serif text-xl text-charcoal">{project.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/realisations" className="btn-primary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mes Prestations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Des services complets<br />pour tous vos projets
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              De la préparation du support à la finition la plus minutieuse, 
              je vous accompagne à chaque étape de votre projet.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-elegant group overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 flex items-center justify-center text-gold">
                    {service.icon}
                  </div>
                  {/* Filigrane LDC */}
                  <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                    <span className="text-white/70 font-serif text-xs font-semibold tracking-wider">
                      LDC
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    En savoir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary">
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* Section Engagements */}
      <section className="py-24 lg:py-32 section-dark bg-tile-pattern-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Mes Engagements
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Pourquoi choisir<br />L&apos;as du Carreau ?
            </h2>
            <div className="separator separator-center mb-8"></div>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Mon objectif est simple : concevoir avec vous un espace qui vous ressemble, 
              fonctionnel, esthétique et réalisé dans les règles de l&apos;art.
            </p>
          </div>

          {/* Engagements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {engagements.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="w-8 h-8 bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-cream font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Avantages supplémentaires */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Accompagnement personnalisé de A à Z',
              'Conseils techniques et esthétiques',
              'Devis gratuit et transparent',
              'Intervention pour professionnels & particuliers',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-cream/90">
                <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Zone d'intervention */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Google Maps */}
            <div className="relative">
              <div className="bg-white shadow-lg overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=5.4%2C45.1%2C5.9%2C45.35&layer=mapnik&marker=45.2333%2C5.6833"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d'intervention - Saint-Égrève et région Grenobloise"
                ></iframe>
              </div>
              {/* Décoration */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 -z-10" style={{ borderColor: 'rgba(201, 169, 98, 0.2)' }}></div>
            </div>

            {/* Texte */}
            <div>
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Zone d&apos;intervention
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Carreleur à Saint-Égrève<br />et région Grenobloise
              </h2>
              <div className="separator mb-8"></div>
              <p className="text-slate leading-relaxed mb-6">
                Basé à <strong className="text-charcoal">Saint-Égrève (38)</strong>, j&apos;interviens dans toute 
                la région pour vos projets de carrelage et de mosaïque, en neuf comme en rénovation.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Agglomération Grenobloise</h4>
                  <p className="text-slate text-sm">
                    Grenoble, Saint-Égrève, Fontaine, Sassenage, Saint-Martin-le-Vinoux, Seyssinet-Pariset, 
                    Seyssins, Échirolles, Eybens, Saint-Martin-d&apos;Hères, Le Pont-de-Claix, La Tronche, 
                    Corenc, Noyarey, Fontanil-Cornillon...
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Grésivaudan & Vallée de l&apos;Isère</h4>
                  <p className="text-slate text-sm">
                    Meylan, Gières, Domène, Saint-Ismier, Biviers, Crolles, Villard-Bonnot, Pontcharra...
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Voironnais & Nord Isère</h4>
                  <p className="text-slate text-sm">
                    Voiron, Voreppe, Moirans, Tullins, Rives, Vinay...
                  </p>
                </div>
              </div>

              <p className="text-slate text-sm mb-6 p-4 bg-white border-l-4 border-gold">
                <strong>Hors secteur ?</strong> Des interventions sont possibles au-delà (Annecy, Chambéry, 
                Valence, Romans-sur-Isère...). Contactez-moi pour une étude personnalisée.
              </p>

              <Link href="/contact" className="btn-primary">
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        {/* Background décoratif */}
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="quote-mark block mb-4">&ldquo;</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#FAF9F6' }}>
            L&apos;as du Carreau, c&apos;est la promesse d&apos;un artisanat authentique, 
            d&apos;un travail précis et d&apos;un accompagnement sérieux.
          </h2>
          <div className="separator separator-center mb-8"></div>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Vous avez un projet de carrelage, une rénovation ou la création d&apos;une salle de bain ? 
            Confiez-le à un artisan carreleur mosaïste expérimenté, à l&apos;écoute et exigeant.
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
