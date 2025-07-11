import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient.js";

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryProvider };
