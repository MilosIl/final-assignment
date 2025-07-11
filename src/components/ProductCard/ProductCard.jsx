import { IconStar } from "@/assets/icons/IconStar";
import { numberWithDecimals } from "@/utils";
import { Link } from "react-router";
import { RatingReview } from "../RatingReview";

const ProductCardThumbnail = ({ title, thumbnail, price, id }) => {
  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>${price} </p>
      </Link>
    </div>
  );
};

const ProductCard = ({
  id,
  title,
  images,
  price,
  brand,
  description,
  rating,
}) => {
  return (
    <div className="card">
      <div id={id} className="flex gap-4 ">
        <div className="w-1/4">
          <img src={images} alt={title} />
        </div>
        <div className="flex flex-col gap-2">
          <h1>{title}</h1>
          <span>Brand: {brand}</span>
          <span>${numberWithDecimals(price, 2)}</span>
          <span>
            Rating: <RatingReview rating={numberWithDecimals(rating, 1)} />
          </span>
        </div>
      </div>
      <div>
        Description:
        <p>{description}</p>
      </div>
    </div>
  );
};

export { ProductCardThumbnail, ProductCard };
