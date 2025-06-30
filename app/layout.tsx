import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-stone-950 text-stone-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
