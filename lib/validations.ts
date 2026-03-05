import { z } from 'zod';

export const voteSchema = z.object({
  modelId: z.string().uuid(),
  walletAddress: z.string().min(42).max(42),
});

export const applicationSchema = z.object({
  projectId: z.string().uuid(),
  modelId: z.string().uuid(),
  message: z.string().min(10).max(500),
});

export const projectSchema = z.object({
  title: z.string().min(5).max(200),
  description: z.string().min(20).max(2000),
  budget: z.string().regex(/^\$[\d,]+$/),
  requirements: z.string().optional(),
  deadline: z.string().datetime().optional(),
});

export const modelSchema = z.object({
  name: z.string().min(2).max(100),
  bio: z.string().min(10).max(500),
  specialties: z.array(z.string()).min(1).max(5),
});
