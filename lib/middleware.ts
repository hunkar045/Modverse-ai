// Middleware for authentication and error handling

import { NextRequest, NextResponse } from 'next/server'

/**
 * Authentication middleware
 */
export async function authMiddleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // TODO: Verify token validity
  return NextResponse.next()
}

/**
 * Error handling middleware
 */
export function errorHandler(error: any) {
  console.error('API Error:', error)

  return NextResponse.json(
    {
      error: error.message || 'Internal server error',
      timestamp: new Date().toISOString(),
    },
    { status: error.status || 500 }
  )
}

/**
 * CORS middleware
 */
export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': process.env.NEXTAUTH_URL || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}
