import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'as Du Carreau | Artisan Carreleur Mosaïste à Saint-Égrève (Isère)",
  description: "Artisan carreleur mosaïste depuis plus de 20 ans à Saint-Égrève. Pose de carrelage, faïence, mosaïque, douches à l'italienne, salles de bain, terrasses. Région Grenobloise.",
  keywords: "carreleur, mosaïste, Saint-Égrève, Grenoble, Isère, carrelage, faïence, mosaïque, douche italienne, salle de bain, terrasse, artisan",
  authors: [{ name: "L'as Du Carreau" }],
  openGraph: {
    title: "L'as Du Carreau | Artisan Carreleur Mosaïste",
    description: "Plus de 20 ans d'expertise au service de vos projets de carrelage",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
