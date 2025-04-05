import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "DNA PlayStation - Rental PS3 & PS4 Jatisari, Bekasi",
  verification: {
    google: "googleda30fa27a78cf19b",
  },
  description:
    "Sewa PlayStation 3 & 4 di Jatisari, Bekasi dengan harga terbaik! Koleksi game lengkap, sewa harian/mingguan, dan layanan antar jemput tersedia.",
    robots: "index, follow",
  openGraph: {
    title: "DNA PlayStation - Rental PS3 & PS4 Jatisari, Bekasi",
    description:
      "Sewa PlayStation 3 & 4 di Jatisari, Bekasi dengan harga terbaik! Koleksi game lengkap, sewa harian/mingguan, dan layanan antar jemput tersedia.",
    url: "https://dna-playstation.vercel.app/", // Ganti dengan domain asli
    type: "website",
    // images: [
    //   {
    //     url: "https://dna-playstation.vercel.app/images/banner.jpg", 
    //     width: 1200,
    //     height: 630,
    //     alt: "Sewa PlayStation 3 & 4 di Jatisari, Bekasi",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
