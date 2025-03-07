import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Haber Sitesi</Link>
        </h1>
        <nav>
          <Link to="/" className="mx-2 hover:underline">
            Ana Sayfa
          </Link>

          <Link to="/" className="mx-2 hover:underline">
            Yaşam
          </Link>
        </nav>
      </div>
    </header>
  )
}
