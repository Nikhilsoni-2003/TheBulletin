import { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import FilterControls from "../components/FilterControls";
import NewsGrid from "../components/NewsGrid";
import { fetchNewsByCategory, searchNews } from "../api/newsApi";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [filters, setFilters] = useState({
    language: 'en',
    country: 'in',
    timeframe: '',
    sentiment: ''
  });

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    setIsSearchMode(true);

    try {
      const news = await searchNews(query, filters);
      setArticles(news);
    } catch (err) {
      setError("Failed to search news. Please try again later.");
      setArticles([]);
    }

    setLoading(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsSearchMode(false);
    setSearchQuery("");
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      language: 'en',
      country: 'in',
      timeframe: '',
      sentiment: ''
    });
  };

  useEffect(() => {
    if (isSearchMode && searchQuery) {
      handleSearch(searchQuery);
      return;
    }

    const getNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const news = await fetchNewsByCategory(selectedCategory, filters);
        setArticles(news);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        setArticles([]);
      }

      setLoading(false);
    };

    getNews();
  }, [selectedCategory, filters, isSearchMode, searchQuery]);

  return (
    <div className="app">
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <CategoryNav 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      
      <FilterControls 
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      
      <main className="main-content">
        <NewsGrid 
          articles={articles}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default Home;