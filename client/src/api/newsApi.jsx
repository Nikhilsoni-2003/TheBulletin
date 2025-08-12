// src/api/newsApi.jsx
const API_BASE_URL = "/api/news"; // Use relative URL with Vite proxy

// Fetch top headlines
export async function fetchTopHeadlines() {
  try {
    const response = await fetch(`${API_BASE_URL}/top-headlines`);
    if (!response.ok) {
      throw new Error(`Failed to fetch top headlines: ${response.status}`);
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
      throw new Error(`Failed to fetch news for category ${category}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    return [];
  }
}