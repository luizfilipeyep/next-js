export async function Post({ id }: { id: string }) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json()

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}