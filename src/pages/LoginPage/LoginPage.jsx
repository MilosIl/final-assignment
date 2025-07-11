import { LoginFormContainer } from "@/containers";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Wellcome to MyStore</h1>
      <p className="text-lg mb-12">
        MyStore place, where you find everyting for you
      </p>
      <LoginFormContainer />
    </div>
  );
};

export { LoginPage };
