import {doc, getDoc} from "firebase/firestore";
import {db} from "@/lib/firebase";
import Image from "next/image";
import {notFound} from "next/navigation";

// Define a tipagem correta para os parâmetros da rota
interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({params}: BookPageProps) {
  const docRef = doc(db, "books", decodeURIComponent(params.id));
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const book = docSnap.data();

  return (
    <div className="pt-[88px] px-6 sm:px-12 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col sm:flex-row overflow-hidden max-w-7xl w-full">
        <div className="sm:w-1/2 w-full">
          <Image
            src={book.imagem}
            alt={book.titulo}
            width={10000}
            height={10000}
            className="w-full h-full object-cover shadow-xl"
            quality={100}
          />
        </div>

        <div className="sm:w-1/2 w-full p-10 sm:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-black">
              {book.titulo}
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl leading-9">
              {book.descricao}
            </p>
          </div>

          <div className="text-4xl font-bold text-[#0f172a] bg-gray-200 px-6 py-3 rounded-xl w-fit shadow-sm">
            R$ 00,00
          </div>

          <div className="pt-6">
            <p className="text-gray-500 text-base sm:text-lg">
              Publicado pela Editora Alabastro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
