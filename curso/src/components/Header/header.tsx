import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1>HEADER DO PROJETO</h1>
      <Link href="/">HOME</Link>
      <Link href="/contatos">CONTATOS</Link>
    </header>
  )
}