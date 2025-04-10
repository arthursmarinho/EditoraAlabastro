import {useState, ChangeEvent, FormEvent} from "react";
import {Input} from "./ui/input";
import {doc, setDoc} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {toast} from "sonner";

interface Livro {
  titulo: string;
  descricao: string;
  imagem: File | null;
  paginas: number;
}

export default function FormularioLivro() {
  const [livro, setLivro] = useState<Livro>({
    titulo: "",
    descricao: "",
    imagem: null,
    paginas: 0,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value, files} = e.target as HTMLInputElement;

    if (name === "imagem" && files && files.length > 0) {
      const file = files[0];
      setLivro((prev) => ({...prev, imagem: file}));
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setLivro((prev) => ({
        ...prev,
        [name]: name === "paginas" ? Number(value) : value,
      }));
    }
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const bookRef = doc(db, "books", livro.titulo);
      await setDoc(bookRef, {
        titulo: livro.titulo,
        descricao: livro.descricao,
        paginas: livro.paginas,
        imagem: previewUrl,
      });

      toast.success("Livro salvo com sucesso! 📚");

      setLivro({
        titulo: "",
        descricao: "",
        imagem: null,
        paginas: 0,
      });
      setPreviewUrl(null);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao salvar o livro. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10 py-22"
    >
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={livro.titulo}
        onChange={handleChange}
        required
      />

      <textarea
        name="descricao"
        placeholder="Descrição"
        value={livro.descricao}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <Input
        type="number"
        name="paginas"
        placeholder="Quantidade de páginas"
        value={livro.paginas}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Salvar Livro
      </button>
    </form>
  );
}
