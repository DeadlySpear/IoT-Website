import connectDB from "@/lib/mongodb"
import Contact from "@/models/Contact"
import Recruitment from "@/models/Recruitment"

async function seedDatabase() {
  try {
    console.log("🔄 Connecting to MongoDB...")
    await connectDB()

    console.log("🔄 Seeding database with sample data...")

    // Sample contact data
    const sampleContacts = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        subject: "Question about IoT Projects",
        message: "I am interested in learning more about your IoT projects and how I can get involved.",
        status: "new",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@college.edu",
        phone: "+1 (555) 987-6543",
        subject: "Collaboration Opportunity",
        message: "Our research lab would like to collaborate on IoT research projects.",
        status: "read",
      },
    ]

    // Sample recruitment data
    const sampleRecruitments = [
      {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@college.edu",
        phone: "+1 (555) 111-2222",
        studentId: "STU001",
        yearLevel: "2nd Year",
        major: "Computer Science",
        selectedDomains: ["coding", "technical"],
        experienceLevel: "Intermediate (1-3 years)",
        previousExperience: "Built several web applications using React and Node.js",
        skills: "JavaScript, Python, React, Arduino",
        motivation: "I want to learn more about IoT development and work on real-world projects.",
        availability: "Weekdays after 3 PM, weekends",
        projectIdeas: "Smart home automation system",
        githubUrl: "https://github.com/alicejohnson",
        status: "pending",
      },
    ]

    // Clear existing data (optional - remove in production)
    await Contact.deleteMany({})
    await Recruitment.deleteMany({})
    console.log("🗑️  Cleared existing data")

    // Insert sample data
    await Contact.insertMany(sampleContacts)
    console.log(`✅ Inserted ${sampleContacts.length} sample contacts`)

    await Recruitment.insertMany(sampleRecruitments)
    console.log(`✅ Inserted ${sampleRecruitments.length} sample recruitment applications`)

    console.log("🎉 Database seeding completed successfully!")
  } catch (error) {
    console.error("❌ Database seeding failed:", error)
    process.exit(1)
  }
}

// Run seeding if this script is executed directly
if (require.main === module) {
  seedDatabase()
}

export default seedDatabase
