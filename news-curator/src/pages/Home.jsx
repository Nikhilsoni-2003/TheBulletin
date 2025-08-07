import { useEffect, useState } from "react";
import CategorySelector from "../components/CategorySelector";
import NewsList from "../components/NewsList";
import { fetchNews } from "../api/newsApi"; // This now works ✅

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const news = await fetchNews(selectedCategory);
      setArticles(news);
      setLoading(false);
    };

    getNews();
  }, [selectedCategory]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🗞️ News Curator</h1>
      <CategorySelector selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      {loading ? <p>Loading news...</p> : <NewsList articles={articles} />}
    </div>
  );
}

export default Home;
