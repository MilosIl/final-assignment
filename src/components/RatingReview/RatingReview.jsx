import { IconStar } from "@/assets/icons/IconStar";

const RatingReview = ({ rating }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => (
          <IconStar fill={index < rating} key={index} />
        ))}
      </div>
      <span className="text-lg font-semibold">({rating})</span>
    </div>
  );
};

export { RatingReview };
