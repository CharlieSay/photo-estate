'use client';

import { Photo } from '@/types/project';
import { useState } from 'react';
import { GalleryHeader } from './gallery-header';
import { PhotoGrid } from './photo-grid';

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos: initialPhotos }: PhotoGalleryProps) {
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCompareMode, setIsCompareMode] = useState(false);

  const togglePhotoSelection = (id: number) => {
    setSelectedPhotos((prev) =>
      prev.includes(id)
        ? prev.filter((photoId) => photoId !== id)
        : [...prev, id]
    );
  };

  const handlePhotosReorder = (reorderedPhotos: Photo[]) => {
    setPhotos(reorderedPhotos);
  };

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No photos uploaded yet.</p>
        <p className="text-sm text-muted-foreground mt-1">
          Upload photos using the form above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <GalleryHeader selectedPhotos={selectedPhotos} photos={photos} />

      <PhotoGrid
        photos={photos}
        selectedPhotos={selectedPhotos}
        onPhotoSelect={togglePhotoSelection}
        onPhotosReorder={handlePhotosReorder}
        viewMode={viewMode}
        isCompareMode={isCompareMode}
      />
    </div>
  );
}
