'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Zap } from 'lucide-react'

const feedItems = [
  {
    id: 1,
    type: 'toxicity',
    severity: 'high',
    title: 'High Toxicity Detected',
    description: 'Comment contains aggressive language and personal attacks',
    author: 'user_123',
    timestamp: '2 seconds ago',
    content: 'This is an extremely toxic comment...',
    confidence: 94,
    action: 'pending',
  },
  {
    id: 2,
    type: 'spam',
    severity: 'medium',
    title: 'Potential Spam Detected',
    description: 'Post contains repeated promotional links',
    author: 'bot_account',
    timestamp: '45 seconds ago',
    content: 'Check out this amazing deal! Click here...',
    confidence: 78,
    action: 'flagged',
  },
  {
    id: 3,
    type: 'rule_violation',
    severity: 'medium',
    title: 'Rule Violation Detected',
    description: 'Post violates subreddit rule #3',
    author: 'user_456',
    timestamp: '2 minutes ago',
    content: 'This content is off-topic for this subreddit...',
    confidence: 85,
    action: 'removed',
  },
  {
    id: 4,
    type: 'positive',
    severity: 'low',
    title: 'Positive Engagement',
    description: 'High-quality discussion starting',
    author: 'user_789',
    timestamp: '3 minutes ago',
    content: 'Great discussion point! Here\'s what I think...',
    confidence: 91,
    action: 'approved',
  },
]

export default function FeedPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Live Moderation Feed</h1>
        <p className="text-text-muted">Real-time AI analysis of community content</p>
      </div>

      <div className="space-y-4">
        {feedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="ai-card hover:border-ai-purple/70 transition"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                item.action === 'removed' ? 'bg-toxicity-red/20' :
                item.action === 'flagged' ? 'bg-warning-amber/20' :
                item.action === 'approved' ? 'bg-positive-green/20' :
                'bg-ai-purple/20'
              }`}>
                {item.action === 'removed' ? <AlertCircle className="w-6 h-6 text-toxicity-red" /> :
                 item.action === 'approved' ? <CheckCircle2 className="w-6 h-6 text-positive-green" /> :
                 <Zap className="w-6 h-6 text-ai-purple" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-ai-cyan">{item.confidence}%</div>
                      <div className="text-xs text-text-muted">confidence</div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-space-light/50 rounded-lg p-3 mb-3 border-l-2 border-ai-purple/50">
                  <p className="text-sm text-text-muted italic">"{item.content}"</p>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>by {item.author}</span>
                    <span>•</span>
                    <span>{item.timestamp}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded text-sm border border-ai-purple/30 hover:border-ai-purple text-ai-purple hover:bg-ai-purple/10 transition"
                    >
                      Review
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded text-sm border border-positive-green/30 hover:border-positive-green text-positive-green hover:bg-positive-green/10 transition"
                    >
                      Approve
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
