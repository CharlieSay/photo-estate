export interface UploadingFile extends File {
  id: string
  preview?: string
  progress: number
  status: 'pending' | 'processing' | 'enhancing' | 'completed'
}