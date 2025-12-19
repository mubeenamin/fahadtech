import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationController from "@/components/AnimationController";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Fahad Technologies - CCTV & Networking Solutions",
  description: "Professional CCTV installation and network equipment services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} font-sans`}>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <AnimationController />
      </body>
    </html>
  );
}
