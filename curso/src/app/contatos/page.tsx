import { postProcessHTML } from "next/dist/server/post-process";

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function Contatos() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json()

  console.log(data);

  return (
    <>
      <h1>Página CONTATOS</h1>

      <div>
        {
          data.posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}