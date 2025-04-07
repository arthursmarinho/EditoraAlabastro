import Link from "next/link";
import Image from "next/image";
import {Button} from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-20 bg-white text-black z-50 shadow-md flex items-center justify-between px-4 sm:px-8">
      <Link href="/">
        <Image src="/EditoraImagem.png" alt="Logo" width={60} height={60} />
      </Link>

      <nav className="flex gap-4 font-semibold text-sm sm:text-base items-center">
        <Link href="/sobre" className="hover:text-amber-500">
          Sobre
        </Link>
        <Link href="/livros" className="hover:text-amber-500">
          Livros
        </Link>
        <Link href="/contato" className="hover:text-amber-500">
          Contato
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>
    </header>
  );
}
