import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AppRouter } from './router';
import { ProviderWrapper } from './providers';

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderWrapper>
      <RouterProvider router={router} />
    </ProviderWrapper>
  </StrictMode>
);
