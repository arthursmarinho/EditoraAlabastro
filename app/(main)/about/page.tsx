"use client";
import Image from "next/image";
import {motion} from "framer-motion";

export default function AboutPage() {
  const team = [
    {
      nome: "Gbet",
      cargo: "Fundadora & CEO",
      imagem: "/team1.jpg",
    },
    {
      nome: "Maizena",
      cargo: "Editor-Chefe",
      imagem: "/team2.jpg",
    },
    {
      nome: "Rosas",
      cargo: "Diretora de Arte",
      imagem: "/team3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#050A46]">
      <div className="relative w-full h-[60vh]">
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-black font-extrabold text-center">
            Quem Somos?
          </h1>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          Editora Alabastro
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
        >
          Fundada em 2015, a Editora Alabastro nasceu com o propósito de
          publicar histórias que tocam o coração, desafiam a mente e transformam
          realidades. Acreditamos no poder das palavras e na arte de contar boas
          histórias.
        </motion.p>
      </section>

      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((pessoa, index) => (
              <motion.div
                key={index}
                className="w-64 bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.2}}
              >
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pessoa.imagem}
                    alt={pessoa.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{pessoa.nome}</h3>
                <p className="text-sm text-gray-600">{pessoa.cargo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{opacity: 0, x: -40}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
          >
            <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-gray-700">
              Promover o acesso à leitura de qualidade, incentivando autores
              nacionais e publicando obras que provoquem reflexão, empatia e
              imaginação.
            </p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, x: 40}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
          >
            <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
            <p className="text-gray-700">
              Ser reconhecida como uma editora referência em inovação editorial,
              diversidade e impacto cultural no Brasil e no mundo.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
