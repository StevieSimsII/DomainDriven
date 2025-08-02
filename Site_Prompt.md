### Intelligent Website Build Prompt for “DomainDrivenDigital.com”

**Project Goal:**
Build a modern, minimalist, and tech-forward website for DomainDriven—a software development and consultancy company. The domain will be [DomainDrivenDigital.com](https://DomainDrivenDigital.com).

#### 1. UI/UX Design Requirements:

* **Overall Style:**

  * Minimalist, clean, and sleek layout
  * Light gray palette with soft contrasts, mimicking modern developer tools (think GitHub, Vercel, Linear, etc.)
  * Responsive design for both desktop and mobile
* **Dark & Light Mode:**

  * Simple, user-toggable dark/light mode
  * Both themes should maintain clean, neutral backgrounds and easily readable text
* **Tech-Forward Aesthetic:**

  * Use monospaced or modern sans-serif fonts
  * Clear section spacing, subtle shadows, and interactive but non-distracting hover/focus states

#### 2. Brand & Content:

* **Company Name:** DomainDriven

* **Domain:** DomainDrivenDigital.com

* **About Section:**
  Use the following About content (ensure it’s elegantly formatted for easy reading):

  > At DomainDriven, we believe real digital transformation starts with the people who know their business best. Our mission is to empower organizations by unlocking the knowledge of subject matter experts and enabling everyone—from frontline workers to business leaders—to become citizen developers and digital innovators. By putting domain expertise at the center of every solution, we help teams build apps, automate processes, and drive meaningful change with technology that works for them.
  >
  > Whether through hands-on training, consultancy, or custom app and automation development, DomainDriven bridges the gap between deep industry insight and the latest tech—so your people can solve their own challenges and lead your digital journey.

* **Brand Statements / Taglines:**
  Feature these throughout the site (as hero, callout, or section intros):

  * “Where Domain Expertise Drives Digital Innovation.”
  * “Empowering People. Transforming Processes. Delivering Results.”
  * “Citizen Development Starts with Domain Know-How.”
  * “Build. Automate. Innovate—with the Experts Who Know Your Business Best.”
  * “Bridging Domain Knowledge and Technology for Real-World Impact.”

#### 3. Site Structure:

* **Homepage:**

  * Hero section: Logo, main tagline, concise mission statement
  * About DomainDriven section
  * Brand/tagline callouts
* **Contact Page or Form Section:**

  * Clean, accessible contact form (fields: Name, Email, Message)
  * Should connect to Supabase backend for data storage
  * Display a success/failure message after form submission
* **Footer:**

  * Company info, quick links, and social/contact icons

#### 4. Backend Instructions (Supabase):

* Set up a free Supabase project (PostgreSQL) for backend.
* Create a “contacts” table/collection to store contact form submissions (fields: id, name, email, message, timestamp).
* Secure the API endpoint so only the form can submit data (no public listing).
* (Optional) Enable email notifications for new form submissions.

#### 5. Tech Stack Preferences:

* **Frontend:**

  * Use React (Next.js recommended for easy deployment), Vite, or similar modern JS framework
  * Use Tailwind CSS or a similar utility-first CSS framework for rapid, consistent styling
  * Implement theme switcher for dark/light mode

* **Backend:**

  * Supabase as the backend database and API (use environment variables for keys)
  * Use Supabase client library for frontend-backend integration

#### 6. Code Quality & Documentation:

* Code should be clean, modular, and commented where necessary.
* Provide a clear README.md with setup and deployment instructions.

#### 7. Extra (Optional but Nice-to-Have):

* Favicon and Open Graph metadata for better sharing
* SEO-optimized titles and meta descriptions
* Animation or subtle transitions (e.g., for theme switching, form submit)

---

**Final Deliverables:**

* Complete source code for frontend and backend integration
* Supabase database schema
* Deployment-ready (e.g., Vercel, Netlify, or your preferred platform)
* README.md with step-by-step instructions

---

**Summary**:
Build [DomainDrivenDigital.com](https://DomainDrivenDigital.com)—a sleek, modern, and minimalist site for a software and consultancy brand. Prioritize a developer-focused, tech-forward UI, seamless Supabase integration for contact form handling, and clear documentation.
Use the provided brand story, taglines, and aesthetic inspirations as your north star.

