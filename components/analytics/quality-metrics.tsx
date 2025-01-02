"use client"

import { Card } from "@/components/ui/card"
import { mockPhotos } from "@/lib/mock-data"
import { Progress } from "@/components/ui/progress"

export function QualityMetrics() {
  const metrics = {
    successRate: 98.5,
    avgProcessingTime: 45,
    enhancementAccuracy: 96.2,
    userSatisfaction: 94.8,
    failureRate: 1.5,
    reprocessingRate: 3.2
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Quality Metrics</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="font-medium mb-4">Success Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Success Rate</span>
                  <span className="text-sm font-medium">{metrics.successRate}%</span>
                </div>
                <Progress value={metrics.successRate} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Enhancement Accuracy</span>
                  <span className="text-sm font-medium">{metrics.enhancementAccuracy}%</span>
                </div>
                <Progress value={metrics.enhancementAccuracy} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">User Satisfaction</span>
                  <span className="text-sm font-medium">{metrics.userSatisfaction}%</span>
                </div>
                <Progress value={metrics.userSatisfaction} className="h-2" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-6">
          <div>
            <h3 className="font-medium mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Average Processing Time</span>
                  <span className="text-sm font-medium">{metrics.avgProcessingTime}s</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Failure Rate</span>
                  <span className="text-sm font-medium">{metrics.failureRate}%</span>
                </div>
                <Progress value={metrics.failureRate * 10} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Reprocessing Rate</span>
                  <span className="text-sm font-medium">{metrics.reprocessingRate}%</span>
                </div>
                <Progress value={metrics.reprocessingRate * 10} className="h-2" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}