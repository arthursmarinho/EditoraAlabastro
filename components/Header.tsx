"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-20 bg-white text-black z-50 shadow-md flex items-center justify-between px-4 sm:px-8">
      <Link href="/">
        <Image src="/EditoraImagem.png" alt="Logo" width={60} height={60} />
      </Link>

      <nav className="flex gap-4 font-semibold text-sm sm:text-base items-center">
        <Link href="/about" className="hover:text-amber-500">
          Sobre
        </Link>
        <Link href="/livros" className="hover:text-amber-500">
          Livros
        </Link>
        <Link href="/contato" className="hover:text-amber-500">
          Contato
        </Link>
        <Link href="/addbook">
          <Button>Adicionar livros</Button>
        </Link>
        <UserButton />
        <SignedOut>
          <div className="border-2 rounded-2xl px-4 py-2 cursor-pointer hover:bg-green-400 transition-all duration-500">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn></SignedIn>
      </nav>
    </header>
  );
}
