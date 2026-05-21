'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader, Bot } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const suggestionQuestions = [
  'Explain rule #3 for r/worldnews',
  'What is the current toxicity level?',
  'Recommend moderation actions for spam',
  'Analyze community health trends',
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m ModVerse AI, your intelligent moderation assistant. I can help you analyze content, understand community health, interpret rules, and provide moderation recommendations. What would you like to know?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Based on your question "${input}", I\'ve analyzed the data. Here\'s what I found: The current community metrics show a 2.3% toxicity rate, which is 45% lower than the 7-day average. I recommend maintaining your current moderation settings while increasing focus on spam detection during peak hours.`,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleSuggestion = (question: string) => {
    setInput(question)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-200px)] flex flex-col"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Moderation Assistant</h1>
        <p className="text-text-muted">Get intelligent insights and recommendations powered by advanced AI</p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 ai-card overflow-y-auto mb-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Bot className="w-16 h-16 text-ai-purple/20 mx-auto mb-4" />
              <p className="text-text-muted">Start a conversation with the AI assistant</p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-2xl px-4 py-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-gradient-ai text-space-dark'
                  : 'bg-space-light border border-ai-purple/30'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-2 ${
                  message.type === 'user'
                    ? 'text-space-dark/70'
                    : 'text-text-muted'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          ))
        )}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 items-center"
          >
            <div className="bg-space-light border border-ai-purple/30 px-4 py-3 rounded-lg">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce animation-delay-2" />
                <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce animation-delay-4" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-sm text-text-muted mb-3">Try asking about:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {suggestionQuestions.map((question, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSuggestion(question)}
                className="p-3 text-left rounded-lg border border-ai-purple/20 hover:border-ai-purple/50 hover:bg-ai-purple/5 transition text-sm"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about moderation..."
          className="ai-input flex-1"
        />
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-ai text-space-dark rounded-lg font-semibold hover:shadow-glow-purple disabled:opacity-50 transition"
        >
          {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </motion.button>
      </form>
    </motion.div>
  )
}
