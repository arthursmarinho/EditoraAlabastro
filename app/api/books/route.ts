import {NextResponse} from "next/server";

export async function GET() {
  const books = [
    {id: 1, titulo: "1984", imagem: "/1984.jpg"},
    {id: 2, titulo: "1984", imagem: "/1984.jpg"},
    {id: 3, titulo: "1984", imagem: "/1984.jpg"},
    {id: 4, titulo: "1984", imagem: "/1984.jpg"},
  ];

  return NextResponse.json(books);
}
