#!/bin/bash

# Setup script for ModVerse AI

set -e

echo "🚀 ModVerse AI Setup"
echo "===================="

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node --version)"

# Create env file
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your configuration"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup database
echo "🗄️  Setting up database..."
npx prisma migrate dev --skip-generate || true
npx prisma generate

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Update .env.local with your API keys"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
