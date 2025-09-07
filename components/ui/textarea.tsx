import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground bg-card/50 border-muted-foreground/30 flex field-sizing-content min-h-16 w-full rounded-md border-2 px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border-color,background-color] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "hover:border-primary/50 hover:bg-card/70",
        "focus-visible:border-primary focus-visible:bg-card focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
