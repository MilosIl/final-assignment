import { HomePage, LoginPage } from '@/pages';
import { ProductPage } from '@/pages/ProductPage/ProductPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

const AppRouter = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/profile/:id',
    element: <ProfilePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export { AppRouter };
