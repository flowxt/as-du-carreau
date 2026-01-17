'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Devis & Organisation du chantier',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    items: [
      {
        question: 'Faut-il prévoir un rendez-vous avant les travaux ?',
        answer: 'Oui, un rendez-vous sur site est indispensable pour analyser le chantier, les supports et les contraintes techniques.',
      },
      {
        question: 'Travaillez-vous avec d\'autres corps de métier ?',
        answer: 'Oui, je peux coordonner le chantier avec d\'autres artisans (plombier, électricien, peintre, etc.) pour une réalisation complète.',
      },
      {
        question: 'Comment se déroule un chantier du début à la fin ?',
        answer: '1. Rendez-vous sur site • 2. Diagnostic technique • 3. Étude personnalisée et devis • 4. Préparation des supports • 5. Pose des revêtements • 6. Finitions et nettoyage • 7. Réception du chantier',
      },
    ],
  },
  {
    title: 'Le métier & les missions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      {
        question: 'Quelle est la différence entre un carreleur et un carreleur mosaïste ?',
        answer: 'Le carreleur réalise la pose de carrelage standard. Le carreleur mosaïste est spécialisé dans les travaux nécessitant une grande précision (mosaïque, motifs, découpes fines, matériaux techniques) et maîtrise les finitions haut de gamme.',
      },
      {
        question: 'Un carreleur mosaïste intervient-il sur du neuf et de la rénovation ?',
        answer: 'Oui, le carreleur mosaïste intervient en neuf comme en rénovation, en adaptant les techniques à chaque situation et en assurant une finition parfaite.',
      },
      {
        question: 'Travaillez-vous avec des particuliers et des professionnels ?',
        answer: 'Oui, j\'interviens auprès des particuliers comme des professionnels (commerces, hôtels, restaurants, copropriétés), avec des solutions adaptées à chaque type de projet.',
      },
    ],
  },
  {
    title: 'Salle de bain & pièces humides',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      {
        question: 'L\'étanchéité est-elle obligatoire dans une salle de bain ?',
        answer: 'Oui, l\'étanchéité est indispensable dans les zones exposées à l\'eau (douche, baignoire, zones de projection). Elle protège les supports et garantit la durabilité de l\'ouvrage.',
      },
    ],
  },
  {
    title: 'Formats & techniques de pose',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    items: [
      {
        question: 'La pose de grands carreaux demande-t-elle un savoir-faire spécifique ?',
        answer: 'Oui, la pose de grands carreaux demande une maîtrise technique élevée pour éviter les problèmes de planéité, les vides sous carreaux et les défauts de jointoiement.',
      },
    ],
  },
  {
    title: 'Mosaïque & décors',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    items: [
      {
        question: 'Peut-on personnaliser un motif en mosaïque ?',
        answer: 'Oui, la mosaïque permet des motifs personnalisés, des décors sur mesure et des créations artistiques, selon les envies et le projet.',
      },
    ],
  },
  {
    title: 'Préparation des supports',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      {
        question: 'Faites-vous le rattrapage des supports ?',
        answer: 'Oui, le rattrapage des supports permet de corriger les défauts de planéité ou de niveau avant la pose du revêtement.',
      },
      {
        question: 'Réalisez-vous des chapes ?',
        answer: 'Oui, la réalisation de chape permet d\'obtenir un support stable et plan avant la pose du revêtement.',
      },
      {
        question: 'Faites-vous du rattrapage mural ?',
        answer: 'Oui, le rattrapage mural permet de corriger les défauts d\'un mur (irrégularités, creux, bosses) avant la pose de faïence, carrelage ou mosaïque. Une préparation soignée est indispensable pour garantir une pose durable et esthétique.',
      },
      {
        question: 'Réalisez-vous la reprise de plâtre ?',
        answer: 'Oui, la reprise de plâtre est souvent nécessaire pour remettre un mur en état avant la pose de revêtements. Cette étape permet d\'obtenir une surface propre et prête à recevoir le carrelage.',
      },
    ],
  },
  {
    title: 'Extérieurs & projets spécifiques',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
    items: [
      {
        question: 'Faites-vous la pose de dalles sur plots ?',
        answer: 'Oui, la pose sur plots demande une préparation adaptée du support et un calepinage précis afin d\'obtenir un rendu stable et esthétique.',
      },
      {
        question: 'Réalisez-vous le carrelage de piscine ?',
        answer: 'Oui, le carrelage et la mosaïque de piscine nécessitent des matériaux et des techniques spécifiques adaptés aux milieux immergés.',
      },
    ],
  },
  {
    title: 'Autres revêtements & finitions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: [
      {
        question: 'Réalisez-vous la pose de plinthes ?',
        answer: 'Oui, la pose de plinthes fait partie intégrante des finitions et permet un rendu propre et harmonieux.',
      },
      {
        question: 'Faites-vous la pose de PVC clipsable ?',
        answer: 'Oui, le PVC clipsable nécessite un support parfaitement plan et une préparation adaptée pour garantir sa durabilité.',
      },
      {
        question: 'Réalisez-vous la pose de parquet contrecollé ou massif en pose flottante ?',
        answer: 'Oui, parquet contrecollé et massif en pose flottante, avec une étude du support et une mise en œuvre conforme aux recommandations du fabricant.',
      },
    ],
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
      >
        <span className="font-medium text-charcoal pr-8">{item.question}</span>
        <div className={`w-8 h-8 bg-gold/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-5 text-slate leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

function FAQCategorySection({ category, openItems, toggleItem }: { 
  category: FAQCategory; 
  openItems: Set<string>;
  toggleItem: (id: string) => void;
}) {
  return (
    <div className="bg-white shadow-lg overflow-hidden">
      {/* Category Header */}
      <div className="px-6 py-4 flex items-center gap-4" style={{ background: '#2C2C2C' }}>
        <div className="w-10 h-10 flex items-center justify-center" style={{ background: 'rgba(201, 169, 98, 0.2)' }}>
          <span className="text-gold">{category.icon}</span>
        </div>
        <h2 className="font-serif text-xl font-semibold" style={{ color: '#FAF9F6' }}>
          {category.title}
        </h2>
      </div>
      
      {/* Questions */}
      <div>
        {category.items.map((item, index) => {
          const itemId = `${category.title}-${index}`;
          return (
            <FAQAccordion
              key={itemId}
              item={item}
              isOpen={openItems.has(itemId)}
              onToggle={() => toggleItem(itemId)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allIds = new Set<string>();
    faqCategories.forEach((cat) => {
      cat.items.forEach((_, index) => {
        allIds.add(`${cat.title}-${index}`);
      });
    });
    setOpenItems(allIds);
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#C9A962' }}>
              FAQ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
              Questions Fréquentes
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
              Retrouvez les réponses aux questions les plus courantes sur mes prestations 
              de carreleur mosaïste.
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-cream border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate">
              <span className="font-semibold text-charcoal">{faqCategories.reduce((acc, cat) => acc + cat.items.length, 0)}</span> questions réparties en <span className="font-semibold text-charcoal">{faqCategories.length}</span> catégories
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="text-sm text-gold hover:text-gold/80 font-medium transition-colors"
              >
                Tout déplier
              </button>
              <span className="text-gold/30">|</span>
              <button
                onClick={collapseAll}
                className="text-sm text-gold hover:text-gold/80 font-medium transition-colors"
              >
                Tout replier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <FAQCategorySection
                key={category.title}
                category={category}
                openItems={openItems}
                toggleItem={toggleItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#2C2C2C' }}>
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A962, transparent)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FAF9F6' }}>
            Vous avez d&apos;autres questions ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            N&apos;hésitez pas à me contacter pour toute question spécifique à votre projet. 
            Je suis à votre disposition pour vous conseiller.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me Contacter
            </Link>
            <Link href="/services" className="btn-secondary" style={{ borderColor: 'rgba(250, 249, 246, 0.3)', color: '#FAF9F6' }}>
              Voir mes services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
