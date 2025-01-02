"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { X, Image as ImageIcon, Check } from "lucide-react"
import { UploadingFile } from "./types"

interface UploadPreviewProps {
  files: UploadingFile[]
  isUploading: boolean
  onRemove: (id: string) => void
}

export function UploadPreview({ files, isUploading, onRemove }: UploadPreviewProps) {
  const getStatusText = (status: UploadingFile['status']) => {
    switch (status) {
      case 'processing': return 'Uploading...'
      case 'enhancing': return 'Enhancing...'
      case 'completed': return 'Complete'
      default: return 'Pending'
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {files.map((file) => (
        <Card key={file.id} className="relative group">
          <div className="aspect-video relative">
            {file.preview ? (
              <img
                src={file.preview}
                alt={file.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
            {!isUploading && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onRemove(file.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            {file.status === 'completed' && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Check className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
          <div className="p-2">
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-xs truncate flex-1 pr-2">{file.name}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {getStatusText(file.status)}
              </span>
            </div>
            <Progress value={file.progress} className="h-1" />
          </div>
        </Card>
      ))}
    </div>
  )
}