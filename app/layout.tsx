import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polly Davidson - Brand Strategist & Marketing Leader at GitHub",
  description:
    "Portfolio for Polly Davidson, a senior brand strategist and marketing leader at GitHub working across brand, campaigns, content, social and experiences.",
  openGraph: {
    title: "Polly Davidson - Brand Strategist & Marketing Leader at GitHub",
    description:
      "Portfolio for Polly Davidson, a senior brand strategist and marketing leader at GitHub working across brand, campaigns, content, social and experiences.",
    url: "https://pollyday.github.io/polly-davidson/",
    type: "website",
    images: [{
      url: "https://pollyday.github.io/polly-davidson/social-preview.png",
      width: 1200,
      height: 630,
      alt: "Polly Davidson portfolio: I make complicated things interesting.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polly Davidson - Brand Strategist & Marketing Leader at GitHub",
    description:
      "Portfolio for Polly Davidson, a senior brand strategist and marketing leader at GitHub working across brand, campaigns, content, social and experiences.",
    images: [{
      url: "https://pollyday.github.io/polly-davidson/social-preview.png",
      alt: "Polly Davidson portfolio: I make complicated things interesting.",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/niz2dui.css?v=20261009103951" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
