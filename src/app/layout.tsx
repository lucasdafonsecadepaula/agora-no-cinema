import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agora no Cinema",
  description:
    "Descubra os 5 melhores filmes em cartaz nos cinemas com uma interface rápida, bonita e minimalista.",
  keywords: [
    "cinema",
    "filmes em cartaz",
    "agora no cinema",
    "melhores filmes",
    "TMDb",
    "Next.js",
    "minimalismo",
  ],
  authors: [{ name: "Seu Nome ou Username" }],
  creator: "Seu Nome ou Username",
  openGraph: {
    title: "Agora no Cinema",
    description:
      "Veja os 5 melhores filmes em exibição nos cinemas agora mesmo.",
    url: "https://agoranocinema.vercel.app",
    siteName: "Agora no Cinema",
    // images: [
    //   {
    //     url: "https://agoranocinema.vercel.app/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Agora no Cinema - Veja os melhores filmes em cartaz",
    //   },
    // ],
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "rtA57NLk3WUK1YrOBcpYX1AwgeTC8ZJQT4DqpPH9414",
  },
  metadataBase: new URL("https://agoranocinema.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
