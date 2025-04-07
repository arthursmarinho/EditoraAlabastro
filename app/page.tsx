"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface Book {
  imagem: string;
  titulo: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

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
      <div className="w-full h-[750px] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl transition-all hover:bg-black hover:text-white duration-700 ease-in-out hover:text-7xl sm:text-4xl md:text-6xl text-center font-extrabold rounded-4xl bg-white text-black py-10 px-16">
            Qual será a sua próxima aventura?
          </h1>
          <div className="flex flex-row gap-4">
            <Link href="/about">
              <Button className="mt-6 px-12 hover:px-10 hover:py-6 text-lg  text-white  hover:bg-black hover:text-white hover:text-2xl hover:p- transition-all  duration-700 ease-in-out">
                Compre Agora
              </Button>
            </Link>
            <Link href="#livros">
              <Button className="mt-6 px-12 hover:px-10 hover:py-6 text-lg bg-white text-black  hover:bg-black hover:text-white hover:text-2xl hover:p- transition-all duration-700 ease-in-out">
                Ver Livros
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        <AnimatePresence>
          {cont.map((faq, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white shadow-2xl rounded-2xl p-12 flex gap-4"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -50}}
              transition={{duration: 0.6, delay: index * 0.2}}
              whileHover={{scale: 1.05}}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-start p-12 pt-[300px]" id="livros">
        <h1 className="text-6xl font-bold text-[#050A46]">
          Os Melhores Livros
        </h1>
        <p className="text-xs">By Gilbert Zangerolame</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 pt-16">
        <AnimatePresence>
          {books.map((book, index) => (
            <motion.div
              key={index}
              className="w-40 sm:w-48 flex flex-col items-center gap-2"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{delay: index * 0.1, duration: 0.5}}
              whileHover={{scale: 1.05}}
            >
              <Image
                src={book.imagem}
                alt={`Imagem do livro ${book.titulo}`}
                width={180}
                height={250}
                className="rounded-lg object-cover"
                priority
              />
              <h2 className="text-center text-[#050A46] text-sm font-semibold pb-40">
                {book.titulo}
              </h2>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
