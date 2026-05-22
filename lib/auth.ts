// Authentication utilities

// import { jwtDecode } from 'jwt-decode'

interface JWTPayload {
  userId: string
  email: string
  role: string
  iat: number
  exp: number
}

export const authUtils = {
  /**
   * Decode JWT token
   */
  decodeToken(_token: string): JWTPayload | null {
    try {
      // return jwtDecode<JWTPayload>(token)
      return null // jwt-decode not installed
    } catch (error) {
      return null
    }
  },

  /**
   * Check if token is expired
   */
  isTokenExpired(token: string): boolean {
    const decoded = authUtils.decodeToken(token)
    if (!decoded) return true

    const now = Math.floor(Date.now() / 1000)
    return decoded.exp < now
  },

  /**
   * Get token from localStorage
   */
  getToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('auth_token')
  },

  /**
   * Set token in localStorage
   */
  setToken(token: string): void {
    if (typeof window === 'undefined') return
    localStorage.setItem('auth_token', token)
  },

  /**
   * Clear token from localStorage
   */
  clearToken(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem('auth_token')
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const token = authUtils.getToken()
    return token !== null && !authUtils.isTokenExpired(token)
  },
}
