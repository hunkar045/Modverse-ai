'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LayoutDashboard, BarChart3, AlertCircle, Settings, LogOut, Menu, X, Users, MessageSquare, Bot, TrendingUp } from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', color: 'from-ai-purple to-ai-blue' },
  { icon: MessageSquare, label: 'Live Feed', href: '/dashboard/feed', color: 'from-ai-blue to-ai-cyan' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics', color: 'from-ai-cyan to-ai-lime' },
  { icon: AlertCircle, label: 'Alerts', href: '/dashboard/alerts', color: 'from-toxicity-red to-warning-amber' },
  { icon: Bot, label: 'AI Assistant', href: '/dashboard/assistant', color: 'from-ai-lime to-ai-purple' },
  { icon: Users, label: 'Moderators', href: '/dashboard/moderators', color: 'from-warning-amber to-ai-blue' },
  { icon: TrendingUp, label: 'Insights', href: '/dashboard/insights', color: 'from-ai-purple to-ai-cyan' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings', color: 'from-text-muted to-ai-purple' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-space-dark text-soft-white overflow-hidden">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } md:block w-64 glass-dark border-r border-ai-purple/20 overflow-y-auto fixed md:static h-full z-40`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-ai-purple/20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center group-hover:shadow-glow-purple transition">
              <Bot className="w-5 h-5 text-space-dark" />
            </div>
            <span className="font-bold gradient-text">ModVerse</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:glass-dark group transition"
                >
                  <Icon className={`w-5 h-5 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                  <span className="text-sm font-medium group-hover:text-ai-purple transition">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-ai-purple/20 hover:border-ai-purple/50 text-text-muted hover:text-ai-purple transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 glass-dark border-b border-ai-purple/20 px-6 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-ai-purple/10 rounded-lg transition"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-positive-green rounded-full animate-pulse" />
              <span className="text-text-muted">System Online</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6"
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
