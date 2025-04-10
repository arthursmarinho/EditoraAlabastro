// app/books/[id]/page.tsx

import {doc, getDoc} from "firebase/firestore";
import {db} from "@/lib/firebase"; // ajuste o caminho conforme seu projeto
import {notFound} from "next/navigation";

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({params}: BookPageProps) {
  const docRef = doc(db, "books", decodeURIComponent(params.id));
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound(); // retorna página 404 do Next
  }

  const book = docSnap.data();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.titulo}</h1>
      <img
        src={book.imagem}
        alt={book.titulo}
        className="w-full max-w-sm rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">{book.descricao}</p>
      <p className="text-sm text-gray-500">Páginas: {book.paginas}</p>
    </div>
  );
}
