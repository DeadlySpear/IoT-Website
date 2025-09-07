import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Zap className="h-16 w-16 text-primary" />
              <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                404
              </div>
            </div>
          </div>
          <CardTitle className="font-heading text-2xl">Page Not Found</CardTitle>
          <CardDescription>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/contact">
                <Search className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Popular pages:</p>
            <div className="flex flex-col gap-2">
              <Link href="/recruitment" className="text-sm text-primary hover:underline">
                Join IoTronics Club
              </Link>
              <Link href="/#about" className="text-sm text-primary hover:underline">
                About Our Mission
              </Link>
              <Link href="/contact" className="text-sm text-primary hover:underline">
                Contact Information
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
