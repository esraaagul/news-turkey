import NewsCard from '../components/NewsCard'

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Son Haberler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default Home
