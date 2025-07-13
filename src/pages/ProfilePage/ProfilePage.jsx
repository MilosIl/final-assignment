import { ProfileCard } from "@/components";

const ProfilePage = ({ user }) => {
  return (
    <div className="flex justify-center items-center py-8">
      <ProfileCard {...user} />
    </div>
  );
};

export { ProfilePage };
