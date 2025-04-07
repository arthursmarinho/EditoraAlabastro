export default function Footer() {
  return (
    <footer className="bg-[#050A46] text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-4">Editora Alabastro</h2>
          <p className="text-sm text-gray-300">
            Desde 2022, contamos histórias que despertam a imaginação e
            fortalecem o espírito. Nossa missão é publicar livros que toquem o
            coração e inspirem mentes brilhantes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Navegue</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Autores
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Eventos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-300 mb-1">
            📍 Av. da Imaginação, 404 - Mundo Literário
          </p>
          <p className="text-sm text-gray-300 mb-1">📞 (00) 1234-5678</p>
          <p className="text-sm text-gray-300 mb-4">
            ✉️ contato@editoraalabastro.com
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400">
              📘 Facebook
            </a>
            <a href="#" className="hover:text-amber-400">
              📸 Instagram
            </a>
            <a href="#" className="hover:text-amber-400">
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Editora Alabastro — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
