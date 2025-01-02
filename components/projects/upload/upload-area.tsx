"use client"

import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadAreaProps {
  onDrop: (files: File[]) => void
}

export function UploadArea({ onDrop }: UploadAreaProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxSize: 10 * 1024 * 1024
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
        isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
      )}
    >
      <input {...getInputProps()} />
      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        Drag & drop photos here, or click to select
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Maximum file size: 10MB
      </p>
    </div>
  )
}