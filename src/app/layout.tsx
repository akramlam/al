import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALJ Creative Studio - Studio Créatif Vidéo",
  description: "ALJ Creative Studio réunit les meilleurs créateurs de contenu pour scaler vos projets vidéo. Production, montage et stratégie marketing digitale.",
  keywords: ["studio créatif", "production vidéo", "créateurs de contenu", "marketing digital", "France"],
  authors: [{ name: "ALJ Creative Studio" }],
  openGraph: {
    title: "ALJ Creative Studio - Studio Créatif Vidéo",
    description: "Réunir les créateurs de contenu pour scaler vos projets vidéo",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALJ Creative Studio",
    description: "Studio créatif vidéo professionnel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
