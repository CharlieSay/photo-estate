'use client';

import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export function PreferenceSettings() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Application Preferences</h2>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-medium">Default Enhancement Settings</h3>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Quality Level</Label>
                <Select defaultValue="high">
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="ultra">Ultra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Output Format</Label>
                <Select defaultValue="jpg">
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jpg">JPEG</SelectItem>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="webp">WebP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-enhance" className="flex-1">
                <span className="font-medium">Auto-enhance</span>
                <p className="text-sm text-muted-foreground">
                  Automatically apply recommended enhancements to new photos
                </p>
              </Label>
              <Switch id="auto-enhance" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="preserve-metadata" className="flex-1">
                <span className="font-medium">Preserve Metadata</span>
                <p className="text-sm text-muted-foreground">
                  Keep original photo metadata in enhanced versions
                </p>
              </Label>
              <Switch id="preserve-metadata" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
