# DomainDriven Digital Website

A modern, minimalist website for DomainDriven - a software development and consultancy company that empowers organizations through domain expertise and digital innovation.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic inspired by developer tools like GitHub, Vercel, and Linear
- **Dark/Light Mode**: User-toggleable theme switcher with system preference detection
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Contact Form**: Integrated with Supabase for secure form submissions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter card support
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Supabase

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd domaindriven-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   - Create a new Supabase project at [https://supabase.com](https://supabase.com)
   - Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
   - Copy your project URL and anon key to `.env.local`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

The website uses a simple `contacts` table to store form submissions. Run this SQL in your Supabase project:

```sql
-- Create the contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public form submissions
CREATE POLICY "Allow public contact form submissions" ON contacts
    FOR INSERT 
    WITH CHECK (true);
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 🎨 Customization

### Colors & Themes

The design system uses CSS custom properties defined in `app/globals.css`. Modify these values to change the color scheme:

```css
:root {
  --background: 255 255 255;
  --foreground: 15 23 42;
  /* ... more color variables */
}
```

### Content

Update the following components to customize content:
- `components/hero.tsx` - Main hero section
- `components/about.tsx` - About section content
- `components/taglines.tsx` - Brand taglines
- `app/layout.tsx` - SEO metadata

### Styling

The project uses Tailwind CSS with a custom configuration in `tailwind.config.js`. All components are fully responsive and use the design system tokens.

## 📝 Brand Guidelines

### Typography
- **Headings**: Inter (font-sans)
- **Code/Logo**: JetBrains Mono (font-mono)

### Color Palette
- Light theme: Clean whites and subtle grays
- Dark theme: Deep blues and slate colors
- Consistent with modern developer tools aesthetic

### Taglines
- "Where Domain Expertise Drives Digital Innovation."
- "Empowering People. Transforming Processes. Delivering Results."
- "Citizen Development Starts with Domain Know-How."
- "Build. Automate. Innovate—with the Experts Who Know Your Business Best."
- "Bridging Domain Knowledge and Technology for Real-World Impact."

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage
├── components/           # React components
│   ├── about.tsx        # About section
│   ├── contact.tsx      # Contact form with Supabase
│   ├── footer.tsx       # Site footer
│   ├── header.tsx       # Site header
│   ├── hero.tsx         # Hero section
│   ├── taglines.tsx     # Brand taglines
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx # Theme switcher button
├── lib/                  # Utility libraries
│   └── supabase.ts      # Supabase client configuration
├── supabase/            # Database schema
│   └── schema.sql       # SQL table definitions
└── public/              # Static assets
```

## 📄 License

This project is created for DomainDriven. All rights reserved.

## 🤝 Support

For questions or support, please use the contact form on the website or reach out through the provided contact information.

---

**DomainDriven** - Where Domain Expertise Drives Digital Innovation. 