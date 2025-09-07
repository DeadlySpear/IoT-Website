import mongoose from "mongoose"

const recruitmentSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  studentId: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    unique: true,
  },
  yearLevel: {
    type: String,
    required: true,
    enum: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate Student"],
  },
  major: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },

  // Interests & Experience
  selectedDomains: [
    {
      type: String,
      enum: ["coding", "technical", "pr-social", "management"],
    },
  ],
  experienceLevel: {
    type: String,
    required: true,
    enum: ["Beginner (0-1 years)", "Intermediate (1-3 years)", "Advanced (3+ years)", "Expert (5+ years)"],
  },
  previousExperience: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  skills: {
    type: String,
    trim: true,
    maxlength: 500,
  },

  // Motivation & Availability
  motivation: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  availability: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  projectIdeas: {
    type: String,
    trim: true,
    maxlength: 1000,
  },

  // Additional Information
  portfolioUrl: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  githubUrl: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  linkedinUrl: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  additionalInfo: {
    type: String,
    trim: true,
    maxlength: 1000,
  },

  // Application Status
  status: {
    type: String,
    enum: ["pending", "under-review", "accepted", "rejected", "waitlisted"],
    default: "pending",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  reviewedAt: {
    type: Date,
  },
  reviewedBy: {
    type: String,
  },
  reviewNotes: {
    type: String,
    maxlength: 1000,
  },
})

// Create indexes for better query performance
recruitmentSchema.index({ email: 1 })
recruitmentSchema.index({ studentId: 1 })
recruitmentSchema.index({ status: 1 })
recruitmentSchema.index({ submittedAt: -1 })
recruitmentSchema.index({ selectedDomains: 1 })
recruitmentSchema.index({ yearLevel: 1 })

export default mongoose.models.Recruitment || mongoose.model("Recruitment", recruitmentSchema)
