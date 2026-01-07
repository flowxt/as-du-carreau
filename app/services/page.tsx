import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Services | L'As Du Carreau - Carrelage, Mosaïque, Salles de Bain",
  description: "Découvrez tous les services de L'As Du Carreau : pose de carrelage, faïence, mosaïque, douches à l'italienne, salles de bain clé en main, terrasses et extérieurs.",
};

const services = [
  {
    title: 'Carrelage & Faïence',
    description: 'Pose traditionnelle, grands formats, travertin, zellige... Des finitions soignées et des conseils personnalisés pour un résultat durable et harmonieux.',
    href: '/services/carrelage-faience',
    features: ['Pose traditionnelle', 'Grands formats', 'Travertin & zellige', 'Conseils personnalisés'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: 'Mosaïque',
    description: 'Décorative ou technique, la mosaïque apporte une touche unique à vos espaces. Création personnalisée pour salle de bain, cuisine, piscine et éléments décoratifs.',
    href: '/services/mosaique',
    features: ['Créations personnalisées', 'Salles de bain', 'Piscines', 'Éléments décoratifs'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Douches à l\'Italienne & Salles de Bain',
    description: 'Conception complète ou rénovation, création de douches à l\'italienne, étanchéité parfaite, faïence, sol et mur. Possibilité de salles de bain clé en main.',
    href: '/services/salles-de-bain',
    features: ['Douches à l\'italienne', 'Étanchéité garantie', 'Rénovation complète', 'Clé en main'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Terrasses, Piscines & Extérieurs',
    description: 'Pose de carrelage extérieur, margelles, escaliers, terrasses et zones piscine. Solutions adaptées aux contraintes climatiques et de sécurité.',
    href: '/services/exterieurs',
    features: ['Terrasses', 'Piscines & margelles', 'Escaliers extérieurs', 'Antidérapant'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
  },
  {
    title: 'Travaux de Préparation',
    description: 'Ragréage, chapes, nivellement du support, conseils techniques... Une préparation rigoureuse des surfaces pour garantir une pose parfaite et durable.',
    href: '/services/preparation',
    features: ['Ragréage', 'Chapes', 'Nivellement', 'Conseils techniques'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Nos Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Un savoir-faire complet pour tous vos projets
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              De la préparation du support à la finition la plus minutieuse, 
              je vous accompagne à chaque étape avec expertise et passion.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image placeholder */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-charcoal aspect-[4/3] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-tile-pattern-dark"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 border border-gold/30 flex items-center justify-center mx-auto mb-4 text-gold/50 group-hover:text-gold group-hover:border-gold transition-all duration-300">
                          {service.icon}
                        </div>
                        <p className="text-warm-gray text-sm">Photo à venir</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="text-gold text-sm font-semibold tracking-wide">
                    0{index + 1}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mt-2 mb-4">
                    {service.title}
                  </h2>
                  <div className="separator mb-6"></div>
                  <p className="text-slate leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-charcoal">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all duration-300"
                  >
                    En savoir plus
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Ma Méthode
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Comment je travaille
            </h2>
            <div className="separator separator-center"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Échange', desc: 'Discussion de votre projet, vos envies et contraintes' },
              { step: '02', title: 'Conseil', desc: 'Recommandations techniques et esthétiques personnalisées' },
              { step: '03', title: 'Devis', desc: 'Proposition détaillée, transparente et sans engagement' },
              { step: '04', title: 'Réalisation', desc: 'Exécution soignée dans le respect des délais' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-bold text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            Un projet en tête ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Contactez-moi pour discuter de votre projet et obtenir un devis gratuit personnalisé. 
            Je suis à votre écoute pour vous conseiller et vous accompagner.
          </p>
          <Link href="/contact" className="btn-primary">
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>
    </>
  );
}


