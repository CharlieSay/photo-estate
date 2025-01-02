import {
  type PhotoJob,
  type PhotoStatus,
  type ProcessingSpeed,
} from '@/types/project';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PhotoStore {
  queue: PhotoJob[];
  activeJobs: number;
  maxConcurrentJobs: number;
  addJob: (job: Omit<PhotoJob, 'startedAt' | 'priority'>) => void;
  updateJob: (id: string, updates: Partial<PhotoJob>) => void;
  removeJob: (id: string) => void;
  getJobsByProject: (projectId: number) => PhotoJob[];
  clearCompletedJobs: (projectId: number) => void;
  processNextJob: () => void;
}

// Helper to calculate priority score
const calculatePriority = (
  speed: ProcessingSpeed,
  timestamp: number
): number => {
  const speedMultiplier = speed === 'expedited' ? 2 : 1;
  return timestamp * speedMultiplier;
};

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set, get) => ({
      queue: [],
      activeJobs: 0,
      maxConcurrentJobs: 3,

      addJob: (job) => {
        const timestamp = Date.now();
        const priority = calculatePriority(job.speed, timestamp);

        set((state) => ({
          queue: [
            ...state.queue,
            {
              ...job,
              startedAt: new Date().toISOString(),
              priority,
              status:
                job.speed === 'expedited'
                  ? 'processing'
                  : ('queued' as PhotoStatus),
            },
          ],
        }));

        // Start processing immediately for expedited jobs
        if (job.speed === 'expedited') {
          get().processNextJob();
        }
      },

      updateJob: (id, updates) =>
        set((state) => ({
          queue: state.queue.map((job) =>
            job.id === id ? { ...job, ...updates } : job
          ),
          activeJobs:
            updates.status === 'completed' || updates.status === 'failed'
              ? state.activeJobs - 1
              : state.activeJobs,
        })),

      removeJob: (id) =>
        set((state) => ({
          queue: state.queue.filter((job) => job.id !== id),
          activeJobs:
            state.queue.find((job) => job.id === id)?.status === 'processing'
              ? state.activeJobs - 1
              : state.activeJobs,
        })),

      getJobsByProject: (projectId) => {
        return get().queue.filter((job) => job.projectId === projectId);
      },

      clearCompletedJobs: (projectId) =>
        set((state) => ({
          queue: state.queue.filter(
            (job) => job.projectId !== projectId || job.status !== 'completed'
          ),
        })),

      processNextJob: async () => {
        const state = get();

        if (state.activeJobs >= state.maxConcurrentJobs) {
          return;
        }

        const pendingJobs = state.queue
          .filter((job) => job.status === 'pending')
          .sort((a, b) => b.priority - a.priority);

        if (pendingJobs.length === 0) {
          return;
        }

        const nextJob = pendingJobs[0];

        set((state) => ({ activeJobs: state.activeJobs + 1 }));
        get().updateJob(nextJob.id, { status: 'processing', progress: 0 });

        const processingTime = nextJob.speed === 'expedited' ? 3000 : 10000;

        try {
          await new Promise((resolve) =>
            setTimeout(resolve, processingTime / 2)
          );
          get().updateJob(nextJob.id, { status: 'enhancing', progress: 50 });

          for (const enhancement of nextJob.enhancements) {
            await new Promise((resolve) =>
              setTimeout(
                resolve,
                processingTime / (2 * nextJob.enhancements.length)
              )
            );
            get().updateJob(nextJob.id, {
              progress: nextJob.progress + 50 / nextJob.enhancements.length,
            });
          }

          get().updateJob(nextJob.id, {
            status: 'completed',
            progress: 100,
          });
        } catch (error) {
          get().updateJob(nextJob.id, {
            status: 'failed',
            error: error instanceof Error ? error.message : 'Processing failed',
          });
        }

        get().processNextJob();
      },
    }),
    {
      name: 'photo-store',
    }
  )
);
