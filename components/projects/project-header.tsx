'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Project } from '@/types/project';
import { formatDistanceToNow } from 'date-fns';
import {
  Building,
  Calendar,
  Clock,
  Edit2,
  Globe,
  Image as ImageIcon,
  MapPin,
  StickyNote,
} from 'lucide-react';
import { useState } from 'react';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project: initialProject }: ProjectHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [project, setProject] = useState(initialProject);

  const handleSave = () => {
    // TODO: Save changes to backend
    setIsEditing(false);
  };

  return (
    <div className="mb-8">
      {/* Hero Image Section */}
      <div className="h-[300px] w-full relative rounded-xl overflow-hidden border border-border">
        <img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative -mt-20 mx-4 bg-card rounded-xl border border-border/50 shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Globe className="h-4 w-4 mr-2" />
                <a
                  href={project.listingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  View Listing
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <ImageIcon className="h-3 w-3" />
                  {project.photoCount} Photos
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Updated{' '}
                  {formatDistanceToNow(new Date(project.updatedAt), {
                    addSuffix: true,
                  })}
                </Badge>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  Created{' '}
                  {formatDistanceToNow(new Date(project.updatedAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isEditing && project.notes && (
        <div className="mt-6 mx-4 bg-card rounded-xl border border-border/50 p-6">
          <div className="flex items-center gap-2 mb-3">
            <StickyNote className="h-4 w-4 text-muted-foreground" />
            <h2 className="font-semibold">Agent Notes</h2>
          </div>
          <p className="text-muted-foreground whitespace-pre-wrap">
            {project.notes}
          </p>
        </div>
      )}

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Project Name
              </Label>
              <Input
                id="name"
                value={project.name}
                onChange={(e) =>
                  setProject({ ...project, name: e.target.value })
                }
                placeholder="Enter project name"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                value={project.location}
                onChange={(e) =>
                  setProject({ ...project, location: e.target.value })
                }
                placeholder="Enter property location"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="listingUrl" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Listing URL
              </Label>
              <Input
                id="listingUrl"
                value={project.listingUrl}
                onChange={(e) =>
                  setProject({ ...project, listingUrl: e.target.value })
                }
                placeholder="Enter property listing URL"
                type="url"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes" className="flex items-center gap-2">
                <StickyNote className="h-4 w-4" />
                Agent Notes
              </Label>
              <Textarea
                id="notes"
                value={project.notes || ''}
                onChange={(e) =>
                  setProject({ ...project, notes: e.target.value })
                }
                placeholder="Add notes about the property (only visible to agents)"
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
