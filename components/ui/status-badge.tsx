"use client"

import { forwardRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, Check, AlertCircle, RefreshCw } from "lucide-react"

export const statusConfig = {
  pending: { icon: Clock, label: "Pending Enhancement", color: "bg-yellow-500/10 text-yellow-500" },
  processing: { icon: RefreshCw, label: "Processing Enhancement", color: "bg-blue-500/10 text-blue-500" },
  completed: { icon: Check, label: "Enhancement Complete", color: "bg-green-500/10 text-green-500" },
  failed: { icon: AlertCircle, label: "Enhancement Failed", color: "bg-red-500/10 text-red-500" }
}

interface StatusBadgeProps {
  status: keyof typeof statusConfig
  showLabel?: boolean
}

export const StatusBadge = forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ status, showLabel = true }, ref) => {
    const config = statusConfig[status]
    const StatusIcon = config.icon

    return (
      <div ref={ref}>
        <Badge className={`${config.color} border-none`}>
          <StatusIcon className="h-3 w-3 mr-1" />
          {showLabel && status}
        </Badge>
      </div>
    )
  }
)

StatusBadge.displayName = "StatusBadge"