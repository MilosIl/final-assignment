import { QueryClientWrapper } from './QueryClientProvider';

const ProviderWrapper = ({ children }) => {
  return <QueryClientWrapper>{children}</QueryClientWrapper>;
};

export { ProviderWrapper };
