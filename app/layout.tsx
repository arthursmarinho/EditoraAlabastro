import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Editora Alabastro",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Editora Alabastro - Qual será a sua próxima aventura?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
