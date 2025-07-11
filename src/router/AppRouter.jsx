import { HomePage, LoginPage } from '@/pages';

const AppRouter = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export { AppRouter };
