"use client";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const imagens = ["/Girl.png", "/Books.png", "/Land.png"];

  const cont = [
    {
      question: "Editora Alabastro",
      answer:
        "Editora Alabastro é uma editora independente que publica livros de ficção e não-ficção, com foco em histórias que inspiram e transformam.",
    },
    {
      question: "Editora Alabastro",
      answer:
        "Editora Alabastro é uma editora independente que publica livros de ficção e não-ficção, com foco em histórias que inspiram e transformam.",
    },
    {
      question: "Editora Alabastro",
      answer:
        "Editora Alabastro é uma editora independente que publica livros de ficção e não-ficção, com foco em histórias que inspiram e transformam.",
    },
  ];
  return (
    <div>
      <div className="w-full h-screen relative">
        <Image
          src="/Banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-amber-100 text-6xl font-extrabold drop-shadow-lg text-center">
            Qual será a sua próxima aventura?
          </h1>
        </div>
      </div>
      <div className="flex flex-row pt-12">
        {cont.map((faq, index) => (
          <div key={index} className="flex w-2/3 p-4">
            <div className="bg-white shadow-2xl rounded-4xl p-12 flex items-center gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={imagens[index]}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start p-12 pt-[300px]">
        <h1 className="text-6xl font-bold text-[#050A46]">
          Os Melhores Livros
        </h1>
        <p className="text-xs">By Gilbert Zangerolame</p>
      </div>
      <div className="flex flex-row space-x-12 justify-evenly pt-20 px-12">
        {books.map((book: any, index: number) => (
          <div key={index} className="flex flex-col items-start gap-4">
            <Image
              src={book.imagem}
              alt={`Imagem do livro ${book.titulo}`}
              width={200}
              height={200}
              className="rounded-lg object-cover"
              priority
              quality={100}
            />
            <h2 className="text-xl font-medium text-[#050A46]">
              {book.titulo}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
