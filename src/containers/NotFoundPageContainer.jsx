import { useEffect } from "react";
import { useNavigate } from "react-router";
import { NotFoundPage } from "@/pages";
const NotFoundPageContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, [navigate]);

  return <NotFoundPage />;
};

export { NotFoundPageContainer };
