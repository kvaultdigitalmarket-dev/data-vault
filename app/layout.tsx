import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Vault | Centralized Automotive Intelligence & SaaS Platform",
  description: "Connect CRM, Finance, Sales, Service Plans, and Customer Communications through a unified data platform designed for modern automotive businesses.",
  keywords: [
    "Automotive SaaS",
    "Data Vault Architecture",
    "Dealer CRM",
    "Auto Finance Management",
    "Car Service Plans",
    "WhatsApp Automation",
    "Automotive Business Intelligence"
  ],
  authors: [{ name: "Data Vault Technology Group" }],
  openGraph: {
    title: "Data Vault | Centralized Automotive Intelligence",
    description: "Unlocking the value of automotive data through a centralized Data Vault. Connect CRM, Finance, Sales, and WhatsApp messaging automation.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
