import { DefaultLayout, LoginPageLayout } from "@/layout";
import { LoginPage, NotFound, ProfilePage, ProductPage } from "@/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePageContainer } from "@/containers";

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
