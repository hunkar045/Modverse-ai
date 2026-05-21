# Deployment Guide

## Overview
This guide walks you through deploying ModVerse AI to production using Vercel (frontend) and Railway/Supabase (backend).

## Deployment Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌───────────────┐
│   GitHub Repo   │         │     Vercel       │         │   Railway     │
│                 │────────▶│   (Frontend)     │◀───────▶│  (Backend)    │
│                 │         │                  │         │               │
└─────────────────┘         └──────────────────┘         └───────────────┘
                                                              │
                                                              ▼
                                                         ┌───────────────┐
                                                         │  PostgreSQL   │
                                                         │   Database    │
                                                         └───────────────┘
```

## Prerequisites

- GitHub account
- Vercel account
- Railway or Supabase account
- OpenAI API key
- Perspective API key (optional)

## Part 1: Frontend Deployment (Vercel)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the project root
5. Click "Deploy"

### Step 3: Configure Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add required variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-railway-url.com
   ```

### Step 4: Enable Auto-Deployments
- Vercel automatically deploys on git push to main

## Part 2: Backend Deployment (Railway)

### Step 1: Create Railway Project
1. Go to [railway.app](https://railway.app)
2. Click "Create New Project"
3. Select "Deploy from GitHub"
4. Select your repository

### Step 2: Add PostgreSQL Database
1. Click "Add Service"
2. Select "PostgreSQL"
3. Configure:
   - Name: `modverse-db`
   - Username: `postgres`
   - Password: (auto-generated)

### Step 3: Configure Environment Variables
Add to Railway:
```
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]
NEXTAUTH_SECRET=your-secret-here
OPENAI_API_KEY=sk-...
PERSPECTIVE_API_KEY=your-api-key
NEXTAUTH_URL=https://your-vercel-domain.com
NODE_ENV=production
```

### Step 4: Deploy
```bash
# Railway CLI
railway login
railway link
railway up
```

## Part 3: Database Setup

### Run Migrations
```bash
# Locally
npx prisma migrate deploy

# Via Railway
railway run npx prisma migrate deploy
```

### Generate Prisma Client
```bash
npx prisma generate
```

## Part 4: Configure External Services

### OpenAI API
1. Get API key from [openai.com](https://platform.openai.com)
2. Add to Vercel and Railway environment variables
3. Usage quota: Configure billing limits

### Perspective API (Optional)
1. Enable at [developers.perspectiveapi.com](https://developers.perspectiveapi.com)
2. Get API key
3. Add to environment variables

## Monitoring & Maintenance

### Vercel Monitoring
- Real-time logs in Vercel dashboard
- Error tracking
- Performance analytics

### Railway Monitoring
- Database metrics
- Error logs
- Resource usage

### Health Checks
```bash
# Check API health
curl https://your-railway-url.com/api/health

# Check database
npx prisma db execute "SELECT 1"
```

## Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Verify DATABASE_URL format
echo $DATABASE_URL

# Test connection
npx prisma db execute "SELECT 1"
```

**Environment Variables Not Found**
- Ensure variables are set in both Vercel and Railway
- Redeploy after adding/changing variables

**Build Failures**
```bash
# Clear cache and rebuild
vercel rebuild --force

# Check build logs
vercel logs
```

## Scaling

### Vertical Scaling
- Increase Railway plan tier
- Upgrade PostgreSQL resources

### Horizontal Scaling
- Add more Vercel serverless functions
- Use Railway load balancer

## Security Checklist

- [ ] Change default passwords
- [ ] Enable HTTPS only
- [ ] Set up WAF
- [ ] Enable 2FA on all accounts
- [ ] Rotate API keys regularly
- [ ] Set up database backups
- [ ] Configure rate limiting
- [ ] Enable CORS restrictions
- [ ] Use environment secrets
- [ ] Enable audit logging

## Backup & Recovery

### Automated Backups
Railway provides daily backups. To restore:
```bash
railway database:backup:restore
```

### Manual Backup
```bash
pg_dump $DATABASE_URL > backup.sql
```

## Performance Optimization

### Frontend (Vercel)
- Enable CDN edge caching
- Use image optimization
- Enable serverless caching

### Backend (Railway)
- Use connection pooling
- Enable query caching
- Optimize database indexes

### Database
```sql
-- Create indexes for common queries
CREATE INDEX idx_subreddit_id ON posts(subreddit_id);
CREATE INDEX idx_created_at ON posts(created_at);
CREATE INDEX idx_user_id ON moderation_actions(user_id);
```

## Cost Estimation

**Monthly Costs:**
- Vercel: Free tier or $20+
- Railway: $5-50 depending on usage
- OpenAI API: Pay-as-you-go (~$50-200)
- Database: $5-30/month

**Total Estimated: $60-300/month**

## Next Steps

1. Set up monitoring and alerts
2. Configure automated backups
3. Set up CI/CD pipeline
4. Configure custom domain
5. Set up SSL certificate
6. Configure CDN
7. Set up analytics
8. Configure logging service

## Support

For deployment issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Check Railway documentation: [railway.app/docs](https://railway.app/docs)
- Check Prisma documentation: [prisma.io/docs](https://prisma.io/docs)
