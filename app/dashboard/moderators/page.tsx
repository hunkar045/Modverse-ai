'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Trash2, Edit } from 'lucide-react'

const moderators = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Head Moderator',
    joinedDate: '2022-01-15',
    actionsThisMonth: 156,
    isActive: true,
    permissions: ['MANAGE_POSTS', 'MANAGE_COMMENTS', 'MANAGE_USERS', 'FULL_ACCESS'],
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    role: 'Moderator',
    joinedDate: '2022-06-20',
    actionsThisMonth: 98,
    isActive: true,
    permissions: ['MANAGE_POSTS', 'MANAGE_COMMENTS', 'VIEW_ANALYTICS'],
  },
  {
    id: 3,
    name: 'James Wilson',
    email: 'james@example.com',
    role: 'Moderator',
    joinedDate: '2023-03-10',
    actionsThisMonth: 45,
    isActive: true,
    permissions: ['MANAGE_POSTS', 'MANAGE_COMMENTS'],
  },
]

export default function ModeratorsPage() {
  const [, setShowAddModal] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Moderators</h1>
          <p className="text-text-muted">Manage your moderation team</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-gradient-ai text-space-dark rounded-lg font-semibold flex items-center gap-2 hover:shadow-glow-purple transition"
        >
          <UserPlus className="w-5 h-5" />
          Add Moderator
        </motion.button>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          { label: 'Total Moderators', value: moderators.length },
          { label: 'Active', value: moderators.filter(m => m.isActive).length },
          { label: 'Total Actions', value: moderators.reduce((sum, m) => sum + m.actionsThisMonth, 0) },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="ai-card"
          >
            <div className="text-sm text-text-muted mb-2">{stat.label}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Moderators Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="ai-card overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-ai-purple/20">
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Role</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Joined</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Actions</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {moderators.map((mod, i) => (
              <motion.tr
                key={mod.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="border-b border-ai-purple/10 hover:bg-space-light/30 transition"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{mod.name}</div>
                    <div className="text-sm text-text-muted">{mod.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">{mod.role}</td>
                <td className="px-6 py-4 text-sm text-text-muted">
                  {new Date(mod.joinedDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-ai-purple/20 text-ai-purple text-sm font-semibold">
                    {mod.actionsThisMonth}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${mod.isActive ? 'bg-positive-green' : 'bg-text-muted'} animate-pulse`} />
                    <span className="text-sm">{mod.isActive ? 'Active' : 'Inactive'}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-ai-purple/20 rounded-lg transition"
                    >
                      <Edit className="w-4 h-4 text-ai-purple" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-toxicity-red/20 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4 text-toxicity-red" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}
