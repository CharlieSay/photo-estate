'use client';

import { Slider } from '@/components/ui/slider';
import { Photo } from '@/types/project';
import { ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

interface PhotoComparisonProps {
  photo: Photo;
}

export function PhotoComparison({ photo }: PhotoComparisonProps) {
  const [position, setPosition] = useState(50);

  if (!photo.enhancedUrl) {
    return (
      <div className="aspect-video relative">
        <img
          src={photo.url}
          alt="Original photo"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video">
      {/* Original photo layer */}
      <div className="absolute inset-0">
        <img
          src={photo.url}
          alt="Original photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Enhanced photo layer with clip-path */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={photo.enhancedUrl}
          alt="Enhanced photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider control */}
      <div className="absolute inset-x-4 bottom-4">
        <div className="bg-black/80 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <ArrowLeftRight className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Original vs Enhanced</span>
          </div>
          <Slider
            value={[position]}
            onValueChange={([value]) => setPosition(value)}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Vertical divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      />
    </div>
  );
}
