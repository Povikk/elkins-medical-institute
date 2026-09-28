import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Registre Médical RP — Cabinet de Valentine",
  description: "Registre médical fictif pour jeu de rôle western vers 1900.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
