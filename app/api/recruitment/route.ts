import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Recruitment from "@/models/Recruitment"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    // Parse request body
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      studentId,
      yearLevel,
      major,
      selectedDomains,
      experienceLevel,
      previousExperience,
      skills,
      motivation,
      availability,
      projectIdeas,
      portfolioUrl,
      githubUrl,
      linkedinUrl,
      additionalInfo,
    } = body

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !studentId ||
      !yearLevel ||
      !major ||
      !experienceLevel ||
      !motivation ||
      !availability
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate domains selection
    if (!selectedDomains || selectedDomains.length === 0) {
      return NextResponse.json({ error: "Please select at least one area of interest" }, { status: 400 })
    }

    // Check for duplicate applications (same email or student ID)
    const existingApplication = await Recruitment.findOne({
      $or: [{ email: email.trim().toLowerCase() }, { studentId: studentId.trim() }],
    })

    if (existingApplication) {
      return NextResponse.json(
        { error: "An application with this email or student ID already exists" },
        { status: 409 },
      )
    }

    // Create new recruitment application
    const newApplication = new Recruitment({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      studentId: studentId.trim(),
      yearLevel,
      major: major.trim(),
      selectedDomains,
      experienceLevel,
      previousExperience: previousExperience?.trim() || "",
      skills: skills?.trim() || "",
      motivation: motivation.trim(),
      availability: availability.trim(),
      projectIdeas: projectIdeas?.trim() || "",
      portfolioUrl: portfolioUrl?.trim() || "",
      githubUrl: githubUrl?.trim() || "",
      linkedinUrl: linkedinUrl?.trim() || "",
      additionalInfo: additionalInfo?.trim() || "",
    })

    // Save to database
    const savedApplication = await newApplication.save()

    // Return success response
    return NextResponse.json(
      {
        message: "Application submitted successfully",
        applicationId: savedApplication._id,
        status: savedApplication.status,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Recruitment application error:", error)

    // Handle validation errors
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json({ error: "Validation failed", details: error.message }, { status: 400 })
    }

    // Handle duplicate key errors
    if (error instanceof Error && "code" in error && error.code === 11000) {
      return NextResponse.json({ error: "Application already exists for this email or student ID" }, { status: 409 })
    }

    // Generic error response
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const domain = searchParams.get("domain")
    const yearLevel = searchParams.get("yearLevel")

    // Build query
    const query: any = {}
    if (status && ["pending", "under-review", "accepted", "rejected", "waitlisted"].includes(status)) {
      query.status = status
    }
    if (domain && ["coding", "technical", "pr-social", "management"].includes(domain)) {
      query.selectedDomains = domain
    }
    if (yearLevel) {
      query.yearLevel = yearLevel
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit

    // Fetch applications with pagination
    const applications = await Recruitment.find(query).sort({ submittedAt: -1 }).skip(skip).limit(limit).select("-__v")

    // Get total count for pagination
    const total = await Recruitment.countDocuments(query)

    // Get statistics
    const stats = await Recruitment.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ])

    const domainStats = await Recruitment.aggregate([
      { $unwind: "$selectedDomains" },
      {
        $group: {
          _id: "$selectedDomains",
          count: { $sum: 1 },
        },
      },
    ])

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
      statistics: {
        byStatus: stats,
        byDomain: domainStats,
      },
    })
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}
