// API route for registration

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // TODO: Hash password
    // TODO: Create user in database
    // TODO: Send verification email

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        user: {
          id: 'user_new',
          email: email,
          name: name,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
