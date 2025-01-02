'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { usePhotoStore } from '@/lib/stores/photo-store';
import { useCallback, useEffect, useState } from 'react';
import { EnhancementOptions } from './enhancement-options';
import { ProcessingQueue } from './processing-queue';
import { SpeedSelector } from './speed-selector';
import { UploadingFile } from './upload/types';
import { UploadArea } from './upload/upload-area';
import { UploadPreview } from './upload/upload-preview';

interface PhotoUploadProps {
  projectId: number;
  onUploadComplete?: (photos: any[]) => void;
}

export function PhotoUpload({ projectId, onUploadComplete }: PhotoUploadProps) {
  // State
  const [files, setFiles] = useState<UploadingFile[]>([]);
  const [selectedEnhancements, setSelectedEnhancements] = useState<string[]>(
    []
  );
  const [processingSpeed, setProcessingSpeed] = useState<
    'standard' | 'expedited'
  >('standard');
  const [currentStep, setCurrentStep] = useState<'select' | 'configure'>(
    'select'
  );
  const [mounted, setMounted] = useState(false);

  // Hooks
  const addJob = usePhotoStore((state) => state.addJob);
  const { toast } = useToast();

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handlers
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      ...file,
      id: Math.random().toString(36).substring(7),
      progress: 0,
      preview: URL.createObjectURL(file),
      status: 'pending' as const,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const removedFile = prev.find((f) => f.id === id);
      if (removedFile?.preview) {
        URL.revokeObjectURL(removedFile.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const resetUploadState = useCallback(() => {
    files.forEach((file) => {
      if (file.preview) URL.revokeObjectURL(file.preview);
    });
    setFiles([]);
    setSelectedEnhancements([]);
    setProcessingSpeed('standard');
    setCurrentStep('select');
  }, [files]);

  const processFiles = useCallback(() => {
    if (currentStep === 'select') {
      setCurrentStep('configure');
      return;
    }

    if (selectedEnhancements.length === 0) {
      toast({
        title: 'No enhancements selected',
        description: 'Please select at least one enhancement to apply.',
        variant: 'destructive',
      });
      return;
    }

    // Add each file to the processing queue
    files.forEach((file) => {
      addJob({
        id: file.id,
        projectId,
        fileName: file.name,
        fileSize: file.size,
        preview: file.name,
        status: 'queued',
        progress: 0,
        enhancements: selectedEnhancements,
        speed: processingSpeed,
        estimatedCompletionTime:
          processingSpeed === 'expedited' ? '2-3 minutes' : '10-15 minutes',
      });
    });

    toast({
      title: 'Photos Queued',
      description: `${files.length} photos added to processing queue`,
    });

    resetUploadState();
  }, [
    files,
    currentStep,
    selectedEnhancements,
    processingSpeed,
    projectId,
    addJob,
    toast,
    resetUploadState,
  ]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mb-8 space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-semibold mb-1">Upload Photos</h2>
        <p className="text-sm text-muted-foreground">
          Add photos to this project for enhancement and organization
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {currentStep === 'select' ? (
          <UploadArea onDrop={onDrop} />
        ) : (
          <div className="space-y-6">
            <Card className="p-4">
              <EnhancementOptions
                selectedEnhancements={selectedEnhancements}
                onEnhancementsChange={setSelectedEnhancements}
              />
            </Card>

            <Card className="p-4">
              <div className="space-y-4">
                <h3 className="font-medium">Processing Speed</h3>
                <SpeedSelector
                  value={processingSpeed}
                  onChange={setProcessingSpeed}
                />
              </div>
            </Card>
          </div>
        )}

        {files.length > 0 && (
          <div className="space-y-4">
            <UploadPreview
              files={files}
              isUploading={false}
              onRemove={removeFile}
            />

            <Button onClick={processFiles} className="w-full">
              {currentStep === 'select' ? (
                <>Continue with {files.length} Photos</>
              ) : (
                <>Start Processing</>
              )}
            </Button>
          </div>
        )}
      </div>

      <ProcessingQueue projectId={projectId} />
    </div>
  );
}
