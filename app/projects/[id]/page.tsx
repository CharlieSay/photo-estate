'use client';

import { PhotoGallery } from '@/components/projects/gallery';
import { PhotoUpload } from '@/components/projects/photo-upload';
import { ProjectHeader } from '@/components/projects/project-header';
import { NotFound } from '@/components/shared/not-found';
import { mockPhotos, mockProjects } from '@/lib/mock-data';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const project = mockProjects.find((p) => p.id === Number(id));
  const projectPhotos = mockPhotos.filter((p) => p.projectId === Number(id));

  if (!project) {
    return <NotFound message="Project not found" />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ProjectHeader project={project} />
      <Suspense fallback={<div className="h-[200px]" />}>
        <PhotoUpload projectId={project.id} />
      </Suspense>
      <PhotoGallery photos={projectPhotos} />
    </div>
  );
}
