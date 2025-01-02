'use client';

import { ProjectsSection } from '@/components/dashboard/projects-section';
import { StatsSection } from '@/components/dashboard/stats-section';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of your photo enhancement activity
        </p>
      </div>

      <StatsSection />
      <ProjectsSection />
    </div>
  );
}
