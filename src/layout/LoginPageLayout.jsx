import { Footer } from "@/components";
import { Outlet } from "react-router";

const LoginPageLayout = () => {
  return (
    <>
      <main className="container-wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { LoginPageLayout };
