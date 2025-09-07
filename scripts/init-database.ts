import connectDB from "@/lib/mongodb"
import Contact from "@/models/Contact"
import Recruitment from "@/models/Recruitment"

async function initializeDatabase() {
  try {
    console.log("🔄 Connecting to MongoDB...")
    await connectDB()

    console.log("✅ Connected to MongoDB successfully")

    // Initialize collections (this will create them if they don't exist)
    console.log("🔄 Initializing collections...")

    // Create indexes for Contact model
    await Contact.createIndexes()
    console.log("✅ Contact collection and indexes created")

    // Create indexes for Recruitment model
    await Recruitment.createIndexes()
    console.log("✅ Recruitment collection and indexes created")

    console.log("🎉 Database initialization completed successfully!")
  } catch (error) {
    console.error("❌ Database initialization failed:", error)
    process.exit(1)
  }
}

// Run initialization if this script is executed directly
if (require.main === module) {
  initializeDatabase()
}

export default initializeDatabase
