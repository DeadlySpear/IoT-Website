"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Users, Trophy, Target, Mail, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigationItems = [
  {
    title: "About",
    href: "/#about",
    description: "Learn about our mission and aims",
  },
  {
    title: "Stats",
    href: "/#stats",
    description: "See our achievements and impact",
  },
  {
    title: "Join Us",
    href: "/recruitment",
    description: "Apply to become a member",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
]

const quickLinks = [
  {
    title: "Our Mission",
    href: "/#about",
    icon: Target,
    description: "Innovation and skill development",
  },
  {
    title: "Member Stats",
    href: "/#stats",
    icon: Users,
    description: "200+ active members",
  },
  {
    title: "Awards Won",
    href: "/#stats",
    icon: Trophy,
    description: "18 competition victories",
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Mail,
    description: "Questions? We're here to help",
  },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && href !== "/#about" && href !== "/#stats"
    }
    return pathname === href
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/iotronics-logo.png" alt="IoTronics Logo" width={40} height={40} className="object-contain" />
            <span className="font-heading font-bold text-xl text-foreground">IoTronics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors group"
              >
                Explore
                <ChevronDown
                  className={cn("ml-1 h-4 w-4 transition-transform duration-200", isExploreOpen && "rotate-180")}
                />
              </button>

              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-1 w-[500px] bg-popover border border-border rounded-md shadow-lg z-50">
                  <div className="grid gap-3 p-6 grid-cols-2">
                    <div className="row-span-3">
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/40 p-6 no-underline outline-none focus:shadow-md hover:bg-gradient-to-b hover:from-primary/30 hover:to-primary/50 transition-all"
                        href="/"
                        onClick={() => setIsExploreOpen(false)}
                      >
                        <Image
                          src="/iotronics-logo.png"
                          alt="IoTronics Logo"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">IoTronics Club</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Connecting minds, building futures through IoT innovation.
                        </p>
                      </Link>
                    </div>
                    {quickLinks.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsExploreOpen(false)}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-primary" />
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 ml-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    isActive(item.href) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <Image
                      src="/iotronics-logo.png"
                      alt="IoTronics Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    IoTronics Club
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex flex-col gap-1 rounded-lg p-4 transition-colors hover:bg-accent",
                        isActive(item.href) && "bg-accent",
                      )}
                    >
                      <span className="font-medium">{item.title}</span>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </Link>
                  ))}

                  <div className="border-t pt-4 mt-4">
                    <Button asChild className="w-full">
                      <Link href="/recruitment" onClick={() => setIsOpen(false)}>
                        Join Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/recruitment">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {isExploreOpen && <div className="fixed inset-0 z-40" onClick={() => setIsExploreOpen(false)} />}
    </nav>
  )
}

export default Navigation
