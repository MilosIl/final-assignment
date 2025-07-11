import { IconStar } from "@/assets/icons/IconStar";

const RatingReview = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => (
          <IconStar fill={index < rating} />
        ))}
      </div>
      <span className="text-gray-600 text-lg ">({rating})</span>
    </div>
  );
};

export { RatingReview };
