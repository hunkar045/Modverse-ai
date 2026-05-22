'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Bell, X } from 'lucide-react'

const alerts = [
  {
    id: 1,
    type: 'raid',
    title: 'Coordinated Raid Detected',
    description: '42 new accounts created in the last 10 minutes with suspicious behavior',
    severity: 'critical',
    time: '5 minutes ago',
    resolved: false,
  },
  {
    id: 2,
    type: 'spam',
    title: 'Spam Surge Detected',
    description: '156% increase in promotional posts in the last hour',
    severity: 'high',
    time: '15 minutes ago',
    resolved: false,
  },
  {
    id: 3,
    type: 'toxicity',
    title: 'Toxicity Spike',
    description: 'Toxicity levels increased by 234% compared to baseline',
    severity: 'high',
    time: '28 minutes ago',
    resolved: false,
  },
  {
    id: 4,
    type: 'burnout',
    title: 'Moderator Burnout Alert',
    description: 'Lead moderator has processed 500+ items in 2 hours',
    severity: 'medium',
    time: '1 hour ago',
    resolved: false,
  },
  {
    id: 5,
    type: 'system',
    title: 'System Maintenance',
    description: 'Scheduled maintenance completed successfully',
    severity: 'low',
    time: '3 hours ago',
    resolved: true,
  },
]

export default function AlertsPage() {
  const [resolvedAlerts, setResolvedAlerts] = useState<number[]>([5])

  const toggleResolved = (id: number) => {
    setResolvedAlerts(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Alerts & Notifications</h1>
          <p className="text-text-muted">Critical events requiring your attention</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-toxicity-red">{alerts.filter(a => !resolvedAlerts.includes(a.id)).length}</div>
            <div className="text-sm text-text-muted">Active alerts</div>
          </div>
        </div>
      </div>

      {/* Alert Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Critical', count: 1, color: 'from-toxicity-red to-warning-amber' },
          { label: 'High', count: 2, color: 'from-warning-amber to-toxicity-red' },
          { label: 'Medium', count: 1, color: 'from-ai-purple to-ai-blue' },
          { label: 'Low', count: 1, color: 'from-positive-green to-ai-lime' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="ai-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-text-muted mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.count}</div>
              </div>
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} opacity-30`} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Alerts List */}
      <motion.div className="space-y-4">
        {alerts.map((alert, index) => {
          const isResolved = resolvedAlerts.includes(alert.id)
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`ai-card border-l-4 ${
                isResolved ? 'border-positive-green opacity-60' :
                alert.severity === 'critical' ? 'border-toxicity-red' :
                alert.severity === 'high' ? 'border-warning-amber' :
                alert.severity === 'medium' ? 'border-ai-purple' :
                'border-ai-cyan'
              } hover:border-opacity-100 transition`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isResolved ? 'bg-positive-green/20' :
                  alert.severity === 'critical' ? 'bg-toxicity-red/20' :
                  'bg-warning-amber/20'
                }`}>
                  {isResolved ? (
                    <Bell className="w-6 h-6 text-positive-green" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-toxicity-red" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{alert.title}</h3>
                      <p className="text-sm text-text-muted">{alert.description}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => toggleResolved(alert.id)}
                      className="text-text-muted hover:text-soft-white flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>{alert.time}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        isResolved ? 'bg-positive-green/20 text-positive-green' :
                        alert.severity === 'critical' ? 'bg-toxicity-red/20 text-toxicity-red' :
                        alert.severity === 'high' ? 'bg-warning-amber/20 text-warning-amber' :
                        'bg-ai-purple/20 text-ai-purple'
                      }`}>
                        {isResolved ? 'Resolved' : alert.severity.toUpperCase()}
                      </span>
                    </div>

                    {!isResolved && (
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
    </motion.div>
  )
}
