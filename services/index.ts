// Services for API interactions and business logic

/**
 * Toxicity Analysis Service
 */
export const toxicityService = {
  async analyzeToxicity(content: string) {
    const response = await fetch('/api/analysis/toxicity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    return response.json()
  },

  async getHistoricalData(subredditId: string) {
    const response = await fetch(`/api/analysis/toxicity/history?subredditId=${subredditId}`)
    return response.json()
  },
}

/**
 * Moderation Service
 */
export const moderationService = {
  async getRecentActions(subredditId: string) {
    const response = await fetch(`/api/moderation/actions?subredditId=${subredditId}`)
    return response.json()
  },

  async takeAction(actionData: any) {
    const response = await fetch('/api/moderation/actions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actionData),
    })
    return response.json()
  },

  async getLogs(subredditId: string) {
    const response = await fetch(`/api/moderation/logs?subredditId=${subredditId}`)
    return response.json()
  },
}

/**
 * Community Health Service
 */
export const communityService = {
  async getHealthMetrics(subredditId: string) {
    const response = await fetch(`/api/community/health?subredditId=${subredditId}`)
    return response.json()
  },

  async getAnalytics(subredditId: string, period: string = '7d') {
    const response = await fetch(`/api/community/analytics?subredditId=${subredditId}&period=${period}`)
    return response.json()
  },

  async getInsights(subredditId: string) {
    const response = await fetch(`/api/community/insights?subredditId=${subredditId}`)
    return response.json()
  },
}

/**
 * AI Insights Service
 */
export const insightsService = {
  async getRecommendations(subredditId: string) {
    const response = await fetch(`/api/insights/recommendations?subredditId=${subredditId}`)
    return response.json()
  },

  async askAssistant(question: string, context: any = {}) {
    const response = await fetch('/api/insights/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, context }),
    })
    return response.json()
  },

  async analyzePatterns(subredditId: string) {
    const response = await fetch(`/api/insights/patterns?subredditId=${subredditId}`)
    return response.json()
  },
}

/**
 * Authentication Service
 */
export const authService = {
  async login(email: string, password: string) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },

  async register(userData: any) {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return response.json()
  },

  async logout() {
    const response = await fetch('/api/auth/logout', { method: 'POST' })
    return response.json()
  },

  async getCurrentUser() {
    const response = await fetch('/api/auth/me')
    return response.json()
  },
}

/**
 * Subreddit Service
 */
export const subredditService = {
  async getSubreddits() {
    const response = await fetch('/api/subreddits')
    return response.json()
  },

  async getSubreddit(subredditId: string) {
    const response = await fetch(`/api/subreddits/${subredditId}`)
    return response.json()
  },

  async createSubreddit(subredditData: any) {
    const response = await fetch('/api/subreddits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subredditData),
    })
    return response.json()
  },

  async updateSettings(subredditId: string, settings: any) {
    const response = await fetch(`/api/subreddits/${subredditId}/settings`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    return response.json()
  },
}

/**
 * Alerts Service
 */
export const alertsService = {
  async getAlerts(subredditId?: string) {
    const url = subredditId ? `/api/alerts?subredditId=${subredditId}` : '/api/alerts'
    const response = await fetch(url)
    return response.json()
  },

  async markAsResolved(alertId: string) {
    const response = await fetch(`/api/alerts/${alertId}/resolve`, { method: 'POST' })
    return response.json()
  },

  async deleteAlert(alertId: string) {
    const response = await fetch(`/api/alerts/${alertId}`, { method: 'DELETE' })
    return response.json()
  },
}
