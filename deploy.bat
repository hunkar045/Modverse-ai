@echo off
REM ModVerse AI Deployment Script for Windows

echo.
echo 🚀 ModVerse AI Deployment Setup
echo ================================
echo.

REM Check if git is initialized
if not exist ".git" (
  echo 📦 Initializing git repository...
  git init
  git config user.email "dev@modverse.ai"
  git config user.name "ModVerse AI"
  git add .
  git commit -m "ModVerse AI - Initial production build"
  git branch -M main
  echo ✅ Git initialized
) else (
  echo ✅ Git already initialized
)

echo.
echo 📋 Deployment Options:
echo 1. Deploy to Vercel (recommended for Next.js)
echo 2. Deploy to Railway (full-stack with DB)
echo 3. Generate Docker image
echo.
echo Next steps:
echo 1. Push to GitHub: git remote add origin ^<repo-url^> ^&^& git push -u origin main
echo 2. Visit https://vercel.com/new or https://railway.app/new
echo 3. Import your GitHub repository
echo 4. Click Deploy!
echo.
echo ✨ Your app will be live in 2-3 minutes!
echo.
pause
