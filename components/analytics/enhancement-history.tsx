"use client"

import { Card } from "@/components/ui/card"
import { mockPhotos } from "@/lib/mock-data"
import { formatDistanceToNow } from "date-fns"
import { ENHANCEMENT_OPTIONS } from "@/lib/constants/enhancements"
import { Badge } from "@/components/ui/badge"

export function EnhancementHistory() {
  const recentEnhancements = mockPhotos
    .filter(photo => photo.enhancedUrl)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Enhancement History</h2>

      <div className="space-y-4">
        {recentEnhancements.map((photo) => (
          <Card key={photo.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-40 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={photo.enhancedUrl} 
                  alt="Enhanced photo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium truncate">Photo {photo.id}</h3>
                  <Badge variant="secondary">Completed</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex gap-1 flex-wrap">
                    {photo.metadata.enhancements?.map((enhancement) => {
                      const option = ENHANCEMENT_OPTIONS.find(e => e.id === enhancement)
                      return (
                        <Badge key={enhancement} variant="outline">
                          {option?.label || enhancement}
                        </Badge>
                      )
                    })}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Enhanced {formatDistanceToNow(new Date(photo.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}