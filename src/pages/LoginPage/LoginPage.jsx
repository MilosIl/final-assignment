import { LoginFormContainer } from "@/containers";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to <span className="text-teal-500 ">MyStore</span>{" "}
      </h1>
      <p className="text-lg mb-12 ">
        Place where you find everything that you need
      </p>
      <LoginFormContainer />
    </div>
  );
};

export { LoginPage };
