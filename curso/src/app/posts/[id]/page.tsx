import { log } from "next/dist/server/typescript/utils";

export default async function DetailPost({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json()

  console.log(data);

  return (
    <>
      <h1>Detalhes do post: {id}</h1>

      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}