import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import CertificationBanner from "@/components/layout/CertificationBanner";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MNC Solar - Solar Solutions for Jharkhand & Bihar",
  description: "Mahadeva And Company provides reliable solar solutions across Jharkhand and Bihar. On-grid, off-grid, and hybrid systems from 2 KW to 100 KW. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CertificationBanner />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
