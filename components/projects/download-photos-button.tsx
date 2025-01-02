"use client"

import { useState } from "react"
import { Photo } from "@/types/project"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, Loader2 } from "lucide-react"
import JSZip from "jszip"
import { saveAs } from "file-saver"

interface DownloadPhotosButtonProps {
  photos: Photo[]
}

export function DownloadPhotosButton({ photos }: DownloadPhotosButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadPhotos = async (enhancedOnly: boolean) => {
    setIsDownloading(true)
    try {
      const zip = new JSZip()
      const promises = photos.map(async (photo) => {
        // Download enhanced photos
        if (photo.enhancedUrl) {
          const enhancedRes = await fetch(photo.enhancedUrl)
          const enhancedBlob = await enhancedRes.blob()
          zip.file(`enhanced/photo_${photo.id}_enhanced.jpg`, enhancedBlob)
        }
        
        // Download original photos if not enhanced-only
        if (!enhancedOnly) {
          const originalRes = await fetch(photo.url)
          const originalBlob = await originalRes.blob()
          zip.file(`original/photo_${photo.id}_original.jpg`, originalBlob)
        }
      })

      await Promise.all(promises)
      const content = await zip.generateAsync({ type: "blob" })
      saveAs(content, `project-photos-${enhancedOnly ? 'enhanced' : 'all'}.zip`)
    } catch (error) {
      console.error('Error downloading photos:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" disabled={isDownloading}>
          {isDownloading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Download className="h-4 w-4 mr-2" />
          )}
          Download Photos
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => downloadPhotos(true)}>
          Enhanced Photos Only
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadPhotos(false)}>
          All Photos (Original & Enhanced)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}