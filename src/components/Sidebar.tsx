const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow-md p-4 ">
      <h3 className="text-lg font-bold mb-2">Kategoriler</h3>
      <ul>
        <li className="">
          <a href="#" className="text-blue-600 hover:underline">
            Teknoloji
          </a>
        </li>
        <li className="">
          <a href="#" className="text-blue-600 hover:underline">
            Ekonomi
          </a>
        </li>
        <li className="">
          <a href="#" className="text-blue-600 hover:underline">
            Sağlık
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
