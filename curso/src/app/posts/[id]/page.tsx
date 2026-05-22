import { log } from "next/dist/server/typescript/utils";
import { Post } from "./components/post";
import { Suspense } from "react";

export default async function DetailPost({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;

  return (
    <>
      <h1>Detalhes do post: {id}</h1>

      <Suspense fallback= {<h1>Carregando...</h1>}>
        <Post id={id} />
      </Suspense>
    </>
  )
}