'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight, Github } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="ai-card mb-8 text-center">
          <h1 className="text-3xl font-bold gradient-text mb-2">ModVerse AI</h1>
          <p className="text-text-muted">Welcome back to intelligent moderation</p>
        </div>

        <form onSubmit={handleSubmit} className="ai-card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-4 h-4 text-ai-purple/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ai-input pl-10"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 w-4 h-4 text-ai-purple/50" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ai-input pl-10"
                placeholder="••••••••"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full ai-button flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <div className="relative my-6 ai-card">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-ai-purple/20" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-space-dark text-text-muted">Or continue with</span>
          </div>
        </div>

        <button className="w-full py-3 rounded-lg border border-ai-purple/20 hover:border-ai-purple/50 flex items-center justify-center gap-2 transition">
          <Github className="w-5 h-5" />
          GitHub
        </button>

        <p className="text-center text-text-muted mt-6">
          Don't have an account?{' '}
          <Link href="/register" className="text-ai-purple hover:text-ai-blue">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
