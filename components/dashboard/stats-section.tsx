"use client"

import { StatsCard } from "./stats-card"
import {
  Image,
  Zap,
  HardDrive,
  Clock,
  TrendingUp,
  CheckCircle,
  Calendar,
  Building2,
  ImageDown,
  Sparkles,
  AlertCircle,
  Timer,
  Scale
} from "lucide-react"

export function StatsSection() {
  const stats = {
    totalPhotos: 156,
    enhancedPhotos: 142,
    storageUsed: 2.1,
    storageLimit: 5,
    processingCredits: 850,
    creditsLimit: 1000,
    averageProcessingTime: "45 seconds",
    successRate: 98.5,
    activeProjects: 12,
    totalProjects: 45,
    monthlyUploads: 234,
    monthlyEnhancements: 220,
    failureRate: 1.5,
    averageQueueTime: "2 minutes",
    averageFileSize: "3.2 MB",
    peakUsageTime: "2-4 PM"
  }

  return (
    <div className="mb-12 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatsCard
            title="Total Photos"
            value={stats.totalPhotos}
            subtitle={`${stats.enhancedPhotos} enhanced`}
            icon={Image}
          />
          <StatsCard
            title="Storage Used"
            value={`${stats.storageUsed} GB`}
            subtitle={`of ${stats.storageLimit} GB`}
            icon={HardDrive}
          />
          <StatsCard
            title="Processing Credits"
            value={stats.processingCredits}
            subtitle={`of ${stats.creditsLimit}`}
            icon={Zap}
          />
          <StatsCard
            title="Success Rate"
            value={`${stats.successRate}%`}
            subtitle={`Avg. ${stats.averageProcessingTime}/photo`}
            icon={CheckCircle}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Projects & Activity</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatsCard
            title="Active Projects"
            value={stats.activeProjects}
            subtitle={`of ${stats.totalProjects} total`}
            icon={Building2}
          />
          <StatsCard
            title="Monthly Uploads"
            value={stats.monthlyUploads}
            subtitle={`${stats.monthlyEnhancements} enhanced`}
            icon={ImageDown}
          />
          <StatsCard
            title="Average File Size"
            value={stats.averageFileSize}
            subtitle="per photo"
            icon={Scale}
          />
          <StatsCard
            title="Peak Usage"
            value={stats.peakUsageTime}
            subtitle="daily"
            icon={TrendingUp}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Processing Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatsCard
            title="Enhancement Rate"
            value={`${stats.enhancedPhotos}/${stats.totalPhotos}`}
            subtitle="photos enhanced"
            icon={Sparkles}
          />
          <StatsCard
            title="Failure Rate"
            value={`${stats.failureRate}%`}
            subtitle="of all processes"
            icon={AlertCircle}
          />
          <StatsCard
            title="Queue Time"
            value={stats.averageQueueTime}
            subtitle="average wait"
            icon={Clock}
          />
          <StatsCard
            title="Processing Time"
            value={stats.averageProcessingTime}
            subtitle="per photo"
            icon={Timer}
          />
        </div>
      </div>
    </div>
  )
}