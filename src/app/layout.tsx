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
  title: "Rounit Sinha",
  description: "Personal website and digital notebook",
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
