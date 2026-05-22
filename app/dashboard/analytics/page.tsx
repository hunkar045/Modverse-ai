'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const toxicityByHour = [
  { hour: '12 AM', toxicity: 15 },
  { hour: '1 AM', toxicity: 12 },
  { hour: '2 AM', toxicity: 10 },
  { hour: '3 AM', toxicity: 8 },
  { hour: '4 AM', toxicity: 14 },
  { hour: '5 AM', toxicity: 18 },
]

const communityMetrics = [
  { metric: 'Toxicity', value: 18 },
  { metric: 'Engagement', value: 72 },
  { metric: 'Health', value: 85 },
  { metric: 'Moderation', value: 40 },
  { metric: 'Growth', value: 65 },
]

export default function AnalyticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics & Insights</h1>
        <p className="text-text-muted">Deep dive into your community health metrics</p>
      </div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Avg. Toxicity', value: '2.3%', trend: '↓ 12%', color: 'from-toxicity-red to-warning-amber' },
          { label: 'Content Moderated', value: '24.5K', trend: '↑ 23%', color: 'from-ai-blue to-ai-cyan' },
          { label: 'Active Users', value: '8.2K', trend: '↑ 18%', color: 'from-ai-cyan to-ai-lime' },
          { label: 'Mod Efficiency', value: '94%', trend: '↑ 8%', color: 'from-ai-lime to-ai-purple' },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="ai-card"
          >
            <div className="text-sm text-text-muted mb-2">{metric.label}</div>
            <div className="text-2xl font-bold mb-2">{metric.value}</div>
            <div className="text-sm text-positive-green">{metric.trend}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        {/* Toxicity by Hour */}
        <div className="lg:col-span-2 ai-card">
          <h3 className="text-lg font-semibold mb-6">Toxicity by Hour</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={toxicityByHour}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(124, 58, 237, 0.1)" />
              <XAxis dataKey="hour" stroke="rgba(148, 163, 180, 0.5)" />
              <YAxis stroke="rgba(148, 163, 180, 0.5)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid rgba(124, 58, 237, 0.3)' }} />
              <Bar dataKey="toxicity" fill="#7C3AED" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Community Radar */}
        <div className="ai-card">
          <h3 className="text-lg font-semibold mb-6">Community Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={communityMetrics}>
              <PolarGrid stroke="rgba(124, 58, 237, 0.2)" />
              <PolarAngleAxis dataKey="metric" stroke="rgba(148, 163, 180, 0.5)" />
              <PolarRadiusAxis stroke="rgba(148, 163, 180, 0.5)" />
              <Radar name="Score" dataKey="value" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.3} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f3a', border: '1px solid rgba(124, 58, 237, 0.3)' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Detailed Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {[
          {
            title: 'Top Rule Violations',
            items: [
              { rule: 'Off-topic posts', count: 156, percent: 45 },
              { rule: 'Spam links', count: 98, percent: 28 },
              { rule: 'Personal attacks', count: 65, percent: 18 },
              { rule: 'Misinformation', count: 32, percent: 9 },
            ],
          },
          {
            title: 'Moderation Actions',
            items: [
              { action: 'Posts removed', count: 342, percent: 60 },
              { action: 'Users warned', count: 125, percent: 22 },
              { action: 'Users banned', count: 68, percent: 12 },
              { action: 'Comments locked', count: 34, percent: 6 },
            ],
          },
        ].map((section, i) => (
          <div key={i} className="ai-card">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1">{('rule' in item ? item.rule : item.action)}</div>
                    <div className="w-full bg-space-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ delay: 0.5 + j * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-ai rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{item.count}</div>
                    <div className="text-xs text-text-muted">{item.percent}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
