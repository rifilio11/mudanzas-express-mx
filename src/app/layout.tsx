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

import businessData from "@/lib/businessData";

const negocio = businessData.negocio;

export const metadata = {
  title: `${negocio.nombre} | ${negocio.tipo}`,

  description: negocio.descripcion,

  keywords: businessData.seo.palabras_clave,

  openGraph: {
    title: negocio.nombre,

    description: negocio.descripcion,

    type: "website",

    locale: "es_MX",

    siteName: negocio.nombre,

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: negocio.nombre
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title: negocio.nombre,

    description: negocio.descripcion,

    images: ["/images/logo.png"]
  }
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
