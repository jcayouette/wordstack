# WordStack

A modern, multilingual church website platform built with Next.js, Supabase, and YouTube.

## Overview

WordStack is a scalable church website solution that provides:
- Public sermon archive with video, transcripts, and AI-enhanced text
- Private member-only training content
- Event calendar with role-based editing
- AI-powered sermon processing and multi-language support
- Searchable content with Algolia
- Reusable template for other churches

## Tech Stack

- **Frontend**: Next.js 14 (App Router), shadcn/ui, Tailwind CSS
- **Backend**: Vercel, Supabase (PostgreSQL, Auth, Storage)
- **Video**: YouTube (hosting, transcription)
- **Search**: Algolia
- **Documentation**: Docusaurus (optional)

## Features

### Public Content
- Sunday sermons with video embeds and transcripts
- Announcements and church information
- Read-only event calendar
- Multilingual support (English, German, Spanish, French, Italian, Hindi)

### Private Content
- Leadership training videos
- Evangelism and discipleship courses
- Bible institute content
- Calendar and sermon management dashboards

### AI-Powered Sermon Processing
- Automatic transcript cleanup
- Grammar correction and filler word removal
- Scripture reference extraction
- Summary and outline generation
- Multi-language translation

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works great)
- (Optional) YouTube API key for transcript fetching
- (Optional) OpenAI API key for AI sermon processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jcayouette/wordstack.git
   cd wordstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL in `supabase/schema.sql` in the Supabase SQL Editor
   - Copy your project URL and anon key

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in your Supabase credentials and API keys.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

### Project Structure

```
├── app/                 # Next.js 14 app directory
├── components/          # React components
├── lib/
│   ├── supabase/       # Supabase client utilities
│   └── utils.ts        # Utility functions
├── supabase/
│   └── schema.sql      # Database schema
├── types/
│   └── database.ts     # TypeScript types for database
└── public/             # Static assets
```

## Documentation

See [the-plan.md](./the-plan.md) for the complete architectural plan and implementation details.

## License

MIT License - see [LICENSE](./LICENSE) for details
