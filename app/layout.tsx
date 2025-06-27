import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NW Arkansas Stone Masonry | Custom Installation & Repair",
  description: "Expert stone masonry and custom stonework services in Northwest Arkansas. We specialize in stone installation, masonry repair, and creating beautiful, durable stone features for your home.",
  keywords: ["stone masonry", "custom stonework", "masonry repair", "stone installation", "local masonry services", "expert stonemasons", "NW Arkansas", "Northwest Arkansas", "Fayetteville AR", "Bentonville AR", "Rogers AR", "Springdale AR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
