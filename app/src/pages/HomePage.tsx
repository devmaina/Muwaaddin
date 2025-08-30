import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Article } from '../types';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('articles')
          .select('*');

        if (error) {
          throw error;
        }

        if (data) {
          setArticles(data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="main-article">
            <img src="https://placeholder.co/800x600/333333/FFFFFF?text=Politics+Article" alt="Political Article Image" />
            <div className="main-article-text">
              <p>POLITICS</p>
              <h1><a href="#">Siad Barre, myth and the spectacle of power</a></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="side-news">
            {articles.slice(0, 3).map((article) => (
              <div className="news-card" key={article.id}>
                <img src={article.image_url} alt={article.title_en} />
                <div className="news-card-content">
                  <span>{article.category.toUpperCase()}</span>
                  <h3><Link to={`/story/${article.id}`}>{article.title_en}</Link></h3>
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