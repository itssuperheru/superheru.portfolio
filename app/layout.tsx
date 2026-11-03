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
  metadataBase: new URL("https://www.herukurniawann.com"),
  title: "Heru Dwi Kurniawan | Personal Portfolio",
  description:
    "Explore Heru Dwi Kurniawan's personal portfolio, selected projects, professional experience, and creative journey.",
  openGraph: {
    title: "Heru Dwi Kurniawan | Personal Portfolio",
    description:
      "Explore my portfolio, selected projects, experience, and creative journey.",
    url: "https://www.herukurniawann.com",
    siteName: "Heru Dwi Kurniawan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heru Dwi Kurniawan Personal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heru Dwi Kurniawan | Personal Portfolio",
    description:
      "Explore my portfolio, selected projects, and professional journey.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
