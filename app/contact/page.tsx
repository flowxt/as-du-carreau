import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | L'as du Carreau",
  description: "Contactez L'as du Carreau pour votre projet de carrelage. Devis gratuit et personnalisé. Artisan carreleur mosaïste à Saint-Égrève et région grenobloise.",
};

const reasons = [
  {
    title: 'Devis Gratuit',
    description: 'Estimation détaillée et transparente, sans engagement de votre part.',
  },
  {
    title: 'Réponse Rapide',
    description: 'Je m\'engage à vous répondre dans les meilleurs délais.',
  },
  {
    title: 'Conseils Personnalisés',
    description: 'Des recommandations adaptées à votre projet et votre budget.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute inset-0 bg-tile-pattern-dark opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              Contact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Parlons de votre projet
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Vous avez un projet de carrelage, une rénovation ou une création de salle de bain ? 
              Je suis à votre écoute pour vous conseiller et vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-cream bg-tile-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                Demander un devis gratuit
              </h2>
              <div className="separator mb-8"></div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="input-elegant"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="input-elegant"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-elegant"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="input-elegant"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-charcoal mb-2">
                    Ville / Commune
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="input-elegant"
                    placeholder="Votre ville"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                    Type de projet
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="input-elegant cursor-pointer"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="carrelage">Carrelage & Faïence</option>
                    <option value="mosaique">Mosaïque</option>
                    <option value="sdb">Salle de bain / Douche à l&apos;italienne</option>
                    <option value="exterieur">Terrasse / Piscine / Extérieur</option>
                    <option value="preparation">Travaux de préparation</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="input-elegant resize-none"
                    placeholder="Décrivez votre projet : type de travaux, surface approximative, délais souhaités..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 border-gray-300 rounded text-gold focus:ring-gold"
                  />
                  <label htmlFor="consent" className="text-sm text-slate">
                    J&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande de devis. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Informations */}
            <div className="lg:pl-8">
              <div className="sticky top-32">
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">
                  Me contacter
                </h2>
                <div className="separator mb-8"></div>

                {/* Contact Info */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate mb-1">Téléphone</p>
                      <p className="font-semibold text-charcoal">À venir</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate mb-1">Email</p>
                      <a href="mailto:ldc38120@gmail.com" className="font-semibold text-charcoal hover:text-gold transition-colors">
                        ldc38120@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate mb-1">Zone d&apos;intervention</p>
                      <p className="font-semibold text-charcoal">Saint-Égrève & région Grenobloise</p>
                    </div>
                  </div>
                </div>

                {/* Reasons */}
                <div className="bg-white p-8 shadow-lg">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-6">
                    Pourquoi me contacter ?
                  </h3>
                  <div className="space-y-6">
                    {reasons.map((reason) => (
                      <div key={reason.title} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal">{reason.title}</p>
                          <p className="text-sm text-slate">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 p-6 border-l-4 border-gold bg-gold/5">
                  <p className="font-serif text-lg text-charcoal italic">
                    &ldquo;Toujours disponible pour échanger, conseiller et accompagner. 
                    N&apos;hésitez pas à me contacter pour tout renseignement.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Zone d&apos;intervention
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
              J&apos;interviens dans toute la région
            </h2>
            <div className="separator separator-center mb-8"></div>
            <p className="text-slate max-w-2xl mx-auto">
              Basé à Saint-Égrève, je me déplace dans toute l&apos;agglomération grenobloise 
              et les communes environnantes pour étudier votre projet.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Saint-Égrève', 'Grenoble', 'Meylan', 'La Tronche', 'Fontaine', 
              'Sassenage', 'Seyssinet-Pariset', 'Échirolles', 'Eybens', 'Gières',
              'Saint-Martin-d\'Hères', 'Corenc', 'Le Fontanil-Cornillon', 'Noyarey',
              'Veurey-Voroize', 'Voreppe', 'Moirans'
            ].map((city) => (
              <span 
                key={city} 
                className="px-4 py-2 bg-cream border border-gold/20 text-charcoal text-sm hover:border-gold/50 transition-colors"
              >
                {city}
              </span>
            ))}
            <span className="px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
              + Autres communes sur demande
            </span>
          </div>
        </div>
      </section>
    </>
  );
}


