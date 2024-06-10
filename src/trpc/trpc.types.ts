import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from './api-types';

export * from './api-types';
export type ApiOutput = inferRouterOutputs<AppRouter>;
