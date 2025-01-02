"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { mockProjects } from "@/lib/mock-data"
import { Download, FileText, Mail } from "lucide-react"

export function ClientReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Client Reports</h2>
        <Button>
          <Mail className="h-4 w-4 mr-2" />
          Schedule Report
        </Button>
      </div>

      <div className="space-y-4">
        {mockProjects.map((project) => (
          <Card key={project.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}