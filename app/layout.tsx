import type { Metadata } from "next";
import { Cinzel, Libre_Baskerville, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingFAQButton from "./components/FloatingFAQButton";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baskerville = Libre_Baskerville({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${cinzel.variable} ${baskerville.variable} ${dancingScript.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingFAQButton />
      </body>
    </html>
  );
}
