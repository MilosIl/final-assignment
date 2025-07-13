import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const { navigate } = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
};

export { NotFound };
