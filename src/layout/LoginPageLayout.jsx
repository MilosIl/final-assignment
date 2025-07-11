import { Footer } from "@/components";
import { Outlet } from "react-router";

const LoginPageLayout = () => {
  return (
    <>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { LoginPageLayout };
