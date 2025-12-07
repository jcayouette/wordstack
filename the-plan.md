# 📘 Church Website Modernization Plan

**Tech Stack:** Next.js • Vercel • Supabase • YouTube • Algolia • Docusaurus

## 1. Project Overview

This project aims to build a modern, efficient, multilingual church website that provides:

- Public sermons (video + transcript + searchable text)
- Private member-only training content
- A calendar of events editable by trusted members
- Evangelism / training courses
- AI-assisted sermon text processing
- A scalable architecture that can be reused by other churches

The stack avoids heavy CMS platforms such as WordPress and uses a lightweight, developer-friendly approach powered by Next.js, Supabase, and YouTube.

## 2. Technology Stack

### Frontend
- **Next.js 14** (App Router)
- **shadcn/ui** for clean UI components
- **Tailwind CSS**
- **Docusaurus** (optional) for longform teaching material or sermon archives

### Backend / Infrastructure
- **Vercel** for hosting and deployments
- **Supabase** for:
  - PostgreSQL database
  - Auth & role-based permissions
  - Storage for audio, thumbnails, PDFs, etc.

### Video Hosting
- **YouTube**
  - Public videos → public sermons
  - Unlisted videos → private training content
  - Auto-transcription for use with AI refinement

### Search
- **Algolia** → sermon and teaching text indexing



## 3. Privacy & Access Structure

### Public Content
- Sunday sermons (video embedded + text + metadata)
- Announcements
- Calendar (read-only view)
- Basic church information
- Multilingual pages (German, English, Spanish, French, Italian, Hindi)

### Private Content
Protected via Supabase Auth or NextAuth middleware:
- Leadership training videos
- Evangelism courses
- Bible institute / university content
- Calendar editing dashboard
- Sermon upload/management dashboard

### Access Roles
- **admin** → full CRUD rights
- **member** → view private content, limited edits
- **public** → default website visitors



## 4. Sermon Workflow (Video + Text)

### 1. Record the sermon live
- Camera → offline file OR livestream

### 2. Upload to YouTube
- Public visibility for normal sermons
- Auto-generates transcripts
- Provides scalable video delivery

### 3. Pull YouTube transcript
Obtained via:
- YouTube Transcript API
- OR manual download

### 4. AI Processing
The transcript is cleaned using AI:
- Remove filler words
- Correct grammar
- Extract scripture references
- Generate summary
- Generate outline
- Create metadata tags
- Optionally translate into target languages

### 5. Store Metadata in Supabase
Fields include:
- title
- slug
- speaker
- date
- passage
- tags
- YouTube URL
- transcript
- refined sermon text (AI-formatted)
- summary
- outline
- duration


### 6. Index to Algolia (optional)
Enables fast, church-wide search:
- by topic
- by scripture
- by speaker
- by text contents

### 7. Display in Next.js
Sermon page includes:
- video embed
- cleaned transcript
- refined text
- outline
- translations
- download options



## 5. Calendar of Events

### Features
Members with login can:
- add events
- edit events
- delete events

Public sees read-only calendar

Optional categories: Prayer, Fellowship, Youth, Outreach, etc.

### Tech
- Events stored in Supabase
- Admin UI built with shadcn/ui and React Hook Form
- Optionally export as ICS for Google Calendar users



## 6. Authentication & Authorization

### Auth Provider Options
- **NextAuth.js** (self-managed)
- **Supabase Auth** (simpler integration)

### Protected Routes
Middleware example:
```
/admin/*
/training/*
/events/edit/*
```

### User Roles
Stored in Supabase:
- `public` (default)
- `member`
- `admin`

### Capabilities
- **admin**: manage sermons, events, create training content
- **member**: edit events, view private content
- **public**: view sermons, announcements, static pages



## 7. Multilingual Support

### Languages
- German
- English
- Spanish
- French
- Italian
- Hindi

### Implementation
- `next-intl` or Next.js built-in i18n
- Language-specific JSON files for navigation & content
- Sermons auto-translated with AI and stored per-language

### URLs
```
/de/...  
/en/...  
/es/...  
/fr/...  
/it/...  
/hi/...
```  


## 8. Optional: Docusaurus for Sermons & Teaching

Docusaurus can be included alongside Next.js for longform content such as:
- Bible school courses
- Apologetics curriculum
- Discipleship material
- Leadership guides

### Why Docusaurus?
- Markdown-first documentation system
- Easy to structure topics
- Supports versioning & search
- Integrates with Algolia

You can embed Docusaurus at:
```
/teachings/*
/university/*
```

Or host separately and link from the main site.

## 9. Database Schema (Supabase)

### Sermons Table
```sql
create table sermons (
  id uuid primary key default uuid_generate_v4(),
  title text,
  slug text unique,
  speaker text,
  date date,
  passage text,
  tags text[],
  youtube_url text,
  transcript text,
  refined_text text,
  summary text,
  outline text,
  duration int,
  created_at timestamp default now()
);
```

### Events Table
```sql
create table events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  date_start timestamptz not null,
  date_end timestamptz,
  location text,
  created_by uuid references auth.users(id),
  created_at timestamp default now()
);
```

### Users (Auth)
Handled by Supabase or NextAuth.

## 10. Deployment & Privacy

### Vercel
- Host the Next.js app
- Preview deployments protected by password
- Production deployment publicly accessible

### Privacy Levels
- **Public sermons** = YouTube Public
- **Private courses** = YouTube Unlisted + authenticated page
- **Admin tools** = protected routes



## 11. Templating for Other Churches

This site will be built as a reusable template, with configurable values for:
- Name, logo, theme
- Navigation
- Language options
- Sermon workflow
- Event categories

Potential npm initializer:
```bash
npx create-church-site my-church
```


## 12. Summary & Benefits

This architecture provides:
- ✅ Modern, fast website
- ✅ Simple admin tools for non-technical members
- ✅ Public sermons + private courses
- ✅ AI-enhanced sermon text content
- ✅ Searchable archive (Algolia)
- ✅ Fully multilingual
- ✅ Scalable + reusable for other churches
- ✅ Zero bandwidth/hosting concerns for video

