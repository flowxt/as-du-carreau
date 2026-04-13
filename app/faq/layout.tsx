import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ)",
  description: "Retrouvez les réponses à vos questions sur les prestations de L'as Du Carreau : devis, délais, matériaux, préparation des supports, entretien du carrelage.",
  alternates: {
    canonical: 'https://las-du-carreau.fr/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
