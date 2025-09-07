import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI;

console.log("[v0] Environment check - MONGODB_URI exists:", !!MONGODB_URI)
console.log("[v0] Environment check - NODE_ENV:", process.env.NODE_ENV)

if (!MONGODB_URI) {
  console.error("[v0] MONGODB_URI is not defined in environment variables")
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

if (!MONGODB_URI.startsWith("mongodb+srv://") && !MONGODB_URI.startsWith("mongodb://")) {
  throw new Error("Invalid MONGODB_URI format. Must start with mongodb:// or mongodb+srv://")
}

interface GlobalMongoose {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var myMongoose: GlobalMongoose | undefined
}

let cached = global.myMongoose

if (!cached) {
  cached = global.myMongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached!.conn) {
    console.log("[v0] Using existing MongoDB connection")
    return cached!.conn
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }

    console.log("[v0] Attempting to connect to MongoDB Atlas:", MONGODB_URI.replace(/\/\/.*@/, "//***:***@"))

    cached!.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("[v0] Successfully connected to MongoDB Atlas")
        return mongoose
      })
      .catch((error) => {
        console.error("[v0] MongoDB connection failed:", error.message)
        console.error("[v0] Full error:", error)
        throw error
      })
  }

  try {
    cached!.conn = await cached!.promise
  } catch (e) {
    cached!.promise = null
    console.error("[v0] Error in connectDB:", e)
    throw e
  }

  return cached!.conn
}

export default connectDB
