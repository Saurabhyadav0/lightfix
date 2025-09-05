import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyToken } from "@/lib/auth"
import { categorizeComplaint } from "@/lib/categories"
import { generateStreetlightPriority } from "@/lib/ai-priority"


const mapPriorityScore = (score: number): "HIGH" | "MODERATE" | "LOW" => {
  if (score >= 8) return "HIGH";
  if (score >= 4) return "MODERATE";
  return "LOW";
};

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ message: "Authentication required" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    const { title, description, location, photoUrl, category: frontendCategory } = await request.json()

    if (!title || !description) {
      return NextResponse.json({ message: "Title and description are required" }, { status: 400 })
    }

    // Use frontend category if provided; otherwise, fall back to AI-based categorization
    const category = frontendCategory;

    // ⭐ AI-based priority score
    let numericPriority = 3;
    try {
      numericPriority = await generateStreetlightPriority(title, description, photoUrl);
      console.log("🎯 AI numeric priority:", numericPriority);
    } catch (err) {
      console.warn("AI priority generation failed, using default = 3", err);
    }

    // Convert numeric to string
    const priority = mapPriorityScore(numericPriority);

    // 1️⃣ Create complaint
    const complaint = await prisma.complaint.create({
      data: {
        title,
        description,
        location,
        photoUrl,
        category, // now respects frontend dropdown
        citizenId: Number(payload.userId),
        priority: priority,  // Store as number
      },
    })

    // 2️⃣ Update coins (+5)
    const updatedUser = await prisma.user.update({
      where: { id: Number(payload.userId) },
      data: { coins: { increment: 5 } },
      select: {
        id: true,
        name: true,
        email: true,
        coins: true,
      },
    })

    // 3️⃣ Return complaint + updated coins
    return NextResponse.json({
      message: "Complaint created successfully",
      complaint,
      user: updatedUser,
      reward: updatedUser.coins,
    })
  } catch (error) {
    console.error("Create complaint error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}



export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Authentication required" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(payload.userId) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let complaints;

    if (user.role === "ADMIN") {
      // Admin can see all complaints
      complaints = await prisma.complaint.findMany({
        include: {
          citizen: {
            select: {
              name: true,
              email: true,
              mobile: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc", // fetch newest first, we will sort by priority next
        },
      });

      // Sort by priority: HIGH > MODERATE > LOW
      const priorityOrder: Record<string, number> = { HIGH: 3, MODERATE: 2, LOW: 1 };
      complaints.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    } else {
      // Citizens can only see their own complaints
      complaints = await prisma.complaint.findMany({
        where: {
          citizenId: Number(payload.userId),
        },
        include: {
          citizen: {
            select: {
              name: true,
              email: true,
              mobile: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return NextResponse.json(complaints);
  } catch (error) {
    console.error("Get complaints error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

