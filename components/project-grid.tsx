"use client"

import { useState } from "react"
import { mockProjects } from "@/lib/mock-data"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectFilters } from "@/components/projects/project-filters"
import { Project } from "@/types/project"

export default function ProjectGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  const sortProjects = (projects: Project[]) => {
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        case "name":
          return a.name.localeCompare(b.name)
        case "location":
          return a.location.localeCompare(b.location)
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      }
    })
  }

  const filteredProjects = sortProjects(
    mockProjects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div>
      <ProjectFilters
        searchQuery={searchQuery}
        sortBy={sortBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}