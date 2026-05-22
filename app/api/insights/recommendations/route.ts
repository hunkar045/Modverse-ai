// API route for insights and recommendations

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // TODO: Generate insights from AI
    const insights = [
      {
        id: 'insight_1',
        type: 'PATTERN',
        title: 'Peak Toxicity Hours',
        description: 'Toxicity spikes 45% between 8-10 PM',
        confidence: 0.94,
        actionable: true,
      },
      {
        id: 'insight_2',
        type: 'RECOMMENDATION',
        title: 'Rule Clarity Issue',
        description: 'Rule #3 causes 28% of violations - consider rewording',
        confidence: 0.87,
        actionable: true,
      },
      {
        id: 'insight_3',
        type: 'TREND',
        title: 'Positive Engagement Up',
        description: 'Quality discussions increased 156% this week',
        confidence: 0.91,
        actionable: false,
      },
    ]

    return NextResponse.json({ insights }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
