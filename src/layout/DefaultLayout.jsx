import { Footer } from "@/components";
import { NavbarContainer } from "@/containers/NavbarContainer";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <>
      <NavbarContainer />
      <main className="container mx-auto p-4 text-slate-800 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { DefaultLayout };
