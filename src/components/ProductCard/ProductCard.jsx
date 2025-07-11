import { Link } from 'react-router';

const ProductCard = ({ title, thumbnail, price, id }) => {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{price} </p>
      </Link>
    </div>
  );
};

export { ProductCard };
