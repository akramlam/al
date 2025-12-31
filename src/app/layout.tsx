import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

// Licensed Fonts - Local (user provides font files)
// NOTE: Uncomment these when you add the licensed font files to src/fonts/
// See src/fonts/README.md for instructions
// const pragmatica = localFont({
//   src: [
//     {
//       path: "../fonts/Pragmatica-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Pragmatica-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
//   display: "swap",
//   fallback: ["Inter", "system-ui", "sans-serif"],
// });

// const gotham = localFont({
//   src: [
//     {
//       path: "../fonts/Gotham-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Gotham-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-heading",
//   display: "swap",
//   fallback: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
// });

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
    <html lang="fr">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
