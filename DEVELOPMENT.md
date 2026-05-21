// Development guide for ModVerse AI

# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- Git
- npm or yarn

### Initial Setup

```bash
# Clone repository
git clone https://github.com/youruser/modverse-ai.git
cd modverse-ai

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Setup database
npx prisma migrate dev
npx prisma generate

# Start development server
npm run dev
```

## Project Structure

```
app/                 - Next.js App Router
├── page.tsx         - Landing page
├── layout.tsx       - Root layout
├── api/             - API routes
├── dashboard/       - Dashboard pages
├── login/           - Auth pages
└── register/

components/          - React components
├── ui/              - Base components
├── dashboard/       - Dashboard components
└── landing/         - Landing components

lib/
├── utils.ts         - Utilities
├── types.ts         - Type definitions
├── auth.ts          - Auth utilities
└── middleware.ts    - Middleware

services/            - API services
hooks/              - Custom hooks
styles/             - Global styles
prisma/             - Database schema
```

## Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm start            # Start production server

# Database
npx prisma migrate dev     # Create migration
npx prisma generate        # Generate Prisma client
npx prisma studio          # Open database GUI
npx prisma db push         # Push schema to DB

# Linting
npm run lint         # Run ESLint

# Format
npx prettier --write "**/*.{ts,tsx,json}"
```

## Database Workflow

### Create a Model
1. Update `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name descriptive_name`
3. Answer questions about changes
4. Prisma generates migration files

### Query Database
```typescript
// Using Prisma client
import { prisma } from '@/lib/prisma'

// Example: Get all subreddits
const subreddits = await prisma.subreddit.findMany()

// Create new user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'User Name',
    password: hashedPassword,
  },
})
```

## API Development

### Create New Endpoint
1. Create route file: `app/api/resource/route.ts`
2. Implement handlers:
   ```typescript
   import { NextRequest, NextResponse } from 'next/server'
   
   export async function GET(request: NextRequest) {
     // Handle GET requests
   }
   
   export async function POST(request: NextRequest) {
     // Handle POST requests
   }
   ```
3. Add to services: `services/index.ts`
4. Use in components:
   ```typescript
   const response = await fetch('/api/resource')
   ```

## Component Development

### Create New Component
```typescript
import React from 'react'
import { motion } from 'framer-motion'

interface ComponentProps {
  title: string
  onClick?: () => void
}

export default function MyComponent({ title, onClick }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ai-card"
    >
      {title}
    </motion.div>
  )
}
```

## Styling

### Tailwind Classes
```typescript
// Color utilities
className="text-ai-purple"      // Text color
className="bg-ai-blue"          // Background
className="border-ai-cyan"      // Border

// Components
className="ai-card"             // Card style
className="ai-button"           // Button style
className="ai-input"            // Input style

// Animations
className="animate-pulse-glow"  // Pulse animation
className="animate-float"       // Float animation
```

### Custom Styles
Add to `styles/globals.css`:
```css
@layer utilities {
  .custom-class {
    @apply your-tailwind-classes;
  }
}
```

## Animation Guide

### Framer Motion
```typescript
import { motion } from 'framer-motion'

// Simple animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Complex animation
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Children */}
</motion.div>
```

## State Management

### useState
```typescript
const [count, setCount] = useState(0)
```

### Custom Hooks
```typescript
import { useFetch } from '@/hooks'

const { data, loading, error } = useFetch('/api/data')
```

### Zustand (if needed)
```typescript
import create from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

## Testing

### Unit Tests
```typescript
// __tests__/utils.test.ts
import { formatDate } from '@/lib/utils'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const result = formatDate(new Date('2024-01-01'))
    expect(result).toBe('Jan 1, 2024')
  })
})
```

### Integration Tests
```typescript
// __tests__/api.test.ts
import { toxicityService } from '@/services'

describe('toxicityService', () => {
  it('analyzes toxicity', async () => {
    const result = await toxicityService.analyzeToxicity('test')
    expect(result.toxicityScore).toBeDefined()
  })
})
```

## Debugging

### Console Logging
```typescript
console.log('Debug:', variable)
console.error('Error:', error)
```

### VS Code Debugger
1. Add breakpoint
2. Run with debugger:
   ```bash
   npm run dev
   # Debugger listens on port 9222
   ```

### Prisma Studio
```bash
npx prisma studio
# Opens GUI at http://localhost:5555
```

## Performance Tips

1. **Code Splitting**
   ```typescript
   import dynamic from 'next/dynamic'
   const Component = dynamic(() => import('./Component'))
   ```

2. **Image Optimization**
   ```typescript
   import Image from 'next/image'
   <Image src="/image.png" alt="desc" width={100} height={100} />
   ```

3. **Memoization**
   ```typescript
   const Component = React.memo(MyComponent)
   ```

## Common Issues

### Port Already in Use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error
```bash
# Check connection string
echo $DATABASE_URL

# Test connection
npx prisma db execute "SELECT 1"
```

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

## Deployment Checklist

- [ ] Update `.env.production`
- [ ] Run `npm run build` locally
- [ ] Test build: `npm start`
- [ ] Push to main branch
- [ ] Verify deployments on Vercel and Railway
- [ ] Test all features in production
- [ ] Monitor error logs

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Recharts Docs](https://recharts.org/)

## Getting Help

1. Check existing issues on GitHub
2. Search StackOverflow
3. Ask in community Discord
4. File a GitHub issue with detailed information
