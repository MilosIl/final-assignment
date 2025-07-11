import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { DefaultLayout };
