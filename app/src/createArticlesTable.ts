// // createArticlesTable.ts
// import { createClient } from './supabaseClient';

// async function createArticlesTable() {
//   const sql = `
//     CREATE TABLE IF NOT EXISTS articles (
//       id TEXT PRIMARY KEY,
//       created_at TIMESTAMP DEFAULT now(),
//       title_en TEXT,
//       title_so TEXT,
//       title_ar TEXT,
//       content_en TEXT,
//       content_so TEXT,
//       content_ar TEXT,
//       image_url TEXT,
//       video_url TEXT,
//       category TEXT
//     );
//   `;

//   const { data, error } = await createClient.rpc('exec_sql', { sql });
//   if (error) console.error('Error creating table:', error);
//   else console.log('Articles table created or already exists.');
// }

// createArticlesTable();
