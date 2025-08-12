// src/api/newsApi.jsx

const API_BASE_URL = "http://localhost:5000/api/news"; 
// Production me deploy hone ke baad apna backend URL yaha daalo

// Fetch top headlines
export async function fetchTopHeadlines() {
  try {
    const response = await fetch(`${API_BASE_URL}/top-headlines`);
    if (!response.ok) {
      throw new Error("Failed to fetch top headlines");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
}

// Fetch news by category
export async function fetchNewsByCategory(category) {
  try {
    const response = await fetch(`${API_BASE_URL}/category/${category}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch news for category: ${category}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    return [];
  }
}


export async function fetchNews(category) {
  try {
    const res = await fetch(`http://localhost:5000/api/news?category=${category}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status}`);
    }
    const data = await res.json();
    return data.articles || []; // Expecting backend to return { articles: [...] }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

