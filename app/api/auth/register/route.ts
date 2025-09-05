// app/api/auth/register/route.ts
import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword, generateToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Registration request received")

    // Ensure database is connected
    await prisma.$connect()
    console.log("[v0] Database connection verified")

    // Parse request
    const { name, email, password, mobile } = await request.json()
    console.log("[v0] Request data parsed successfully")

    // Validation
    if (!name || !email || !password || !mobile) {
      return NextResponse.json(
        { message: "Name, email, mobile, and password are required" },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return NextResponse.json(
        { message: "Mobile number must be 10 digits" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { mobile }] },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email or mobile already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)
    console.log("[v0] Password hashed")

    // Create user
    const user = await prisma.user.create({
      data: { name, email, mobile, password: hashedPassword },
    })
    console.log("[v0] User created")

    // Generate JWT token
    const token = generateToken(String(user.id))
    console.log("[v0] Token generated")

    // Send response with cookie
    const response = NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    })

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json(
      { message: "Internal server error", details: error instanceof Error ? error.message : "Unknown" },
      { status: 500 }
    )
  }
}
