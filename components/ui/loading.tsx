"use client"

import { Loader2 } from "lucide-react"

interface LoadingProps {
  text?: string
}

export function Loading({ text = "Loading..." }: LoadingProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-6 w-6 animate-spin mr-2" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  )
}