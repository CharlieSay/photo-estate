"use client"

import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  progress?: {
    value: number
    max: number
  }
}

export function StatsCard({ title, value, subtitle, icon: Icon, progress }: StatsCardProps) {
  return (
    <Card className="p-3">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-muted-foreground truncate">{title}</p>
          <h3 className="text-lg font-bold mt-1 truncate">{value}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
        <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </div>
    </Card>
  )
}