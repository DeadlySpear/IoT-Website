import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import {
  Users,
  Trophy,
  Calendar,
  Target,
  Lightbulb,
  Code,
  Wifi,
  Cpu,
  Radio,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Gauge,
  Network,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Wifi className="h-4 w-4 mr-2" />
              Internet of Things Club
            </Badge>

            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-black/80 via-gray-950/90 to-black/85 border border-primary/20 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/iotronics-logo.png"
                  alt="IoTronics Club Logo"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-950/50 rounded-2xl blur-xl -z-10"></div>
                <div className="absolute inset-0 bg-black/30 rounded-2xl -z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl -z-30"></div>
              </div>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-balance mb-6 animate-fade-in-up">
              Welcome to <span className="text-primary">IoTronics</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Empowering the next generation of IoT innovators. Join our vibrant community where creativity meets
              technology, and students transform ideas into intelligent connected solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <Link href="/recruitment">Join Our Club</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 bg-transparent hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-5xl mx-auto animate-fade-in-up [animation-delay:600ms]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20">
              {[
                { icon: Cpu, label: "Microcontrollers" },
                { icon: Radio, label: "Wireless" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Database, label: "Data Storage" },
                { icon: Cloud, label: "Cloud Computing" },
                { icon: Shield, label: "Security" },
                { icon: Gauge, label: "Sensors" },
                { icon: Network, label: "Networks" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Growing Impact</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Building tomorrow's technology leaders through hands-on learning and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
              <CardHeader className="pb-3">
                <Users className="h-12 w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-3xl font-bold">200+</CardTitle>
                <CardDescription>Active Members</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
              <CardHeader className="pb-3">
                <Code className="h-12 w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-3xl font-bold">75+</CardTitle>
                <CardDescription>IoT Projects Built</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
              <CardHeader className="pb-3">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-3xl font-bold">18</CardTitle>
                <CardDescription>National Awards</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
              <CardHeader className="pb-3">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-3xl font-bold">50+</CardTitle>
                <CardDescription>Tech Workshops</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Aims Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">About IoTronics Club</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto">
              Founded in 2019, IoTronics Club has become the premier technology community at our college. We're
              dedicated to fostering innovation in Internet of Things, embedded systems, and emerging technologies. Our
              club serves as a bridge between theoretical knowledge and practical application, preparing students for
              the digital future.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Weekly hands-on workshops covering Arduino, Raspberry Pi, and advanced IoT platforms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Collaborative projects ranging from smart home systems to industrial IoT solutions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Regular hackathons and coding competitions with industry partnerships
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Guest lectures from industry experts and alumni working in tech giants
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <Cpu className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Hardware</h4>
                    <p className="text-sm text-muted-foreground">Arduino, Raspberry Pi, ESP32</p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                    <Code className="h-12 w-12 text-accent mb-4" />
                    <h4 className="font-semibold mb-2">Software</h4>
                    <p className="text-sm text-muted-foreground">Python, C++, JavaScript</p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                    <Cloud className="h-12 w-12 text-secondary mb-4" />
                    <h4 className="font-semibold mb-2">Cloud</h4>
                    <p className="text-sm text-muted-foreground">AWS, Azure, Firebase</p>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                    <Network className="h-12 w-12 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Protocols</h4>
                    <p className="text-sm text-muted-foreground">MQTT, HTTP, LoRa</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Innovation & Research</CardTitle>
                <CardDescription className="leading-relaxed">
                  Drive cutting-edge research in IoT applications, from smart cities to healthcare solutions. Our
                  members publish papers and present at national conferences, contributing to the advancement of
                  connected technologies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Practical Learning</CardTitle>
                <CardDescription className="leading-relaxed">
                  Master essential IoT technologies including sensor integration, wireless communication protocols,
                  cloud platforms, and edge computing through structured learning paths and mentorship programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Collaborative Community</CardTitle>
                <CardDescription className="leading-relaxed">
                  Join a diverse network of 200+ passionate technologists across all academic years. Our alumni network
                  spans major tech companies, providing mentorship and career opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Technical Excellence</CardTitle>
                <CardDescription className="leading-relaxed">
                  Develop expertise in multiple programming languages (C++, Python, JavaScript), IoT frameworks, and
                  industry-standard development practices including version control and agile methodologies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Wifi className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Industry Partnerships</CardTitle>
                <CardDescription className="leading-relaxed">
                  Collaborate with leading tech companies through sponsored projects, internship programs, and direct
                  recruitment opportunities. Our industry partners include startups and Fortune 500 companies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="font-heading text-xl">Competition Excellence</CardTitle>
                <CardDescription className="leading-relaxed">
                  Consistently rank among top performers in national IoT competitions, hackathons, and innovation
                  challenges. Our teams have won prestigious awards including Smart India Hackathon and IEEE
                  competitions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Be part of the next generation of IoT innovators and tech leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link href="/" className="flex items-center gap-3 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <div className="p-2 rounded-lg bg-gradient-to-br from-black/60 via-gray-950/70 to-black/65 border border-primary/30 shadow-lg">
                <Image
                  src="/iotronics-logo.png"
                  alt="IoTronics Club Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg">IoTronics Club</span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/recruitment" className="hover:text-foreground transition-colors">
                Join
              </Link>
              <span>© 2024 IoTronics Club</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
