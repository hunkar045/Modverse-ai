// API route for recent moderation logs

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const subredditId = request.nextUrl.searchParams.get('subredditId')

    if (!subredditId) {
      return NextResponse.json(
        { error: 'subredditId is required' },
        { status: 400 }
      )
    }

    // TODO: Fetch logs from database
    const logs = [
      {
        id: 'log_1',
        action: 'REMOVE',
        targetType: 'POST',
        targetId: 'post_1',
        reason: 'Toxicity',
        moderatorId: 'user_1',
        timestamp: new Date(),
      },
      {
        id: 'log_2',
        action: 'WARN',
        targetType: 'USER',
        targetId: 'user_2',
        reason: 'Spam',
        moderatorId: 'user_1',
        timestamp: new Date(),
      },
    ]

    return NextResponse.json({ logs }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
