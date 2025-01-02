"use client"

import { Photo } from "@/types/project"
import { Button } from "@/components/ui/button"
import { DownloadPhotosButton } from "../download-photos-button"

interface GalleryHeaderProps {
  selectedPhotos: number[]
  photos: Photo[]
}

export function GalleryHeader({ selectedPhotos, photos }: GalleryHeaderProps) {
  const handleBulkEnhance = () => {
    // TODO: Implement bulk enhancement
    console.log('Enhancing photos:', selectedPhotos)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">Project Photos</h2>
        {selectedPhotos.length > 0 && (
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBulkEnhance}
            >
              Enhance Selected ({selectedPhotos.length})
            </Button>
            <DownloadPhotosButton 
              photos={photos.filter(p => selectedPhotos.includes(p.id))} 
            />
          </div>
        )}
      </div>
    </div>
  )
}