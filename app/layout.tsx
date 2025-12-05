import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JV Dev - Soluções Digitais",
  description: "Transformo ideias em soluções digitais. Desenvolvimento de apps, websites e sistemas SaaS para automatizar seu negócio.",
  keywords: ["desenvolvimento web", "apps", "SaaS", "automação", "soluções digitais"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

