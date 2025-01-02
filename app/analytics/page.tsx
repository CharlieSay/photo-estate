'use client';

import { ClientReports } from '@/components/analytics/client-reports';
import { EnhancementHistory } from '@/components/analytics/enhancement-history';
import { ProjectTimeline } from '@/components/analytics/project-timeline';
import { QualityMetrics } from '@/components/analytics/quality-metrics';
import { UsageAnalytics } from '@/components/analytics/usage-analytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Analytics & Reports</h1>

        <Tabs defaultValue="usage" className="space-y-6">
          <TabsList>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="usage">
            <UsageAnalytics />
          </TabsContent>

          <TabsContent value="history">
            <EnhancementHistory />
          </TabsContent>

          <TabsContent value="timeline">
            <ProjectTimeline />
          </TabsContent>

          <TabsContent value="quality">
            <QualityMetrics />
          </TabsContent>

          <TabsContent value="reports">
            <ClientReports />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
