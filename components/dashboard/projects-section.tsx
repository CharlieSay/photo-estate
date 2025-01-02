"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { mockProjects } from "@/lib/mock-data"
import { ProjectCard } from "@/components/projects/project-card"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  // Show only the 3 most recent projects
  const recentProjects = mockProjects.slice(0, 3)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <Button variant="ghost" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}