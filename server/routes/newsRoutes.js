// routes/newsRoutes.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsdata.io/api/1";

// Fetch news by category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=in&category=${category.toLowerCase()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news");
    const data = await response.json();
    res.json(data.results || []);
  } catch (error) {
    console.error("Error fetching news by category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch top headlines
router.get("/top-headlines", async (req, res) => {
  try {
    const url = `${BASE_URL}/news?apikey=${API_KEY}&country=in`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch headlines");
    const data = await response.json();
    res.json(data.results || []);
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
