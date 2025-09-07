"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "@/components/navigation"
import { Users, Code, Megaphone, Wrench, Send, Loader2, GraduationCap, Calendar } from "lucide-react"

const domains = [
  {
    id: "coding",
    name: "Coding & Development",
    icon: Code,
    description: "Web development, mobile apps, IoT programming, algorithms",
  },
  {
    id: "technical",
    name: "Technical & Hardware",
    icon: Wrench,
    description: "Circuit design, embedded systems, robotics, electronics",
  },
  {
    id: "pr-social",
    name: "PR & Social Media",
    icon: Megaphone,
    description: "Content creation, social media management, event promotion",
  },
  {
    id: "management",
    name: "Management & Operations",
    icon: Users,
    description: "Project management, event coordination, team leadership",
  },
]

const experienceLevels = [
  "Beginner (0-1 years)",
  "Intermediate (1-3 years)",
  "Advanced (3+ years)",
  "Expert (5+ years)",
]

const yearLevels = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate Student"]

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    yearLevel: "",
    major: "",

    // Interests & Experience
    selectedDomains: [] as string[],
    experienceLevel: "",
    previousExperience: "",
    skills: "",

    // Motivation & Availability
    motivation: "",
    availability: "",
    projectIdeas: "",

    // Additional
    portfolioUrl: "",
    githubUrl: "",
    linkedinUrl: "",
    additionalInfo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDomainToggle = (domainId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedDomains: prev.selectedDomains.includes(domainId)
        ? prev.selectedDomains.filter((id) => id !== domainId)
        : [...prev.selectedDomains, domainId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/recruitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you soon.",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          studentId: "",
          yearLevel: "",
          major: "",
          selectedDomains: [],
          experienceLevel: "",
          previousExperience: "",
          skills: "",
          motivation: "",
          availability: "",
          projectIdeas: "",
          portfolioUrl: "",
          githubUrl: "",
          linkedinUrl: "",
          additionalInfo: "",
        })
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Users className="h-4 w-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-balance">
              Join <span className="text-primary">IoTronics</span> Club
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
              Ready to dive into the world of IoT and technology? Apply now and become part of our innovative community!
            </p>

            {/* Domain Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {domains.map((domain) => {
                const Icon = domain.icon
                return (
                  <Card key={domain.id} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-sm font-heading">{domain.name}</CardTitle>
                      <CardDescription className="text-xs">{domain.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Membership Application</CardTitle>
                <CardDescription>
                  Fill out this form to apply for membership in IoTronics Club. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@college.edu"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID *</Label>
                        <Input
                          id="studentId"
                          name="studentId"
                          type="text"
                          placeholder="STU123456"
                          value={formData.studentId}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yearLevel">Year Level *</Label>
                        <Select
                          value={formData.yearLevel}
                          onValueChange={(value) => handleSelectChange("yearLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year level" />
                          </SelectTrigger>
                          <SelectContent>
                            {yearLevels.map((year) => (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="major">Major/Field of Study *</Label>
                      <Input
                        id="major"
                        name="major"
                        type="text"
                        placeholder="Computer Science, Electrical Engineering, etc."
                        value={formData.major}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Interests & Experience */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Interests & Experience
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-medium">Areas of Interest *</Label>
                        <p className="text-sm text-muted-foreground mb-3">Select all domains you're interested in:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {domains.map((domain) => {
                            const Icon = domain.icon
                            const isSelected = formData.selectedDomains.includes(domain.id)
                            return (
                              <div key={domain.id} className="flex items-start space-x-3">
                                <Checkbox
                                  id={domain.id}
                                  checked={isSelected}
                                  onCheckedChange={() => handleDomainToggle(domain.id)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                  <label
                                    htmlFor={domain.id}
                                    className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                  >
                                    <Icon className="h-4 w-4 text-primary" />
                                    {domain.name}
                                  </label>
                                  <p className="text-xs text-muted-foreground">{domain.description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="experienceLevel">Experience Level *</Label>
                          <Select
                            value={formData.experienceLevel}
                            onValueChange={(value) => handleSelectChange("experienceLevel", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              {experienceLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="skills">Technical Skills</Label>
                          <Input
                            id="skills"
                            name="skills"
                            type="text"
                            placeholder="Python, JavaScript, Arduino, etc."
                            value={formData.skills}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="previousExperience">Previous Experience</Label>
                        <Textarea
                          id="previousExperience"
                          name="previousExperience"
                          placeholder="Tell us about your previous projects, internships, or relevant experience..."
                          className="min-h-[100px]"
                          value={formData.previousExperience}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Motivation & Availability */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Motivation & Availability
                    </h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join IoTronics? *</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          placeholder="Share your motivation for joining our club and what you hope to achieve..."
                          className="min-h-[120px]"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability *</Label>
                        <Textarea
                          id="availability"
                          name="availability"
                          placeholder="When are you available for meetings and events? (e.g., weekdays after 3 PM, weekends, etc.)"
                          className="min-h-[80px]"
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectIdeas">Project Ideas</Label>
                        <Textarea
                          id="projectIdeas"
                          name="projectIdeas"
                          placeholder="Do you have any project ideas you'd like to work on with the club?"
                          className="min-h-[80px]"
                          value={formData.projectIdeas}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-4">Additional Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                        <Input
                          id="portfolioUrl"
                          name="portfolioUrl"
                          type="url"
                          placeholder="https://yourportfolio.com"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="githubUrl">GitHub Profile</Label>
                        <Input
                          id="githubUrl"
                          name="githubUrl"
                          type="url"
                          placeholder="https://github.com/yourusername"
                          value={formData.githubUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                        <Input
                          id="linkedinUrl"
                          name="linkedinUrl"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={formData.linkedinUrl}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Anything else you'd like us to know about you?"
                        className="min-h-[80px]"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting || formData.selectedDomains.length === 0}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" size="lg" asChild>
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="/iotronics-logo.png" 
                alt="IoTronics Logo" 
                className="h-6 w-6 object-contain"
              />
              <span className="font-heading font-bold text-lg">IoTronics Club</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Join</span>
              <span>© 2024 IoTronics Club</span>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
