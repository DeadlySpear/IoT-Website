import { Zap } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Zap className="h-12 w-12 text-primary animate-pulse" />
          <div className="absolute inset-0 h-12 w-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
        <div className="text-center">
          <h2 className="font-heading font-semibold text-lg text-foreground">Loading IoTronics</h2>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your experience...</p>
        </div>
      </div>
    </div>
  )
}
