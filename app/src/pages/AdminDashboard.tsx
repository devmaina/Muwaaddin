import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminDashboard: React.FC = () => {
  const [title_en, setTitleEn] = useState('');
  const [title_so, setTitleSo] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [content_en, setContentEn] = useState('');
  const [content_so, setContentSo] = useState('');
  const [content_ar, setContentAr] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [video_url, setVideoUrl] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.from('articles').insert([
        {
          title_en,
          title_so,
          title_ar,
          content_en,
          content_so,
          content_ar,
          image_url,
          video_url,
          category,
        },
      ]);

      if (error) {
        throw error;
      }

      alert('Article created successfully!');
      // Clear form
      setTitleEn('');
      setTitleSo('');
      setTitleAr('');
      setContentEn('');
      setContentSo('');
      setContentAr('');
      setImageUrl('');
      setVideoUrl('');
      setCategory('');
    } catch (error) {
      console.error('Error creating article:', error);
      alert('Error creating article');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <h2>Add New Article</h2>
        <div>
          <label>Title (EN)</label>
          <input type="text" value={title_en} onChange={(e) => setTitleEn(e.target.value)} required />
        </div>
        <div>
          <label>Title (SO)</label>
          <input type="text" value={title_so} onChange={(e) => setTitleSo(e.target.value)} required />
        </div>
        <div>
          <label>Title (AR)</label>
          <input type="text" value={title_ar} onChange={(e) => setTitleAr(e.target.value)} required />
        </div>
        <div>
          <label>Content (EN)</label>
          <textarea value={content_en} onChange={(e) => setContentEn(e.target.value)} required />
        </div>
        <div>
          <label>Content (SO)</label>
          <textarea value={content_so} onChange={(e) => setContentSo(e.target.value)} required />
        </div>
        <div>
          <label>Content (AR)</label>
          <textarea value={content_ar} onChange={(e) => setContentAr(e.target.value)} required />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <div>
          <label>Video URL (optional)</label>
          <input type="text" value={video_url} onChange={(e) => setVideoUrl(e.target.value)} />
        </div>
        <div>
          <label>Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Article'}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
