import { Footer } from "@/components";
import { NavbarContainer } from "@/containers/NavbarContainer";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <>
      <NavbarContainer />
      <main className="container-wrapper ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { DefaultLayout };
