import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { TopBar } from "@/components/TopBar";
import { CommandPalette } from "@/components/CommandPalette";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Adarsh Dessai - AI Architect",
  description:
    "AI Architect building futuristic AI dashboards, agents, automations, and AI-first products.",
  openGraph: {
    title: "Adarsh Dessai - AI Architect",
    description:
      "AI-first products, automations, and decision systems built to scale.",
    images: ["/og.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body>
        <div className="background-grid" />
        <div className="background-noise" />
        <div className="background-circuits" />
        <TopBar />
        <CommandPalette />
        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
