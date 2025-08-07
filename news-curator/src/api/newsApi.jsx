const API_KEY = 'pub_a24255cf6bf4409b8a3f028f566cbd3b'; // Your API key
const BASE_URL = 'https://newsdata.io/api/1';

export const fetchNewsByCategory = async (category) => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=in&category=${category.toLowerCase()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json();
    return data.results || []; 
  } catch (error) {
    console.error("Error fetching news by category:", error);
    return [];
  }
};

export const fetchTopHeadlines = async () => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=in`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch top headlines");

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

export const fetchNews = fetchNewsByCategory;
