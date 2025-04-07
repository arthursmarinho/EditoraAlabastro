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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-extrabold text-amber-100 drop-shadow-lg">
            Qual será a sua próxima aventura?
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 pt-[350px]">
        {cont.map((faq, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white shadow-2xl rounded-2xl p-12 flex gap-4"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={imagens[index]}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <p className="text-sm">{faq.answer}</p>
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
      <div className="flex flex-wrap justify-center gap-8 px-6 pt-16">
        {books.map((book: any, index: number) => (
          <div
            key={index}
            className="w-40 sm:w-48 flex flex-col items-center gap-2"
          >
            <Image
              src={book.imagem}
              alt={`Imagem do livro ${book.titulo}`}
              width={180}
              height={250}
              className="rounded-lg object-cover"
              priority
            />
            <h2 className="text-center text-[#050A46] text-sm font-semibold">
              {book.titulo}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
