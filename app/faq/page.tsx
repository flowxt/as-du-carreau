'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Devis & Organisation du chantier',
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
    items: [
      {
        question: 'L\'étanchéité est-elle obligatoire dans une salle de bain ?',
        answer: 'Oui, l\'étanchéité est indispensable dans les zones exposées à l\'eau (douche, baignoire, zones de projection). Elle protège les supports et garantit la durabilité de l\'ouvrage.',
      },
    ],
  },
  {
    title: 'Formats & techniques de pose',
    items: [
      {
        question: 'La pose de grands carreaux demande-t-elle un savoir-faire spécifique ?',
        answer: 'Oui, la pose de grands carreaux demande une maîtrise technique élevée pour éviter les problèmes de planéité, les vides sous carreaux et les défauts de jointoiement.',
      },
    ],
  },
  {
    title: 'Mosaïque & décors',
    items: [
      {
        question: 'Peut-on personnaliser un motif en mosaïque ?',
        answer: 'Oui, la mosaïque permet des motifs personnalisés, des décors sur mesure et des créations artistiques, selon les envies et le projet.',
      },
    ],
  },
  {
    title: 'Préparation des supports',
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
      <div className="px-6 py-4 flex items-center gap-4 bg-cream">
        <span className="text-gold text-lg">◆</span>
        <h2 className="font-serif text-xl font-semibold text-charcoal">
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
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-cream">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 block text-gold">
              FAQ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
              Questions Fréquentes
            </h1>
            <div className="separator mb-8"></div>
            <p className="text-xl leading-relaxed text-black">
              Retrouvez les réponses aux questions les plus courantes sur mes prestations 
              de carreleur mosaïste.
            </p>
          </FadeIn>
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
          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {faqCategories.map((category) => (
              <StaggerItem key={category.title}>
                <FAQCategorySection
                  category={category}
                  openItems={openItems}
                  toggleItem={toggleItem}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-cream">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #111212, transparent)' }}></div>
        
        <FadeIn className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-charcoal">
            Vous avez d&apos;autres questions ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
            N&apos;hésitez pas à me contacter pour toute question spécifique à votre projet. 
            Je suis à votre disposition pour vous conseiller.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me Contacter
            </Link>
            <Link href="/services" className="btn-secondary">
              Voir mes services
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
