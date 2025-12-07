# Vercel Deployment Guide

## Prerequisites
- GitHub repository: https://github.com/jcayouette/wordstack
- Vercel account (free tier works perfectly)
- Supabase project already configured

## Deployment Steps

### 1. Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `jcayouette/wordstack` repository
5. Vercel will auto-detect Next.js settings

### 2. Configure Environment Variables

In the Vercel project settings, add these environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Optional (for later):
```bash
YOUTUBE_API_KEY=your-youtube-api-key
OPENAI_API_KEY=your-openai-api-key
NEXT_PUBLIC_ALGOLIA_APP_ID=your-algolia-app-id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your-algolia-search-key
ALGOLIA_ADMIN_KEY=your-algolia-admin-key
```

### 3. Deploy

Click "Deploy" and Vercel will:
- Install dependencies
- Build the Next.js app
- Deploy to a production URL
- Set up automatic deployments for new commits

### 4. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

## Supabase Connection Check

Your Supabase database should already have:
- ✅ Tables: `sermons`, `events`, `profiles`
- ✅ Row Level Security policies
- ✅ Auth triggers for profile creation

To verify, run the SQL from `supabase/schema.sql` in your Supabase SQL Editor if you haven't already.

## Post-Deployment

After deployment:
1. Visit your Vercel URL (e.g., `wordstack.vercel.app`)
2. Test the navigation and theme toggle
3. Verify Supabase connection (no errors in browser console)
4. Test authentication (once we add login pages)

## Automatic Deployments

Every push to `main` branch will automatically deploy to production.
Pull requests will get preview deployments.

## CLI Deployment (Alternative)

If you prefer CLI:
```bash
vercel login
vercel
# Follow prompts, link to existing project or create new one
vercel --prod
```

## Environment Variables Management

To add/update env vars via CLI:
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Monitoring

Access logs and analytics at:
- https://vercel.com/jcayouette/wordstack
- Monitor build times, errors, and traffic
