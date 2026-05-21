// Type definitions for ModVerse AI

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: UserRole
  isActive: boolean
  createdAt: Date
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  ANALYST = 'ANALYST',
  VIEWER = 'VIEWER',
}

export interface Subreddit {
  id: string
  name: string
  description?: string
  members: number
  toxicityThreshold: number
  spamDetectionEnabled: boolean
  raidDetectionEnabled: boolean
  autoModerationLevel: ModerationLevel
}

export enum ModerationLevel {
  STRICT = 'STRICT',
  MODERATE = 'MODERATE',
  LENIENT = 'LENIENT',
  MANUAL_ONLY = 'MANUAL_ONLY',
}

export interface Post {
  id: string
  subredditId: string
  title: string
  content?: string
  author: string
  score: number
  toxicityScore?: number
  isSpam: boolean
  sentiment?: Sentiment
  status: PostStatus
}

export enum PostStatus {
  APPROVED = 'APPROVED',
  FLAGGED = 'FLAGGED',
  REMOVED = 'REMOVED',
  PENDING_REVIEW = 'PENDING_REVIEW',
}

export enum Sentiment {
  POSITIVE = 'POSITIVE',
  NEUTRAL = 'NEUTRAL',
  NEGATIVE = 'NEGATIVE',
}

export interface Comment {
  id: string
  postId: string
  content: string
  author: string
  toxicityScore?: number
  isSpam: boolean
  sentiment?: Sentiment
  status: CommentStatus
}

export enum CommentStatus {
  APPROVED = 'APPROVED',
  FLAGGED = 'FLAGGED',
  REMOVED = 'REMOVED',
  PENDING_REVIEW = 'PENDING_REVIEW',
}

export interface ModerationAction {
  id: string
  userId: string
  subredditId: string
  action: ModActionType
  reason: string
  duration?: number
  timestamp: Date
}

export enum ModActionType {
  APPROVE = 'APPROVE',
  REMOVE = 'REMOVE',
  LOCK = 'LOCK',
  UNLOCK = 'UNLOCK',
  MUTE = 'MUTE',
  UNMUTE = 'UNMUTE',
  BAN = 'BAN',
  UNBAN = 'UNBAN',
  WARN = 'WARN',
  FLAG_REVIEW = 'FLAG_REVIEW',
}

export interface Alert {
  id: string
  userId: string
  subredditId: string
  type: AlertType
  priority: AlertPriority
  title: string
  description: string
  isResolved: boolean
  createdAt: Date
}

export enum AlertType {
  RAID_DETECTED = 'RAID_DETECTED',
  SPAM_SURGE = 'SPAM_SURGE',
  TOXICITY_SPIKE = 'TOXICITY_SPIKE',
  MOD_ACTION_NEEDED = 'MOD_ACTION_NEEDED',
  RULE_VIOLATION = 'RULE_VIOLATION',
  BURNOUT_WARNING = 'BURNOUT_WARNING',
  SYSTEM_ALERT = 'SYSTEM_ALERT',
}

export enum AlertPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface CommunityHealth {
  id: string
  subredditId: string
  overallHealthScore: number
  toxicityTrend: number
  spamLevel: number
  communityEngagement: number
  moderatorBurnout: number
  totalPosts: number
  totalComments: number
  removedContent: number
  bannedUsers: number
}

export interface AIInsight {
  id: string
  subredditId: string
  type: InsightType
  title: string
  description: string
  recommendation?: string
  confidence: number
  createdAt: Date
}

export enum InsightType {
  PATTERN = 'PATTERN',
  ANOMALY = 'ANOMALY',
  RECOMMENDATION = 'RECOMMENDATION',
  TREND = 'TREND',
  PREDICTION = 'PREDICTION',
  OPTIMIZATION = 'OPTIMIZATION',
}

export interface AnalysisResult {
  content: string
  toxicityScore: number
  confidence: number
  recommendation: string
  explanation: string
}

export interface AssistantResponse {
  question: string
  response: string
  confidence: number
  sources: string[]
}
