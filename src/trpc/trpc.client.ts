import { httpBatchLink } from '@trpc/react-query';
import { trpc } from './trpc';

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_TRPC_API_URL ?? 'http://localhost:4000/trpc',
    }),
  ],
});
