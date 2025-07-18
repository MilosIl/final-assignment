import { Link } from "react-router";
import { RatingReview } from "../RatingReview";

const ProductCardThumbnail = ({ title, thumbnail, price, id }) => {
  return (
    <div className="card">
      <Link to={`/products/${id}`} className="flex flex-col h-full">
        <div className="h-[180px]  flex items-center justify-center overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h3 className="text-xl font-bold min-h-[3.5rem]">{title}</h3>
          <p className="font-semibold text-lg mt-auto pt-2">${price}</p>
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
        <div>
          <img
            loading="lazy"
            src={Array.isArray(images) ? images[0] : images}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-3">{title}</h1>
          {brand ? <span className="text-lg">Brand: {brand}</span> : null}
          <span className="font-medium text-xl">${price}</span>
          <span>
            Rating: <RatingReview rating={rating} />
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
