import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 w-full h-20 bg-white text-black z-50 shadow-md flex flex-row items-center justify-between px-12">
      <Link href="/">
        <Image
          src="/EditoraImagem.png"
          alt="Gilbert's Logo"
          width={75}
          height={75}
        />
      </Link>
      <div className="flex gap-4 font-semibold text-lg">
        <Link href="/sobre">Sobre</Link>
        <Link href="/sobre">Livros</Link>
        <Link href="/sobre">Contato</Link>
      </div>
    </div>
  );
}
