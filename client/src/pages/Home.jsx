import { useEffect, useState } from "react";
import CategorySelector from "../components/CategorySelector";
import NewsList from "../components/NewsList";
import { fetchNewsByCategory } from "../api/newsApi";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const news = await fetchNewsByCategory(selectedCategory);
        setArticles(news);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
      }

      setLoading(false);
    };

    getNews();
  }, [selectedCategory]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🗞️ News Curator</h1>
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      {loading && <p>Loading news...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <NewsList articles={articles} />}
    </div>
  );
}

export default Home;