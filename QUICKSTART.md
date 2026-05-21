// Quick Start Guide

# 🚀 Quick Start Guide - ModVerse AI

## 5-Minute Setup

### 1. Clone & Install
```bash
git clone <repo-url>
cd modverse-ai
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your settings
```

### 3. Database Setup
```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Run Locally
```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

## Demo Credentials

- **Email:** demo@example.com
- **Password:** demo123

## Key Features Demo

### 1. Landing Page
- Modern hero section
- Feature showcase
- Live stats
- Call-to-action buttons

### 2. Authentication
- Login page with email/password
- Registration with validation
- Session management

### 3. Dashboard
- **Main Dashboard:** Overview of community health
- **Live Feed:** Real-time content analysis
- **Analytics:** Charts and metrics
- **Alerts:** Critical events
- **AI Assistant:** Chat with AI
- **Insights:** Actionable recommendations
- **Moderators:** Team management
- **Settings:** Preferences

### 4. AI Features
- Toxicity detection (mock)
- Spam detection (mock)
- Community health analysis (mock)
- AI-powered recommendations (mock)

## File Structure Tour

```
modverse-ai/
├── app/
│   ├── page.tsx              ← Landing page
│   ├── dashboard/            ← Dashboard pages
│   │   ├── page.tsx          ← Main dashboard
│   │   ├── feed/             ← Live feed
│   │   └── ...
│   └── api/                  ← API endpoints
├── components/               ← React components
├── lib/                      ← Utilities & services
└── prisma/                   ← Database schema
```

## Common Tasks

### Add a New Page
```typescript
// app/dashboard/newpage/page.tsx
'use client'
import { motion } from 'framer-motion'

export default function NewPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      Your content here
    </motion.div>
  )
}
```

### Create API Route
```typescript
// app/api/resource/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ data: [] })
}
```

### Add Component
```typescript
// components/MyComponent.tsx
'use client'
import { motion } from 'framer-motion'

export default function MyComponent() {
  return (
    <motion.div className="ai-card">
      Component content
    </motion.div>
  )
}
```

## Useful Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm start                      # Start production server

# Database
npx prisma migrate dev         # Create new migration
npx prisma studio             # Open database UI

# Code Quality
npm run lint                   # Run linter
npx prettier --write "**/*"    # Format code

# Deployment
npm run build                  # Build app
vercel deploy                  # Deploy to Vercel
```

## Deploy to Vercel (1-Click)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repo
5. Click "Deploy"

## Next Steps

1. ✅ Run locally
2. 📊 Explore dashboard pages
3. 🎨 Customize colors & theme
4. 🔗 Connect real APIs
5. 🚀 Deploy to production

## Troubleshooting

**Port already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000 | grep LISTEN
kill -9 <PID>
```

**Database errors?**
```bash
npx prisma db push
npx prisma generate
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Prisma Docs](https://www.prisma.io/docs)

## Support

- 📚 Check [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed guide
- 🐛 Report issues on GitHub
- 💬 Join our community Discord

---

Happy coding! 🎉
