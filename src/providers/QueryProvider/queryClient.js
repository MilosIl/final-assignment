import { QueryClient } from "@tanstack/react-query";

const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
};

const queryClient = new QueryClient(queryClientOptions);

export { queryClient };
