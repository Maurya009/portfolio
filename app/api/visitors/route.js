import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL
    const token = process.env.UPSTASH_REDIS_REST_TOKEN

    const response = await fetch(`${url}/incr/visitor_count`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()
    return NextResponse.json({ count: data.result })
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 })
  }
}