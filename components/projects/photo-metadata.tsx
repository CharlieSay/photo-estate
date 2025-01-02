'use client';

import { Badge } from '@/components/ui/badge';
import { ENHANCEMENT_OPTIONS } from '@/lib/constants/enhancements';
import { Photo } from '@/types/project';
import { formatDistanceToNow } from 'date-fns';
import { Calendar, FileText, Maximize2, Sparkles } from 'lucide-react';

interface PhotoMetadataProps {
  photo: Photo;
}

export function PhotoMetadata({ photo }: PhotoMetadataProps) {
  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'N/A';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  const getEnhancementLabel = (id: string) => {
    return ENHANCEMENT_OPTIONS.find((e) => e.id === id)?.label || id;
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center gap-1">
          <FileText className="h-3 w-3" />
          {formatFileSize(photo.metadata.size)}
        </Badge>

        {photo.metadata.dimensions && (
          <Badge variant="outline" className="flex items-center gap-1">
            <Maximize2 className="h-3 w-3" />
            {`${photo.metadata.dimensions.width} × ${photo.metadata.dimensions.height}`}
          </Badge>
        )}

        <Badge variant="outline" className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formatDistanceToNow(new Date(photo.createdAt), { addSuffix: true })}
        </Badge>
      </div>

      {photo.metadata.enhancements &&
        photo.metadata.enhancements.length > 0 && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Enhancements</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {photo.metadata.enhancements.map((enhancement) => (
                <Badge
                  key={enhancement}
                  variant="secondary"
                  className="text-xs"
                >
                  {getEnhancementLabel(enhancement)}
                </Badge>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
