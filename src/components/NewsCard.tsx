
const NewsCard = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img
      src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold mb-2">haber başlığı</h3>
      <p className="text-sm text-gray-600">description</p>
      <a href="#" target="_blank" className="text-blue-600 hover:underline mt-2 block">
        Haberin Devamı
      </a>
    </div>
  </div>
  )
}

export default NewsCard