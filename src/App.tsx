import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query.client';
import { Router } from './router/Router';
import { trpc } from './trpc/trpc';
import { trpcClient } from './trpc/trpc.client';

export const App = () => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
