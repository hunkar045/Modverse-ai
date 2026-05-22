'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
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
          <h1 className="text-3xl font-bold gradient-text mb-2">Create Account</h1>
          <p className="text-text-muted">Join the revolution in moderation</p>
        </div>

        <form onSubmit={handleSubmit} className="ai-card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ai-input"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="ai-input"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="ai-input"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="ai-input"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full ai-button flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>

        <p className="text-center text-text-muted mt-6 text-sm">
          By signing up, you agree to our{' '}
          <Link href="#" className="text-ai-purple hover:text-ai-blue">
            Terms
          </Link>
          {' '}and{' '}
          <Link href="#" className="text-ai-purple hover:text-ai-blue">
            Privacy Policy
          </Link>
        </p>

        <p className="text-center text-text-muted mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-ai-purple hover:text-ai-blue">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
