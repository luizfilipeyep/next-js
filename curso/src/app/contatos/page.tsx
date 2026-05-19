import { log } from "next/dist/server/typescript/utils";


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

  

  const handleClickButton = async () => {
    "use server"

    console.log("Clicou");
  }

  const handleSearchUsers = async (formData: FormData) => {
    "use server"

    const userId = formData.get("userId")
    console.log(`Buscando o usuário: ${userId}`);
  }

  console.log(data);

  return (
    <>
      <h1>Página CONTATOS</h1>

      <button onClick={handleClickButton}>Usando lado servidor</button>

      <form action={handleSearchUsers}>
        <input type="text" placeholder="Nome do usuário" name="userId" />
        <input type="submit" value="Buscar" />
      </form>

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