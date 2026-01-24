import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Avis Clients & Partenaires | L'as Du Carreau - Carreleur Grenoble",
  description: "Découvrez les avis clients 5 étoiles de L'as Du Carreau, artisan carreleur à Saint-Égrève. Nos partenaires de confiance pour vos projets de carrelage à Grenoble.",
};

export default function AvisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
