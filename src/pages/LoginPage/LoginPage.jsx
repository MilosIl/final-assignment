import { LoginFormContainer } from "@/containers";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-6">
        Login to <span className="text-teal-500 ">MyStore</span>
      </h1>
      <p className="text-lg mb-12 ">Place where you can find everything</p>
      <LoginFormContainer />
    </div>
  );
};

export { LoginPage };
