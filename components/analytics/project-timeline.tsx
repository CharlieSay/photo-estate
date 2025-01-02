'use client';

import { Card } from '@/components/ui/card';
import { mockPhotos, mockProjects } from '@/lib/mock-data';
import { formatDistanceToNow } from 'date-fns';

export function ProjectTimeline() {
  const timelineEvents = [
    ...mockProjects.map((project) => ({
      type: 'project' as const,
      date: new Date(project.updatedAt),
      data: project,
    })),
    ...mockPhotos.map((photo) => ({
      type: 'photo' as const,
      date: new Date(photo.createdAt),
      data: photo,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Project Timeline</h2>

      <div className="relative space-y-4">
        {/* Timeline line */}
        <div className="absolute left-2.5 top-3 bottom-3 w-px bg-border" />

        {timelineEvents.map((event, index) => (
          <Card key={index} className="pl-10 p-4 relative">
            {/* Timeline dot */}
            <div className="absolute left-2 top-6 w-1.5 h-1.5 rounded-full bg-primary" />

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(event.date, { addSuffix: true })}
              </p>

              {event.type === 'project' ? (
                <div>
                  <p className="font-medium">
                    New project created: {event.data.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {event.data.location}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-medium">
                    Photo enhanced in project {event.data.projectId}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Applied: {event.data.metadata.enhancements?.join(', ')}
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
