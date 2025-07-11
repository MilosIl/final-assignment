import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient.js";

const QueryClientWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryClientWrapper };
