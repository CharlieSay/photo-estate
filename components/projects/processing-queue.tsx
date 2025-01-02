'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ENHANCEMENT_OPTIONS } from '@/lib/constants/enhancements';
import { usePhotoStore } from '@/lib/stores/photo-store';
import { PhotoJob } from '@/types/project';
import { formatDistanceToNow } from 'date-fns';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  History,
  Image,
  X,
  Zap,
} from 'lucide-react';

interface ProcessingQueueProps {
  projectId: number;
}

export function ProcessingQueue({ projectId }: ProcessingQueueProps) {
  const jobs = usePhotoStore((state) => state.getJobsByProject(projectId));
  const removeJob = usePhotoStore((state) => state.removeJob);
  const clearCompletedJobs = usePhotoStore((state) => state.clearCompletedJobs);

  if (jobs.length === 0) return null;

  const activeJobs = jobs.filter((job: { status: string }) =>
    ['queued', 'processing', 'enhancing'].includes(job.status)
  );
  const completedJobs = jobs.filter((job) => job.status === 'completed');
  const failedJobs = jobs.filter((job) => job.status === 'failed');

  return (
    <div className="space-y-4">
      {activeJobs.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Active Enhancements</h3>
          {activeJobs.map((job) => (
            <ProcessingJobCard key={job.id} job={job} onRemove={removeJob} />
          ))}
        </div>
      )}

      {completedJobs.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Completed</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => clearCompletedJobs(projectId)}
            >
              Clear All
            </Button>
          </div>
          {completedJobs.map((job) => (
            <ProcessingJobCard key={job.id} job={job} onRemove={removeJob} />
          ))}
        </div>
      )}

      {failedJobs.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Failed</h3>
          {failedJobs.map((job) => (
            <ProcessingJobCard key={job.id} job={job} onRemove={removeJob} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProcessingJobCard({
  job,
  onRemove,
}: {
  job: PhotoJob;
  onRemove: (id: string) => void;
}) {
  const getStatusIcon = () => {
    switch (job.status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'pending':
        return <History className="h-4 w-4 text-muted-foreground" />;
      default:
        return (
          <Clock className="h-4 w-4 text-muted-foreground animate-pulse" />
        );
    }
  };

  const getEnhancementLabels = () => {
    return job.enhancements
      .map((id) => {
        const enhancement = ENHANCEMENT_OPTIONS.find((e) => e.id === id);
        return enhancement?.label || id;
      })
      .join(', ');
  };

  return (
    <Card className="p-3">
      <div className="flex items-start gap-3">
        {/* Preview thumbnail */}
        {job.preview ? (
          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
            <img
              src={job.preview}
              alt={job.fileName}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded bg-muted flex items-center justify-center flex-shrink-0">
            <Image className="h-6 w-6 text-muted-foreground" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {getStatusIcon()}
            <p className="text-sm font-medium truncate flex items-center gap-2">
              {job.fileName}
              {job.speed === 'expedited' && (
                <Zap className="h-3 w-3 text-yellow-500" />
              )}
            </p>
          </div>

          {job.status !== 'completed' && job.status !== 'failed' && (
            <Progress value={job.progress} className="h-1 mb-2" />
          )}

          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              {getEnhancementLabels()}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground">
                Started{' '}
                {formatDistanceToNow(new Date(job.startedAt), {
                  addSuffix: true,
                })}
              </p>
              {job.estimatedCompletionTime && (
                <p className="text-xs text-muted-foreground">
                  • Est. completion in {job.estimatedCompletionTime}
                </p>
              )}
            </div>
          </div>

          {job.error && (
            <p className="text-xs text-destructive mt-1">{job.error}</p>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => onRemove(job.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
