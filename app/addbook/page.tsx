"use client";

import dynamic from "next/dynamic";

const AdicionarLivro = dynamic(() => import("@/components/addbook"), {
  ssr: false,
});

export default function AddBookPage() {
  return <AdicionarLivro />;
}
