import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import type { AppRouter } from './server/trpc/router';

export const trpc = createTRPCNext<AppRouter>({
  config(ctx) {
    return {
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    };
  },
});
