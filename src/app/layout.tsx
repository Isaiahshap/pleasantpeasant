import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pleasant Peasant | Ancient art meets modern folk",
  description: "Pleasant Peasant is the moniker of Brooklyn-based experimental folk musician Gavi Kutliroff. His music is an eclectic blend between ancient traditional styles, modern songwriting sensibilities, and deep, hypnotic soundscapes.",
  openGraph: {
    title: "Pleasant Peasant | Ancient art meets modern folk",
    description: "Pleasant Peasant is the moniker of Brooklyn-based experimental folk musician Gavi Kutliroff. His music is an eclectic blend between ancient traditional styles, modern songwriting sensibilities, and deep, hypnotic soundscapes.",
    type: "website",
    url: "https://pleasantpeasant.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pleasant Peasant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pleasant Peasant",
    description: "Pleasant Peasant is the moniker of Brooklyn-based experimental folk musician Gavi Kutliroff. His music is an eclectic blend between ancient traditional styles, modern songwriting sensibilities, and deep, hypnotic soundscapes.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pp-wood focus:text-white">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}