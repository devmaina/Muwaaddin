// HomePage.tsx

import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Article } from "../types";
import { Link, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [heroArticle, setHeroArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // PIN auth state
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  // Fetch articles and select a random one for the hero section
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("articles").select("*");
        if (error) throw error;
        if (data && data.length > 0) {
          // Select a random article for the hero section
          const randomIndex = Math.floor(Math.random() * data.length);
          const selectedHeroArticle = data[randomIndex];
          setHeroArticle(selectedHeroArticle);

          // Filter out the hero article from the main articles list
          const remainingArticles = data.filter(
            (article) => article.id !== selectedHeroArticle.id
          );
          setArticles(remainingArticles.slice(0, 3)); // Display up to 3 side news articles
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Handle PIN login (unchanged as requested)
  const handleLogin = () => {
    if (pin === "1234" && name.toLowerCase() === "test") {
      setAuthenticated(true);
      setPin("");
      setName("");
    } else {
      alert("Wrong PIN or name!");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      {/* Simple inline PIN login */}
      {!authenticated && (
        <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Admin Login</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="password"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* Button to go to Admin Dashboard if authenticated */}
      {authenticated && (
        <div style={{ margin: "20px" }}>
          <button onClick={() => navigate("/admin")}>Go to Admin Dashboard</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          {heroArticle && (
            <div className="main-article">
              <img
                src={heroArticle.image_url}
                alt={heroArticle.title_en}
              />
              <div className="main-article-text">
                <p>{heroArticle.category.toUpperCase()}</p>
                <h1>
                  <Link to={`/story/${heroArticle.id}`}>{heroArticle.title_en}</Link>
                </h1>
                <p>
                  {heroArticle.description_en}
                </p>
              </div>
            </div>
          )}
          <div className="side-news">
            {articles.map((article) => (
              <div className="news-card" key={article.id}>
                <img src={article.image_url} alt={article.title_en} />
                <div className="news-card-content">
                  <span>{article.category.toUpperCase()}</span>
                  <h3>
                    <Link to={`/story/${article.id}`}>{article.title_en}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections can be added here */}
    </main>
  );
};

export default HomePage;