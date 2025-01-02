'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Photo } from '@/types/project';
import { X } from 'lucide-react';
import { PhotoComparison } from './photo-comparison';
import { PhotoDownloadButton } from './photo-download-button';
import { PhotoMetadata } from './photo-metadata';

interface PhotoDetailsDialogProps {
  photo: Photo;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhotoDetailsDialog({
  photo,
  open,
}: // onOpenChange,
PhotoDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle>Photo Details</DialogTitle>
            <div className="flex items-center gap-3">
              <PhotoDownloadButton photo={photo} />
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <PhotoComparison photo={photo} />
          <div className="bg-muted/50 rounded-lg p-4">
            <PhotoMetadata photo={photo} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
