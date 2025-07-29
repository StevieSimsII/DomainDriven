# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up Supabase**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - In the Supabase dashboard, go to SQL Editor
   - Run the SQL from `supabase/schema.sql` to create the contacts table
   - Get your project URL and anon key from Settings > API

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **View the site**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Add Your Logo/Favicon

1. Replace the placeholder files in the `/public` folder:
   - `favicon.ico` - Website favicon
   - `icon-192x192.png` - PWA icon (192x192px)
   - `icon-512x512.png` - PWA icon (512x512px)

2. Update the company name in `components/header.tsx` if needed

## 📞 Test Contact Form

Once Supabase is set up, test the contact form to ensure submissions are being stored correctly. You can view submissions in your Supabase dashboard under the `contacts` table.

## 🚀 Deploy

The easiest way to deploy is with Vercel:

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

---

**Need help?** Check the full README.md for detailed instructions. 