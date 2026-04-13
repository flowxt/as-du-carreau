import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Réalisations - Avant/Après & Galerie Photos",
  description: "Découvrez les réalisations de L'as Du Carreau : transformations avant/après spectaculaires, salles de bain, carrelage, mosaïque. Plus de 20 ans de savoir-faire.",
  alternates: {
    canonical: 'https://las-du-carreau.fr/realisations',
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
