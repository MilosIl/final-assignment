import { ProductPage } from "@/pages";
import { useProductById } from "@/services";
import { useNavigate, useParams } from "react-router";
const ProductPageContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useProductById(id);

  return (
    <ProductPage
      data={data}
      loading={isLoading}
      navigateBack={() => navigate(-1)}
    />
  );
};

export { ProductPageContainer };
