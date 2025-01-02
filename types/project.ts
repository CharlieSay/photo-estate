export interface Project {
  id: number
  name: string
  location: string
  photoCount: number
  coverImage: string
  listingUrl: string
  updatedAt: string
  notes?: string
}

export type PhotoStatus = 'pending' | 'processing' | 'enhancing' | 'completed' | 'failed'
export type ProcessingSpeed = 'standard' | 'expedited'

export interface PhotoMetadata {
  size?: number
  dimensions?: {
    width: number
    height: number
  }
  enhancements?: string[]
}

export interface Photo {
  id: number
  projectId: number
  url: string
  enhancedUrl?: string
  status: PhotoStatus
  metadata: PhotoMetadata
  createdAt: string
}

export interface PhotoJob {
  id: string
  projectId: number
  fileName: string
  fileSize: number
  preview?: string
  status: PhotoStatus
  progress: number
  enhancements: string[]
  speed: ProcessingSpeed
  priority: number
  startedAt: string
  estimatedCompletionTime?: string
  error?: string
}