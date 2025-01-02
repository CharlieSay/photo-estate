'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Photo } from '@/types/project';
import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';
import { PhotoComparisonDialog } from './photo-comparison-dialog';
import { PhotoDetailsDialog } from './photo-details-dialog';
import { PhotoMetadata } from './photo-metadata';

interface PhotoCardProps {
  photo: Photo;
  viewMode?: 'grid' | 'list';
  isCompareMode?: boolean;
}

export function PhotoCard({ photo, viewMode = 'grid' }: PhotoCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const handleCardClick = () => {
    if (photo.enhancedUrl) {
      setIsComparisonOpen(true);
    } else {
      setIsDetailsOpen(true);
    }
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsComparisonOpen(true);
  };

  return (
    <>
      <Card className="h-full flex flex-col" onClick={handleCardClick}>
        <div className="relative cursor-pointer">
          <div className="aspect-video">
            <img
              src={photo.enhancedUrl || photo.url}
              alt="Property photo"
              className="object-cover w-full h-full"
            />
          </div>

          {photo.enhancedUrl && (
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button
                variant="secondary"
                size="sm"
                className="gap-2"
                onClick={handleCompareClick}
              >
                <ArrowLeftRight className="h-4 w-4" />
                Compare
              </Button>
            </div>
          )}
        </div>

        <div className="flex-1 p-4 min-h-[180px]">
          <PhotoMetadata photo={photo} />
        </div>
      </Card>

      <PhotoDetailsDialog
        photo={photo}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />

      <PhotoComparisonDialog
        photo={photo}
        open={isComparisonOpen}
        onOpenChange={setIsComparisonOpen}
      />
    </>
  );
}
