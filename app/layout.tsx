import type { Metadata } from "next";
import "./globals.css";
import "./readability.css";

export const metadata: Metadata = {
  title: "Elkins Medical Institute — Registre RP",
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
