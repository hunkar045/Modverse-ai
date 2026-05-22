'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, TrendingUp, Users, AlertCircle, BarChart3 } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const features = [
    {
      icon: Brain,
      title: 'AI Toxicity Detection',
      description: 'Instantly detect toxic content with advanced ML models',
      color: 'from-ai-purple to-ai-blue',
    },
    {
      icon: AlertCircle,
      title: 'Conflict Prediction',
      description: 'Prevent community conflicts before they escalate',
      color: 'from-ai-blue to-ai-cyan',
    },
    {
      icon: Zap,
      title: 'Smart Rule Interpreter',
      description: 'Intelligent subreddit rule understanding & enforcement',
      color: 'from-ai-cyan to-ai-lime',
    },
    {
      icon: Users,
      title: 'Moderator Wellness',
      description: 'Reduce burnout with AI-powered automation',
      color: 'from-toxicity-red to-warning-amber',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Deep insights into community health metrics',
      color: 'from-ai-lime to-ai-purple',
    },
    {
      icon: BarChart3,
      title: 'Raid Detection',
      description: 'Real-time detection of coordinated attacks',
      color: 'from-warning-amber to-ai-purple',
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-ai-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-space-dark" />
            </div>
            <span className="font-bold text-lg gradient-text">ModVerse AI</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Docs'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#7C3AED' }}
                className="text-text-muted hover:text-ai-purple transition"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-ai-purple border border-ai-purple/50 rounded-lg hover:bg-ai-purple/10">
              Login
            </Link>
            <Link href="/register" className="ai-button">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center z-10"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full glass-dark border border-ai-purple/50"
          >
            <span className="gradient-text text-sm font-semibold">🚀 The AI Co-Moderator Reddit Never Had</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Intelligent{' '}
            <span className="gradient-text">Community Moderation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-muted mb-8 max-w-2xl mx-auto"
          >
            ModVerse AI uses advanced AI to detect toxicity, predict conflicts, and reduce moderator burnout. The modern moderation platform subreddits deserve.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/dashboard" className="ai-button flex items-center justify-center gap-2">
              Launch Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-6 py-3 rounded-lg border border-ai-purple text-ai-purple font-semibold hover:bg-ai-purple/10">
              Watch Demo
            </button>
          </motion.div>

          {/* Live Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: 'Subreddits Protected', value: '10K+' },
              { label: 'Posts Analyzed', value: '1M+' },
              { label: 'Toxicity Prevented', value: '99.2%' },
            ].map((stat) => (
              <div key={stat.label} className="ai-card">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Advanced AI</span>
            </h2>
            <p className="text-text-muted text-lg">Everything you need to moderate at scale</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="ai-card group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:shadow-lg transition`}>
                    <Icon className="w-full h-full text-space-dark" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center ai-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Community?</h2>
          <p className="text-text-muted mb-8">Join thousands of moderators using ModVerse AI</p>
          <Link href="/register" className="ai-button inline-flex items-center gap-2">
            Get Started for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ai-purple/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="gradient-text font-semibold">ModVerse AI</span>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-ai-purple">Privacy</a>
            <a href="#" className="hover:text-ai-purple">Terms</a>
            <a href="#" className="hover:text-ai-purple">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
