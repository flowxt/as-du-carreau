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
  metadataBase: new URL('https://las-du-carreau.fr'),
  title: {
    default: "L'as Du Carreau | Artisan Carreleur Mosaïste à Saint-Égrève (Isère)",
    template: "%s | L'as Du Carreau",
  },
  description: "Artisan carreleur mosaïste depuis plus de 20 ans à Saint-Égrève. Pose de carrelage, faïence, mosaïque, douches à l'italienne, salles de bain, terrasses. Région Grenobloise.",
  keywords: "carreleur, mosaïste, Saint-Égrève, Grenoble, Isère, carrelage, faïence, mosaïque, douche italienne, salle de bain, terrasse, artisan",
  authors: [{ name: "L'as Du Carreau" }],
  creator: "L'as Du Carreau",
  publisher: "L'as Du Carreau",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'F27JpaaDJmnP7MihLhzj0lHqgCCbfJIykSS3DMluM78',
  },
  alternates: {
    canonical: 'https://las-du-carreau.fr',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: "L'as Du Carreau | Artisan Carreleur Mosaïste",
    description: "Plus de 20 ans d'expertise au service de vos projets de carrelage, faïence, mosaïque et salles de bain à Saint-Égrève et région grenobloise.",
    url: 'https://las-du-carreau.fr',
    siteName: "L'as Du Carreau",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'as Du Carreau | Artisan Carreleur Mosaïste",
    description: "Plus de 20 ans d'expertise au service de vos projets de carrelage à Saint-Égrève.",
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
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingFAQButton />
      </body>
    </html>
  );
}
