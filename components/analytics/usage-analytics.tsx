'use client';

import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockPhotos, mockProjects } from '@/lib/mock-data';
import { Activity, Clock, TrendingUp, Zap } from 'lucide-react';

export function UsageAnalytics() {
  const totalProjects = mockProjects.length;
  const totalPhotos = mockPhotos.length;
  const enhancedPhotos = mockPhotos.filter((p) => p.enhancedUrl).length;
  const avgProcessingTime = '45 seconds';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Usage Analytics</h2>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Projects
              </p>
              <h3 className="text-2xl font-bold mt-2">{totalProjects}</h3>
            </div>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            +2 from last week
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Enhanced Photos
              </p>
              <h3 className="text-2xl font-bold mt-2">
                {enhancedPhotos}/{totalPhotos}
              </h3>
            </div>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">94% success rate</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Avg. Processing Time
              </p>
              <h3 className="text-2xl font-bold mt-2">{avgProcessingTime}</h3>
            </div>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            -12s from last week
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Processing Credits
              </p>
              <h3 className="text-2xl font-bold mt-2">850/1000</h3>
            </div>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Renews in 18 days
          </p>
        </Card>
      </div>

      {/* Add usage graphs and charts here */}
    </div>
  );
}
