import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";


import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:"Create Next App",
  description:"Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-500">
      <body className={urbanist.className}>
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}