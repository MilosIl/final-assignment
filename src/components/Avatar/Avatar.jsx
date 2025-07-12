import { nameInitials } from "@/utils";

const Avatar = ({ firstName, lastName }) => {
  const initials = nameInitials(firstName, lastName);

  return (
    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
      {initials}
    </div>
  );
};
export { Avatar };
