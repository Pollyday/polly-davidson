import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polly Davidson - Brand Strategist & Marketing Leader at GitHub",
  description:
    "Portfolio for Polly Davidson, a senior brand strategist and marketing leader at GitHub working across brand, campaigns, content, social and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fse4qel.css?v=20261007094851" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
