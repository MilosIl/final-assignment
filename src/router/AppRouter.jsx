import { DefaultLayout } from "@/layout";
import { LoginPage } from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import {
  HomePageContainer,
  NotFoundPageContainer,
  ProductPageContainer,
  ProfilePageContainer,
} from "@/containers";

const AppRouter = [
  {
    element: (
      <ProtectedRoute>
        <DefaultLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePageContainer /> },
      {
        path: "/products/:id",
        element: <ProductPageContainer />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePageContainer />,
      },
    ],
  },

  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPageContainer />,
  },
];

export { AppRouter };
