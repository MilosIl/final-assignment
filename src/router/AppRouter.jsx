import { HomePage, LoginPage } from "@/pages";
import { NotFound, ProfilePage, ProductPage } from "@/pages";

const AppRouter = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { AppRouter };
