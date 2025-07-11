import { capitalizeFirstLetter } from "@/utils";

const Avatar = ({ firstName, lastName }) => {
  const firstInitial = firstName ? capitalizeFirstLetter(firstName) : "";
  const lastInitial = lastName ? capitalizeFirstLetter(lastName) : "";
  const initials = `${firstInitial}${lastInitial}`;

  return (
    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
      {initials}
    </div>
  );
};
export { Avatar };
