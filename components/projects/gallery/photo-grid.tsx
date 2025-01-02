'use client';

import { Photo } from '@/types/project';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { PhotoCard } from '../photo-card';
import { SortablePhoto } from './sortable-photo';

interface PhotoGridProps {
  photos: Photo[];
  selectedPhotos: number[];
  onPhotoSelect: (id: number) => void;
  onPhotosReorder: (photos: Photo[]) => void;
  viewMode: 'grid' | 'list';
  isCompareMode: boolean;
}

export function PhotoGrid({
  photos,
  selectedPhotos,
  onPhotoSelect,
  onPhotosReorder,
  viewMode,
  isCompareMode,
}: PhotoGridProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = photos.findIndex(
      (photo) => photo.id.toString() === active.id
    );
    const newIndex = photos.findIndex(
      (photo) => photo.id.toString() === over.id
    );

    const reorderedPhotos = arrayMove(photos, oldIndex, newIndex);
    onPhotosReorder(reorderedPhotos);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={photos.map((p) => p.id.toString())}
        strategy={rectSortingStrategy}
      >
        <div
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
          suppressHydrationWarning
        >
          {photos.map((photo) => (
            <SortablePhoto key={photo.id} id={photo.id.toString()}>
              <div className="relative group" suppressHydrationWarning>
                <PhotoCard
                  photo={photo}
                  viewMode={viewMode}
                  isCompareMode={isCompareMode}
                />
              </div>
            </SortablePhoto>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
