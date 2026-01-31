'use client';

import Link from 'next/link';
import Image from 'next/image';

const reviews = [
  {
    name: 'Carole Pessey',
    rating: 5,
    date: 'Mars 2021',
    reviewCount: '4 avis',
    text: "C'est la seconde fois que je fais appel à Mickaël pour ses services et je suis toujours très contente du résultat. J'apprécie grandement son professionnalisme. Tout en offrant un travail sérieux et de qualité, il est également très à l'écoute, ponctuel et soigneux. Il se montre très exigeant et précis dans ses réalisations et ne laisse rien au hasard. Il redonne vie à de vieilles pièces et son travail est remarquable. Il est une personne de confiance, ce qui dans ce métier est bien appréciable.",
  },
  {
    name: 'Geneviève Chevet',
    rating: 5,
    date: '2023',
    reviewCount: '3 avis',
    text: "Cette entreprise a refait intégralement un espace douche chez moi en 2023. Je n'ai pas hésité à la recontacter pour refaire l'autre salle de bain (parois baignoire et lavabos). Travail impeccable et fait dans les temps indiqués. Un bon contact à connaître !",
  },
  {
    name: 'Deborah',
    rating: 5,
    date: 'Avril 2025',
    reviewCount: '7 avis',
    text: "Artisan passionné et très professionnel. Mickaël a rénové entièrement notre appartement ainsi qu'une salle de bain en carreaux grand format, sur un chantier complexe dans une vieille bâtisse. Travail très soigné, méticuleux, avec un réel souci du détail. Chantier toujours propre, délais respectés et très bons conseils tout au long du projet. À l'écoute, ponctuel et d'un excellent contact. Nous recommandons vivement !",
  },
  {
    name: 'Cathy Laurent',
    rating: 5,
    date: 'Décembre 2025',
    reviewCount: '10 avis',
    text: "Nous avons fait appel à \"L'as du Carreau\" pour refaire notre salle de bain. Carrelage à poser du sol au plafond et faïence. Le résultat a été au-delà de ce qu'on avait imaginé. Mickaël nous a conseillé et aidé dans le choix des matériaux. Il a travaillé en collaboration avec le plombier. Travail minutieux et soigné, le chantier était nettoyé après chaque journée travaillée. D'une rapidité, d'un professionnalisme hors pair, d'une propreté et d'une amabilité au top. Toujours très courtois, et souriant... Nous recommandons très vivement et sincèrement Mickaël qui saura vous conseiller et vous aider au mieux dans votre projet. Encore mille merci Mickaël et nous ne manquerons pas de faire appel à vous si nous devions avoir un autre projet.",
  },
  {
    name: 'Lisa',
    rating: 5,
    date: 'Juillet 2024',
    reviewCount: '4 avis',
    text: "Depuis plusieurs années, nous avions confié plusieurs projets à Mickaël car le résultat est toujours impeccable. Il est très professionnel, minutieux, va trouver \"LE\" détail qui fera la différence ! Il est passionné, à l'écoute et toujours de très bon conseil. Et chaque chantier est rendu propre ce qui est très appréciable. Mickaël est l'artisan qui nous accompagne depuis plusieurs années à chaque fois que nous envisageons des améliorations et embellissement dans notre maison. Je recommande à 100%.",
  },
  {
    name: 'Wilfried Delahaye',
    rating: 5,
    date: 'Janvier 2016',
    reviewCount: '6 avis',
    text: "J'ai déjà fait appel à cet artisan 2 fois car c'est un professionnel méticuleux et maniaque. Il n'aime pas le travail mal fait. Il fera tout pour que ce soit parfait. Je vous le recommande vivement.",
  },
  {
    name: 'Corinne Lecuyer',
    rating: 5,
    date: 'Septembre 2025',
    reviewCount: '2 avis',
    text: "Mickaël a fait des travaux de rénovation dans notre appartement depuis 3 ans et le dernier chantier date de septembre 2025 (cuisine, entrée, salle de bains, WC et arrière cuisine). À chaque fois qu'il est intervenu nous avons apprécié ses conseils avisés sur le choix du carrelage. La pose est très minutieuse. On peut réellement lui faire confiance et c'est de plus une personne très sympathique. Ne pas hésiter !",
  },
  {
    name: 'Marie-France Gervasoni',
    rating: 5,
    date: 'Décembre 2025',
    reviewCount: '5 avis',
    text: "Mickaël est vraiment l'as du carreau : travail soigné, précis, propre, la gentillesse, le sérieux et le service en plus ! Il a transformé l'espace baignoire en douche (avec son partenaire plombier), je suis très très satisfaite du travail fait. Je le recommande vivement.",
  },
  {
    name: 'Fernand Killé',
    rating: 5,
    date: 'Décembre 2025',
    reviewCount: '4 avis',
    text: "Mickaël nous a réussi une rénovation d'anciens carrelages de hall d'entrée et de cuisine particulièrement vieillis (sol et murs avec de grands dénivelés). Vu la qualité de ce travail, nous lui avons confié, dans un 2ème temps, la rénovation du sol de la salle de bain et du coin toilettes. Avec la même satisfaction. C'est vraiment l'artisan des travaux délicats.",
  },
  {
    name: 'Marie-Christine Veyret',
    rating: 5,
    date: 'Octobre 2025',
    reviewCount: '1 avis',
    text: "Super sympa et travail bien fait. Rendez-vous bien honorés, on peut compter sur lui. C'est avec plaisir que je le recommande.",
  },
];

const partners = [
  {
    name: 'Point P',
    locations: [
      { name: 'Saint-Martin-d\'Hères', mapUrl: 'https://maps.google.com/?q=Point+P+Saint-Martin-d%27Hères', preferred: true },
      { name: 'Saint-Égrève', mapUrl: 'https://maps.google.com/?q=Point+P+Saint-Égrève' },
      { name: 'Voiron', mapUrl: 'https://maps.google.com/?q=Point+P+Voiron' },
      { name: 'Grenoble', mapUrl: 'https://maps.google.com/?q=Point+P+Grenoble' },
    ],
    description: 'Matériaux de construction',
    logo: '/partenaires/point_p.png',
  },
  {
    name: 'Proalp Carrelages',
    locations: [
      { name: 'Saint-Martin-d\'Hères', mapUrl: 'https://maps.google.com/?q=Proalp+Carrelages+Saint-Martin-d%27Hères' },
      { name: 'Voiron', mapUrl: 'https://maps.google.com/?q=Proalp+Carrelages+Voiron' },
    ],
    description: 'Spécialiste carrelage professionnel',
    logo: '/partenaires/proalp.png',
  },
  {
    name: 'Careo Grenoble',
    location: 'Échirolles',
    description: 'Carrelage et revêtements',
    logo: '/partenaires/careo.png',
    mapUrl: 'https://maps.google.com/?q=Careo+Grenoble+Echirolles',
  },
  {
    name: 'Carrelage et Bain',
    location: 'Saint-Égrève',
    description: 'Showroom salle de bain et carrelage',
    logo: '/partenaires/carrelage_et_bain.png',
    mapUrl: 'https://maps.google.com/?q=Carrelage+et+Bain+Saint-Égrève',
  },
  {
    name: 'Richardson',
    location: 'Grenoble',
    description: 'Showroom carrelage et salle de bain',
    logo: '/partenaires/richardson.png',
    mapUrl: 'https://maps.google.com/?q=Richardson+Grenoble',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[400px] flex-shrink-0 bg-white rounded-xl p-6 shadow-lg border border-gray-100 mx-3 flex flex-col">
      {/* Header avec étoiles et date */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} />
        <span className="text-slate text-xs bg-cream px-2 py-1 rounded">{review.date}</span>
      </div>
      
      {/* Texte de l'avis */}
      <p className="text-slate leading-relaxed text-sm mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      
      {/* Footer avec avatar et nom - toujours en bas */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
        <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-charcoal text-sm">{review.name}</p>
          <p className="text-slate text-xs">{review.reviewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default function AvisPage() {
  // Dupliquer les avis pour le défilement infini
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Témoignages
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Avis Clients & Partenaires
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Découvrez ce que nos clients disent de L&apos;as Du Carreau et nos partenaires 
              de confiance pour vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi un carreleur pro */}
      <section className="py-16 lg:py-20 bg-gold">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              Pourquoi faire appel à un carreleur professionnel à Grenoble et alentours ?
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed text-left md:text-center">
              <p>
                Faire appel à un carreleur professionnel à Grenoble, basé à Saint-Égrève, permet de garantir 
                une pose de carrelage soignée, durable et conforme aux normes. Spécialisé dans la pose de 
                carrelage intérieur et extérieur, j&apos;interviens sur Grenoble et l&apos;ensemble de son 
                agglomération pour assurer un <strong className="text-white">alignement précis</strong>, des 
                <strong className="text-white"> joints réguliers et étanches</strong> et des 
                <strong className="text-white"> finitions de qualité</strong>.
              </p>
              <p>
                Dans le bassin grenoblois, où le climat peut être humide, des techniques de pose adaptées 
                sont essentielles pour prévenir les risques de fissures, de décollements et d&apos;infiltrations. 
                Faire appel à un artisan carreleur à Saint-Égrève intervenant à Grenoble et alentours, 
                c&apos;est choisir un travail <strong className="text-white">fiable, esthétique et durable</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <StarRating rating={5} />
              </div>
              <p className="text-3xl font-serif font-bold text-charcoal">5/5</p>
              <p className="text-slate text-sm">Note moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold">{reviews.length}</p>
              <p className="text-slate text-sm">Avis 5 étoiles</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-charcoal">+20 ans</p>
              <p className="text-slate text-sm">D&apos;expérience</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-charcoal">{partners.length}</p>
              <p className="text-slate text-sm">Partenaires de confiance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Clients - Carousel Infini */}
      <section className="py-24 lg:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Ce qu&apos;ils disent de nous
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Avis Clients
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-slate max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité. Voici quelques témoignages 
              de personnes ayant fait confiance à L&apos;as Du Carreau.
            </p>
          </div>
        </div>

        {/* Carousel Mobile - Swipe manuel */}
        <div className="md:hidden relative">
          {/* Ombre gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
          
          {/* Ombre droite */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

          {/* Carousel avec scroll snap */}
          <div 
            className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="snap-center">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          
          {/* Indicateur swipe */}
          <p className="text-center text-slate text-sm mt-4">
            ← Glissez pour voir plus →
          </p>
        </div>

        {/* Carousel Desktop - Animation automatique */}
        <div className="hidden md:block relative">
          {/* Ombre gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-cream via-cream to-transparent z-10 pointer-events-none"></div>
          
          {/* Ombre droite */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-cream via-cream to-transparent z-10 pointer-events-none"></div>

          {/* Carousel avec animation CSS */}
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Google Reviews Link */}
          <div className="text-center mt-16">
            <a 
              href="https://www.google.com/search?q=L%27as+du+Carreau+Saint-Egreve+avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gold/20 rounded-lg group"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <span className="text-charcoal font-medium block group-hover:text-gold transition-colors">Voir tous les avis sur Google</span>
                <span className="text-slate text-sm">Note : <span className="text-gold font-bold">★ 5.0</span></span>
              </div>
              <svg className="w-5 h-5 text-slate group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Nos Fournisseurs
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Partenaires de Confiance
            </h2>
            <div className="separator separator-center mb-6"></div>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Je travaille avec des fournisseurs de qualité pour vous garantir les meilleurs 
              matériaux pour vos projets de carrelage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Logo */}
                <div className="h-20 flex items-center justify-center mb-6 bg-gray-50 rounded-lg p-4">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={160}
                    height={60}
                    className="object-contain max-h-full"
                  />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                  {partner.name}
                </h3>
                
                <p className="text-slate text-sm mb-4">
                  {partner.description}
                </p>
                
                {/* Locations */}
                <div className="space-y-2">
                  {partner.locations ? (
                    partner.locations.map((loc, locIndex) => (
                      <a
                        key={locIndex}
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate hover:text-gold transition-colors group"
                      >
                        <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="group-hover:underline">{loc.name}</span>
                        {loc.preferred && (
                          <span className="bg-gold/20 text-gold text-xs font-medium px-2 py-0.5 rounded">
                            Préféré
                          </span>
                        )}
                      </a>
                    ))
                  ) : (
                    <a
                      href={partner.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate hover:text-gold transition-colors group"
                    >
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="group-hover:underline">{partner.location}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-cream">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate">
            Vous aussi, confiez votre projet à un artisan passionné et bénéficiez d&apos;un 
            travail de qualité. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un Devis Gratuit
            </Link>
            <Link href="/realisations" className="btn-secondary">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* CSS pour l'animation et le carousel */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
