'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, AlertTriangle, CheckCircle2, Brain } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

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

// Mock data
const toxicityData = [
  { time: '00:00', toxicity: 12 },
  { time: '04:00', toxicity: 8 },
  { time: '08:00', toxicity: 15 },
  { time: '12:00', toxicity: 22 },
  { time: '16:00', toxicity: 18 },
  { time: '20:00', toxicity: 25 },
  { time: '24:00', toxicity: 20 },
]

const communityHealthData = [
  { name: 'Toxicity', value: 18, fill: '#EF4444' },
  { name: 'Spam', value: 12, fill: '#F59E0B' },
  { name: 'Healthy', value: 70, fill: '#22C55E' },
]

const statsCards = [
  {
    title: 'Toxicity Score',
    value: '2.3%',
    change: '-12%',
    icon: AlertTriangle,
    color: 'from-toxicity-red to-warning-amber',
  },
  {
    title: 'Community Health',
    value: '94.2%',
    change: '+8%',
    icon: CheckCircle2,
    color: 'from-positive-green to-ai-lime',
  },
  {
    title: 'Content Reviewed',
    value: '24.5K',
    change: '+23%',
    icon: BarChart3,
    color: 'from-ai-blue to-ai-cyan',
  },
  {
    title: 'Moderator Load',
    value: '45%',
    change: '-15%',
    icon: Users,
    color: 'from-ai-purple to-ai-blue',
  },
]

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-text-muted">Welcome back! Here's your community overview.</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-text-muted mb-1">Last updated</div>
          <div className="text-lg font-semibold text-ai-cyan">2 minutes ago</div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid md:grid-cols-4 gap-6"
      >
        {statsCards.map((card) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              whileHover={{ y: -5 }}
              className="ai-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-text-muted mb-2">{card.title}</div>
                  <div className="text-2xl font-bold">{card.value}</div>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} p-2 opacity-80 group-hover:opacity-100 transition`}>
                  <Icon className="w-full h-full text-space-dark" />
                </div>
              </div>
              <div className={`text-sm ${card.change.startsWith('+') ? 'text-positive-green' : 'text-warning-amber'}`}>
                {card.change} from yesterday
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Charts Grid */}
      <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-6">
        {/* Toxicity Trend */}
        <div className="lg:col-span-2 ai-card">
          <div className="mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="w-5 h-5 text-ai-purple" />
              Toxicity Trend
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={toxicityData}>
              <defs>
                <linearGradient id="colorToxicity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(124, 58, 237, 0.1)" />
              <XAxis dataKey="time" stroke="rgba(148, 163, 180, 0.5)" />
              <YAxis stroke="rgba(148, 163, 180, 0.5)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid rgba(124, 58, 237, 0.3)' }} />
              <Area type="monotone" dataKey="toxicity" stroke="#EF4444" fillOpacity={1} fill="url(#colorToxicity)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Community Health */}
        <div className="ai-card">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Community Health</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={communityHealthData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {communityHealthData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="ai-card">
        <h3 className="text-lg font-semibold mb-4">Recent AI Actions</h3>
        <div className="space-y-3">
          {[
            { action: 'Flagged toxic comment', time: '2 min ago', status: 'pending' },
            { action: 'Detected spam raid', time: '5 min ago', status: 'completed' },
            { action: 'Warned user for rule violation', time: '12 min ago', status: 'completed' },
            { action: 'Identified positive engagement spike', time: '18 min ago', status: 'completed' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-space-light/50 hover:bg-space-light transition"
            >
              <div>
                <p className="text-sm font-medium">{item.action}</p>
                <p className="text-xs text-text-muted">{item.time}</p>
              </div>
              <div className={`w-2 h-2 rounded-full ${item.status === 'completed' ? 'bg-positive-green' : 'bg-warning-amber'} animate-pulse`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
