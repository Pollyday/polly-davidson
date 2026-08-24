import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

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
      <body className={`${monaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
