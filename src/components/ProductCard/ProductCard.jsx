import { numberWithDecimals } from "@/utils";
import { Link } from "react-router";
import { RatingReview } from "../RatingReview";

const ProductCardThumbnail = ({ title, thumbnail, price, id }) => {
  return (
    <div className="card w-full max-w-2xs">
      <Link
        to={`/products/${id}`}
        className="flex flex-col items-center justify-center"
      >
        <img src={thumbnail} alt={title} className="h-46 w-36" />
        <div className="md:text-center p-4">
          <h3 className="text-xl truncate font-bold mb-2">{title}</h3>
          <p className="font-semibold text-medium text-lg">${price} </p>
        </div>
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
        <div className="md:w-1/4">
          <img src={Array.isArray(images) ? images[0] : images} alt={title} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-3">{title}</h1>
          {brand ? <span className="text-lg">Brand: {brand}</span> : null}
          <span className="font-medium text-xl">
            ${numberWithDecimals(price, 2)}
          </span>
          <span>
            Rating: <RatingReview rating={numberWithDecimals(rating, 1)} />
          </span>
        </div>
      </div>
      <div>
        Description:
        <p className="text-base mt-4 ">{description}</p>
      </div>
    </div>
  );
};

export { ProductCardThumbnail, ProductCard };
