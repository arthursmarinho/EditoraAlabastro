import type {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import {ptBR} from "@clerk/localizations";
import "./globals.css";
import {Toaster} from "react-hot-toast";

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
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={inter.className}>
          {/* <Header /> */}
          {children}
          <Toaster position="bottom-right" />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
