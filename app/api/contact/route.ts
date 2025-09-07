import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Contact from "@/models/Contact"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    // Parse request body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create new contact entry
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      subject: subject.trim(),
      message: message.trim(),
    })

    // Save to database
    const savedContact = await newContact.save()

    // Return success response
    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        id: savedContact._id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form error:", error)

    // Handle validation errors
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json({ error: "Validation failed", details: error.message }, { status: 400 })
    }

    // Handle duplicate key errors
    if (error instanceof Error && "code" in error && error.code === 11000) {
      return NextResponse.json({ error: "Duplicate entry detected" }, { status: 409 })
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

    // Build query
    const query: any = {}
    if (status && ["new", "read", "replied"].includes(status)) {
      query.status = status
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit

    // Fetch contacts with pagination
    const contacts = await Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).select("-__v")

    // Get total count for pagination
    const total = await Contact.countDocuments(query)

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
