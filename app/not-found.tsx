import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
        Oops, essa página não existe!
      </h1>
      <Image
        src="/Men.png"
        alt="404"
        width={300}
        height={300}
        className="mb-6"
        quality={100}
      />
      <Link href="/">
        <h1 className="text-amber-400 hover:text-amber-600 text-xl sm:text-2xl font-bold">
          Voltar para o início
        </h1>
      </Link>
    </div>
  );
}
