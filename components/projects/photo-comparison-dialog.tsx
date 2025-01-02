import { PhotoComparison } from '@/components/projects/photo-comparison';
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

interface PhotoComparisonDialogProps {
  photo: Photo;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhotoComparisonDialog({
  photo,
  open,
  onOpenChange,
}: PhotoComparisonDialogProps) {
  console.log('PhotoComparisonDialog render - open:', open);

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        console.log('Dialog onOpenChange called with:', newOpen);
        onOpenChange(newOpen);
      }}
    >
      <DialogContent className="max-w-4xl p-6">
        <DialogHeader className="mb-4">
          <div className="flex items-center justify-between">
            <DialogTitle>Photo Comparison</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <PhotoComparison photo={photo} />
      </DialogContent>
    </Dialog>
  );
}
