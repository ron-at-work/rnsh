import type { Metadata } from "next";
import { IBM_Plex_Serif, Inconsolata } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rounit Sinha | Web Developer & Digital Creator",
  description: "Passionate web developer from India building digital experiences with React, Next.js, and modern web technologies. Explore my projects, read my thoughts on development, and connect with me.",
  keywords: ["Rounit Sinha", "Web Developer", "React", "Next.js", "TypeScript", "Frontend Developer", "JavaScript", "Portfolio"],
  authors: [{ name: "Rounit Sinha" }],
  creator: "Rounit Sinha",
  publisher: "Rounit Sinha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rnsh.dev',
    siteName: 'Rounit Sinha',
    title: 'Rounit Sinha | Web Developer & Digital Creator',
    description: 'Passionate web developer from India building digital experiences with React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rounit Sinha - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rounit Sinha | Web Developer & Digital Creator',
    description: 'Passionate web developer from India building digital experiences with React, Next.js, and modern web technologies.',
    images: ['/og-image.svg'],
    creator: '@rounit08',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
        className={`${ibmPlexSerif.variable} ${inconsolata.variable} antialiased`}
      >
        <div className="notebook-container">
          <main className="notebook-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
