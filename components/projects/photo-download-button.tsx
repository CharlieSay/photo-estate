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

interface PhotoDownloadButtonProps {
  photo: Photo
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

export function PhotoDownloadButton({ photo, variant = "outline", size = "default" }: PhotoDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadPhoto = async (url: string, suffix: string) => {
    setIsDownloading(true)
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `photo_${photo.id}_${suffix}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Error downloading photo:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} disabled={isDownloading}>
          {isDownloading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {size !== "icon" && <span className="ml-2">Download</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {photo.enhancedUrl && (
          <DropdownMenuItem onClick={() => downloadPhoto(photo.enhancedUrl!, 'enhanced')}>
            Download Enhanced
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => downloadPhoto(photo.url, 'original')}>
          Download Original
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}