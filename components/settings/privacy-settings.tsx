"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, Download, Trash2 } from "lucide-react"

export function PrivacySettings() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics" className="flex-1">
              <span className="font-medium">Usage Analytics</span>
              <p className="text-sm text-muted-foreground">
                Help us improve by allowing anonymous usage data collection
              </p>
            </Label>
            <Switch id="analytics" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="metadata" className="flex-1">
              <span className="font-medium">Photo Metadata</span>
              <p className="text-sm text-muted-foreground">
                Preserve original photo metadata during enhancement
              </p>
            </Label>
            <Switch id="metadata" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="sharing" className="flex-1">
              <span className="font-medium">Public Sharing</span>
              <p className="text-sm text-muted-foreground">
                Allow enhanced photos to be shared via public links
              </p>
            </Label>
            <Switch id="sharing" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Data Management</h2>
        
        <div className="space-y-6">
          <div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export Account Data
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Download a copy of your data including photos and settings
            </p>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-medium text-destructive">Delete Account</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}