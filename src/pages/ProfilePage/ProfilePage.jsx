import { ProfileCard } from "@/components";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center py-8">
      <ProfileCard {...user} />
    </div>
  );
};

export { ProfilePage };
