'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Bell, Lock, Palette } from 'lucide-react'

const settingsCategories = [
  { icon: Palette, label: 'Appearance', id: 'appearance' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Lock, label: 'Privacy & Security', id: 'privacy' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('appearance')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-text-muted">Customize your ModVerse experience</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="ai-card space-y-2">
            {settingsCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveTab(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === category.id
                      ? 'bg-gradient-ai text-space-dark'
                      : 'hover:bg-space-light'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{category.label}</span>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'appearance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="ai-card space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold mb-4">Theme</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Dark', description: 'Deep space theme (Current)' },
                    { name: 'Light', description: 'Bright professional theme' },
                    { name: 'System', description: 'Follow system settings' },
                  ].map((theme) => (
                    <label key={theme.name} className="flex items-center gap-3 p-3 rounded-lg border border-ai-purple/20 hover:border-ai-purple/50 cursor-pointer transition">
                      <input type="radio" name="theme" defaultChecked={theme.name === 'Dark'} className="w-4 h-4" />
                      <div>
                        <div className="font-medium">{theme.name}</div>
                        <div className="text-sm text-text-muted">{theme.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Accent Color</h3>
                <div className="flex gap-3">
                  {[
                    { color: 'from-ai-purple to-ai-blue', name: 'Purple' },
                    { color: 'from-ai-blue to-ai-cyan', name: 'Blue' },
                    { color: 'from-ai-cyan to-ai-lime', name: 'Cyan' },
                  ].map((accent) => (
                    <motion.button
                      key={accent.name}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${accent.color} border-2 border-transparent hover:border-soft-white transition`}
                      title={accent.name}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="ai-card space-y-6"
            >
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
              {[
                { label: 'Critical Alerts', description: 'Receive alerts for raid, spam, and toxicity spikes', enabled: true },
                { label: 'Daily Digest', description: 'Get a summary of your community every morning', enabled: true },
                { label: 'Moderator Activity', description: 'Notifications about team moderator actions', enabled: false },
                { label: 'New Insights', description: 'AI insights and recommendations', enabled: true },
              ].map((notif, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-space-light/50"
                >
                  <div>
                    <div className="font-medium">{notif.label}</div>
                    <div className="text-sm text-text-muted">{notif.description}</div>
                  </div>
                  <input type="checkbox" defaultChecked={notif.enabled} className="w-5 h-5 rounded" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'privacy' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="ai-card space-y-6"
            >
              <h3 className="text-lg font-semibold">Privacy & Security</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-space-light/50">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
                    <span className="font-medium">Two-Factor Authentication</span>
                  </label>
                </div>
                <div className="p-4 rounded-lg bg-space-light/50">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
                    <span className="font-medium">Email Notifications for Login Attempts</span>
                  </label>
                </div>
                <motion.button className="w-full px-4 py-2 rounded-lg border border-toxicity-red text-toxicity-red hover:bg-toxicity-red/10 font-semibold transition">
                  Change Password
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-end"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-ai text-space-dark rounded-lg font-semibold flex items-center gap-2 hover:shadow-glow-purple transition"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
