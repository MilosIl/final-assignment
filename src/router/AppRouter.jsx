import { DefaultLayout, LoginPageLayout } from "@/layout";
import {
  HomePage,
  LoginPage,
  NotFound,
  ProfilePage,
  ProductPage,
} from "@/pages";

const AppRouter = [
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
    ],
  },

  {
    element: <LoginPageLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { AppRouter };
