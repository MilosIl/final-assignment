import { useParams } from 'react-router';

const ProductPage = () => {
  const { id } = useParams();
  return <div>product page of {id}</div>;
};
export { ProductPage };
