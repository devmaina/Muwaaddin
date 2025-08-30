import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Article } from '../types';

const FullStoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('id', slug)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setArticle(data);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className="container">
      <h1>{article.title_en}</h1>
      <img src={article.image_url} alt={article.title_en} style={{ maxWidth: '100%' }} />
      <div>{article.content_en}</div>
      {article.video_url && (
        <video src={article.video_url} controls style={{ maxWidth: '100%' }} />
      )}
    </main>
  );
};

export default FullStoryPage;