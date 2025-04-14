import {FaWhatsapp} from "react-icons/fa";

export default function Contato() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text mb-4">
        Deseja comprar um livro?
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mb-8">
        Entre em contato!
      </h2>
      <a
        href="https://wa.me/554192897667?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20livros!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-lg underline"
      >
        <FaWhatsapp size={24} />
        Falar com um vendedor
      </a>
    </div>
  );
}
