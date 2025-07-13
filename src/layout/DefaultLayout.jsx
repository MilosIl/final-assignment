import { Footer } from "@/components";
import { NavbarContainer } from "@/containers";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer />
      <main className="container-wrapper flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { DefaultLayout };
