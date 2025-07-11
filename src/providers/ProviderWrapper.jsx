import { QueryProvider } from "./QueryProvider";
import { ReduxProvider } from "./ReduxProvider";

const ProviderWrapper = ({ children }) => {
  return (
    <ReduxProvider>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
};

export { ProviderWrapper };
