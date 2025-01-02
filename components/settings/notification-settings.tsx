"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="enhancement-complete" className="flex-1">
                <span className="font-medium">Enhancement Complete</span>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when photo enhancements are complete
                </p>
              </Label>
              <Switch id="enhancement-complete" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="project-updates" className="flex-1">
                <span className="font-medium">Project Updates</span>
                <p className="text-sm text-muted-foreground">
                  Get notified about changes to your projects
                </p>
              </Label>
              <Switch id="project-updates" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="flex-1">
                <span className="font-medium">Marketing Updates</span>
                <p className="text-sm text-muted-foreground">
                  Receive news about new features and promotions
                </p>
              </Label>
              <Switch id="marketing" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Push Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-enhancements" className="flex-1">
                <span className="font-medium">Enhancement Status</span>
                <p className="text-sm text-muted-foreground">
                  Real-time updates about photo enhancement progress
                </p>
              </Label>
              <Switch id="push-enhancements" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="push-activity" className="flex-1">
                <span className="font-medium">Account Activity</span>
                <p className="text-sm text-muted-foreground">
                  Get notified about important account activities
                </p>
              </Label>
              <Switch id="push-activity" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}