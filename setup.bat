@echo off
REM Setup script for ModVerse AI on Windows

echo 🚀 ModVerse AI Setup
echo ====================

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+
    exit /b 1
)

echo ✅ Node.js installed

REM Create env file
if not exist .env.local (
    echo 📝 Creating .env.local...
    copy .env.example .env.local
    echo ⚠️  Please update .env.local with your configuration
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Setup database
echo 🗄️  Setting up database...
call npx prisma migrate dev --skip-generate
call npx prisma generate

echo.
echo ✅ Setup complete!
echo.
echo 🎯 Next steps:
echo 1. Update .env.local with your API keys
echo 2. Run: npm run dev
echo 3. Visit: http://localhost:3000
echo.
