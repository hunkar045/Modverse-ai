// Utility functions for common operations

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const getToxicityColor = (score: number) => {
  if (score >= 0.7) return 'text-toxicity-red'
  if (score >= 0.4) return 'text-warning-amber'
  return 'text-positive-green'
}

export const getToxicityBgColor = (score: number) => {
  if (score >= 0.7) return 'bg-toxicity-red/20'
  if (score >= 0.4) return 'bg-warning-amber/20'
  return 'bg-positive-green/20'
}

export const abbreviateNumber = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
