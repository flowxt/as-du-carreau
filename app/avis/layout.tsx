import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Avis Clients & Partenaires",
  description: "Découvrez les avis clients 5 étoiles de L'as Du Carreau, artisan carreleur à Saint-Égrève. Nos partenaires de confiance pour vos projets de carrelage à Grenoble.",
  alternates: {
    canonical: 'https://las-du-carreau.fr/avis',
  },
};

export default function AvisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
