'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, AlertCircle, Zap } from 'lucide-react'

const insights = [
  {
    id: 1,
    type: 'pattern',
    title: 'Peak Toxicity Hours Identified',
    description: 'Toxicity levels spike by 45% between 8-10 PM daily. Consider scheduling additional moderators during these hours.',
    icon: Lightbulb,
    confidence: 94,
    actionable: true,
    trend: 'up',
  },
  {
    id: 2,
    type: 'recommendation',
    title: 'Rule #3 Clarity Opportunity',
    description: 'Analysis shows 28% of violations are ambiguous interpretations of Rule #3. Consider rephrasing or adding examples.',
    icon: AlertCircle,
    confidence: 87,
    actionable: true,
    trend: 'up',
  },
  {
    id: 3,
    type: 'trend',
    title: 'Positive Engagement Surge',
    description: 'High-quality discussions increased by 156% this week. Community health score reached all-time high of 94.2%.',
    icon: TrendingUp,
    confidence: 91,
    actionable: false,
    trend: 'up',
  },
  {
    id: 4,
    type: 'optimization',
    title: 'Spam Filter Optimization',
    description: 'Current spam detection can be improved by 23% with adjusted threshold settings. Would you like to proceed?',
    icon: Zap,
    confidence: 82,
    actionable: true,
    trend: 'down',
  },
]

export default function InsightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Insights</h1>
        <p className="text-text-muted">Actionable intelligence from advanced pattern analysis</p>
      </div>

      {/* Insight Cards */}
      <motion.div
        className="space-y-4"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="ai-card hover:border-ai-purple/70 transition"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  insight.type === 'pattern' ? 'bg-ai-purple/20' :
                  insight.type === 'recommendation' ? 'bg-warning-amber/20' :
                  insight.type === 'trend' ? 'bg-positive-green/20' :
                  'bg-ai-cyan/20'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    insight.type === 'pattern' ? 'text-ai-purple' :
                    insight.type === 'recommendation' ? 'text-warning-amber' :
                    insight.type === 'trend' ? 'text-positive-green' :
                    'text-ai-cyan'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{insight.title}</h3>
                      <p className="text-sm text-text-muted mt-1">{insight.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-semibold text-ai-cyan">{insight.confidence}%</div>
                      <div className="text-xs text-text-muted">confidence</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-ai-purple/10">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        insight.type === 'pattern' ? 'bg-ai-purple/20 text-ai-purple' :
                        insight.type === 'recommendation' ? 'bg-warning-amber/20 text-warning-amber' :
                        insight.type === 'trend' ? 'bg-positive-green/20 text-positive-green' :
                        'bg-ai-cyan/20 text-ai-cyan'
                      }`}>
                        {insight.type.toUpperCase()}
                      </span>
                      <span className={`text-xs ${insight.trend === 'up' ? 'text-positive-green' : 'text-warning-amber'}`}>
                        {insight.trend === 'up' ? '📈 Trending up' : '📉 Trending down'}
                      </span>
                    </div>

                    {insight.actionable && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded text-sm bg-gradient-ai text-space-dark font-semibold hover:shadow-glow-purple transition"
                      >
                        Take Action
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Historical Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="ai-card"
      >
        <h3 className="text-lg font-semibold mb-4">Insight History</h3>
        <div className="space-y-3">
          {[
            { date: 'Today', insights: 4 },
            { date: 'Yesterday', insights: 6 },
            { date: 'Last 7 days', insights: 28 },
            { date: 'Last 30 days', insights: 124 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-space-light/50 hover:bg-space-light transition"
            >
              <span className="text-sm font-medium">{item.date}</span>
              <span className="text-sm text-ai-cyan font-semibold">{item.insights} insights</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
