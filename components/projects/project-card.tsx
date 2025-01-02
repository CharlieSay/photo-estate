'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Project } from '@/types/project';
import { ExternalLink, Image as ImageIcon, MapPin } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <img
            src={project.coverImage}
            alt={project.name}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <ImageIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.photoCount} photos</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/projects/${project.id}`}>View Project</Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={`/projects/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
